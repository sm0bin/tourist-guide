import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadData = (url, key) => {
    const axiosPublic = useAxiosPublic();

    const { data } = useQuery({
        queryKey: [key],
        queryFn: async () => {
            const res = await axiosPublic(url)
            return res.data
        }
    })
    return data;
};

export default useLoadData;
