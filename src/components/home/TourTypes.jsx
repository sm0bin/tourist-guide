import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// import useTourTypes from '../../hooks/useTourTypes';
import useLoadData from '../../hooks/useLoadData';
import SectionTitle from '../utilities/SectionTitle';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

const TourTypes = () => {

    // const {  data: tourTypes } = useQuery({
    //     queryKey: ['tourTypes'],
    //     queryFn: async () => {
    //         const res = await axios.get('/tourTypes.json')
    //         return res.data
    //     }
    // })

    // console.log(tourTypes);

    // const tourTypes = useTourTypes();
    const tourTypes = useLoadData('/tourTypes.json', "tourTypes");
    // const tourTypes = data;
    // console.log(data);

    return (
        <div>
            <SectionTitle title='Tour Types'></SectionTitle>


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
                                <div className='w-32 h-32 border text-center flex items-center justify-center shadow rounded-lg mb-2 hover:shadow-lg focus:scale-95'>
                                    <h2 className='text-7xl font-bold'>{tourType.icon}</h2>
                                </div>
                                <h2 className='text-lg font-normal text-gray-400'>{tourType.tourType}</h2>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default TourTypes;