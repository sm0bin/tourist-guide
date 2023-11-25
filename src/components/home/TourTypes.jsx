import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const TourTypes = () => {

    const { isPending, error, data: tourTypes, refetch } = useQuery({
        queryKey: ['tourTypes'],
        queryFn: async () => {
            const res = await axios.get('/tourTypes.json')
            return res.data
        }
    })

    console.log(tourTypes);

    return (
        <div>
            <h3 className='font-script text-center text-4xl mb-8'>Tour Types</h3>


            <Swiper
                slidesPerView={8}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    tourTypes && tourTypes.map((tourType, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col items-center justify-center'>
                                {/* <img src={tourType.icon} alt="" className='w-32 h-32' /> */}
                                <div className='w-32 h-32 border text-center flex items-center justify-center shadow rounded-lg mb-4 hover:shadow-lg focus:scale-95'>
                                    <h2 className='text-7xl font-bold'>{tourType.icon}</h2>

                                </div>
                                <h2 className='text-xl font-medium'>{tourType.tourType}</h2>
                                {/* <p className='text-gray-400'>{tourType.description}</p> */}
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default TourTypes;