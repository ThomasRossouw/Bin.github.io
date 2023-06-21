var currentTime = document.getElementById("CurrentTime");
var CurrentDate = document.getElementById("CurrentDate");
var StartWork = document.querySelector("#StartWork");
var StartMeal = document.querySelector("#StartMeal");
var EndMeal = document.querySelector("#EndMeal");
var EndWork = document.querySelector("#EndWork");
var Message = document.querySelector('#Message');
var Info = document.querySelector('#Info');
var AddInfo = $("#GetInfo");
var TimeStart;
var BackOn;
var EnWork;
var Mealtime;
console.log(TimeStart);
window.setInterval(function () {
    currentTime.innerHTML = moment().format('LTS');
}, 1000);

CurrentDate.innerHTML = moment().format('ll');



// Eventlisteners for buttons
StartWork.addEventListener("click", function () {
    var currentTime = moment().format();
    var current = moment().format('LTS');
    TimeStart = current;
    Message.innerHTML = ("You Started Work at " + current);
    console.log(TimeStart);
    setTimeout(function () {
        Message.innerHTML = '';
    }, 3000);
});

EndWork.addEventListener("click", function () {
    var currentTime = moment().format();
    var current = moment().format('LTS');
    console.log(EndWork);
    if (TimeStart == undefined) {
        Message.innerHTML = ("Please Clock in First!! ");
        setTimeout(function () {
            Message.innerHTML = '';
        }, 3000);
    } else {
        EnWork =current;
        Message.innerHTML = ("You Ended Work at " + current);
        setTimeout(function () {
            Message.innerHTML = '';
        }, 3000);
    }
});

EndMeal.addEventListener("click", function () {
    var compare = moment(Mealtime).fromNow();
    var current = moment().format('LTS');
   
    if (compare == "30 minutes ago") {
        BackOn = current;
        Message.innerHTML = ("Succsessfully Clocked Back In");
        BackOn = moment().format();
        setTimeout(function () {
            Message.innerHTML = '';
        }, 2000);

    } else if (TimeStart == undefined) {
        Message.innerHTML = ("Please Clock in First!! ");
        setTimeout(function () {
            Message.innerHTML = '';
        }, 3000);
    }
    else if (Mealtime == undefined) {
        Message.innerHTML = ("Please Start Lunch First");
        setTimeout(function () {
            Message.innerHTML = '';
        }, 3000);
    }
    else {
        Message.innerHTML = ("Sorry you cannot clock back in");
        setTimeout(function () {
            Message.innerHTML = '';
        }, 2000);
    }


});

StartMeal.addEventListener("click", function () {
    var currentTime = moment().format();
    var current = moment().format('LTS');
    
    console.log(Mealtime);
    if (TimeStart == undefined) {
        Message.innerHTML = ("Please Clock in First!! ");
        setTimeout(function () {
            Message.innerHTML = '';
        }, 3000);
    }
    else {
        Mealtime = current;
        Message.innerHTML = ("You Started Lunch at " + current);
        setTimeout(function () {
            Message.innerHTML = '';
        }, 3000);
    }
});

Info.addEventListener('click',function() {
    $('#GetInfo').empty();
    console.log(TimeStart);
    if(TimeStart != undefined){
        var Information = $('<li>');
      Information.text("Start Work: "+TimeStart);
      Information.attr('class', 'display');
       AddInfo.append(Information);
    }
    if(Mealtime != undefined){
        var Information = $('<li>');
      Information.text("Start Lunch: "+Mealtime);
      Information.attr('class', 'display');
       AddInfo.append(Information);
    }
    if(BackOn != undefined){
        var Information = $('<li>');
      Information.text("End Lunch: "+BackOn);
      Information.attr('class', 'display');
       AddInfo.append(Information);
    }
    if(EnWork != undefined){
        var Information = $('<li>');
      Information.text("End Work: "+EnWork);
      Information.attr('class', 'display');
       AddInfo.append(Information);
    }
});

