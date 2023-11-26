import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Auth = () => {
    const images = [
        "https://source.unsplash.com/SqC8M0eYxEY",
        "https://source.unsplash.com/Cdwi5n7Gwes",
        "https://source.unsplash.com/daSgrMUzDyc",
        "https://source.unsplash.com/anE4tvkHhLs",
        "https://source.unsplash.com/9V5dyukvQ20",
        "https://source.unsplash.com/oRsxtzxVmsY",
        "https://source.unsplash.com/MrKPi-yajC0",
        "https://source.unsplash.com/mO1_udD5iCs",
        "https://source.unsplash.com/DWoOJ2C2uns",
        "https://source.unsplash.com/_jxz7Fe1btc",
        "https://source.unsplash.com/k7EDYStENI0",
        "https://source.unsplash.com/WICc--aTNt8",
        "https://source.unsplash.com/RfHhohVQLnQ",
        "https://source.unsplash.com/Ph5VL5Tilto",
        "https://source.unsplash.com/AMqrW1Sxx3g",
        "https://source.unsplash.com/-rNBQWV5Uis"
    ];

    return (
        // <div className="mx-4 md:mx-8 lg:mx-auto max-w-7xl grid grid-cols-2 h-screen">
        <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* <figure className="overflow-hidden hidden lg:block">
                <img className="object-cover object-bottom h-screen w-full" src="https://source.unsplash.com/SqC8M0eYxEY" alt="" />
            </figure> */}
            <Swiper
                loop={true}
                effect={'fade'}
                slidesPerView={1}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
                className="mySwiper w-full h-full"
            >
                {
                    images?.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img className="w-full h-full object-cover" src={img} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className="flex items-center justify-center bg-[url('https://source.unsplash.com/SqC8M0eYxEY')] lg:bg-[url('/pattern/pattern-1.svg')]">
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Auth;