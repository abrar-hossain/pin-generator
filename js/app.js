


























































function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
};

function generatePin() {
    document.getElementById('display-pin').value = getPin();
}

document.getElementById('key-pad').addEventListener('click', function (event) {

    const numbers = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(numbers)) {
        if (numbers == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        calcInput.value = previousNumber + numbers;
    }
});

function verifyPin() {

    const pin = document.getElementById('typed-numbers').value;
    const typedNumbers = document.getElementById('display-pin').value;
    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');

    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failMessage.style.display = 'block';
    }

}

