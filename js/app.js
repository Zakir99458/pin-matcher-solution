function getPin(){
    console.log("generating..");
    
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        console.log(pin);
        return pin;
    }
    else{
        return getPin();
    } 
}
function generatePin(){
    const pin = getPin();
    console.log("generated Pin: " + pin);
    const displayTxt = document.getElementById('display-pin');
    // set the value to the input text
    displayTxt.value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(event){
    // console.log(event.target.innerText);
    const calPressedVal = event.target.innerText;
    if(isNaN(calPressedVal)){
        console.log('Not a number')
    }
    else {
        console.log("Pressed value: " + calPressedVal);
        const calDisplayVal = document.getElementById('type-numbers').value;
        console.log("Display Value: " + calDisplayVal);
        const calMergedVal = calDisplayVal + calPressedVal;
        document.getElementById('type-numbers').value = calMergedVal;
    }

})