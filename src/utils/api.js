import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + "d0c3356403238dcdc3b9592d11f3ffcb097854d769bf631ff6743598e22c5044a858452bbe131378cb0f4bcc33c015d03da32e8e2a24a79bf23c5c6ea7e42e00d194b6c437006f5f3f4201c01fb9944db2df4a660720c686d77a04c8e588abcc332be1a2ceee7396251c4e284c2987182a5c6032f7ca0a6c205722090b2deb7c",
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const res = await axios.get(
            "http://localhost:1337" + url,
            params
        );
       
        return res.data.data
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const makePaymentRequest = axios.create({
    baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
    },
});