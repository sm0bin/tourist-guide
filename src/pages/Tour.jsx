import { Link, useParams } from "react-router-dom";
import SectionTitle from "../components/utilities/SectionTitle";
import useLoadData from "../hooks/useLoadData";
import TitleH3 from "../components/utilities/TitleH3";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaArrowRight, FaCalendarWeek, FaHotel } from "react-icons/fa";
import BookingForm from "../components/auth/BookingForm";
import GuideCard from "../components/shared/GuideCard";
import GoToBtn from "../components/utilities/GoToBtn";

const Tour = () => {
    const { id } = useParams();
    const [isPending, error, tour] = useLoadData(`/tours/${id}`, "tour");
    const [tourGuidesPending, tourGuidesError, tourGuides] = useLoadData('/guides', "tourGuides");

    if (isPending) return <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-ball loading-lg"></span>
    </div>

    const { thumbnail, gallery, tourType, tripTitle, price, tourDetails, description } = tour;

    return (
        <section className=" mx-4 md:mx-8 lg:mx-auto max-w-7xl my-32">
            <SectionTitle title='Tour Package Details'></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                <div className="col-span-2 overflow-hidden">
                    <div className="relative card overflow-hidden">
                        <figure className=" ">
                            <img className="w-full h-full object-cover" src={thumbnail} alt={tripTitle} />
                        </figure>



                        <div className="absolute bottom-0 bg-white/90 inset-x-0 p-4">
                            <div className=" flex justify-between mb-1">
                                <TitleH3 title={tripTitle}></TitleH3>
                                <button className="btn rounded-full btn-info btn-outline btn-sm">{tourType}</button>
                            </div>
                            <h4 className="font-medium text-gray-500 text-xl ">Price: <span className="text-blue-400">${price}</span></h4>
                        </div>
                    </div>
                    {/* <div className="divider"></div> */}


                    <Tabs className="mt-8">
                        <TabList className="grid grid-cols-2 gap-4 mb-8 text-center">
                            <Tab>Information</Tab>
                            {/* <Tab>Travel Plan</Tab> */}
                            <Tab>Our Gallery</Tab>
                        </TabList>

                        {/* <TabPanel>

                            <h3 className="text-2xl font-semibold mb-2">Overview</h3>
                            <p className="text-lg text-gray-500 mb-8">{description}</p>
                            <h4 className="text-xl leading-relaxed font-semibold text-gray-500"><FaCalendarWeek className="inline text-blue-400" /> Duration: <span className="text-blue-400">{tourDetails?.duration}</span></h4>
                            <h4 className="text-xl leading-relaxed font-semibold text-gray-500"><FaHotel className="inline  text-blue-400" /> Accommodation: <span className="text-blue-400">{tourDetails?.accommodation}</span></h4>
                        </TabPanel> */}



                        <TabPanel>

                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold mb-2">Overview</h3>
                                <p className="text-lg text-gray-500 mb-6">{description}</p>
                                <h4 className="text-xl leading-loose font-medium text-gray-500 mb-3"><FaCalendarWeek className="inline text-blue-400 text-4xl mr-2" /> Duration: <span className="text-blue-400 font-semibold">{tourDetails?.duration}</span></h4>
                                <h4 className="text-xl leading-loose font-medium text-gray-500 mb-3"><FaHotel className="inline  text-blue-400 text-4xl mr-2" /> Accommodation: <span className="text-blue-400 font-semibold">{tourDetails?.accommodation}</span></h4>
                            </div>
                            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">


                                {
                                    tourDetails?.days?.map((item, index) => (
                                        <li key={index}>
                                            {
                                                index !== 0 && <hr />
                                            }
                                            <div className="timeline-middle">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-blue-400"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            </div>
                                            <div className={`timeline-end  mb-10`}>
                                                <time className=" capitalize font-medium  text-lg bg-blue-400 text-white px-6 py-2 rounded-full mb-3">Day {item.day}</time>
                                                <div className="text-2xl font-semibold mt-4 mb-2">{item.title}</div>
                                                <p className="text-gray-500">{item.details}</p>
                                            </div>
                                            {
                                                index !== tourDetails?.days?.length - 1 && <hr />
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </TabPanel>




                        <TabPanel>
                            <div className="grid grid-cols-2 gap-2">
                                {
                                    gallery?.map((item, index) => (
                                        <figure key={index} className={`rounded-xl overflow-hidden ${(gallery.length % 2 !== 0 && index === 0) && 'col-span-2'}`}>
                                            <img className="w-full h-full object-cover" src={item} alt={tripTitle} />
                                        </figure>
                                    ))
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                    <div className="divider"></div>
                    <div>
                        <div className="flex justify-between">
                            <TitleH3 title='Tour Guides'></TitleH3>
                            <Link to="/guides" className="btn btn-info btn-outline btn-sm rounded-full">All Guides <FaArrowRight /></Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">

                            {
                                tourGuides && tourGuides?.slice(0, 4).map((guide, index) => (
                                    <GuideCard key={index} guide={guide} />
                                ))
                            }

                        </div>
                    </div>

                </div>



                <BookingForm guides={tourGuides} tour={tour}></BookingForm>
            </div>


        </section >
    );
};

export default Tour;


// {
//     "thumbnail": "https://source.unsplash.com/DWoOJ2C2uns/640x360",
//     "gallery": [
//       "https://source.unsplash.com/_jxz7Fe1btc",
//       "https://source.unsplash.com/k7EDYStENI0",
//       "https://source.unsplash.com/WICc--aTNt8",
//       "https://source.unsplash.com/Cdwi5n7Gwes",
//       "https://source.unsplash.com/RfHhohVQLnQ"
//     ],
//     "tourType": "Historical",
//     "tripTitle": "Ancient Castle Exploration",
//     "price": 200,
//     "tourDetails": {
//       "duration": "5 days",
//       "accommodation": "Castle Suites",
//       "days": [
//         {
//           "day": 1,
//           "title": "Castle Arrival and Welcome Banquet",
//           "details": "Arrive at the majestic castle and be welcomed with a grand banquet. Explore the castle grounds, admiring the medieval architecture and scenic surroundings."
//         },
//         {
//           "day": 2,
//           "title": "Guided Castle Tours",
//           "details": "Embark on guided tours of the ancient castle, uncovering its rich history and stories of the past. Visit historic chambers, halls, and courtyards, marveling at the preserved artifacts and tapestries."
//         },
//         {
//           "day": 3,
//           "title": "Medieval Banquets and Festivities",
//           "details": "Indulge in medieval banquets and festivities within the castle walls. Experience the grandeur of medieval entertainment, including music, dance, and theatrical performances."
//         },
//         {
//           "day": 4,
//           "title": "Archery and Castle Grounds Exploration",
//           "details": "Try your hand at archery in the castle grounds, channeling the spirit of medieval knights. Explore the expansive castle grounds, discovering hidden gardens and scenic viewpoints."
//         },
//         {
//           "day": 5,
//           "title": "Village Excursion and Local Interactions",
//           "details": "Embark on an excursion to nearby villages, interacting with local communities and experiencing rural life. Learn about traditional crafts and customs, gaining insights into the cultural heritage of the region."
//         }
//       ]
//     },
//     "description": "Step back in time with an 8-day Ancient Castle Exploration. Stay in luxurious castle suites, explore ancient castles with guided tours, savor medieval banquets, and try your hand at archery in the castle grounds."
//   },