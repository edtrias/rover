var myRover = {
  position      : [0,0],
  direction     : "N",
  commands      : ["l", "r", "f", "b"],
  planetGridX   : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  planetGridY   : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

//******************* VARIABLES AREA ***********************

var commandInput;
var count = 0;
var finalCommand;

var directionLeft;
var directionRight;

//Measuring our planet
var counterGridX = myRover.planetGridX.length;
var counterGridY = myRover.planetGridY.length;
var newDirectionStr = "New Rover Direction: ";



//***************** PROGRAM START *************************

//Giving the start position and direction

var startInformation = console.log("Start position: " + "[" + myRover.position + "]" + " Direction: " + myRover.direction);

//Asking for the orders (commands)
  commandInput = prompt("Waiting for new orders. The commands are: \n\nL: Left; \nR: Right; \nF: Forward; \nB: Backward;").toLowerCase();

//Returning the commandInput values
while (count < commandInput.length) {

//Verifying if the commandInput is one of the roverCommands ("l", "r", "f", "b")

 if (commandInput[count] === myRover.commands[0]){

   finalCommand = myRover.commands[0]; //storing the current commandInput inside a var

 } else if (commandInput[count] === myRover.commands[1]){

   finalCommand = myRover.commands[1];

 } else if (commandInput[count] === myRover.commands[2]){

   finalCommand = myRover.commands[2];

 } else if (commandInput[count] === myRover.commands[3]){

   finalCommand = myRover.commands[3];

 } else {

   //Message of error ("You used a wrong command!")
   console.log("Sorry, the letter " + "'" + commandInput[count] + "'" + " isn't an order.\n \nThe commands are: \n\nL: Left; \nR: Right; \nF: Forward; \nB: Backward; \n\nWaiting for new orders");

 break;
 }

    finalCommand = commandInput[count];

    //Functions to get direction ("N", "E", "S", "W") in here
    getDirectionLeft();
    getDirectionRight();

    //Functions to move the Rover
    moveForward();
    moveBackward();

    //Function to make the planet spherical
    roundPlanet();

    //Inform the user about the Rover position in Mars
    if (commandInput[count] === "f" || commandInput[count] === "b") {
      console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
    }

    count++;

}

var countInverse = commandInput.length;

	while (countInverse > -1) {

    if(countInverse === 0) {
    console.log("Current Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]" + " & Current Direction: " + myRover.direction);
    }
    countInverse--;
}

//****************** END OF THE PROGRAM **************************

//**************** START OF FUNCTIONS AREA ***********************

//Changing the direction depending on the finalCommand
function getDirectionLeft() {

  if (finalCommand === "l"){
    switch (myRover.direction) {
      case "N":

        myRover.direction = "W";
        console.log(newDirectionStr + myRover.direction);
        break;

      case "W":

        myRover.direction = "S";
        console.log(newDirectionStr + myRover.direction);
        break;

      case "S":

        myRover.direction = "E";
        console.log(newDirectionStr + myRover.direction);
        break;

        case "E":

          myRover.direction = "N";
          console.log(newDirectionStr + myRover.direction);
          break;
    }
  }
}

function getDirectionRight(){
  if (finalCommand === "r") {
    switch (myRover.direction) {
      case "N":

        myRover.direction = "E";
        console.log(newDirectionStr + myRover.direction);
        break;

      case "E":

        myRover.direction = "S";
        console.log(newDirectionStr + myRover.direction);
        break;

      case "S":

        myRover.direction = "W";
        console.log(newDirectionStr + myRover.direction);
        break;

      case "W":

        myRover.direction = "N";
        console.log(newDirectionStr + myRover.direction);
        break;
    }
  }
}

//Make the Rover move depending on the direction and if it is Forwards or Backwards
function moveForward() {

  if (finalCommand === "f") {
    switch(myRover.direction) {
      case 'N':
        myRover.position[1]++;
        break;
      case 'E':
        myRover.position[0]++;
        break;
      case 'S':
        myRover.position[1]--;
        break;
      case 'W':
        myRover.position[0]--;
        break;
    }
  }
}

function moveBackward() {

  if (finalCommand === "b") {
    switch(myRover.direction) {
      case 'N':
        myRover.position[1]--;
        break;
      case 'E':
        myRover.position[0]--;
        break;
      case 'S':
        myRover.position[1]++;
        break;
      case 'W':
        myRover.position[0]++;
        break;
    }
  }
}


//Making the planet "spherical"

function roundPlanet() {

  if (myRover.position[0] < 0) {

    myRover.position[0] = 9;

  } else if (myRover.position[0] > (counterGridX - 1)) {

    myRover.position[0] = 0;

  }

  if (myRover.position[1] < 0) {

    myRover.position[1] = 9;

  } else if (myRover.position[1] > (counterGridX - 1)) {

    myRover.position[1] = 0;

  }
}
