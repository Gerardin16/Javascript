// Get the uppercase of first letter

// let name = prompt("What is your name?");
// let firstLetter = name.slice(0, 1).toUpperCase();
// console.log(firstLetter)
// let otherLetterscount = name.length;
// let otherLetters = name.slice(1, otherLetterscount).toLowerCase();
// alert("Welcome " + firstLetter + otherLetters);


//Calculate dog age

// let dogAge=prompt("Please enter dog age: ");
// let humanAge=(dogAge-2)*4+21;
// alert("Human Age is - "+ humanAge);

//Calucualte Daysleft
function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        let aliveDifference=90-age;
        let x=aliveDifference*365;
        let y=aliveDifference*52;
        let z=aliveDifference*12;
        
        console.log("You have "+x+" days, "+y+" weeks, and "+z+" months left.")
        
        
        
        
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(34);


   //Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight,height){

    let calcbmi=weight/(height*height);
    return (Math.floor(calcbmi));
}


//If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

let bmi = bmiCalculator(65, 1.8); 
console.log(bmi)
//bmi should equal 20 when it's rounded to the nearest whole number.



//Calculate sum of digits in a number
let inputNumber=prompt("Enter the number:");
let computedInputNumber=parseInt(inputNumber);
let sumOfDigits=calculateSum(computedInputNumber);
console.log(sumOfDigits);

function calculateSum(computedInputNumber) {
    
    let finalSum=0;
    while(computedInputNumber!=0)
    {
        x=computedInputNumber%10;
        finalSum+=x;
        computedInputNumber=Math.floor(computedInputNumber/10);
    }
    return Math.floor(finalSum);
}


//Multiples of 7 from 7 to 100
let num=7;
while(num<=100)
{
    if (num%7==0)
    console.log(num);
    num++;
}

// BMI calculator with if else
function bmiCalculator (weight, height) {
    let interpretation="";
     let calcbmi=Math.floor(weight/(height*height));
     if(calcbmi<18.5)
         interpretation="Your bmi is "+calcbmi+",so you are underweight.";
     else if(calcbmi >=18.5 && calcbmi <=24.9) 
       interpretation="Your bmi is "+calcbmi+",so you have a normal weight.";
     else   
         interpretation="Your bmi is "+calcbmi+",so you are overweight.";
     return interpretation;
 }
 
 let bmi = bmiCalculator(65, 1.8);
 alert(bmi)



 function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your cod
    if(year%4===0 || year%100!==0 && year%400===0)
        console.log("Leap year.");
    else
        console.log("Not leap year.");
    
        
    
    /**************Don't change the code below****************/    
    
    }

    isLeap(1989);
    

    function whosPaying(names) {
    
        /******Don't change the code above*******/
            
            //Write your code here.
          
           let noOfPersons=names.length;
           let selectedPerson=Math.floor(Math.random(noOfPersons)*noOfPersons);
           let finalText=names[selectedPerson]+" is going to buy lunch today!";
           return finalText; 
        /******Don't change the code below*******/    
        }

        let names=["Angela","Ben","Jenny","Michael","Chloe"] ;
        console.log(whosPaying(names));