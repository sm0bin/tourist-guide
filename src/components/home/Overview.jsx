import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GoToBtn from '../utilities/GoToBtn';
import useLoadData from '../../hooks/useLoadData';
import GuideCard from '../shared/GuideCard';
import TourCard from '../shared/TourCard';


const Overview = () => {

    const [guidesPending, guidesError, guides] = useLoadData('/guides', "guides");
    const [toursPending, toursError, tours] = useLoadData('/tours', "tours");

    if (guidesPending || toursPending) return <div className="w-full h-screen flex items-center justify-center">
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
                            tours && tours?.slice(0, 3).map((tour, index) => (
                                <TourCard key={index} tour={tour} />
                            ))
                        }
                    </div>
                    <GoToBtn btnTitle={'All Packages'} url={'/tours'} />
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                        {
                            guides && guides?.map((guide, index) => (
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
