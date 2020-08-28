otp_button=document.querySelector(".send-otp");
sign_btn=document.querySelector(".sign-up-btn");

otp_button.addEventListener("click",function(){

    if(validateEmail(document.querySelector('.email').value)){
        
        document.querySelector('.email').disabled=true;
        document.querySelector('.email').style.backgroundColor = "white";
        otp_button.disabled=true;
        sign_btn.disabled=false;
        document.querySelector("#number-details").style.display="none";
        document.querySelector("#OTP").style.display="block";
        inputs=document.getElementsByClassName("otp");
        for(var input of inputs){
            input.disabled=false;
            input.style.borderBottomColor= "black";
        }    
    }
    
}
);

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        return true;
    }
    else{
        if(email==""){
            alert("Email Address is Empty!")
            return false;
        }
        alert("Enter Correct Email Address");
        return false;
    }
}
 
var digit=/^[/0-9]{1}$/;
function checkOTP(fields){
    for(var field of fields){
        if(digit.test(field.value)){
            continue;
        }
        else{
            alert("Enter ONLY digits in OTP");
            break;
        }
    }
}


sign_btn.addEventListener("click",function(){    
    if(checkOTP(document.getElementsByClassName("otp"))){
        sign_btn.disabled=true;
    }
})
