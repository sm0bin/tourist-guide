import { useParams } from "react-router-dom";
import useLoadData from "../hooks/useLoadData";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaStar } from "react-icons/fa";

const TourGuide = () => {
    const params = useParams();
    const tourGuide = useLoadData(`/guides/${params.id}`, "tourGuide");
    const { name, profilePicture, contactDetails, education, skills, workExperience, rating } = tourGuide;
    const { email, phone, location } = contactDetails;
    console.log(tourGuide);
    return (
        <div className=" mx-4 md:mx-8 lg:mx-auto max-w-7xl min-h-screen flex justify-center items-center">
            <div className="card lg:card-side bg-base-100 lg:shadow-md">
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
                    {/* <h3 className="font-semibold text-xl text-blue-500 mb-3">Experience</h3> */}
                    {/* <hr className="border my-2" /> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">

                        {
                            workExperience && workExperience.map((exp, index) => (
                                <div key={index} className="shadow-md w-full p-6 rounded-lg">
                                    <h3 className="font-semibold text-xl text-blue-500 mb-3">{exp.position}</h3>
                                    <hr className="border my-2" />
                                    <p className="text-gray-500 leading-loose">Company: <span className="text-gray-600 font-semibold">{exp.company}</span></p>
                                    <p className="text-gray-500 leading-loose">Duration: <span className="text-gray-600 font-semibold">{exp.duration}</span></p>
                                </div>
                            ))
                        }
                    </div>
                    {/* <div className="shadow-md w-max p-6 rounded-lg"> */}
                    <div className="mt-6">
                        <h3 className="font-semibold text-xl text-blue-500 mb-3">Contact Details</h3>
                        <hr className="border my-2" />

                        <div className="md:flex justify-between gap-2">
                            <p className="text-gray-500 leading-loose text-sm"><FaEnvelope className="inline mr-1 text-blue-400 text-lg" /> <span className="text-gray-500 font-medium">{email}</span></p>
                            <p className="text-gray-500 leading-loose text-sm"><FaPhone className="inline mr-1 text-blue-400 text-lg" /> <span className="text-gray-500 font-medium">{phone}</span></p>
                            <p className="text-gray-500 leading-loose text-sm"><FaMapMarkerAlt className="inline mr-1 text-blue-400 text-lg" /> <span className="text-gray-500 font-medium">{location}</span></p>
                        </div>

                    </div>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default TourGuide;

// {
//     "name": "John Doe",
//     "profilePicture": "https://source.unsplash.com/-Tc8w2Kvsf8/512x512",
//     "contactDetails": {
//       "email": "john.doe@email.com",
//       "phone": "+1 (555) 123-4567",
//       "location": "Dhaka, Bangladesh"
//     },
//     "education": "Bachelor's Degree in Tourism Management",
//     "skills": [
//       "Multilingual",
//       "Cultural Knowledge",
//       "Navigation",
//       "Customer Service"
//     ],
//     "workExperience": [
//       {
//         "position": "Senior Tour Guide",
//         "company": "Explore Adventures",
//         "duration": "2018 - Present"
//       },
//       {
//         "position": "Tour Coordinator",
//         "company": "Discover Travel Agency",
//         "duration": "2015 - 2018"
//       }
//     ],
//     "rating": 4.8
//   }