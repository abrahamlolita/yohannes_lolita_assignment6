// Crust Choices variables
var hand_tossed = document.getElementById("handtossed");
var thin_crust = document.getElementById("thincrust");
var newyork_style = document.getElementById("newyorkstyle");
var gluten_free = document.getElementById("glutenfree");
var onlineOrder = document.getElementById("order_online");

//CRUST SELECTION FUNCTIONS
function crustPrice() {
    "use strict";
    if (hand_tossed.checked) {
        handTossed_price.setAttribute("class", "show");
        thinCrust_price.setAttribute("class", "hide");
        newyorkStyle_price.setAttribute("class", "hide");
        glutenFree_price.setAttribute("class", "hide");
    } else if (thin_crust.checked) {
        thinCrust_price.setAttribute("class", "show");
        handTossed_price.setAttribute("class", "hide");
        newyorkStyle_price.setAttribute("class", "hide");
        glutenFree_price.setAttribute("class", "hide");
    } else if (newyork_style.checked) {
        newyorkStyle_price.setAttribute("class", "show");
        thinCrust_price.setAttribute("class", "hide");
        handTossed_price.setAttribute("class", "hide");
        glutenFree_price.setAttribute("class", "hide");
    
    } else if (gluten_free.checked) {
        glutenFree_price.setAttribute("class", "show");
        newyorkStyle_price.setAttribute("class", "hide");
        thinCrust_price.setAttribute("class", "hide");
        handTossed_price.setAttribute("class", "hide");
    
    } else {
        return false;
    }
}
onlineOrder.addEventListener("click", crustPrice, true);

// Crust Sizes variables
var handTossed_price = document.getElementById("handtossed_price");
var thinCrust_price = document.getElementById("thincrust_price");
var newyorkStyle_price = document.getElementById("newyorkstyle_price");
var glutenFree_price = document.getElementById("glutenfree_price");
var cheese_price = document.getElementById("cheese-choices");
var sauce_price = document.getElementById("sauce-choices");
var toppingsPrice = document.getElementById("toppings-options");

// TOTAL CALCULATION
function calcTotal() {
    "use strict";
    var i, pizzaPrice = 0, priceTopping = 0.99, orderTotal = document.getElementById("totalPrice");
    
    for (i = 1; i < handTossed_price.options.length; i += 1) {
        if (handTossed_price.options[i].selected === true) {
            pizzaPrice = parseFloat(handTossed_price.options[i].value);
            break;
        }
    }
    for (i = 1; i < thinCrust_price.options.length; i += 1) {
        if (thinCrust_price.options[i].selected === true) {
            pizzaPrice  = parseFloat(thinCrust_price.options[i].value);
            break;
        }
    }
    for (i = 1; i < newyorkStyle_price.options.length; i += 1) {
        if (newyorkStyle_price.options[i].selected === true) {
            pizzaPrice  = parseFloat(newyorkStyle_price.options[i].value);
            break;
        }
    }
    for (i = 1; i < glutenFree_price.options.length; i += 1) {
        if (glutenFree_price.options[i].selected === true) {
            pizzaPrice  = parseFloat(glutenFree_price.options[i].value);
            break;
        }
    }
    for (i = 0; i < cheese_price.options.length; i += 1) {
        if (cheese_price.options[i].selected === true) {
            pizzaPrice += parseFloat(cheese_price.options[i].value);
            break;
        }
    }
    for (i = 0; i < sauce_price.options.length; i += 1) {
        if (sauce_price.options[i].selected === true) {
            pizzaPrice += parseFloat(sauce_price.options[i].value);
            break;
        }
    }
   
    for (i = 0; i < 12; i += 1) {
    if (document.forms[0].toppings[i].checked === true) {
            pizzaPrice += priceTopping;
		}
    }
    orderTotal.value = pizzaPrice;
}
    
handTossed_price.addEventListener("change", calcTotal);
thinCrust_price.addEventListener("change", calcTotal);
newyorkStyle_price.addEventListener("change", calcTotal);
glutenFree_price.addEventListener("change", calcTotal);
cheese_price.addEventListener("change", calcTotal);
sauce_price.addEventListener("change", calcTotal);
toppingsPrice.addEventListener("click", calcTotal);
    
// NEXT BUTTON VALIDATION
document.getElementById("next_cheeseSauce").addEventListener("click", crustSizeSelection, true);
function crustSizeSelection() {
    if(hand_tossed.checked) {
    } else if(thin_crust.checked) {
    } else if(newyork_style.checked) {
    } else if(gluten_free.checked) { 
    } else {
   window.alert("PLEASE MAKE A SELECTION");
    } 
     return false;
}