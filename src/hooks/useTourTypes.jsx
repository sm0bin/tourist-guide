import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTourTypes = () => {
    const { isPending, error, data: tourTypes, refetch } = useQuery({
        queryKey: ['tourTypes'],
        queryFn: async () => {
            const res = await axios.get('/tourTypes.json')
            return res.data
        }
    })
    return [isPending, error, tourTypes, refetch]
};

export default useTourTypes;