import { FaArrowRight, FaStar } from "react-icons/fa";
import useLoadData from "../hooks/useLoadData";
import SectionTitle from "../components/utilities/SectionTitle";
import { Helmet } from "react-helmet-async";

const TourGuides = () => {

    const tourGuides = useLoadData('http://localhost:5500/guides', "tourGuides");
    return (
        <div className="mx-4 md:mx-8 lg:mx-auto max-w-7xl my-32">
            <Helmet>
                <title>Tourist Guide | Tour Guides</title>
            </Helmet>
            <SectionTitle title='Our Tour Guides'></SectionTitle>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">

                {/* {
                    tourGuides && tourGuides?.map((item, index) => (
                        <div key={index} className="card flex-row   p-4 rounded-2xl bg-base-100 shadow hover:shadow-lg gap-4 ">
                            <div>
                                <div className="avatar relative">
                                    <div className="w-28 rounded-xl">
                                        <img src={item.profilePicture} />
                                    </div>
                                    <button className="badge badge-warning gap-2 absolute bottom-0 left-1/2"><FaStar />{item.rating}</button>
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h2 className="card-title font-bold text-2xl">{item.name}</h2>
                                <h2 className="font-medium text-lg mb-2">{item.contactDetails?.email}</h2>
                                <button className="btn btn-info btn-sm rounded-full">View Profile <FaArrowRight /></button>

                            </div>
                        </div>
                    ))
                } */}
                {
                    tourGuides && tourGuides?.map((item, index) => (
                        <div key={index} className="card bg-base-100 shadow hover:shadow-lg group">
                            <figure className="relative ">
                                <img className="w-full" src={item.profilePicture} alt={item.name} />
                                <div className="bg-none group-hover:bg-gradient-to-b from-white/0 to-white absolute inset-0"></div>
                                <div className="flex flex-wrap gap-2 absolute bottom-4 left-4 invisible group-hover:visible">
                                    {
                                        item.skills.map((skill, index) => (
                                            <div key={index} className="badge badge-outline badge-info">{skill}</div>
                                        ))
                                    }
                                </div>
                            </figure>
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <h2 className="card-title">{item.name}</h2>
                                    <button className="badge badge-warning gap-2"><FaStar />{item.rating}</button>
                                    {/* <div className="badge badge-info">{item.tourType}</div> */}
                                </div>
                                <p className="font-medium">{item.contactDetails.email}</p>
                                <hr className="border" />
                                <p>{item.education}</p>
                                {/* <p className="text-gray-500 mt-4 mb-6 text-justify">{item.description}</p> */}
                                <button className="btn btn-info">View Profile <FaArrowRight /></button>
                                {/* <div className='flex gap-4'>
                                    <button className="btn btn-outline btn-error text-lg"><FaRegHeart /></button>
                                    <button className="btn btn-info flex-grow">View Package</button>
                                </div> */}

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default TourGuides;