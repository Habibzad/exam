
function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;

    var score = 0;

    if(question1 == 'Kabul'){
        score++;
    }
    if(question2 == 'Tehran'){
        score++;
    }
    if(question3 == 'Ankara'){
        score++
    }
    document.getElementById('response').style.display = 'block';
    document.getElementById('message').textContent = 'Good job! You scored '+ score + ' out of ' + '3';
}