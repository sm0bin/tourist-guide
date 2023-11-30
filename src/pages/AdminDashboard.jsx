import TouristProfile from "../components/shared/TouristProfile";
import { failed, getRoleBadgeColor } from "../components/utilities/Functions";
import useAuth from "../hooks/useAuth";
import useLoadData from "../hooks/useLoadData";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const AdminDashboard = () => {

    const axiosSecure = useAxiosSecure();
    const [tourists, isPendingTourists, refetchTourists] = useLoadData("/tourists", "tourists");

    const handleTouristRoleChange = (id, role) => {
        console.log(id, role);
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
                axiosSecure.put(`/tourists/role/${id}`, { role: role })
                    .then(res => {
                        console.log(res.data);
                        toast.success("Role Changed.");
                        refetchTourists();
                    }).catch(err => {
                        failed(err);
                    });
            }
        });

    }




    return (
        <div className=" mx-4 md:mx-8 lg:mx-auto max-w-7xl my-32">



            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tourists && tourists.map((tourist, index) => (


                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{tourist?.email}</td>
                                    <td>
                                        <div className={`badge ${getRoleBadgeColor(tourist?.role)}`}>{tourist?.role}</div>
                                    </td>
                                    <td className="space-x-4">
                                        <button onClick={() => handleTouristRoleChange(tourist?._id, "admin")} className="btn btn-warning" disabled={(tourist?.role === "admin")}>Make Admin</button>
                                        <button onClick={() => handleTouristRoleChange(tourist?._id, "guide")} className="btn btn-info" disabled={!(tourist?.role === "tourist")}>Make Tour Guide</button>


                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default AdminDashboard;