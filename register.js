//register info
let username=document.querySelector("#username")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let phone=document.querySelector("#phone")
let registerBtn=document.querySelector("#signUp")



// check user info by regex

//regex for user name


registerBtn.addEventListener('click',function(e){
    e.preventDefault();
    if(username.value==="" ||email.value===""||password.value===""||phone.value===""){
        alert("Please fill Ur Info")
    }else{
        //check user 
        var checkName=true;
        var regName=/[^A-z]/g;
        checkName=username.value.match(regName);
        if(checkName){
            alert("Unvalide Data , Enter ur User Name again (should be only charcaters)")
        }else{
            localStorage.setItem("username",username.value)
        }

        //password valided
        if(password.value.length>8){
            localStorage.setItem("password",password.value)
        }else{
            alert("Unvalide Data , Enter ur Password  again (at least 8 numbers)")
        }
        //email valided
        var checkEmail=false
        var regEmail=/^\S+@\S+\.\S+$/g;
        console.log(email.value)
        
        checkEmail=email.value.match(regEmail);
        console.log(checkEmail)

       if(checkEmail){
            localStorage.setItem("email",email.value)
       }else{
            alert("Unvalide Data , Enter ur Email again (should be ****@***.***)")
            
       }

        //check phone
        var checkPhone=true
        var regPhone=/[^0-9]/g
        if(phone.value.length>=8){
            checkPhone=phone.value.match(regPhone);          
        }
        
        if(checkPhone){
            alert("Unvalide Data , Enter ur Phone Number again (at least 8 number)")
        }else{
            localStorage.setItem("phone",phone.value)
        
        }

    }
    if(localStorage.getItem("phone")&&localStorage.getItem("email")&&localStorage.getItem("password")&&localStorage.getItem("username")){
        setTimeout(()=>{
            window.location="login.html"
        },1500);
    }   
})

