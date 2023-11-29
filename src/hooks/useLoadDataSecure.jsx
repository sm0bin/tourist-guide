import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useLoadDataSecure = (url, key) => {
    const axiosSecure = useAxiosSecure();

    const { isPending, error, data, refetch } = useQuery({
        queryKey: [key],
        queryFn: async () => {
            const res = await axiosSecure(url)
            return res.data
        }
    })
    return [isPending, error, data, refetch];
};

export default useLoadDataSecure;
