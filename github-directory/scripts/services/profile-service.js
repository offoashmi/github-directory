import {getUser} from "../util/api-client.js";

// write a function that take username as input and returns github profile of that username 
async function getProfile(userName) {
    const user = await getUser(userName);
    return user; 
}
export{getProfile};
