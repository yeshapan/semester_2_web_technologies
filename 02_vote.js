//In JavaScript, we use the prompt() function to ask the user for input. As a parameter, we input the text we want to display to the user. Once the user presses “ok,” the input value is returned. We typically store user input in a variable so that we can use the information in our program

//ask user for input
var name=prompt("enter your name: ")
var age=prompt("enter your age: ")
//use if else loop to give output
if(age<0){
    console.log("please enter valid age. exiting...")
}
else if(age>0&&age<18){
    console.log("Oopsie! You are not eligible to vote yet. Come back when you're 18!")
}
else{
    console.log("You can vote! Go cast your vote now!")
}
