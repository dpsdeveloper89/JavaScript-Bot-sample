var questions = [
    'What is your Name?',
    'Where are you from?',
    'What\'s your age?',
    'Drop your Number so we can contact you',
    'It was nice talking to you :)'
];

var counter = 0;
var output = document.querySelector("#result");

output.innerHTML = questions[0];

var inputBox = document.querySelector("#ans");

function showResponse() {
    var input = inputBox.value;
   
if (inputBox == "") {
        
    }else{
        if (counter == 0) {
            output.innerHTML = "Hello"+ " "+input+ " "+ "nice meeting you";
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "wait for response");
            ++counter;
            setTimeout(changeQuestion, 2000);
        }else if(counter == 1){
            output.innerHTML = input + " " + "is an awesome place";
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "wait for response");
            ++counter;
            setTimeout(changeQuestion, 2000);
        }else if(counter == 2 & inputBox.value < 18){
           
                output.innerHTML = 'Sorry You are too young for this';
                inputBox.style.display = "none";                
            }else if(counter == 2 & inputBox.value >= 18){
            output.innerHTML= 'You are welcome'; 
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "wait for response");
            ++counter;
            setTimeout(changeQuestion, 5000);
            }else if (counter = 3){
            output.innerHTML = 'Your number is ' + input;
            inputBox.value = "";
            inputBox.setAttribute("placeholder", "wait for response");
            ++counter;
            setTimeout(changeQuestion, 2000);

        }
    }
}

function changeQuestion(){
    inputBox.setAttribute("placeholder", "wait for response");
   var a = document.querySelector('#ans');
   a.style.border = "1px solid white";
    output.innerHTML = questions[counter];
    if(counter == 4){
     inputBox.style.display = "none";
    }
}

$(document).on('keypress', function(e){
    if(e.which == 13){
        showResponse();
    }
}); 