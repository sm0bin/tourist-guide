import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import useLoadData from '../../hooks/useLoadData';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import SectionTitle from '../utilities/SectionTitle';
import GoToBtn from '../utilities/GoToBtn';



const TouristStory = () => {
    const touristStory = useLoadData('/touristStory.json', "touristStory");
    console.log(touristStory);

    return (
        <div className='my-32'>
            <SectionTitle title='Tourist Story'></SectionTitle>


            <Swiper
                loop={true}
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={40}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper h-80 p-4"
            >
                {
                    touristStory && touristStory.map((story, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col items-center justify-center text-center'>
                                {/* <img src={story.img} alt="" className='w-32 h-32' /> */}
                                <div className="avatar mb-2">
                                    <div className="w-24 rounded-full border-4 border-blue-300">
                                        <img src={story.img} />
                                    </div>
                                </div>

                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={story.rating}
                                    readOnly
                                />


                                <p className='text-gray-400 mt-2 mb-2 max-w-2xl'>{story.quote}</p>
                                <h2 className='text-2xl font-semibold text-blue-500'>{story.name}</h2>
                                <h2 className=' text-gray-500'>{story.designation}</h2>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <GoToBtn btnTitle={'All Stories'} url={'/stories'} />
        </div>
    );
};

export default TouristStory;