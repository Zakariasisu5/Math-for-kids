const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const audio = document.getElementById('Myaudio');
var answer = 0;

function generate_equetion() {
    var num1 = Math.floor(Math.random() * 13);
    var num2 = Math.floor(Math.random() * 13);
    var dummyAnswer1 = Math.floor(Math.random() * 13);
    var dummyAnswer2 = Math.floor(Math.random() * 13);
    var AllAnswers = [];
    var switchAnswer = [];

    answer = num1 + num2;

    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;

    AllAnswers = [answer, dummyAnswer1, dummyAnswer2];

    for (let i = AllAnswers.length; i--;) {
        switchAnswer.push(AllAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    option1.innerHTML = switchAnswer[0];
    option2.innerHTML = switchAnswer[1];
    option3.innerHTML = switchAnswer[2];
}

option1.addEventListener('click', function () {
    if (parseInt(option1.innerHTML) === answer) {
        generate_equetion();
    } else {
        audio.play();
    }
});
option2.addEventListener('click', function () {
    if (parseInt(option2.innerHTML) === answer) {
        generate_equetion();
    } else {
        audio.play();
    }
});
option3.addEventListener('click', function () {
    if (parseInt(option3.innerHTML) === answer) {
        generate_equetion();
    } else {
        audio.play();
    }
});

generate_equetion();
