import { toast } from 'react-hot-toast';
import TouristProfile from '../components/shared/TouristProfile';
import TitleH3 from '../components/utilities/TitleH3';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';

const TouristDashboardProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { displayName, photoURL } = user;

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
        <div>
            {/* <TouristProfile tourist={user}></TouristProfile> */}

            <div className="grid grid-cols-3 gap-6">

                {/* Profile Details */}
                <TouristProfile tourist={user}></TouristProfile>

                {/* Share Story Form */}
                <div className="card border p-6 col-span-2">
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
                            <textarea name="story" rows="6" placeholder="Your Story With Tourist Guide" className="textarea textarea-bordered textarea-sm w-full min-h-full" required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info">Share</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TouristDashboardProfile;