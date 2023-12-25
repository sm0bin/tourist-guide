import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { failed, getTourTypeBadgeColor } from "../../../components/utilities/Functions";
import { Link } from "react-router-dom";
import useLoadDataSecure from "../../../hooks/useLoadDataSecure";
import TitleH3 from "../../utilities/TitleH3";
import useAuth from "../../../hooks/useAuth";


const TouristDashboardWishlist = () => {
    const { user } = useAuth();
    // if (!user) return null;
    const { displayName, email, photoURL } = user;
    const axiosSecure = useAxiosSecure();
    const [myBookings, isPendingMyBookings, refetchMyBookings] = useLoadDataSecure(`/bookings/${email}`, "bookings");
    const [myWishlist, isPendingMyWishlist, refetchMyWishlist] = useLoadDataSecure(`/tourists/wishlist/${email}`, "wishlist");
    const [coupon, isPendingCoupon, refetchCoupon] = useLoadDataSecure(`/tourists/coupon/${email}`, "coupon");


    const handleDeleteFromWishlist = (id) => {
        axiosSecure.post(`/tourists/wishlist/remove`, { id, email: user.email })
            .then(res => {
                console.log(res.data);
                toast.success("Removed from wishlist");
                refetchMyWishlist();
            }).catch(err => failed(err));
    }


    return (
        <div>
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
                                        <td className="space-x-4 flex">
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

        </div>
    );
};

export default TouristDashboardWishlist;