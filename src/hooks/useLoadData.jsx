import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useLoadData = (url, key) => {
    const { data } = useQuery({
        queryKey: [key],
        queryFn: async () => {
            const res = await axios.get(url)
            return res.data
        }
    })
    return data;
};

export default useLoadData;
