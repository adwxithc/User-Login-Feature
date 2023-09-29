// userlogin data vlidation at client side

function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorUsername = document.getElementById('erroruname');
    const errorPassword = document.getElementById('errorpasswd');
    let isValid = true;

    document.getElementById('username').addEventListener('focusin',()=>{
        errorUsername.innerHTML = ''; 
    })
    document.getElementById('password').addEventListener('focusin',()=>{
        errorPassword.innerHTML = '';
    })

    // user
    if(username.trim() === '') {
        errorUsername.innerHTML = 'Username is required.';
        isValid = false;
    } 
    else if(username.length<5)
    {
        errorUsername.innerHTML = 'Username should have more than 4 charactors';
        isValid = false;
    }
    else if(username.length>10)
    {
        errorUsername.innerHTML = 'Username should have less than 10 charactors';
        isValid = false;
    } else {
        errorUsername.innerHTML = ''; 
    }


    //passwd
    if (password.trim() === '') {
        errorPassword.innerHTML = 'Password is required.';
        isValid = false;
    } 
    else if(password.length<5)
    {
        errorPassword.innerHTML = 'password should have more than 4 charactors';
        isValid = false;
    } 
    else if(password.length>15)
    {
        errorPassword.innerHTML = 'password should have less than 15 charactors';
        isValid = false;
    } else {
        errorPassword.innerHTML = '';
    }

    return isValid;
}

//logout listner
document.getElementById("logout").addEventListener("click",function(){window.location.href="/route/logout"});