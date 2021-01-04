'use strict';

var userName = prompt('what is your name?');
alert('Hello ' + userName + ' welcome to my website' );

function quiz(){


var score = 0;

var authorName = prompt('the Author\' name is Motasem? yes/no');
if (authorName.toLowerCase() === 'y' || authorName.toLowerCase() == 'yes' )
{
    alert('correct');
    // console.log('correct');
    score++;
    
} else {
    // console.log('wrong');
    alert('wrong');
}
var authorAge = prompt('the Author\'s Age is 49 yes/no');
if (authorAge.toLowerCase() === 'n' || authorAge.toLowerCase() == 'no')
{
    alert('correct');
    // console.log('correct');
    score++;
} else {
    // console.log('wrong');
    alert('wrong');
}
var authorMajor = prompt('The Author\'s College Major is Computer Scince? yes/no');
if (authorMajor.toLowerCase() === 'y' || authorMajor.toLowerCase() == 'yes')
{
    alert('correct');
    // console.log('correct');
    score++;
        
} else {
    // console.log('wrong');
    alert('wrong');
}
var authorNatinality = prompt('The Author comes from Yemen yes/no');
if (authorNatinality.toLowerCase() === 'n' || authorNatinality.toLowerCase() == 'no')
{
    alert('correct');
    // console.log('correct');
    score++;
    
} else {
    // console.log('wrong');
    alert('wrong');
}

var authorLocation = prompt('the author is based in Amman yes/no');
if (authorLocation.toLowerCase() === 'y')
{
    alert('correct');
    // console.log('correct');
    score++;

} else {
    // console.log('wrong');
    alert('wrong');
}
if (score >= 3)
{
    alert('good job Your Grade is ' + score);
} else if (score <= 3){

    alert('bad, Your Grade is ' + score);

}

}

