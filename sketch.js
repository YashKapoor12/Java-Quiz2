
function checkAnswers(){
    //variables  
    var q1=document.forms["quiz form"]['q1'].value;
    var q2=document.forms["quiz form"]['q2'].value;
    var q3=document.forms["quiz form"]['q3'].value;
    var score=0;
    var total=3;
    //basic validations
    if(q1===""){
        alert('You missed question 1.');
        return false;
    }
    if(q2===""){
        alert('You missed question 2.')
        return false;
    }
    if(q3===""){
        alert('You missed question 3.')
        return false;
    }

    //incrementing the score if the answer is correct
    if(q1==="a"){
        score++;
    }
    if(q2==="c"){
        score++;
    }
    if(q3==="b"){
        score++;
    }

    //calculating the marks of the player
    var percent=Math.round(score*100/total);
    alert('You have scored '+percent+' percentage.Hope you enjoyed the quiz. :)');
}