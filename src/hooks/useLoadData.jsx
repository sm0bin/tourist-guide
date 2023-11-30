import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadData = (url, key) => {
    const axiosPublic = useAxiosPublic();

    const { data, isPending, error, refetch } = useQuery({
        queryKey: [key],
        queryFn: async () => {
            const res = await axiosPublic(url)
            return res.data
        }
    })
    return [data, isPending, refetch, error];
};

export default useLoadData;
