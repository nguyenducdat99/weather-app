import axios from 'axios';

export default async function APICaller(method, endpoint, data) {
    try {
        const response = await axios(
            {
                method: method,
                url: endpoint,
                dataa: data
            }
        )

        return response;
    } catch (error) {
        console.log(error);
    }
}