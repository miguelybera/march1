var x;
var y;
var z;
var xy;
var xz;
var xyz;
function checkFname(){
 
   var letters = /^[A-Za-z]+$/;
   if(document.getElementById("fname").value.match(letters))
     {
        x = 1;
      return true;
      
     }
   else
     {
     alert("First Name only Accepts Letters");
     x= 0 
     return false;
     
     }
  
}

function checkLname(){
  
    var letters = /^[A-Za-z]+$/;
    if(document.getElementById("lname").value.match(letters))
      {
        y = 1;
       return true;
       
      }
    else
      {
      alert("Last Name only Accepts Letters");
      y = 0;
      return false;
      
      }
   
 }
 function checkEmail(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.getElementById("email").value.match(mailformat)){
        z = 1;
        return true;
        
    }
    else{
        alert("Email is incorrect");
        z= 0;
        return false;
        
    }
}
function checkPass(){
 var letterNumber = /^[0-9a-zA-Z]+$/;
 var passLength = document.getElementById("password").value.length;
 if(document.getElementById("password").value.match(letterNumber)&& (passLength>=8&&passLength<=12)) 
  {
    xy=1;
   return true;
   
  }else if(passLength<8||passLength>12){
    alert("Password should be 8 - 12 alphanumeric characters only");
    xy=0; 
    return false; 
    
  }
else
  { 
   alert("Password only accepts Letters and Numbers"); 
   xy=0;
   return false; 
   
  }
  }
  function checkCPass(){
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if(document.getElementById("Cpassword").value == document.getElementById("password").value){
        xz=1;
        return true;
        
    
    }else{
        alert("Passwords do not match");
        xz=0;
        return false;
        
    }
     }
    function checkReg(){
        if(x==1&&y==1&&z==1&&xy==1&&xz==1&&xyz==1){
            alert("Registration Successful");
        }else{
            alert("Registration Not successful");
        }
    }
    function checkTerms() {
        let checkbox = document.getElementById("termsprivacy");
        if (checkbox.checked) {
            xyz=1;
            return true;
        }
        else {
            xyz=0;
            return false;
        }
    }
    
    function privacyPolicy(){
        document.getElementById("conditions").style.color="red";
        document.getElementById("terms").style.color="red";
        document.getElementById("privacy").style.color="red";
    }
    
    function termsOfUse() {
        alert("Alert Message");
    }

function check(){
    checkFname();
    checkLname();
    checkEmail();
    checkPass();
    checkCPass();
    checkTerms();
    checkReg();
    
}

