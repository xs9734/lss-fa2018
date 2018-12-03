var counter = document.getElementById('counter');

window.onscroll = function(){
    var distance = window.pageYOffset;
    //console.log(distance);
    
    document.getElementById('counter').innerHTML = distance;

    counter.style.top = distance + 20 + "px";
    //img1.style.left = distance + "px";
    //img1.style.top = distance +200 + "px";
    //img1.style.opacity = distance/200;

    if(distance > 3150 && distance < 3500){
        fires.style.opacity = "1";
    }
    else{
        fires.style.opacity = "0"; 
    }
    
    if(distance > 4150 && distance < 4500){
        acres.style.opacity = "1";
    }
    else{
        acres.style.opacity = "0"; 
    }

    if(distance > 20 && distance < 98){
        document.getElementById("mountains").style.transform = "translate(0px, -25px)";
        document.getElementById("firelight").style.transform = "translate(0px, -50px)";
        document.getElementById("smoke").style.transform = "translate(0px, -75px)";
        document.getElementById("treeline").style.transform = "translate(0px, -100px)";
    }
    else if(distance > 99 && distance < 150){
        document.getElementById("mountains").style.transform = "translate(0px, -50px)";
        document.getElementById("firelight").style.transform = "translate(0px, -75px)";
        document.getElementById("smoke").style.transform = "translate(0px, -100px)";
        document.getElementById("treeline").style.transform = "translate(0px, -150px)";
    }
    else if(distance > 151 && distance < 198){
        document.getElementById("mountains").style.transform = "translate(0px, -75px)";
        document.getElementById("firelight").style.transform = "translate(0px, -100x)";
        document.getElementById("smoke").style.transform = "translate(0px, -150px)";
        document.getElementById("treeline").style.transform = "translate(0px, -200px)";
    }
    else if(distance > 199 && distance < 299){
        document.getElementById("mountains").style.transform = "translate(0px, -100px)";
        document.getElementById("firelight").style.transform = "translate(0px, -150px)";
        document.getElementById("smoke").style.transform = "translate(0px, -200px)";
        document.getElementById("treeline").style.transform = "translate(0px, -300px)";

    }
    else if(distance > 299){
        document.getElementById("mountains").style.transform = "translate(0px, -125px)";
        document.getElementById("firelight").style.transform = "translate(0px, -187.5px)";
        document.getElementById("smoke").style.transform = "translate(0px, -250px)";
        document.getElementById("treeline").style.transform = "translate(0px, -375px)";
    }
    else{
        document.getElementById("mountains").style.transform = "translate(0px, 0px)";
        document.getElementById("firelight").style.transform = "translate(0px, 0px)";
        document.getElementById("smoke").style.transform = "translate(0px, 0px)";
        document.getElementById("treeline").style.transform = "translate(0px, 0px)";
    }

    if(distance > 2000){
        counter.style.backgroundColor="red";
    }
    else{
        document.getElementById('counter').style.backgroundColor = "navy";
    }
}


