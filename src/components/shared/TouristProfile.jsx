
const TouristProfile = ({ tourist }) => {
    const { displayName, email, photoURL } = tourist;

    return (
        <div className="card border gap-4 p-6">
            <figure className="rounded-lg grow">
                <img className="w-full h-full" src={photoURL} alt="Album" />
            </figure>
            <div className="card-body p-0">
                <h2 className=" text-4xl font-script text-blue-400">{displayName}</h2>
                <h2 className="font-normal text-xl text-gray-400">{email}</h2>
            </div>
        </div>
    );
};

export default TouristProfile;