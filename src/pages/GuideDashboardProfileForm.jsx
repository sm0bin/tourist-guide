import GuideProfileForm from "../components/forms/GuideProfileForm";
import useAuth from "../hooks/useAuth";
import useLoadData from "../hooks/useLoadData";

const GuideDashboardProfileForm = () => {
    const { user } = useAuth();
    const [guide, isPending, refetch] = useLoadData(`/guides/guide/${user.email}`, "guide");
    return (
        <>
            <GuideProfileForm refetch={refetch}></GuideProfileForm>
        </>
    );
};

export default GuideDashboardProfileForm;