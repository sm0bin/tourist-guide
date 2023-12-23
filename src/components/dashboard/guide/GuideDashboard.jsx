import useLoadData from "../../../hooks/useLoadData";
import useAuth from "../../../hooks/useAuth";
import GuideProfileForm from "../../forms/GuideProfileForm";
import GuideProfile from "../../shared/GuideProfile";
import TitleH3 from "../../utilities/TitleH3";
import useLoadDataSecure from "../../../hooks/useLoadDataSecure";
import { failed, getStatusBadgeColor } from "../../utilities/Functions";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const GuideDashboard = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [guide, isPending, refetch] = useLoadData(`/guides/guide/${user.email}`, "guide");
    const [myBookings, isPendingMyBookings, refetchMyBookings] = useLoadDataSecure(`/guides/bookings/${user.email}`, "bookings");

    if (isPending) return <div className="w-screen h-screen flex items-center justify-center">
        <span className="loading loading-ball loading-lg"></span>
    </div>

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




    console.log(guide);
    return (
        <div className=" mx-4 md:mx-8 lg:mx-auto max-w-7xl min-h-screen">
            <div className="grid gap-6 my-32">
                {/* Guides Profile */}
                {
                    guide ?

                        <>
                            <GuideProfile guide={guide}></GuideProfile>

                            {/* Bookings Table */}
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
                        : <GuideProfileForm refetch={refetch}></GuideProfileForm>
                }

            </div>

        </div>
    );
};

export default GuideDashboard;

// {
//     "name": "John Doe",
//     "profilePicture": "https://source.unsplash.com/-Tc8w2Kvsf8/512x512",
//     "contactDetails": {
//       "email": "john.doe@email.com",
//       "phone": "+1 (555) 123-4567",
//       "location": "Dhaka, Bangladesh"
//     },
//     "education": "Bachelor's Degree in Tourism Management",
//     "skills": [
//       "Multilingual",
//       "Cultural Knowledge",
//       "Navigation",
//       "Customer Service"
//     ],
//     "workExperience": [
//       {
//         "position": "Senior Tour Guide",
//         "company": "Explore Adventures",
//         "duration": "2018 - Present"
//       },
//       {
//         "position": "Tour Coordinator",
//         "company": "Discover Travel Agency",
//         "duration": "2015 - 2018"
//       }
//     ],
//     "rating": 4.8
//   }