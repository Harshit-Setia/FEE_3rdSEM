let username=document.getElementById('username');
let pass=document.getElementById('pass');
let c_pass=document.getElementById('c-password');
let message=document.getElementById('message');
// let log=0;
function signin(e){
    e.preventDefault();
    console.log(username.value);
    console.log(pass.value);
    console.log(c_pass.value)
    message.textContent="";
    if(pass.value!=c_pass.value){
        console.log(pass+" "+c_pass)
        message.innerText='Password do not match';
        return;
    }
    const loginData=JSON.parse(localStorage.getItem('credentials'))||[];
    
    const check=loginData.filter((res)=>res.username===username.value);
    if(check.length>0){
        message.textContent="Username already exist's";
        return ;
    }
    const format={
        username:username.value,
        password:pass.value
    }
    loginData.push(format)
    console.log(loginData)
    localStorage.setItem('credentials',JSON.stringify(loginData));
}


function login(e){
    e.preventDefault();
    message.innerText="";
    const loginData=JSON.parse(localStorage.getItem('credentials'))||[];
    
    if(loginData.length>0){
        const check=loginData.filter((res)=>res.username===username.value &&res.password===pass.value);
        if(!check){
            message.innerText='username or password incorrect';
            return;
        }
        else{
            message.innerText='Login successfull';
            setTimeout(()=>{
                window.location.href='index.html';
                
                // profile();
            },2000)

        }
    }

}

// function profile() {
//     let logT = document.getElementsByClassName("logT");
//     let logF = document.getElementsByClassName("logF");
    
//     if (log) {
//         // User is logged in
//         for (let i = 0; i < logT.length; i++) {
//             logT[i].style.display = 'block'; // Show profile options
//         }
//         for (let i = 0; i < logF.length; i++) {
//             logF[i].style.display = 'none'; // Hide sign up and sign in options
//         }
//     } else {
//         // User is not logged in
//         for (let i = 0; i < logF.length; i++) {
//             logF[i].style.display = 'block'; // Show sign up and sign in options
//         }
//         for (let i = 0; i < logT.length; i++) {
//             logT[i].style.display = 'none'; // Hide profile options
//         }
//     }
// }