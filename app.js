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
  "Be a kitten and on a scale of 1 to 5 rate how much you like cats, 5 meaning they're purrfection.😽"
  );
  while (numbutts < 1 || numbutts > 5) {
    numbutts = prompt ("Oops! Pick a number between 1 and 5. I will say, you've definitely got a 5'ish kinda vibe about you...)");
  }
  for (let i = 0; i < numbutts; i++) {
    document.write("<img src='images/catbutt.jpeg' alt='photo of a floofy cat booty'/>");
  }
}
