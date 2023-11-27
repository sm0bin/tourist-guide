import { FaArrowRight, FaRegHeart, FaStar } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GoToBtn from '../../utilities/GoToBtn';
import useLoadData from '../../../hooks/useLoadData';
import "./Overview.css";
import GuideCard from '../../shared/GuideCard';
import TitleH3 from '../../utilities/TitleH3';


const Overview = () => {

    const [tourGuidesPending, tourGuidesError, tourGuides] = useLoadData('/guides', "tourGuides");
    const [tourPackagesPending, tourPackagesError, tourPackages] = useLoadData('/tours', "tourPackages");

    if (tourGuidesPending || tourPackagesPending) return <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-ball loading-lg"></span>
    </div>


    return (
        <div className='my-32'>
            <Tabs>
                <TabList className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <Tab>Overview</Tab>
                    <Tab>Tour Packages</Tab>
                    <Tab>Tour Guides</Tab>
                </TabList>

                <TabPanel>
                    <iframe
                        className='rounded-xl shadow w-full'
                        height="600px"
                        src="https://www.youtube.com/embed/Z44fFqBQQtg?si=y23mZULnJ37wQHHz"
                        title="YouTube video player"
                        // frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {
                            tourPackages && tourPackages?.slice(0, 3).map((item, index) => (
                                <div key={index} className="card bg-base-100 shadow hover:shadow-lg">
                                    <figure><img src={item.thumbnail} alt={item.tripTitle} /></figure>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                        {
                            tourGuides && tourGuides?.map((guide, index) => (
                                <GuideCard key={index} guide={guide} />
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
