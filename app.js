function greeting(){
  let userName = prompt("What's your name?");
  if (userName == ""){
    userName = prompt ("Aw, don't be shy! I promise we don't bite.");
    console.log("userName is", userName);
    alert("Hi " + userName + ", welcome to Studio Le Mew! 😸");
  }
}

function pickACat() {
  let favoriteCat = prompt(
    "Now that you've met all of us fine felines, do tell: who's your favorite cat??"
  );
  favoriteCat = favoriteCat.trim().toLowerCase();
  console.log("favorite cat", favoriteCat);
  if (favoriteCat == "oliver") {
    alert("Bold choice. I like it.");
  } else if (favoriteCat == "sophie") {
    alert("She's the peachiest of peaches, it's true!");
  } else if (favoriteCat == "fox") {
    alert("Foxy is the bestest boy!");
  } else if (favoriteCat == "albus") {
    alert("The most handsome, distinguished gentleman in the bunch!");
  } else if (favoriteCat == "bug") {
    alert("Aw, who doesn't love a love Bug?!");
  } else {
    alert("Ahhhh interesting. You should introduce us!");
  }
}
