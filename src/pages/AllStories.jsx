import SectionTitle from "../components/utilities/SectionTitle";
import { Helmet } from "react-helmet-async";
import useLoadData from "../hooks/useLoadData";
import { FaStar } from "react-icons/fa";

const AllStories = () => {
    const [stories, isPending] = useLoadData('/stories', "stories");

    if (isPending) return <div className="w-full h-screen flex items-center justify-center">
        <span className="loading loading-ball loading-lg"></span>
    </div>

    return (
        <div className="mx-4 md:mx-8 lg:mx-auto max-w-7xl py-32">
            <Helmet>
                <title>Tourist Guide | Tour Packages</title>
            </Helmet>

            <SectionTitle title='Book Of Stories'></SectionTitle>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* <div className="grid gap-4"> */}
                <div className="grid gap-4">
                    {/* <div> */}
                    {
                        stories && stories?.slice(0, Math.ceil(stories.length / 4)).map((story, index) => (
                            <div className="card gap-4 p-2 border relative" key={index}>
                                <div className="btn btn-warning absolute top-4 left-4"><FaStar /> {story.rating}</div>
                                <img className="grow object-cover h-full w-full rounded-lg" src={story.img} alt={story.name} />
                                <div className="">
                                    <h2 className="card-title ">{story.name}</h2>
                                    <h2 className="font-medium text-blue-400">{story.designation}</h2>
                                    <hr className="my-2 border" />
                                    <p>{story.story}</p>
                                </div>
                            </div>
                        ))
                    }
                    {/* </div> */}
                </div>
                <div className="grid gap-4">
                    {/* <div> */}
                    {
                        stories && stories?.slice(Math.ceil(stories.length / 4), Math.ceil(stories.length * 2 / 4)).map((story, index) => (
                            <div className="card gap-4 p-2 border relative" key={index}>
                                <div className="btn btn-warning absolute top-4 left-4"><FaStar /> {story.rating}</div>
                                <img className="grow object-cover h-full w-full rounded-lg" src={story.img} alt={story.name} />
                                <div className="">
                                    <h2 className="card-title ">{story.name}</h2>
                                    <h2 className="font-medium text-blue-400">{story.designation}</h2>
                                    <hr className="my-2 border" />
                                    <p>{story.story}</p>
                                </div>
                            </div>
                        ))
                    }
                    {/* </div> */}
                </div>
                <div className="grid gap-4">
                    {/* <div> */}
                    {
                        stories && stories?.slice(Math.ceil(stories.length * 2 / 4), Math.ceil(stories.length * 3 / 4)).map((story, index) => (
                            <div className="card gap-4 p-2 border relative" key={index}>
                                <div className="btn btn-warning absolute top-4 left-4"><FaStar /> {story.rating}</div>
                                <img className="grow object-cover h-full w-full rounded-lg" src={story.img} alt={story.name} />
                                <div className="">
                                    <h2 className="card-title ">{story.name}</h2>
                                    <h2 className="font-medium text-blue-400">{story.designation}</h2>
                                    <hr className="my-2 border" />
                                    <p>{story.story}</p>
                                </div>
                            </div>
                        ))
                    }
                    {/* </div> */}
                </div>
                <div className="grid gap-4">
                    {/* <div> */}
                    {
                        stories && stories?.slice(Math.ceil(stories.length * 3 / 4), stories.length).map((story, index) => (
                            <div className="card gap-4 p-2 border relative" key={index}>
                                <div className="btn btn-warning absolute top-4 left-4"><FaStar /> {story.rating}</div>
                                <img className="grow object-cover h-full w-full rounded-lg" src={story.img} alt={story.name} />
                                <div className="">
                                    <h2 className="card-title ">{story.name}</h2>
                                    <h2 className="font-medium text-blue-400">{story.designation}</h2>
                                    <hr className="my-2 border" />
                                    <p>{story.story}</p>
                                </div>
                            </div>
                        ))
                    }
                    {/* </div> */}
                </div>

            </div>
        </div >
    );
};

export default AllStories;

// {
//     "img": "https://source.unsplash.com/cF-4JdVtVCc",
//     "name": "Emily Chen",
//     "designation": "Adventure Seeker",
//     "rating": 4.8,
//     "story": "An adventure lover's paradise! The guides at [Tour Website Name] ensured every moment was filled with excitement and discovery."
//   },