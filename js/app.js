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

// Disply pressed value 
document.getElementById('key-pad').addEventListener('click',function(event){
    // console.log(event.target.innerText);
    const calPressedVal = event.target.innerText;
    if(isNaN(calPressedVal)){
        if(calPressedVal == 'C'){
            document.getElementById('type-numbers').value = '';
        }
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
// Compare the generated pin with the pressed pin values.
function verifyPIN(){
    document.getElementById('submit-btn').addEventListener('click', function(){
        console.log('Submit-btn pressed');
        const generatedPin = document.getElementById('display-pin');
        console.log(generatedPin.value);
        const calDisplayValue = document.getElementById('type-numbers');
        console.log(calDisplayValue.value);

        const success = document.getElementById('pin-matched');
        const failed = document.getElementById('did-not-match');

        if(generatedPin.value == calDisplayValue.value){ 
            success.style.display = 'block';
            failed.style.display = 'none';
            console.log('Success')
        }
        else{
            failed.style.display = 'block';
            success.style.display = 'none';
            console.log('Failed')
        }
    })    
}


