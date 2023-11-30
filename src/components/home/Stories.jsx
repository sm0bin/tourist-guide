import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
import useLoadData from '../../hooks/useLoadData';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import SectionTitle from '../utilities/SectionTitle';
import GoToBtn from '../utilities/GoToBtn';
// import axios from 'axios';
// import { useEffect, useState } from 'react';



const Stories = () => {
    const [stories, isPending] = useLoadData('/stories', "stories");

    if (isPending) return <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-ball loading-lg"></span>
    </div>


    // const [stories, setStories] = useState([]);
    // useEffect(() => {
    //     axios('/stories.json')
    //         .then(res => setStories(res.data))
    //         .catch(err => console.log(err))
    // }, []);
    // console.log(stories);

    return (
        <div className='my-32'>
            <SectionTitle title='Tourist Stories'></SectionTitle>


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
                    stories && stories?.slice(0, 6).map((story, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col items-center justify-center text-center'>
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


                                <p className='text-gray-400 mt-2 mb-2 max-w-2xl'>{story.story}</p>
                                <h2 className='text-2xl font-semibold text-blue-400'>{story.name}</h2>
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

export default Stories;