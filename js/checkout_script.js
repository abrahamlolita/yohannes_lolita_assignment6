// first focus on card on name field
window.addEventListener("load", crustTypeFocus, false);
function crustTypeFocus() {
    "use strict";
    var crustfocus = document.getElementById("crust_sizes_heading").focus();
    return true;
}
//// All input text fields
var cardname = document.getElementById("cardName");
var cardNoInput = document.getElementById("cardnumber");
var cvcnumber = document.getElementById("cvcNumber");
var cardNameError = document.getElementById("cardname_error");
var cardNoError = document.getElementById("cardNo_errorr");
var cvcError = document.getElementById("cvcNo_error");
var billingFirstName = document.getElementById("BillingFirstName");
var billingLastName = document.getElementById("BillingLastName");
var billingPhoneNumber = document.getElementById("BillingPhoneNumber");
var billingSpecifyList = document.getElementById("BillingSpecifyAddress");
var billingAddressType = document.getElementById("BillingAddressType");
var billingStAddress = document.getElementById("BillingStAddress");
var billingAddressNo = document.getElementById("BillingAddressNo");
var billingCity = document.getElementById("BillingCity");
var billingState = document.getElementById("BillingState");
var billingZip = document.getElementById("BillingZip");


////Setting Event Listeners
////Card Information
cardname.addEventListener("blur", cardName_validation, true);
//cardNumber.addEventListener("blur", cardNumber_validation, true);
////function cardNumber_validation() {}
//
cvcnumber.addEventListener("blur", cvcNumber_validation, true);

////Billing Information
billingFirstName.addEventListener("blur", bFname_validation, true);
billingLastName.addEventListener("blur", bLname_validation, true);
billingPhoneNumber.addEventListener("blur", bPhone_validation, true);
billingAddressType.addEventListener("change", bSpecify_address, true);
billingStAddress.addEventListener("blur", bStaddress_validation, true);
billingCity.addEventListener("blur", bCity_validation, true);
billingState.addEventListener("blur", bState_validation, true);
billingZip.addEventListener("blur", bZcode_validation, true);

function cardName_validation() {
       "use strict";
  var cardname_regex = /^[a-zA-Z]+$/;
    if(cardname_regex.test(cardname.value) === false) {
         cardNameError.innerHTML = "Input contains invalid characters";
         cardNameError.style.display = "block";
    if (cardName.value == "" || cardname.value === null)  {
        cardNameError.innerHTML = "Name must be filled out";
        cardNameError.style.display = "block";
        cardname.focus();  
        return false;  
    }  
} else {
        cardNameError.style.display = "none";
    }

cardNoInput.focus();
  return true;  
} 

function cvcNumber_validation() {
       "use strict";
  var cvcnumber_regex = /^[0-9]{3,4}$/;
    if (cvcnumber_regex.test(cvcnumber.value) === false){
         cvcError.innerHTML = "Input contains invalid characters";
         cvcError.style.display = "block";
    if (cvcnumber.value == "" || cvcnumber.value == null)  {
        cvcError.innerHTML = "CVC must be filled out";
        cvcError.style.display = "block";
        cvcnumber.focus();  
        return false;  
    }  
}
    else {
        cvcError.style.display = "none";
    }
//focus on card number field
expMonth.focus();
  return true;  
} 

//First name validation
function bFname_validation() {
       "use strict";
  var billingFirstName_regex = /^[a-zA-Z]+$/;
    if(billingFirstName_regex.test(billingFirstName.value) == false){
         fname_error.innerHTML = "Input contains invalid characters";
         fname_error.style.display = "block";
    if (billingFirstName.value == "" || billingFirstName.value == null)  {
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
billingLastName.focus();
  return true;  
} 
//last name validation
function bLname_validation() {
       "use strict";
  var billingLastName_regex = /^[a-zA-Z]+$/;  
    if(billingLastName_regex.test(billingLastName.value) == false){
         lname_error.innerHTML = "Input contains invalid characters";
        
         lname_error.style.display = "block";
  if (billingLastName.value == "" ||billingLastName.value == null) {
     lname_error.innerHTML = "Last name must be filled out";
     lname_error.style.display = "block";
      billingLastName.focus();  
  return false;  
    }  
}
    else {
         lname_error.style.display = "none";
}
//focus on email field
billingPhoneNumber.focus();  
  return true;  
}   
////phone validation
function bPhone_validation() {
       "use strict";
    var billingPhoneNumber_regex = /^\d{3}-\d{3}-\d{4}$/;
 if(billingPhoneNumber_regex.test(billingPhoneNumber.value) == false){
    phone_error.innerHTML = "Input contains invalid characters";
    phone_error.style.display = "block";
if (billingPhoneNumber.value == "" || billingPhoneNumber.value == null) { 
    phone_error.innerHTML = "Phone Number must be filled out";
    phone_error.style.display = "block";
    billingPhoneNumber.focus();  
    return false;  
    }
}
else {
     phone_error.style.display = "none";
    }
//focus on address type field
billingSpecifyList.focus();  
 return true;  
}

////Address type validation
function bSpecify_address() {
    "use strict";
    if (document.getElementById("other").selected) {
        document.getElementById("BillingSpecifyAddress").className = "show";
         return billingAddressType.focus();  
    }     
 else {
        document.getElementById("BillingSpecifyAddress").className = "hide";
    }
 //focus on address spec field
  billingStAddress.focus(); 
return true;  
}

//street address validation
function bStaddress_validation() {
       "use strict";
 var billingStAddress_regex  = /^[0-9a-zA-Z\s]+$/;
 if(billingStAddress_regex.test(billingStAddress.value) == false){
    staddress_error.innerHTML = "Input contains invalid characters";
    staddress_error.style.display = "block";
  if (billingStAddress.value == "" || billingStAddress.value == null) {  
    staddress_error.innerHTML = "Street Address must be filled out";
    staddress_error.style.display = "block";
    billingStAddress.focus();  
    return false;  
    }
}
else {
     staddress_error.style.display = "none";
    }
//focus on apt_no field
billingAddressNo.focus();  
  return true;  
}  

////city validation
function bCity_validation() {
       "use strict";
 var billingCity_regex = /^[0-9a-zA-Z\s]+$/;
 if(billingCity_regex.test(billingCity.value) == false) {
    city_error.innerHTML = "Input contains invalid characters";
    city_error.style.display = "block";
  if(billingCity.value == "" || billingCity.value == null) {  
    city_error.innerHTML = "City must be filled out";
    city_error.style.display = "block";
    billingCity.focus();  
    return false;  
    }
}
else {
     city_error.style.display = "none";
    }
//focus on state field
billingState.focus();  
  return true;  
}  
//
////state validation
function bState_validation() {
       "use strict";
    ///^[a-zA-Z]+$/;
 var billingState_regex = /^(?i:A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$/;  
 if(billingState_regex.test(billingState.value) == false){
    state_error.innerHTML = "Input contains invalid characters";
    state_error.style.display = "block";
 if (billingState.value == "" || billingState.value == null) {  
    state_error.innerHTML = "State must be filled out";
    state_error.style.display = "block";
    billingState.focus();   
    return false;  
    }
}
else {
      state_error.style.display = "none";
    }
//focus on zip code field
billingZip.focus();  
  return true;  
} 

function bZcode_validation() {
"use strict";
 var billingZip_regex = /^\d{5}$/;
if(billingZip_regex.test(billingZip.value) == false){
    zcode_error.innerHTML = "Input contains invalid characters";
    zcode_error.style.display = "block";
 if (billingZip.value == "" || billingZip_value.value == null) {  
    zcode_error.innerHTML = "Zip Code must be filled out";
    zcode_error.style.display = "block";
   billingZip.focus();   
    return false;  
    }
}
else {
      zcode_error.style.display = "none";
    }
}


//CREDIT CARD VALIDATION
//var cardNoInput = document.getElementById("cardnumber");

function getUserInput(){
   return cardNoInput.value;  
}

function cardNumber_validation(){
  var creditCardNo = getUserInput(), creditCardNoSplit = creditCardNo.split(""), sum = 0;
  var singleNums = [], doubleNums = [], finalArry = undefined;
  var validCard = false;
  
  if((!/\d{15,16}(~\W[a-zA-Z])*$/g.test(creditCardNo)) || (creditCardNo.length > 16)){
     return false;  
  }

  if(creditCardNo.length === 15){  //american express 
     for(var i = creditCardNoSplit.length-1; i>=0; i -= 1){
        if(i % 2 === 0){
           singleNums.push(creditCardNoSplit[i]);
        }else{
           doubleNums.push((creditCardNoSplit[i] * 2).toString());
        }
     }
  }else if(creditCardNo.length === 16){
     for(var i = creditCardNoSplit.length-1; i>=0; i -= 1){
        if(i % 2 !== 0){
           singleNums.push(creditCardNoSplit[i]);
        }else{
           doubleNums.push((creditCardNoSplit[i] * 2).toString());
        }
     }
  }  
  doubleNums = doubleNums.join("").split("");  
  finalArry = doubleNums.concat(singleNums);
  
  for(var j = 0; j<finalArry.length; j++){
     sum += parseInt(finalArry[j]);
  }
  if(sum % 10 === 0){
     validCard = true;
  }
  return validCard;
}

function validateCard(){
   
}
document.getElementById("cardnumber").addEventListener("blur", function(){
document.getElementById("cardNo_error").innerHTML = cardNumber_validation();
}, false);
////END CREDIT CARD VALIDATION



 Same as Delivery information
document.getElementById("same_delivery").addEventListener("click", billingAddrValidation, true);
function billingAddrValidation(checked) {  
if (checked) {  
document.getElementById('BillingFirstName').value = fname.value; 
document.getElementById('BillingLastName').value = lname.value; 
document.getElementById('BillingPhoneNumber').value = phone_no.value; 
document.getElementById('BillingSpecifyList').value = specify_list.value;
document.getElementById('BillingSpecifyAddress').value = specify_addr.value;
document.getElementById('BillingAddressNo').value = addr_no.value;
document.getElementById('BillingAddress').value = staddress.value;   
document.getElementById('BillingCity').value = city_value.value;   
document.getElementById('BillingState').value = state_value.value;   
document.getElementById('BillingZip').value = zcode_value.value;     
} else {  
document.getElementById('BillingFirstName').value = '';
document.getElementById('BillingLastName').value = '';
document.getElementById('BillingPhoneNumber').value = '';
document.getElementById('BillingSpecifyList').value = '';
document.getElementById('BillingSpecifAddress').value = '';
document.getElementById('BillingAddressNo').value = '';
document.getElementById('BillingAddress').value = '';
document.getElementById('BillingCity').value = '';
document.getElementById('BillingState').value = '';
document.getElementById('BillingZip').value = '';
document.getElementById('BillingCountry').value = '';   
}  
}  
  
























