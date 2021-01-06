'use strict';

var userName = prompt('what is your name?');
alert('Hello ' + userName + ' welcome to my website' );

function quiz(){


// var score = 0;

// var authorName = prompt('the Author\' name is Motasem? yes/no');
// if (authorName.toLowerCase() === 'y' || authorName.toLowerCase() == 'yes' )
// {
//     alert('correct');
//     // console.log('correct');
//     score++;
    
// } else {
//     // console.log('wrong');
//     alert('wrong');
// }
// var authorAge = prompt('the Author\'s Age is 49 yes/no');
// if (authorAge.toLowerCase() === 'n' || authorAge.toLowerCase() == 'no')
// {
//     alert('correct');
//     // console.log('correct');
//     score++;
// } else {
//     // console.log('wrong');
//     alert('wrong');
// }
// var authorMajor = prompt('The Author\'s College Major is Computer Scince? yes/no');
// if (authorMajor.toLowerCase() === 'y' || authorMajor.toLowerCase() == 'yes')
// {
//     alert('correct');
//     // console.log('correct');
//     score++;
        
// } else {
//     // console.log('wrong');
//     alert('wrong');
// }
// var authorNatinality = prompt('The Author comes from Yemen yes/no');
// if (authorNatinality.toLowerCase() === 'n' || authorNatinality.toLowerCase() == 'no')
// {
//     alert('correct');
//     // console.log('correct');
//     score++;
    
// } else {
//     // console.log('wrong');
//     alert('wrong');
// }

// var authorLocation = prompt('the author is based in Amman yes/no');
// if (authorLocation.toLowerCase() === 'y')
// {
//     alert('correct');
//     // console.log('correct');
//     score++;

// } else {
//     // console.log('wrong');
//     alert('wrong');
// }


// for (var i=1; i<=4;i++){
//     var authorFaveWebsite = prompt('How many websites are in the list?');  
//     if(parseInt(authorFaveWebsite) > 10){
//             alert('Too High');

//         }else if(parseInt(authorFaveWebsite) < 10){
//             alert('Too Low');

//         }else if (authorFaveWebsite === '' || authorFaveWebsite === null){
//             prompt('How many websites are in the list?'); 

//         }
//         else if (parseInt(authorFaveWebsite) === 10){
//             score++;
//             alert('correct');
//             break;
//         }
// }
// alert('correct answer is 10' );

// var myFavWebsites = ['yahoo','google','yandex'];
// var correctAnswer = false;
// var authormostvisited;
// var i =0;
// while (i <= 5 && !correctAnswer)
// {
//     authormostvisited = prompt('what are the author\'s most favourite search engines? ');
// for (var j=0; j<myFavWebsites.length; j++)
// {
//     if (authormostvisited == myFavWebsites)
//     {
//         alert('Correct'); 
//         correctAnswer = true;
//         console.log('cccc');
//     }
//     else{
//         prompt('what are the author\'s most favourite search engines? ');        
        
//     }
//     break;
// }
// i++;
// }
// alert('here are the possible answers ' + myFavWebsites);
var myFavWebsites = ['yahoo','google','yandex'];
for (var i=1; i<=6;i++){
    var authormostvisited = prompt('what are the author\'s most favourite search engines? ');  
    if(authormostvisited == myFavWebsites[0] || authormostvisited == myFavWebsites[1] || authormostvisited == myFavWebsites[2]){
        alert('correct');
        score++;
        break;
        }
        else   {
            alert('wrong'); 
        }
}
alert('here are the possible answers ' + myFavWebsites);
    
if (score >= 3)
{
    alert('good job Your Grade is ' + score);
} else if (score <= 3){

    alert('bad, Your Grade is ' + score);

}

}

