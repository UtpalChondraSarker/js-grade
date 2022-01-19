// var numbers=80;

// switch(numbers){
//     case 100:
//         console.log('Grade is A+');
//         break;
//     case 80 :
//         console.log('Grade is A+');
//         break;
//     case 70:
//         console.log('Grade is A');
//         break;
//     case 60 :
//         console.log('Grade is A-');
//         break;
//     case 50:
//         console.log('Grade is B');
//         break;
//     case 40 :
//         console.log('Grade is C');
//         break;
//     default:
//         console.log('this is fail');
// }
 
function number(mark){
    if(mark<=100 && mark >=80){
        console.log('Grade is A+');
    }
    else if(mark<=89 && mark>=70){ 
        console.log('Grade is A');
    }
    else if(mark<=69 && mark>=60){
        console.log('Grade is A-');
    }
    else if(mark<=59 && mark>=50){
        console.log('Grade is B');
    }
    else if(mark<=49 && mark>=40){
        console.log('Grade is c');
    }
    else if(mark<=39 && mark>=33){
        console.log('Grade is D');
    }
    else{
        console.log('Fail');
    }
}


number(80)





