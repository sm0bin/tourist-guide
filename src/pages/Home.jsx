import Banner from "../components/home/Banner";
import Overview from "../components/home/Overview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mx-4 md:mx-8 lg:mx-auto max-w-7xl">
                <Overview></Overview>

            </div>
        </div>
    );
};

export default Home;