function eff1(){
    let thingy = document.getElementById("eff1");
    thingy.innerHTML = thingy.innerHTML === "LunarRatOS"?"[LunarRatOS]":"LunarRatOS";
}

function eff2(){
    let thingy = document.getElementById("eff1");
    thingy.style.opacity = thingy.style.opacity === "0.7" ?"1":"0.7";
}

function eff3(){
    let thingy = document.getElementById("eff1");
    thingy.innerHTML = thingy.innerHTML === "LunarRatOS"?"LunarRatOS (not responding)":"LunarRatOS";
}

function eff4() {
    let thingy = document.getElementById("eff1");
    thingy.innerHTML = thingy.innerHTML === "LunarRatOS"?"WOW !":"LunarRatOS";
}