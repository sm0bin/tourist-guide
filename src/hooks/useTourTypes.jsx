import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTourTypes = () => {
    const { data: tourTypes } = useQuery({
        queryKey: ['tourTypes'],
        queryFn: async () => {
            const res = await axios.get('/tourTypes.json')
            return res.data
        }
    })
    return tourTypes;
};

export default useTourTypes;
