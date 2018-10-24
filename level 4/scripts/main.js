function validation(input, val)
{
 if(val==true)
    {
      console.log(val);
      input.parentElement.setAttribute("class", "form-group has-success has-feedback");
    }
  else{
      console.log(val);
    input.parentElement.setAttribute("class", "form-group has-error  has-feedback");
  }
}
function getName(){
  var input= document.getElementById("name");
  let str=input.value;
  let reg=/^([a-zaA-Z]+)(\s+)([a-zA-Z]+)\b/;
  var val=reg.test(str);
  var result=str.match(reg);
 validation(input, val);
}
 function getNumber(){
  var input= document.getElementById("number");
  let str=input.value;
  let reg=/^[0-9]{10}\b/;
  var val=reg.test(str);
  var result=str.match(reg);
 validation(input,val);
}
 function getEmail(){
  var input= document.getElementById("email");
  let str=input.value;
  let reg=/^([a-z]+)[\.]?\w+@[a-z]+\.[a-z]{2,3}\b/;
  var val=reg.test(str);
  var result=str.match(reg);
 validation(input,val);
}
 function getPassword(input= document.getElementById("pwd")){
  console.log(input);
  let str=input.value;
  let reg=/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@!*#$.%]).{6,20})/i;
  console.log(reg.test(str));
   console.log(str.match(reg));
  var val=reg.test(str);
  var result=str.match(reg);
  validation(input,val);
   return str;
 }
 function confirmPassword(){
   var res=getPassword();   
  var input= document.getElementById("cnpwd");
    let str=input.value;
   console.log(str);

   if(res == str && (input.value !=""))
  {
    getPassword(input);
  }
  else{
    validation(input,false);
  }  
 }
document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
  validateForm();
  // address();
})
function address()
{ 
var input = document.forms["form"]["address"];
  console.log(input.value);
    if (input.value == "") {
        // alert("Adress must be filled out");
    validation(input,false);
        return false;
    } else{
    validation(input,true);
  }
}
function validateForm(){  
  var form=document.getElementById("form");
  getName();
  getNumber();
  getEmail();
  getPassword();
  confirmPassword();
   address();
  }
//   var Name = document.forms["form"]["name"];
//   var Mobile = document.forms["form"]["mobile"];
//   var Email = document.forms["form"]["email"];
//   var Optradio = document.forms["form"]["optradio"];
//   var pwd = document.forms["form"]["pwd"];
//     var Cnpwd = document.forms["form"]["cnpwd"];
//    var input = document.forms["form"]["address"];
  
   

  // console.log(input.value);
  //   if (input.value == "") {
  //       alert("Adress must be filled out");
  //   validation(input,false);
  //       return false;
  //   } else{
  //   validation(input,true);
  // }
    
//   if (Name.value == "") {
//         alert("Name must be filled out");
//         validation(Name,false);
//         return false;
//     } else{
//        validation(Name,true);
//     }
  
//    if (Mobile.value == "") {
//         alert("Mobile must be filled out");
//         validation(Mobile,false);
//         return false;
//     } else{
//         validation(Mobile,true);
//     }
// if (Email.value == "") {
//         alert("email must be filled out");
//         validation(Email,false);
//         return false;
//     } else{
//         validation(Email,true);
//     }
//   if (Optradio.value == "") {
//         alert("Gender must be filled out");
//         validation(Optradio,false);
//         return false;
//     } else{
//         validation(Optradio,true);
//     }
//    if (pwd.value == "") {
//         alert("password must be filled out");
//         validation(pwd,false);
//         return false;
//     } else{
//         validation(pwd,true);
//     }
//    if (Cnpwd.value == "") {
//         alert("coffirm password must be filled out");
//         validation(Cnpwd,false);
//         return false;
//     } else{
//         validation(Cnpwd,true);
//     }
// }
