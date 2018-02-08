// First Task
var output_1, a, b, c;
a = 3;
b = 5;

output_1 = "var a = 3; \nvar b = 5; \nvar c; \n-------------\n" +
         "a + b = " + (a + b) + "\n" +
         "a - b = " + (a - b) + "\n" +
         "a * b = " + (a * b) + "\n" +
         "a / b = " + (a / b) + "\n" +
         "a % b = " + (a % b) + "\n" +
         "(a += b): " + (a += b) + "\n" +
         "(a -= b): " + (a -= b) + "\n" +
         "(a *= b): " + (a *= b) + "\n" +
         "(a /= b): " + (a /= b) + "\n" +
         "(a %= b): " + (a %= b) + "\n" +
         "(a == b): " + (a == b) + "\n" +
         "(a != b): " + (a != b) + "\n" +
         "(a > b): " + (a > b) + "\n" +
         "(a < b): " + (a < b) + "\n" +
         "(!a && !c): " + (!a && !c) + "\n" +
         "(!a || !c): " + (!a || !c) + "\n" 
         
alert(output_1);


// Second Task

var first_name, last_name, email, output_2;
first_name = "Tayo";
last_name = "Owolabi";
email = "owol0004@algonquinlive.com";
output_2 = "My name is" + " " + first_name + " " +  last_name + "." + "\n" +
    "You can contact me at" + " " + email + ".";

alert(output_2);

// Third Task
var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];
 var r_n1 = numbers[0];
 var r_n2 = numbers[(numbers.length - 1)];
 var sum = (r_n1 + r_n2);


if (sum % 2 === 0){
    alert (r_n1 +" + "+ r_n2+ " = " + sum +"\n"+ " This is  an even Number");
} else {
    alert(r_n1 +" + "+ r_n2 +" = " + sum +"\n" +" This is  an odd Number");
}
