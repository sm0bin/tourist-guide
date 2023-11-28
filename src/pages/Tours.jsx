import SectionTitle from "../components/utilities/SectionTitle";
import { Helmet } from "react-helmet-async";
import useLoadData from "../hooks/useLoadData";
import TourCard from "../components/shared/TourCard";

const Tours = () => {
    const [isPending, error, tours] = useLoadData('/tours', "tours");

    if (isPending) return <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-ball loading-lg"></span>
    </div>

    return (
        <div className="mx-4 md:mx-8 lg:mx-auto max-w-7xl my-32">
            <Helmet>
                <title>Tourist Guide | Tour Packages</title>
            </Helmet>

            <SectionTitle title='Our Packages'></SectionTitle>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                {
                    tours && tours?.map((tour, index) => (
                        <TourCard key={index} tour={tour}></TourCard>
                    ))
                }
            </div>
        </div >
    );
};

export default Tours;