// Generate of Random number.
document.querySelector(".generate-btn").addEventListener("click", function() {

    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("generate-random-number").value = randomNumber;
})

// Click Event on Button
let buttonNumber = document.getElementsByClassName("btnNum");
    for(var i=0; i<buttonNumber.length; i++){

        buttonNumber[i].addEventListener("click", function (){

            let buttonValue = this.innerText;
            let submitButtonValue = document.getElementById("match-random-number").value;
            let combinedValue = submitButtonValue + buttonValue ;
            document.getElementById("match-random-number").value = combinedValue;
        }) 
    }

    // Submit button click event
    document.getElementById("submit").addEventListener("click",function(){
        let submitButtonValue = document.getElementById("match-random-number").value;
        let submitNumberValue = parseInt(submitButtonValue);
        let generateRandomValue = document.getElementById("generate-random-number").value;
        let generateRandomNumber = parseInt(generateRandomValue);

        let submitButton = document.getElementById("submit");
        // Notification
        let notifyOk = document.getElementById("notify-ok");
        let notifyOff = document.getElementById("notify-off");
        if(submitNumberValue === generateRandomNumber){

            notifyOk.style.display = "block";
            notifyOff.style.display = "none";
        }else{
            notifyOk.style.display = "none";
            notifyOff.style.display = "block";

            // Area of try left
            let actionLeft = document.getElementById("leftAction").innerText;
            let actionLeftNumber = parseInt(actionLeft);
            let decreaseActionLeftNumber  = actionLeftNumber -1;
            document.getElementById("leftAction").innerText = decreaseActionLeftNumber;
            if(decreaseActionLeftNumber === 0){

                submitButton.style.background = "#ff5c6f";
                submitButton.style.pointerEvents = "none";
            }


        }


    })
    // Delete All
    document.querySelector(".btn-del-all").addEventListener("click",function (){
        document.getElementById("match-random-number").value = "";

    })
    // Delete one by one number
    document.querySelector(".btn-del-one").addEventListener("click", function (){
        let submitButtonValue = document.getElementById("match-random-number").value;
        let removeLastItem = submitButtonValue.slice(0, -1);
        document.getElementById("match-random-number").value = removeLastItem;
    })
