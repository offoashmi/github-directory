async function getUser(userName){
    const url=`https://api.github.com/users/${userName}`;
    const response=await fetch(url);
    if (!response.ok) {
        return "error";
    }
    const object=await response.json();
    return object;
}
export {getUser};