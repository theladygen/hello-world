let userName = prompt ("What's your name?");
console.log ("userName is", userName);
alert("Hi " + userName + ", welcome to Studio Le Mew! 😸");

function pickACat() {
    let favoriteCat = prompt ("Now that you've met all of us fine felines, do tell: who's your favorite cat??");
    console.log ("favorite cat", favoriteCat);
    if (favoriteCat == "Oliver") {
        alert("Bold choice. I like it.");
    }
    else if (favoriteCat == "Sophie") {
        alert("She's the peachiest of peaches, it's true!");
    }
    else if (favoriteCat == "Fox") {
        alert("Foxy is the bestest boy!");
    }
    else if (favoriteCat == "Albus") {
        alert("The most handsome, distinguished gentleman in the bunch!");
    }
    else if (favoriteCat == "Bug") {
        alert("Aw, who doesn't love a love Bug?!");
    }
    else {
        alert("Ahhhh interesting. You should introduce us!");
    }
}
