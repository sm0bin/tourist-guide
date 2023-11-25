import { FaRegHeart } from "react-icons/fa";
import useLoadData from "../hooks/useLoadData";
import SectionTitle from "../components/utilities/SectionTitle";

const TourPackages = () => {
    const tourPackages = useLoadData('/tourPackages.json', "tourPackages");
    return (
        <div className="mx-4 md:mx-8 lg:mx-auto max-w-7xl my-32">
            <SectionTitle title='Our Packages'></SectionTitle>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                {
                    tourPackages && tourPackages?.map((item, index) => (
                        <div key={index} className="card bg-base-100 shadow hover:shadow-lg">
                            <figure><img src={item.imageUrl} alt={item.tripTitle} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.tripTitle}</h2>
                                <div className='flex justify-between'>
                                    <p>Price: ${item.price}</p>
                                    <div className="badge badge-info">{item.tourType}</div>
                                </div>
                                <p className="text-gray-500 mt-4 mb-6 text-justify">{item.description}</p>
                                <div className='flex gap-4'>
                                    <button className="btn btn-outline btn-error text-lg"><FaRegHeart /></button>
                                    <button className="btn btn-info flex-grow">View Package</button>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TourPackages;