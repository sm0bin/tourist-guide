import { toast } from "react-hot-toast";
import TitleH3 from "../../utilities/TitleH3";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { failed, getTourTypeBadgeColor, getStatusBadgeColor } from "../../utilities/Functions";
import { Link, Outlet } from "react-router-dom";
import Swal from "sweetalert2";
import useLoadDataSecure from "../../../hooks/useLoadDataSecure";
import TouristProfile from "../../shared/TouristProfile";


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







    return (
        <div className=" mx-4 md:mx-8 lg:mx-auto max-w-7xl grid gap-6 my-32">
            <Outlet></Outlet>




            <div>


            </div>

        </div>
    );
};

export default TouristDashboard;