let username=document.querySelector("#username")
let password=document.querySelector("#password")
let loginBtn=document.querySelector("#signIn")
let getUser=localStorage.getItem("username")
let getPassword=localStorage.getItem("password")
loginBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(username.value==="" ||password.value===""){
        alert("Please fill Ur Info")
    }else{
        if(getUser===username.value.trim()&&getPassword===password.value){
            setTimeout(()=>{
                window.location="tryHome.html"
            },1000);
        }else{
          alert("Wrong Info please Try Again")
        }

    }
})