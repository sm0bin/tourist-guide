// import slide1 from "../../assets/home/01.jpg"
// import slide2 from "../../assets/home/02.jpg"
// import slide3 from "../../assets/home/03.png"
// import slide4 from "../../assets/home/04.jpg"
// import slide5 from "../../assets/home/05.png"
// import slide6 from "../../assets/home/06.png"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GoToBtn from "../utilities/GoToBtn";

// const images = [slide1, slide2, slide3, slide4, slide5, slide6];
const images = [
    "https://source.unsplash.com/Cdwi5n7Gwes/2400x1080",
    "https://source.unsplash.com/daSgrMUzDyc/2400x1080",
    "https://source.unsplash.com/anE4tvkHhLs/2400x1080",
    "https://source.unsplash.com/9V5dyukvQ20/2400x1080",
    "https://source.unsplash.com/oRsxtzxVmsY/2400x1080",
    "https://source.unsplash.com/MrKPi-yajC0/2400x1080",
    "https://source.unsplash.com/mO1_udD5iCs/2400x1080",
    "https://source.unsplash.com/DWoOJ2C2uns/2400x1080",
    "https://source.unsplash.com/_jxz7Fe1btc/2400x1080",
    "https://source.unsplash.com/k7EDYStENI0/2400x1080",
    "https://source.unsplash.com/WICc--aTNt8/2400x1080",
    "https://source.unsplash.com/RfHhohVQLnQ/2400x1080",
    "https://source.unsplash.com/Ph5VL5Tilto/2400x1080",
    "https://source.unsplash.com/AMqrW1Sxx3g/2400x1080",
    "https://source.unsplash.com/-rNBQWV5Uis/2400x1080"
];
console.log(images.length);





const Banner = () => {
    return (

        <div className="relative">


            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} emulateTouch={true} interval={4000}>
                {
                    images.map((image, index) => (
                        <img className="w-full h-[800px] object-cover object-center" key={index} src={image} alt="" />
                    ))
                }
            </Carousel>


            <div className="absolute inset-96 z-20 flex place-items-center flex-col justify-center mx-auto transform text-center bg-none max-w-4xl drop-shadow-[0_0_2em_#172554] ">
                {/* <div className="max-w-4xl drop-shadow-[0_0_2em_rgba(0,0,0)] "> */}
                <h1 className="text-4xl font-bold text-white">Discover the Wonders of Bangladesh</h1>
                <h3 className="text-3xl font-semibold text-white mb-6">Your Ultimate Travel Companion</h3>
                <p className="text-lg text-white mb-4">The Tourist Guide site is an online platform that provides comprehensive information
                    and resources for travelers seeking guidance on popular destinations in Bangladesh.
                    Tourists can access detailed information of the attractive tourist spots and many more.</p>
                {/* <button className="btn btn-info mt-4">Start Your Adventure</button> */}
                <GoToBtn btnTitle={"Start Your Adventure"} url={"/tours"} />
                {/* </div> */}
            </div>
        </div>

    );
};

export default Banner;