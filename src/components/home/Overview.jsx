import { FaArrowRight, FaRegHeart, FaStar } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GoToBtn from '../utilities/GoToBtn';
import useLoadData from '../../hooks/useLoadData';


const Overview = () => {

    const tourGuides = useLoadData('/tourGuides.json', "tourGuides");
    const tourPackages = useLoadData('/tourPackages.json', "tourPackages");

    return (
        <div className='my-32'>
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                <TabPanel>
                    <iframe
                        width="100%"
                        height="600px"
                        src="https://www.youtube.com/embed/Z44fFqBQQtg?si=y23mZULnJ37wQHHz"
                        title="YouTube video player"
                        // frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                        {
                            tourPackages && tourPackages?.slice(0, 3).map((item, index) => (
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
                    <GoToBtn btnTitle={'All Packages'} url={'/tours'} />
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">

                        {
                            tourGuides && tourGuides?.map((item, index) => (
                                <div key={index} className="card flex-row   p-6 rounded-full bg-base-100 shadow hover:shadow-lg gap-4 ">
                                    <div>
                                        <div className="avatar relative">
                                            <div className="w-28 rounded-full">
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
                        }

                    </div>
                    <GoToBtn btnTitle={'All Guides'} url={'/guides'} />
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Overview;
