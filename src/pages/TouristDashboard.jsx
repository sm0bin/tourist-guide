import { toast } from "react-hot-toast";
import TitleH3 from "../components/utilities/TitleH3";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { failed, getTourTypeBadgeColor, getStatusBadgeColor } from "../components/utilities/Functions";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useLoadDataSecure from "../hooks/useLoadDataSecure";


const TouristDashboard = () => {
    const { user } = useAuth();
    // if (!user) return null;
    const { displayName, email, photoURL } = user;
    const axiosSecure = useAxiosSecure();
    const [myBookings, isPendingMyBookings, refetchMyBookings] = useLoadDataSecure(`/bookings/${email}`, "bookings");
    const [myWishlist, isPendingMyWishlist, refetchMyWishlist] = useLoadDataSecure(`/tourists/wishlist/${email}`, "wishlist");
    const [coupon, isPendingCoupon, refetchCoupon] = useLoadDataSecure(`/tourists/coupon/${email}`, "coupon");


    if (isPendingMyBookings || isPendingMyWishlist) return <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-ball loading-lg"></span>
    </div>



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const story = {
            img: photoURL,
            name: displayName,
            designation: form.designation.value,
            rating: form.rating.value,
            story: form.story.value
        }

        axiosSecure.post("/stories", story)
            .then(res => {
                console.log(res.data);
                toast.success("Story Shared Successfully");
            })
    }

    const handlePay = () => {
        Swal.fire({
            title: "Confirm Payment?",
            text: "You are about to pay for this package.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Pay"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Confirmed!",
                    text: "Payment Successful.",
                    icon: "success"
                });
            }
        });
    }

    const handleBookingCancel = (id) => {
        console.log(id);
        Swal.fire({
            title: "Confirm Cancellation?",
            text: "You are about to cancel this booking.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Cancel Booking",
            cancelButtonText: "No, Don't Cancel"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.post(`/tourists/bookings/${id}`, { email: user.email })
                    .then(res => {

                        console.log(res);
                        toast.success("Booking Cancelled");
                        refetchMyBookings();
                    }).catch(error => failed(error));



            }
        });
    }

    const handleApplyCoupon = (id, price) => {
        axiosSecure.post(`/tourists/coupon`, { email: user.email, coupon: "applied" })
            .then(res => {
                console.log(res.data);
                toast.success("Coupon Applied");

                if (res.data.coupon === "applied") {
                    axiosSecure.put(`/bookings/${id}`, { price: price * 0.7 })
                        .then(res => {
                            console.log(res.data);
                            toast.success("Discount Applied Successfully");
                            refetchMyBookings();
                        }).catch(err => failed(err));
                }
                refetchCoupon();
            }).catch(err => failed(err));

    }


    const handleDeleteFromWishlist = (id) => {
        axiosSecure.post(`/tourists/wishlist/remove`, { id, email: user.email })
            .then(res => {
                console.log(res.data);
                toast.success("Removed from wishlist");
                refetchMyWishlist();
            }).catch(err => failed(err));
    }

    return (
        <div className=" mx-4 md:mx-8 lg:mx-auto max-w-7xl grid gap-6 my-32">
            <div className="grid grid-cols-3 gap-6">

                {/* Profile Details */}
                <div className="card border gap-4 p-6">
                    <figure className="rounded-lg grow">
                        <img className="w-full h-full" src={photoURL} alt="Album" />
                    </figure>
                    <div className="card-body p-0">
                        <h2 className=" text-4xl font-script text-blue-400">{displayName}</h2>
                        <h2 className="font-normal text-xl text-gray-400">{email}</h2>
                    </div>
                </div>

                {/* Share Story Form */}
                <div className="card border p-6 col-span-2">
                    <TitleH3 title="Share Your Story"></TitleH3>
                    <form onSubmit={handleSubmit} className="">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Rating</span>
                                </label>
                                <select name="rating" className="select select-bordered" required>
                                    <option defaultValue >5</option>
                                    <option>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>

                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Designation</span>
                                </label>
                                <input name="designation" type="text" placeholder="Your Designation" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Story</span>
                            </label>
                            <textarea name="story" rows="6" placeholder="Your Story With Tourist Guide" className="textarea textarea-bordered textarea-sm w-full min-h-full" required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Share</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Bookings Table */}
            <div className="card border p-6">
                <TitleH3 title="My Bookings"></TitleH3>
                <div className="divider"></div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th></th>
                                <th className="text-left">Package Name</th>
                                <th>Tour Guide Name</th>
                                <th>Pickup Date</th>
                                <th className="text-right">Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myBookings && myBookings?.map((booking, index) => (
                                    <tr key={index} className="text-center">
                                        <th>{index + 1}</th>
                                        <td className="text-left">{booking?.tourName}</td>
                                        <td>{booking?.guideName}</td>
                                        <td>{booking?.date}</td>
                                        <td className="text-right">${booking?.price}</td>
                                        <td><div className={`badge ${getStatusBadgeColor(booking?.status)}`}>{booking?.status}</div></td>
                                        <td className="space-x-4">
                                            <button onClick={handlePay} className="btn btn-info" disabled={!(booking?.status === "Accepted")}>Pay</button>
                                            <button onClick={() => handleBookingCancel(booking?._id)} className="btn btn-error" disabled={(booking?.state === "In Review")}>Cancel</button>
                                            <button onClick={() => handleApplyCoupon(booking?._id, booking?.price)} className="btn btn-success" disabled={!(coupon === "applicable" && booking?.state === "Accepted")}>Apply</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>

            {/* Wishlist Table */}
            <div className="card border p-6">
                <TitleH3 title="My Wishlist"></TitleH3>
                <div className="divider"></div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th></th>
                                <th>Thumbnail</th>
                                <th className="text-left">Package Name</th>
                                <th>Tour Type</th>
                                <th className="text-right">Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myWishlist && myWishlist?.map((item, index) => (
                                    <tr key={index} className="text-center">
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="w-24 mask mask-squircle">
                                                    <img src={item.thumbnail} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-left">{item?.tripTitle}</td>
                                        <td><div className={`badge ${getTourTypeBadgeColor(item?.tourType)}`}>{item?.tourType}</div></td>
                                        {/* <td>{item?.tourType}</td> */}
                                        <td className="text-right">${item?.price}</td>
                                        <td className="space-x-4">
                                            <Link to={`/tours/${item?._id}`} className="btn btn-info">Visit Details</Link>
                                            <button onClick={() => handleDeleteFromWishlist(item?._id)} className="btn btn-error">Delete</button>
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>

            <div>


            </div>

        </div>
    );
};

export default TouristDashboard;