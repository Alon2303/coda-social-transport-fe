import axios from 'axios';

const BASE_URL = "http://localhost:3030";

export default {
    get(endpoint, data) {
        return ajax(endpoint, "GET", data);
    },
    post(endpoint, data) {
        return ajax(endpoint, "POST", data);
    },
    put(endpoint, data) {
        return ajax(endpoint, "PUT", data);
    },
    patch(endpoint, data) {
        return ajax(endpoint, "PATCH", data);
    },
    delete(endpoint, data) {
        return ajax(endpoint, "DELETE", data);
    }
};

async function ajax(endpoint, method = "get", data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}/${endpoint}`,
            method,
            data
        });
        return res.data;
    } catch (err) {
        if (err.response.status === 401) {
            console.log('CATCH AXIOS');
            // TODO: add redirect to "/"
        }
        if (err.response.status === 406) {
            return;
        }
    }
}
