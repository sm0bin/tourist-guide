import { toast } from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from 'date-fns';
import Swal from "sweetalert2";

const imgHostingApi = import.meta.env.VITE_IMG_HOSTING_API;

const BookingForm = ({ guides, tour }) => {
    const axiosPublic = useAxiosPublic();
    const [startDate, setStartDate] = useState(new Date());


    const failed = error => {
        const errorMessage = error.message;
        const errorCode = error.code;

        toast.error(errorMessage);

        console.error(errorCode);
        console.error(errorMessage);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const image = form.image.files[0];
        const name = form.name.value;
        const email = form.email.value;
        const guide = form.guide.value;
        const date = startDate;

        Swal.fire({
            title: "Confirm your Booking?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {




                console.log(image);
                const formData = new FormData();
                formData.append("image", image);

                // Uploading Image and getting URL
                axiosPublic.post(imgHostingApi, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((res) => {
                    const imageUrl = res.data.data.display_url;
                    console.log(imageUrl);

                    const bookingTour = {
                        touristName: name,
                        touristEmail: email,
                        touristImage: imageUrl,
                        date: date,
                        price: tour.price,
                        guideId: guide,
                        tourId: tour._id
                    }
                    console.log(bookingTour);

                    // Post booking to server
                    axiosPublic.post("/bookings", bookingTour)
                        .then((res) => {
                            console.log(res.data);
                            // toast.success("Package Booked Successfully.");
                            Swal.fire({
                                title: "Booked!",
                                text: "Package Booked Successfully.",
                                icon: "success"
                            });
                        }).catch((error) => {
                            failed(error);
                        });
                })
            }
        });

    };




    return (
        <div className="card shrink-0 w-full max-w-lg h-max shadow bg-base-100 p-6 pt-0">
            <h3 className="text-center font-script text-3xl text-blue-400">Book Now</h3>
            <form onSubmit={handleSubmit} className="card-body p-0">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Tourist Picture</span>
                    </label>
                    <input type="file" name="image" className="file-input file-input-info" accept=".jpg, .jpeg, .png, .gif" required />
                </div>
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Discount Coupon</span>
                    </label>
                    <div className="join w-full">
                        <input className="input input-bordered join-item w-full" placeholder="Coupon" />
                        <button className="btn btn-info join-item">Apply Coupon</button>
                    </div>
                </div> */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pickup Date</span>
                    </label>
                    {/* <input type="email" name="email" placeholder="email" className="input input-bordered" required /> */}
                    <DatePicker
                        className="input input-bordered w-full text-gray-500"
                        selected={startDate}
                        minDate={new Date()}
                        maxDate={addMonths(new Date(), 2)}
                        onChange={(date) => setStartDate(date)}
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Tour Guide Name</span>
                    </label>
                    <select name="guide" className="select select-bordered" required>
                        <option disabled selected hidden>Select Guide</option>
                        {
                            guides && guides?.map((guide, index) => (
                                <option key={index} value={guide._id}>{guide.name}</option>
                            ))
                        }
                    </select>
                </div>
                <label className="label">
                    <h5 className="label-text font-medium text-lg">Price: <span className="text-blue-400">${tour.price}</span></h5>
                </label>

                <div className="form-control">
                    <button className="btn btn-info">Book Now</button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;