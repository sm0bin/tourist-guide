import { Helmet } from "react-helmet-async";
import Banner from "../components/home/Banner";
import Overview from "../components/home/Overview";
import TourTypes from "../components/home/TourTypes";
import TouristStory from "../components/home/TouristStory";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Tourist Guide | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="mx-4 md:mx-8 lg:mx-auto max-w-7xl space-y-32 my-32">
                {/* <Overview></Overview> */}
                <TourTypes></TourTypes>
                {/* <TouristStory></TouristStory> */}
            </div>
        </div>
    );
};

export default Home;