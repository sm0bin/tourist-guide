import { useParams } from "react-router-dom";
import useLoadData from "../hooks/useLoadData";
// import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaStar } from "react-icons/fa";
import GuideProfile from "../components/shared/GuideProfile";

const Guide = () => {
    const params = useParams();
    const [guide, isPending] = useLoadData(`/guides/${params.id}`, "guide");

    if (isPending) return <div className="w-screen h-screen flex items-center justify-center">
        <span className="loading loading-ball loading-lg"></span>
    </div>



    console.log(guide);
    return (
        <div className=" mx-4 md:mx-8 lg:mx-auto max-w-7xl min-h-screen my-32">

            {/* Guide Profile */}
            <GuideProfile guide={guide}></GuideProfile>

        </div>
    );
};

export default Guide;

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