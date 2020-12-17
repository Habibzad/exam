var questions = [
{
    question: "What is 2 + 2?\n (a) 4 \n (b) 5 \n (c) 3",
    answer: "a"
},
{
    question: "What is 3 * 2?\n (a) 4 \n (b) 5 \n (c) 6",
    answer: "c"
},
{
    question: "What is 8 / 2?\n (a) 2 \n (b) 4 \n (c) 3",
    answer: "b"
}
]
score = 0;

for (var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].question);
    if(response == questions[i].answer){
        score++;
        alert('correct')
    } else{
        alert('wrong');
    }
}

alert('you got' + score + 'out of ' + questions.length);