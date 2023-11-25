import Banner from "../components/home/Banner";
import Overview from "../components/home/Overview";
import TourTypes from "../components/home/TourTypes";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mx-4 md:mx-8 lg:mx-auto max-w-7xl">
                <Overview></Overview>
                <TourTypes></TourTypes>
            </div>
        </div>
    );
};

export default Home;