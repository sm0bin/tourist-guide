import useLoadData from "../hooks/useLoadData";
import useAuth from "../hooks/useAuth";
import GuideProfileForm from "../components/forms/GuideProfileForm";
import GuideProfile from "../components/shared/GuideProfile";
import TitleH3 from "../components/utilities/TitleH3";
import useLoadDataSecure from "../hooks/useLoadDataSecure";
import { failed, getStatusBadgeColor } from "../components/utilities/Functions";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const GuideDashboardBooking = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [guide, isPending, refetch] = useLoadData(`/guides/guide/${user.email}`, "guide");
    const [myBookings, isPendingMyBookings, refetchMyBookings] = useLoadDataSecure(`/guides/bookings/${user.email}`, "bookings");

    const handleStatusChange = (id, status) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`/bookings/status/${id}`, { status: status })
                    .then(res => {
                        console.log(res.data);
                        // setBtnState(true);
                        refetchMyBookings();
                        toast.success("Status Changed.");
                    }).catch(err => {
                        failed(err);
                    });
            }
        });
    }

    return (
        <>
            <div className="card border p-6">
                <TitleH3 title="My Assigned Tours"></TitleH3>
                <div className="divider"></div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th></th>
                                <th className="text-left">Package Name</th>
                                <th>Tourist Name</th>
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
                                        <td>{booking?.touristName}</td>
                                        <td>{booking?.date}</td>
                                        <td className="text-right">${booking?.price}</td>
                                        <td>
                                            <div className={`badge ${getStatusBadgeColor(booking?.status)}`}>{booking?.status}</div>
                                        </td>
                                        <td className="space-x-4">
                                            <button onClick={() => handleStatusChange(booking?._id, "Accepted")} className="btn btn-info" disabled={!(booking?.status === "In Review")}>Accept</button>
                                            <button onClick={() => handleStatusChange(booking?._id, "Rejected")} className="btn btn-error" disabled={!(booking?.status === "In Review")}>Reject</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default GuideDashboardBooking;