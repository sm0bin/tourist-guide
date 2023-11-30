import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import TitleH3Center from "../utilities/TitleH3Center";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { failed } from "../utilities/Functions";

const GuideProfileForm = ({ refetch }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Submit!"
        }).then((result) => {
            if (result.isConfirmed) {

                const guideProfile = {
                    name: user.displayName,
                    profilePicture: user.photoURL,
                    education: form.education.value,
                    skills: form.skills.value.split(","),
                    contactDetails: {
                        email: user.email,
                        phone: form.phone.value,
                        location: form.location.value
                    },
                    workExperience: [
                        {
                            position: form.position.value,
                            company: form.company.value,
                            duration: form.duration.value
                        }
                    ]
                }

                console.log(guideProfile);

                axiosSecure.post("/guides", guideProfile)
                    .then(res => {
                        console.log(res);
                        Swal.fire({
                            title: "Submitted!",
                            text: "Your profile has been submitted.",
                            icon: "success"
                        });
                        refetch();
                    })
                    .catch(err => {
                        // console.log(err);
                        // Swal.fire({
                        //     title: "Error!",
                        //     text: "Something went wrong.",
                        //     icon: "error"
                        // });
                        failed(err);
                    })

            }
        });




    }

    return (
        <div className="card shrink-0 w-full border bg-base-100 p-6">
            <TitleH3Center title="Tour Guide Profile"></TitleH3Center>
            <form onSubmit={handleSubmit} className="card-body p-0">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input name="education" type="text" placeholder="Your Education" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Skills</span>
                    </label>
                    <input name="skills" type="text" placeholder="Follow this format: Cultural Interpretation, Adventure Planning, Communication" className="input input-bordered" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input name="phone" type="text" placeholder="+88 010 0000 0000" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input name="location" type="text" placeholder="Your Current Location" className="input input-bordered" required />
                    </div>
                </div>

                <div className="card border p-4 mt-6">
                    <h3 className="font-medium text-lg text-blue-400">Work Experience</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Position</span>
                            </label>
                            <input name="position" type="text" placeholder="Position" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company</span>
                            </label>
                            <input name="company" type="text" placeholder="Company" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Duration</span>
                            </label>
                            <input name="duration" type="text" placeholder="Duration" className="input input-bordered" required />
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-info">Submit Profile</button>
                </div>
            </form>
        </div>
    );
};

export default GuideProfileForm;

// {
//     "name": "Sara Ahmed",
//     "profilePicture": "https://source.unsplash.com/hhChqzLkbTE/512x512",
//     "contactDetails": {
//       "email": "sara.ahmed@email.com",
//       "phone": "+1 (555) 678-1234",
//       "location": "Barisal, Bangladesh"
//     },
//     "education": "Master's Degree in Cultural Heritage Management",
//     "skills": ["Cultural Preservation", "Community Engagement", "Tour Design"],
//     "workExperience": [
//       {
//         "position": "Cultural Heritage Guide",
//         "company": "Heritage Tours BD",
//         "duration": "2017 - Present"
//       },
//       {
//         "position": "Research Assistant",
//         "company": "National Museum of Bangladesh",
//         "duration": "2014 - 2017"
//       }
//     ],
//     "rating": 4.6
//   }