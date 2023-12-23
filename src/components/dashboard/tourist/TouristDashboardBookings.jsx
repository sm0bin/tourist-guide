import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { failed, getStatusBadgeColor } from "../../../components/utilities/Functions";
import Swal from "sweetalert2";
import useLoadDataSecure from "../../../hooks/useLoadDataSecure";
import TitleH3 from "../../utilities/TitleH3";

const TouristDashboardBookings = () => {
    const { user } = useAuth();
    // if (!user) return null;
    const { displayName, email, photoURL } = user;
    const axiosSecure = useAxiosSecure();
    const [myBookings, isPendingMyBookings, refetchMyBookings] = useLoadDataSecure(`/bookings/${email}`, "bookings");
    const [myWishlist, isPendingMyWishlist, refetchMyWishlist] = useLoadDataSecure(`/tourists/wishlist/${email}`, "wishlist");
    const [coupon, isPendingCoupon, refetchCoupon] = useLoadDataSecure(`/tourists/coupon/${email}`, "coupon");

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
    return (
        <div>

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
                                            <button onClick={() => handleBookingCancel(booking?._id)} className="btn btn-error" disabled={!(booking?.status === "In Review")}>Cancel</button>
                                            <button onClick={() => handleApplyCoupon(booking?._id, booking?.price)} className="btn btn-success" disabled={!(coupon === "applicable" && booking?.status === "Accepted")}>Apply</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TouristDashboardBookings;