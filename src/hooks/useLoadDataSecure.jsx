import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useLoadDataSecure = (url, key, body) => {
    const axiosSecure = useAxiosSecure();

    const { isPending, error, data } = useQuery({
        queryKey: [key],
        queryFn: async () => {
            const res = await axiosSecure(url, body)
            return res.data
        }
    })
    return [isPending, error, data];
};

export default useLoadDataSecure;
