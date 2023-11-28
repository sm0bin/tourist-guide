import TitleH3 from "../components/utilities/TitleH3";
import useAuth from "../hooks/useAuth";

const TouristDashboard = () => {
    const { user } = useAuth();
    const { displayName, email, photoURL } = user;

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
                    {/* <h3 className="font-semibold text-xl text-blue-400 mb-3">Experience</h3> */}
                    {/* <hr className="border my-2" /> */}

                    {/* <div className="shadow-md w-max p-6 rounded-lg"> */}

                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div> */}

                    <TitleH3 title="Share Your Story"></TitleH3>
                    <form className="">
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Designation</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                        </div>
                        <textarea placeholder="Your Story With Tourist Guide" className="textarea textarea-bordered textarea-sm w-full min-h-full" ></textarea>
                        <button></button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default TouristDashboard;