// first focus on first name field
window.addEventListener("load",firstfocus, false);
        function firstfocus()  
          {  
            "use strict";
          var fname_focus = document.pizzaform.firstname.focus();
          return true;  
          } 
// Delivery Location Information 
// All input text fields
var fname = document.getElementById("firstname");
var lname = document.getElementById("lastname");
var email = document.getElementById("email");
var phone_no = document.getElementById("phonenumber");
var specify_list = document.getElementById("specify_list");
var specify_addr = document.getElementById("specifyaddress");
var staddress = document.getElementById("streetaddress");
var addr_no = document.getElementById("addr_no");
var city_value = document.getElementById("city_value");
var state_value = document.getElementById("state_value");
var zcode_value = document.getElementById("zcode_value");
var next_crust = document.forms.pizzaform.next_crust;

//Setting Event Listeners
fname.addEventListener("blur", fname_validation, true);
lname.addEventListener("blur", lname_validation, true);
email.addEventListener("blur", email_validation, true);
phone_no.addEventListener("blur", phone_validation, true);
specify_list.addEventListener("change", specify_address, true);
staddress.addEventListener("blur", staddress_validation, true);
city_value.addEventListener("blur", city_validation, true);
state_value.addEventListener("blur", state_validation, true);
zcode_value.addEventListener("blur", zcode_validation, true);

// --------VALIDATION FUNCTIONS---------//
//First name validation
function fname_validation() {
       "use strict";
  var fname_regex = /^[a-zA-Z]+$/;
    if(fname_regex.test(fname.value) == false){
         fname_error.innerHTML = "Input contains invalid characters";
         fname_error.style.display = "block";
    if (fname.value == "" || fname.value == null)  {
        fname_error.innerHTML = "First name must be filled out";
        fname_error.style.display = "block";
        fname.focus();  
        return false;  
    }  
}
    else {
        fname_error.style.display = "none";
    }
//focus on last name field
lname.focus();
  return true;  
} 

//last name validation
function lname_validation() {
       "use strict";
  var lname_regex = /^[a-zA-Z]+$/;  
    if(lname_regex.test(lname.value) == false){
         lname_error.innerHTML = "Input contains invalid characters";
        
         lname_error.style.display = "block";
  if (lname.value == "" ||lname.value == null) {
     lname_error.innerHTML = "Last name must be filled out";
     lname_error.style.display = "block";
      lname.focus();  
  return false;  
    }  
}
    else {
         lname_error.style.display = "none";
}
//focus on email field
email.focus();  
  return true;  
}   

//email validation
function email_validation() {
       "use strict";
 var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
 if(email_regex.test(email.value) == false){
    email_error.innerHTML = "Input contains invalid characters";
    email_error.style.display = "block";
  if (email.value == "" || email.value == null) {  
    email_error.innerHTML = "Email must be filled out";
    email_error.style.display = "block";
    email.focus();  
    return false;  
    }
}
else {
     email_error.style.display = "none";
    }
//focus on phonenumber field
phone_no.focus();  
  return true;  
}  

//phone validation
function phone_validation() {
       "use strict";
    var phone_regex = /^\d{3}-\d{3}-\d{4}$/;
 if(phone_regex.test(phone_no.value) == false){
    phone_error.innerHTML = "Input contains invalid characters";
    phone_error.style.display = "block";
  if (phone_no.value == "" || phone_no.value == null) {  
    phone_error.innerHTML = "Phone Number must be filled out";
    phone_error.style.display = "block";
    phone_no.focus();  
    return false;  
    }
}
else {
     phone_error.style.display = "none";
    }
//focus on address type field
specify_list.focus();  
 return true;  
}

//Address type validation
function specify_address() {
     "use strict";
        if (document.getElementById("other").selected) {
            document.getElementById("specifyaddress").className = "show";
             return specify_addr.focus();  
        }     
     else {
            document.getElementById("specifyaddress").className = "hide";
        }
     //focus on address spec field
      staddress.focus(); 
  return true;  
 }

//street address validation
function staddress_validation() {
       "use strict";
 var staddress_regex  = /^[0-9a-zA-Z\s]+$/;
 if(staddress_regex.test(staddress.value) == false){
    staddress_error.innerHTML = "Input contains invalid characters";
    staddress_error.style.display = "block";
  if (staddress.value == "" || staddress.value == null) {  
    staddress_error.innerHTML = "Street Address must be filled out";
    staddress_error.style.display = "block";
    staddress.focus();  
    return false;  
    }
}
else {
     staddress_error.style.display = "none";
    }
//focus on city field
addr_no.focus();  
  return true;  
}  

//city validation
document.getElementById("city_value").addEventListener("blur", city_validation, true);
function city_validation() {
       "use strict";
 var city_regex = /^[0-9a-zA-Z\s]+$/;
 if(city_regex.test(city_value.value) == false) {
    city_error.innerHTML = "Input contains invalid characters";
    city_error.style.display = "block";
  if(city_value.value == "" || city_value.value == null) {  
    city_error.innerHTML = "City must be filled out";
    city_error.style.display = "block";
    city_value.focus();  
    return false;  
    }
}
else {
     city_error.style.display = "none";
    }
//focus on city field
state_value.focus();  
  return true;  
}  

//state validation
document.getElementById("state_value").addEventListener("blur", state_validation, true);
function state_validation() {
       "use strict";
    ///^[a-zA-Z]+$/;
 var state_regex = /^(?i:A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$/;  
 if(state_regex.test(state_value.value) == false){
    state_error.innerHTML = "Input contains invalid characters";
    state_error.style.display = "block";
 if (state_value.value == "" || state_value.value == null) {  
    state_error.innerHTML = "State must be filled out";
    state_error.style.display = "block";
    state_value.focus();   
    return false;  
    }
}
else {
      state_error.style.display = "none";
    }
//focus on zip code field
zcode_value.focus();  
  return true;  
} 

function zcode_validation() {
"use strict";
 var zcode_regex = /^\d{5}$/;
//    var zcode_regex =  /^[0-9]+$/; /^\d{5}{-\d{4})?$/;
if(zcode_regex.test(zcode_value.value) == false){
    zcode_error.innerHTML = "Input contains invalid characters";
    zcode_error.style.display = "block";
 if (zcode_value.value == "" || zcode_value.value == null) {  
    zcode_error.innerHTML = "Zip Code must be filled out";
    zcode_error.style.display = "block";
    zcode_value.focus();   
    return false;  
    }
}
else {
      zcode_error.style.display = "none";
    }
//focus on next_crust_size button
//next_crust.focus();  
//  return true;  
}

// NEXT BUTTON VALIDATION
document.getElementById("next_crust_size_options").addEventListener("click", fname_validation, true);

//document.getElementById("next_crust_size_options").addEventListener("click", crustSizeSelection, true);
//function crustSizeSelection() {
//    if(hand_tossed.checked) {
//    } else if(thin_crust.checked) {
//    } else if(newyork_style.checked) {
//    } else if(gluten_free.checked) { 
//        
//    } else {
//   window.alert("PLEASE MAKE A SELECTION");
//    } 
//     return false;
//}
