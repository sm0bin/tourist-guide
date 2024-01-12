import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { failed } from '../utilities/Functions';
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { getTourTypeBadgeColor } from "../utilities/Functions";

const TourCard = ({ tour }) => {
    const { user } = useAuth();
    const { thumbnail, tripTitle, price, tourType, description, _id } = tour;
    const axiosSecure = useAxiosSecure();

    const handleAddToWishlist = () => {
        // console.log('clicked');
        axiosSecure.post(`/tourists/wishlist`, { tourId: _id, email: user.email })
            .then(res => {
                console.log(res.data);
                toast.success('Added to wishlist');
            })
            .catch(err => failed(err));
    }




    return (
        <div className="card bg-base-100 border shadow hover:shadow-lg">
            <figure><img src={thumbnail} alt={tripTitle} /></figure>
            <div className="card-body">
                <h2 className="card-title">{tripTitle}</h2>
                <div className='flex justify-between'>
                    <p>Price: ${price}</p>
                    <Link to={`/tours/types/${tourType}`} className={`badge ${getTourTypeBadgeColor(tourType)}`}>{tourType}</Link>
                </div>
                <p className="mt-4 mb-6 text-justify">{description}</p>
                <div className='flex gap-4'>
                    <button onClick={handleAddToWishlist} className="btn btn-outline btn-error text-lg"><FaRegHeart /></button>
                    <Link to={`/tours/${_id}`} className="btn btn-info flex-grow">View Package</Link>
                </div>

            </div>
        </div>
    );
};

export default TourCard;