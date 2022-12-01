var readlineSync = require('readline-sync');
var userName = readlineSync.question("can i know your name");
console.log("welcome" + userName +"do u know tanay" );
var score=0;
function play(question,answer){
  var takingQuestion = readlineSync.question(question);
  if(takingQuestion==answer)
  {
    console.log("you are right ");
    score=score+1;
    console.log(score);
  }
  else{
    console.log("you are wrong ");
  }
  
}
var questions=[{
  question:"where do u live?",
  answer:"banglore",
},
  {
    question:"which company u work?",
  answer:"microsoft",
  }];


for (var i =0;i<questions.length;i++){
 var currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer)
}
