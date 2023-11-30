import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { isPending: isRoleLoading, data: role, refetch: refetchRole } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/tourists/${user?.email}`)
            return res.data?.role;
        }
    })
    return [role, isRoleLoading, refetchRole];
};

export default useRole;


