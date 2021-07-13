function passwordCheck(){
    if (document.getElementById("password").value === "TrustNo1"){
        let inputs = document.getElementsByTagName("input");
        for (i in inputs){
            inputs[i].disabled = false;
        }
        inputs[inputs.length-1].disabled = true;
    }
}
function checkboxCheck(){
    let count = 0;
    for (index = 0; index < checkboxes.length; index++){
        if (checkboxes[index].checked)
            count++;
    }
    return (count === checkboxes.length);
}
function leverCheck(){
    let count = 0;
    for (index = 0; index < levers.length; index++){
        if (levers[index].value == levers[index].max){
            count++;
            }
    }
    return (count === levers.length);
}
function takeoff(timestamp){
    if (!start) start = timestamp;
    let progress = timestamp - start;
    rocket.style.transform = 'translate(' + Math.min(progress / 10, 500) + 'px, -' + Math.min(progress / 10, 500) + 'px)';
    if (progress < 5000) {
        window.requestAnimationFrame(takeoff);
    }
}

document.getElementById("okBtn").addEventListener("click", passwordCheck);

let checkboxes = document.getElementsByName("checkbtn");
let levers = document.getElementsByName("lever");

checkboxes.forEach(function(checkbox){
    checkbox.onchange = function(){document.getElementById("launch").disabled = !(checkboxCheck() && leverCheck());};
    /*checkbox.addEventListener("change", function(){
        document.getElementById("launch").disabled = !(checkboxCheck() && leverCheck());
    });*/
});
levers.forEach(function(lever){
    lever.onchange = function(){document.getElementById("launch").disabled = !(checkboxCheck() && leverCheck());};
    /*lever.addEventListener("change", function(){
        document.getElementById("launch").disabled = !(checkboxCheck() && leverCheck());
    });*/
});
let start = null;
let rocket = document.querySelector(".rocket");
document.getElementById("launch").addEventListener("click", function(){
    document.querySelector(".control-panel").hidden = true;
    window.requestAnimationFrame(takeoff);

});