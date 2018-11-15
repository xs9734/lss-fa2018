var counter = document.getElementById('counter');

window.onscroll = function(){
    var distance = window.pageYOffset;
    //console.log(distance);
    
    document.getElementById('counter').innerHTML = distance;

    counter.style.top = distance + 20 + "px";
    //img1.style.left = distance + "px";
    //img1.style.top = distance +200 + "px";
    //img1.style.opacity = distance/200;


    if(distance > 99 && distance < 199){
        document.getElementById("smoke").style.transform = "translate(0px, -100px)";
        document.getElementById("treeline").style.transform = "translate(0px, -150px)";
        document.getElementById("mountains").style.transform = "translate(0px, -50px)";
    }
    else if(distance > 199 && distance < 299){
        document.getElementById("smoke").style.transform = "translate(0px, -200px)";
        document.getElementById("treeline").style.transform = "translate(0px, -300px)";
        document.getElementById("mountains").style.transform = "translate(0px, -100px)";
    }
    else if(distance > 299){
        document.getElementById("smoke").style.transform = "translate(0px, -250px)";
        document.getElementById("treeline").style.transform = "translate(0px, -375px)";
        document.getElementById("mountains").style.transform = "translate(0px, -135px)";
    }
    else{
        document.getElementById("smoke").style.transform = "translate(0px, 0px)";
        document.getElementById("treeline").style.transform = "translate(0px, 0px)";
        document.getElementById("mountains").style.transform = "translate(0px, 0px)";
    }

    if(distance > 2000){
        counter.style.backgroundColor="red";
    }
    else{
        document.getElementById('counter').style.backgroundColor = "navy";
    }
}


