import { getProfile } from "../services/profile-service.js";

// take input username from document field by id and call the function of service layer and return what service layer function returns
const button=document.getElementById('searchUserButton');
button.addEventListener('click',fetchProfile)
async function fetchProfile(){
    const existingErrorMessage=document.getElementById("errorMessage");
    if(existingErrorMessage){
        existingErrorMessage.remove();
    }
    const userName=document.getElementById('userName').value;
    if(!userName){
        document.getElementById("profileContainer").classList.add('d-none');
        console.log("type something");
        return;
    }
    const req_profile=await getProfile(userName);
    if (req_profile == "error") {
        document.getElementById("profileContainer").classList.add('d-none');
        const errorDiv=document.createElement('div');
        errorDiv.id="errorMessage";
        errorDiv.textContent="no such user found";
        document.getElementById("error").appendChild(errorDiv);
        console.log("Error: User not found.");
        // display snackbar here of error
    } else {
        // display from card here
        document.getElementById("profileContainer").classList.remove('d-none');
        document.getElementById("profile-picture").src=req_profile['avatar_url'];
        document.getElementById("followers").innerText=`Followers: ${req_profile['followers']}`;
        document.getElementById("following").innerText=`Following: ${req_profile['following']}`;
        document.getElementById("public-repo").innerText=`Public Repositories: ${req_profile['public_repos']}`;
        document.getElementById("github-link").href=req_profile['html_url'];
        document.getElementById("user-id").innerText=req_profile['login'];
        console.log(profileContainer.classList); 
        console.log(req_profile);
    }
}
// no use of model as we'll be using card widget
// fetch profile literally just fetched user we want it to be displayed in the card format - function to do that



