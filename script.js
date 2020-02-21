var e = 0;
var upg = 0;
var upg2 = 0;
var upg3 = 0;
var upg4 = 0;
var clickval = 0;
var clickval1 = 0;
var clickval3 = 0;
var speed = 1010;
var cost = 10;
var cost2 = 100;
var cost3 = 1000000;
var cost4 = 75;
var buttonvalue = 1;
var hide = document.getElementById("hiddentest");
var cst2 = document.getElementById("cost2");
var up = document.getElementById("ultra");
var hide2 = document.getElementById("hide2");
var cst3 = document.getElementById("cost3");
var omgc = document.getElementById("omega");
var cst4 = document.getElementById("cost4");
var up4 = document.getElementById("buttonupgrade");
var upgbuy2 = false;
var check = false;
var check1 = false;
var check3 = false;
var upgbuy3 = false;
var upgbuy = false;
var hiddenoof = false;
//if (e >= 10) {
    //if (hide.style.visibility === 'visible') {
     //   hide.style.visibility = 'hidden';
  //  } 
//}

setInterval(checks, 1);

function checks() {
    //checks for e >= than hidden reqiurnments
}

hide2.style.visibility = 'hidden';



function click() {
    e = e + clickval1;
    updac();
}
function click1() {
    e = e + clickval;
    updac();
}
function click3() {
    e = e + clickval3;
    updac();
}
hide.style.visibility = 'hidden';


function myfunction() {
    e = e + buttonvalue;
    document.getElementById("var").innerHTML = "Clicks: " + e;
    if (e >= 100) {
       hide.style.visibility = 'visible';
    }
    if (e >= 1000) {
        hide2.style.visibility = 'visible';
    }
       
       
    
}

function updac() {
    document.getElementById("var").innerHTML = "Clicks: " + e;
}

function buyupgrade() {
    if (e >= cost) {
        upg = upg + 1;
        e = e - cost;
        cost = cost + 5;
        upgbuy = true;
        clickval = clickval + 1;
        document.getElementById("upgrade").innerHTML = " Auto-Clickers: " + upg;
        document.getElementById("cost").innerHTML = "Cost: " + cost;
        updac();
        
        if (check1 === false) {
            if (upgbuy === true) {
                setInterval(click1, 2000);
                check1 = true;
                
            }
        }
            
        
    }
}

function buyupgrade1() {
    if (e >= cost2) {
        upg2 = upg2 + 1;
        e = e - cost2;
        cost2 = cost2 + 50;
        clickval1 = clickval1 + 1;
        upgbuy2 = true;
        cst2.innerHTML = "Cost: " + cost2;
        up.innerHTML = "Ultra-Clickers: " + upg2;
        updac();
        if (check === false) {
            if (upgbuy2 === true) {
                
                setInterval(click, 1000);
                check = true;
            }
        }
    }  
}

function buyupgrade3() {
    if (e >= cost3) {
        upg3 = upg3 + 1;
        e = e - cost3;
        cost3 = cost3 + 500;
        clickval3 = clickval3 + 1;
        upgbuy3 = true;
        cst3.innerHTML = "Cost: " + cost3;
        omgc.innerHTML = "Omega-Clickers: " + upg3;
        updac();
        if (check3 === false) {
            if (upgbuy3 === true) {
                setInterval(click3, 100);
                check3 = true;
            }
        }
    }
}

function upgradeclick() {
    if (e >= cost4) {
        e = e - cost4;
        upg4 = upg4 + 1;
        buttonvalue = buttonvalue + 1;
        cost4 = cost4 + 25;
        updac();
        up4.innerHTML = "Button Upgrades: " + upg4;
        cst4.innerHTML = "Cost: " + cost4;
    }
}