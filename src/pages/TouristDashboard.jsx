import { toast } from "react-hot-toast";
import TitleH3 from "../components/utilities/TitleH3";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const TouristDashboard = () => {
    const { user } = useAuth();
    const { displayName, email, photoURL } = user;
    const axiosSecure = useAxiosSecure();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const story = {
            img: photoURL,
            name: displayName,
            designation: form.designation.value,
            rating: form.rating.value,
            story: form.story.value
        }

        axiosSecure.post("/stories", story)
            .then(res => {
                console.log(res.data);
                toast.success("Story Shared Successfully");
            })



    }

    return (
        <div className=" mx-4 md:mx-8 lg:mx-auto max-w-7xl min-h-screen flex justify-center items-center">
            <div className="card lg:card-side bg-base-100 w-full lg:shadow-md">
                <figure className="w-1/3">
                    <img className="w-full h-full" src={photoURL} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className=" text-4xl font-script text-blue-400">{displayName}</h2>
                    <h2 className="font-normal text-xl text-gray-400 mb-2">{email}</h2>

                    <div className="divider my-3"></div>

                    <TitleH3 title="Share Your Story"></TitleH3>
                    <form onSubmit={handleSubmit} className="">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Your Rating</span>
                                </label>
                                <select name="rating" className="select select-bordered" required>
                                    <option defaultValue >5</option>
                                    <option>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>

                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Designation</span>
                                </label>
                                <input name="designation" type="text" placeholder="Your Designation" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Story</span>
                            </label>
                            <textarea name="story" rows="4" placeholder="Your Story With Tourist Guide" className="textarea textarea-bordered textarea-sm w-full min-h-full" required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Share</button>
                        </div>
                    </form>
                </div>
            </div>

            <div>


            </div>

        </div>
    );
};

export default TouristDashboard;