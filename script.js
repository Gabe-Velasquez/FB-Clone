var database = [
  {
    username: "Gabe",
    password: "MeowMix4Evah",
  },
  {
    username: "Dexter",
    password: "Bark123",
  },
  {
    username: "Morg",
    password: "Poop2022",
  },
];

var newsFeed = [
  {
    username: "Hannah",
    timeline: "What's for dinner?",
  },
  {
    username: "Stella",
    timeline: "What time is dinner?",
  },
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    } else {
      alert("Sorry, wrong username and/or password. Please try again.");
    }
  }
  return false;
}

function signIn(user, pass) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and/or password. Please try again. ");
  }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
