import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const GuideCard = ({ guide }) => {
    const { _id, profilePicture, name, rating, contactDetails } = guide;
    return (
        <div className="card flex-row   p-6 rounded-full bg-base-100 shadow hover:shadow-lg gap-4 mb-8">
            <div>
                <div className="avatar relative">
                    <div className="w-28 rounded-full">
                        <img src={profilePicture} />
                    </div>
                    <button className="badge badge-warning gap-2 absolute bottom-0 left-1/2"><FaStar />{rating}</button>
                </div>
            </div>
            <div className="flex-grow">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <h2 className="font-medium text-lg mb-2">{contactDetails?.email}</h2>
                <Link to={`/guides/${_id}`} className="btn btn-info btn-sm rounded-full">View Profile <FaArrowRight /></Link>

            </div>
        </div>
    );
};

export default GuideCard;