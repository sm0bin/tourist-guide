import useAuth from "../../../hooks/useAuth";
import GuideProfile from "../../shared/GuideProfile";
import useLoadData from "../../../hooks/useLoadData";

const GuideDashboardProfile = () => {
    const { user } = useAuth();
    const [guide, isPending, refetch] = useLoadData(`/guides/guide/${user.email}`, "guide");

    if (isPending) return <div className="w-screen h-screen flex items-center justify-center">
        <span className="loading loading-ball loading-lg"></span>
    </div>

    return (
        <>
            <GuideProfile guide={guide}></GuideProfile>
        </>
    );
};

export default GuideDashboardProfile;