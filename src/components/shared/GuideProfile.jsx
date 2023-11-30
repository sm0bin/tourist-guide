import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaStar } from "react-icons/fa";

const GuideProfile = ({ guide }) => {

    const { name, profilePicture, contactDetails, education, skills, workExperience, rating } = guide;
    const { email, phone, location } = contactDetails;

    return (
        <div className="card lg:card-side bg-base-100 w-full border">
            <figure className="relative">
                <img className="w-full h-full" src={profilePicture} alt="Album" />
                <div className="btn btn-warning absolute top-3 right-3 w-max text-lg"><FaStar /> {rating}</div>
            </figure>
            <div className="card-body">
                <h2 className=" text-4xl font-script text-blue-400">{name}</h2>
                <h2 className="font-normal text-xl text-gray-400 mb-2">{education}</h2>
                <div className="flex flex-wrap gap-3">
                    {
                        skills && skills.map((skill, index) => (
                            <div key={index} className="badge badge-outline badge-info">{skill}</div>
                        ))
                    }
                </div>
                <div className="divider my-3"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">

                    {
                        workExperience && workExperience.map((exp, index) => (
                            <div key={index} className="border w-full p-6 rounded-lg">
                                <h3 className="font-semibold text-xl text-blue-400 mb-3">{exp.position}</h3>
                                <hr className="border my-2" />
                                <p className="text-gray-500 leading-loose">Company: <span className="text-gray-600 font-semibold">{exp.company}</span></p>
                                <p className="text-gray-500 leading-loose">Duration: <span className="text-gray-600 font-semibold">{exp.duration}</span></p>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-6">
                    <h3 className="font-semibold text-xl text-blue-400 mb-3">Contact Details</h3>
                    <hr className="border my-2" />

                    <div className="md:flex justify-between gap-2">
                        <p className="text-gray-500 leading-loose text-sm"><FaEnvelope className="inline mr-1 text-blue-400 text-lg" /> <span className="text-gray-500 font-medium">{email}</span></p>
                        <p className="text-gray-500 leading-loose text-sm"><FaPhone className="inline mr-1 text-blue-400 text-lg" /> <span className="text-gray-500 font-medium">{phone}</span></p>
                        <p className="text-gray-500 leading-loose text-sm"><FaMapMarkerAlt className="inline mr-1 text-blue-400 text-lg" /> <span className="text-gray-500 font-medium">{location}</span></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GuideProfile;