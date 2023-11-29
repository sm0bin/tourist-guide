import { toast } from "react-hot-toast";
import TitleH3 from "../components/utilities/TitleH3";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useLoadDataSecure from "../hooks/useLoadDataSecure";
import { failed, getTourTypeBadgeColor, getStatusBadgeColor } from "../components/utilities/Functions";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const TouristDashboard = () => {
    const { user } = useAuth();
    // if (!user) return null;
    const { displayName, email, photoURL } = user;
    const axiosSecure = useAxiosSecure();
    // const [isPendingMyBookings, errorMyBookings, myBookings] = useLoadDataSecure("/bookings", "bookings", { email: email });

    const { isPending, error, data: myBookings } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await axiosSecure(`/bookings/${user.email}`)
            return res.data
        }
    })
    const { isPending: isPendingMyWishlist, error: errorMyWishlist, data: myWishlist } = useQuery({
        queryKey: ["wishlist"],
        queryFn: async () => {
            const res = await axiosSecure(`/tourists/wishlist/${user.email}`)
            return res.data
        }
    })

    // axiosSecure.get("/bookings/user", { email: email })
    //     .then(res => {
    //         console.log(res.data);
    //     }).catch(err => failed(err));




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

    return (
        <div className=" mx-4 md:mx-8 lg:mx-auto max-w-7xl grid gap-6 my-32">
            <div className="card lg:card-side bg-base-100 w-full lg:border">
                <figure className="w-1/3">
                    <img className="w-full h-full" src={photoURL} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className=" text-4xl font-script text-blue-400">{displayName}</h2>
                    <h2 className="font-normal text-xl text-gray-400 mb-2">{email}</h2>

                    <div className="divider my-3"></div>

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
                            <textarea name="story" rows="4" placeholder="Your Story With Tourist Guide" className="textarea textarea-bordered textarea-sm w-full min-h-full" required></textarea>
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
                                <th>Package Name</th>
                                <th>Tour Guide Name</th>
                                <th>Pickup Date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myBookings && myBookings?.map((booking, index) => (
                                    <tr key={index} className="text-center">
                                        <th>{index + 1}</th>
                                        <td>{booking?.tourName}</td>
                                        <td>{booking?.guideName}</td>
                                        <td>{booking?.date}</td>
                                        <td>${booking?.price}</td>
                                        <td><div className={`badge ${getStatusBadgeColor(booking?.status)}`}>{booking?.status}</div></td>
                                        <td className="space-x-4"><button className="btn btn-info">Pay</button>
                                            <button className="btn btn-error">Cancel</button>
                                            <button className="btn btn-success">Apply</button></td>

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
                                <th>Package Name</th>
                                <th>Tour Type</th>
                                <th>Price</th>
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
                                        <td>{item?.tripTitle}</td>
                                        <td><div className={`badge ${getTourTypeBadgeColor(item?.tourType)}`}>{item?.tourType}</div></td>
                                        {/* <td>{item?.tourType}</td> */}
                                        <td>${item?.price}</td>
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