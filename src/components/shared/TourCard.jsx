import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const TourCard = ({ tour }) => {
    const { thumbnail, tripTitle, price, tourType, description, _id } = tour;


    const getBadgeColor = (tourType) => {
        let badgeColor = '';

        switch (tourType) {
            case 'Adventure':
            case 'Nature':
            case 'Wildlife':
                badgeColor = 'badge-accent';
                break;
            case 'Cultural':
            case 'Foods':
            case 'Historical':
                badgeColor = 'badge-warning';
                break;
            case 'City':
            case 'Photography':
            case 'Beach':
                badgeColor = 'badge-info';
                break;
            case 'Relaxation':
                badgeColor = 'badge-secondary';
                break;
            default:
                badgeColor = 'badge-default';
        }

        return badgeColor;
    };


    return (
        <div className="card bg-base-100 shadow hover:shadow-lg">
            <figure><img src={thumbnail} alt={tripTitle} /></figure>
            <div className="card-body">
                <h2 className="card-title">{tripTitle}</h2>
                <div className='flex justify-between'>
                    <p>Price: ${price}</p>
                    <Link to={`/tours/types/${tourType}`} className={`badge ${getBadgeColor(tourType)}`}>{tourType}</Link>
                </div>
                <p className="text-gray-500 mt-4 mb-6 text-justify">{description}</p>
                <div className='flex gap-4'>
                    <button className="btn btn-outline btn-error text-lg"><FaRegHeart /></button>
                    <Link to={`/tours/${_id}`} className="btn btn-info flex-grow">View Package</Link>
                </div>

            </div>
        </div>
    );
};

export default TourCard;