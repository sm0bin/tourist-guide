import { toast } from "react-hot-toast";
import TitleH3Center from "../../utilities/TitleH3Center";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { failed } from "../../utilities/Functions";

const AdminDashboardAddPackage = () => {
    const axiosSecure = useAxiosSecure();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const data = {
            thumbnail: form.thumbnail.value,
            tourType: form.tourType.value,
            tripTitle: form.tripTitle.value,
            price: form.price.value,
            tourDetails: {
                duration: form.duration.value,
                accommodation: form.accommodation.value,
                days: [
                    {
                        day: 1,
                        title: "Arrival in Paradise",
                        details: "Arrive at the island resorts and be greeted by the tranquil sound of ocean waves and the warmth of the tropical sun. Enjoy a relaxing day by the pool or on the pristine beach."
                    },
                    {
                        day: 2,
                        title: "Spa Relaxation and Wellness",
                        details: "Indulge in a day of spa relaxation and wellness. Pamper yourself with rejuvenating spa treatments, yoga sessions, and holistic wellness activities designed to nourish the body and soul."
                    },
                    {
                        day: 3,
                        title: "Sunbathing and Beach Bliss",
                        details: "Spend the day soaking up the sun on the island's beautiful beaches. Engage in beach activities, swim in crystal-clear waters, and experience the blissful ambiance of island life."
                    },
                    {
                        day: 4,
                        title: "Island Excursions and Adventures",
                        details: "Embark on island excursions to explore hidden coves, snorkel in vibrant coral reefs, and discover the natural beauty of the surrounding islands. Engage in water sports or simply enjoy the breathtaking scenery."
                    },
                    {
                        day: 5,
                        title: "Cultural Connections",
                        details: "Immerse yourself in the local culture with visits to nearby villages, cultural performances, and interactions with the island community. Learn about traditional practices and customs."
                    },
                    {
                        day: 6,
                        title: "Farewell in Tropical Paradise",
                        details: "Bid farewell to the island paradise with a beachside farewell. Reflect on the serenity and beauty of your retreat. Depart with a sense of tranquility and memories of a rejuvenating escape."
                    }
                ]
            },
            description: form.description.value,
            gallery: [
                "https://source.unsplash.com/Ph5VL5Tilto",
                "https://source.unsplash.com/AMqrW1Sxx3g",
                "https://source.unsplash.com/dZKiXR9FYcM",
                "https://source.unsplash.com/N_au3KCcQng",
                "https://source.unsplash.com/JBszu2VpC8k"
            ]
        }

        axiosSecure.post("/tours", data)
            .then(res => {
                console.log(res.data);
                toast.success("Package Added.");
                form.reset();
            }).catch(err => {
                failed(err);
            });

    }



    return (
        <div>
            <div className="card shrink-0 w-full border p-6 bg-base-100">
                <TitleH3Center title="Add Package"></TitleH3Center>
                <form onSubmit={handleSubmit} className="card-body p-0 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Thumbnail</span>
                            </label>
                            <input type="text" name="thumbnail" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Trip Title</span>
                            </label>
                            <input type="text" name="tripTitle" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tour Type</span>
                            </label>
                            <input type="text" name="tourType" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Duration</span>
                            </label>
                            <input type="text" name="duration" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Accommodation</span>
                            </label>
                            <input type="text" name="accommodation" placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" placeholder="" className="textarea textarea-bordered textarea-md w-full" required></textarea>
                            {/* <input type="text" name="description" placeholder="" className="input input-bordered" required /> */}
                        </div>
                    </div>





                    <div className="form-control mt-6">
                        <button className="btn btn-info">Submit Package</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminDashboardAddPackage;


// {
//     "thumbnail": "https://source.unsplash.com/r_MqlohIVO8/640x360",
//     "gallery": [
//       "https://source.unsplash.com/Ph5VL5Tilto",
//       "https://source.unsplash.com/AMqrW1Sxx3g",
//       "https://source.unsplash.com/dZKiXR9FYcM",
//       "https://source.unsplash.com/N_au3KCcQng",
//       "https://source.unsplash.com/JBszu2VpC8k"
//     ],
//     "tourType": "Relaxation",
//     "tripTitle": "Island Retreat",
//     "price": 160,
//     "tourDetails": {
//       "duration": "6 days",
//       "accommodation": "Island Resorts",
//       "days": [
//         {
//           "day": 1,
//           "title": "Arrival in Paradise",
//           "details": "Arrive at the island resorts and be greeted by the tranquil sound of ocean waves and the warmth of the tropical sun. Enjoy a relaxing day by the pool or on the pristine beach."
//         },
//         {
//           "day": 2,
//           "title": "Spa Relaxation and Wellness",
//           "details": "Indulge in a day of spa relaxation and wellness. Pamper yourself with rejuvenating spa treatments, yoga sessions, and holistic wellness activities designed to nourish the body and soul."
//         },
//         {
//           "day": 3,
//           "title": "Sunbathing and Beach Bliss",
//           "details": "Spend the day soaking up the sun on the island's beautiful beaches. Engage in beach activities, swim in crystal-clear waters, and experience the blissful ambiance of island life."
//         },
//         {
//           "day": 4,
//           "title": "Island Excursions and Adventures",
//           "details": "Embark on island excursions to explore hidden coves, snorkel in vibrant coral reefs, and discover the natural beauty of the surrounding islands. Engage in water sports or simply enjoy the breathtaking scenery."
//         },
//         {
//           "day": 5,
//           "title": "Cultural Connections",
//           "details": "Immerse yourself in the local culture with visits to nearby villages, cultural performances, and interactions with the island community. Learn about traditional practices and customs."
//         },
//         {
//           "day": 6,
//           "title": "Farewell in Tropical Paradise",
//           "details": "Bid farewell to the island paradise with a beachside farewell. Reflect on the serenity and beauty of your retreat. Depart with a sense of tranquility and memories of a rejuvenating escape."
//         }
//       ]
//     },
//     "description": "Unwind in paradise with a 6-day Island Retreat. Stay in luxurious island resorts, pamper yourself with spa relaxation, soak up the sun while sunbathing, and explore the beauty of the surrounding islands with guided excursions."
//   },