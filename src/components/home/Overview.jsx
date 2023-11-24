import { FaArrowRight, FaRegHeart, FaStar } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
    useQuery,
} from '@tanstack/react-query'
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';


const Overview = () => {
    // const [tourGuidesProfiles, setTourGuidesProfiles] = useState([]);

    // const travelPackages = ;

    const { isPending: pendingTourGuides, error: tourGuidesError, data: tourGuidesProfiles } = useQuery({
        queryKey: ['tourGuides'],
        queryFn: async () => {
            const res = await axios('tourGuides.json')
            return res.data
        }
    })
    const { isPending: pendingTravelPackages, error: travelPackagesError, data: travelPackages } = useQuery({
        queryKey: ['travelPackages'],
        queryFn: async () => {
            const res = await axios('travelPackages.json')
            return res.data
        }
    })

    if (pendingTourGuides || pendingTravelPackages) return <div className='h-96 w-full flex justify-center items-center'>
        <span className="loading loading-ball loading-lg h-96 mx-auto "></span>
    </div>

    if (tourGuidesError || travelPackagesError) return <div className='h-96 w-full flex justify-center items-center'>
        <span className="loading loading-ball loading-lg h-96 mx-auto "></span>
        <h2>{'An error has occurred: ' + tourGuidesError.message + travelPackagesError.message}</h2>
    </div>


    // const tourGuidesProfiles = 






    return (
        <div className='my-32'>
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>

                <TabPanel>
                    <iframe width="100%" height="600px" src="https://www.youtube.com/embed/Z44fFqBQQtg?si=y23mZULnJ37wQHHz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                        {
                            travelPackages?.map((item, index) => (
                                <div key={index} className="card bg-base-100 shadow hover:shadow-lg">
                                    <figure><img src={item.imageUrl} alt={item.tripTitle} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.tripTitle}</h2>
                                        <div className='flex justify-between'>
                                            <p>Price: ${item.price}</p>
                                            <div className="badge badge-info">{item.tourType}</div>
                                        </div>
                                        <div className='flex gap-4'>
                                            <button className="btn btn-outline btn-error text-lg"><FaRegHeart /></button>
                                            <button className="btn btn-info flex-grow">View Package</button>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button className="btn btn-info mx-auto flex">All Packages <FaArrowRight /></button>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">

                        {
                            tourGuidesProfiles.map((item, index) => (
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
                                        <h2 className="font-medium text-lg mb-2">{item.contactDetails.email}</h2>
                                        <button className="btn btn-info btn-sm rounded-full">View Profile <FaArrowRight /></button>

                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <button className="btn btn-info mx-auto flex">All Guides <FaArrowRight /></button>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Overview;
