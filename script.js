const age = 21;
const isFemale = true;
const driverStatus = "not a bob";
const name = "Thome";
const totalAmount = 158;

if (age < 18) {
    console.log("You are not allowed to drink alcohol, sorry, bye!")
} else if(age => 18) {
    console.log("You are allowed to drink alcohol, welcome!")
}

if (isFemale) {
    console.log ("Welcome to our only ladies night!")
} else {
    console.log ("Excuse us but this is only ladies night, see you later!")
}

if (driverStatus == "bob") {
    console.log ("You may drive tonight!")
} else (
    console.log ("You may not drive tonight :(")
)

if (age >= 18 && age <= 25){
    console.log("You get 50% discount!")
} else {
    console.log("Sorry, no discounts :(")
}

if (name == "Sarah" || name == "Bram") {
    console.log ("We are celebrating our 50'th birthday! And you get from us one glass beer for free!")
} else {
    console.log ("We are celebrating our 50'th birthday! Sorry, no free beer for you :((")
}

if (totalAmount > 25 && totalAmount < 50) {
    console.log("You have ordered drinks for more than 25 euros! That means you get one portion of our vegabitterballen for free!")
} else if (totalAmount > 50 && totalAmount < 100 ) {
    console.log("You have ordered drinks for more than 50 euros! That means you get one portion of nachos for free!")
} else {
    console.log("You have ordered drinks for more than 100 euros! That means you get a bottle of champagne for free!")
}

const FUCK = YOU;
