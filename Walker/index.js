/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAMES_PER_SECOND_INTERVAL = 1000 / 60;
  var key = {
      "up" : 38,
      "down" : 40,
      "left" : 37,
      "right" : 39,
  }
  // Game Item Objects
  
    var positionX = 0;
    var speedX = 0;
    var positionY = 0; 
    var speedY = 0;
  

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);  

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
        if (event.which === key.up){
            speedY = +5;
            
            console.log("w key was pressed")
        }
        if (event.which === key.down){
            speedY = -5;
           
            console.log("s key was pressed")
        }
        if (event.which === key.left){
            speedX = -5;
            
            console.log("a key was pressed")
        }
        if (event.which === key.right){
            speedX = +5;
            
            console.log("d key was pressed")
        }
     
  }
  function handleKeyUp(event) {
         if (event.which === key.up){
            speedY = -0;
            
            console.log("w key was pressed")
        }
        if (event.which === key.down){
            speedY = -0;
           
            console.log("s key was pressed")
        }
        if (event.which === key.left){
            speedX = -0;
            
            console.log("a key was pressed")
        }
        if (event.which === key.right){
            speedX = -0;
            
            console.log("d key was pressed")
        }     
  }
  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
    positionY -= speedY;
    positionX += speedX;
    
    
  }
  function redrawGameItem() {
    $("#gameItem").css("left", positionX);
    $("#gameItem").css("top", positionY);
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
