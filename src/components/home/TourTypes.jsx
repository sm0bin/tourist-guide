import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useLoadData from '../../hooks/useLoadData';
import SectionTitle from '../utilities/SectionTitle';

const TourTypes = () => {
    const [isPending, error, tourTypes] = useLoadData('/types', "tourTypes");

    if (isPending) return <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-ball loading-lg"></span>
    </div>

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
                className="mySwiper pb-8"
            >
                {
                    tourTypes && tourTypes.map((tourType, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col items-center justify-center group'>
                                <div className='w-32 h-32 border text-center flex items-center justify-center shadow rounded-lg mb-2 group-hover:shadow-lg focus:scale-95'>
                                    <h2 className='text-7xl font-bold'>{tourType.icon}</h2>
                                </div>
                                <h2 className='text-lg font-normal text-gray-400 group-hover:text-blue-500'>{tourType.tourType}</h2>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default TourTypes;