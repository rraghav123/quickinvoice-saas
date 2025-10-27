import axios from "axios";

import { BASE_URL } from "./config.js";

async function loginGoogle(token) {
    try {
        await axios.post(`${BASE_URL}/api/auth/google`, {
            token,
        });
    } catch(error) {
        console.log({error})
    }
}

export {
    loginGoogle
}