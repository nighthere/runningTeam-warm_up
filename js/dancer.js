/**
 * Created by 永夜 on 2015/7/17.
 */
window.onload= function(){
    slider();
}

function slider(){
    siliderDown("one");
    siliderDown("two");
    siliderDown("there");
    siliderDown("four");
}

//鼠标hover时，显示个人信息
function siliderDown(Id){

    var run = document.getElementById(Id).firstElementChild;
    var runInformation =  document.getElementById(Id).firstElementChild;

    var timer = null;
    var alpha = 30;
    var alphaContent = 30;
    var speed = 1;
    var speedContent = 1;
    document.getElementById(Id).firstElementChild.addEventListener("mouseout", function(){
        // document.getElementById("one").lastElementChild.style.display = "none";
        startrun(0);

    }, false);

    document.getElementById(Id).firstElementChild.addEventListener("mouseover", function(){
        //document.getElementById("one").lastElementChild.style.display = "none";

        //startrun(30);

        startrun(70);

    }, false);


    function startrun(target){
        clearInterval(timer);
        timer = setInterval(function(){
            if(target > alpha){
                speed = 5;
            }else{
                speed = -5
            }
            if(alpha === target){
                clearInterval(timer);
            }else{
                alpha = alpha + speed;
                run.style.filter = 'alpha(opacity = '+alpha+')';
                run.style.opacity = alpha/100;
            }

        },30);



    }


    function  infromationStartrun(target){
        clearInterval(timer);
        timer = setInterval(function(){
            if(target > alpha){
                speed = 5;
            }else{
                speed = -5
            }
            if(alpha === target){
                clearInterval(timer);

            }else{
                alpha = alpha + speed;
                runInformation.style.filter = 'alpha(opacity = '+alpha+')';
                runInformation.style.opacity = alpha/100;
            }
        },30);
    }
}