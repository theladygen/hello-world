function greeting() {
  let userName = prompt("What's your name?");
  while (userName == ""){
    userName = prompt ("Aw, don't be shy! I promise we don't bite.");
  }
  console.log("userName is", userName);
  document.write("<p id='greeting'>Hi " + userName + ", welcome to Studio Le Mew! 😸</p>");
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

function catbutts() {
  let numbutts = prompt(
  "Be a kitten and rate us? Between 1 & 5, please... 1 isn't grrreat, but 5 is purrfection!"
  );
  while (numbutts < 1 || numbutts > 5) {
    numbutts = prompt ("Aw, come on! Pretty please with cream on top??");
  }
  for (let i = 0; i < numbutts; i++) {
    document.write("<img src='images/catbutt.jpeg' alt='photo of a floofy cat booty'/>");
  }
}
