import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadData = (url, key) => {
    const axiosPublic = useAxiosPublic();

    const { isPending, error, data } = useQuery({
        queryKey: [key],
        queryFn: async () => {
            const res = await axiosPublic(url)
            return res.data
        }
    })
    return [isPending, error, data];
};

export default useLoadData;
