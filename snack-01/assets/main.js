function conferma(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById ('num2').value;

    if (num1 > num2){
        console.log(`il primo valore è maggiore`)
    }
    else if(num1 < num2){
        console.log('il secondo valore è maggiore');
    }
    else {
        console.log('i numeri sono ugali')
    }
}