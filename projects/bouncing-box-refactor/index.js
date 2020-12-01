		/* global $ */
		'use strict'
		$(document).ready(function(){
			/////////////////////////////////////////////////
            /////////////////// SETUP ///////////////////////
            /////////////////////////////////////////////////

			var BOARD_WIDTH = $('#board').width();	// Number: the maximum X-Coordinate of the screen

			// Every 50 milliseconds, call the update Function (see below)
			setInterval(update, 50);

			// Every time the box is clicked, call the handleBoxClick Function (see below)
			$('#box').on('click', handleBoxClick);
            /* variables and other one-time set up code for the program */

            /////////////////////////////////////////////////
            //////////////// CORE LOGIC /////////////////////
            /////////////////////////////////////////////////

            /* main logic of the program: the update / handleBoxClick functions */

			var positionX = 0;
			var speedX = 10;
			var points = 0;

			/* 
			This Function will be called 20 times/second. Each time it is called,
			it should move the Box to a new location. If the box drifts off the screen
			turn it around! 
			*/
            function postiionUpdate1(){
                positionX += speedX;
                $('#box').css("left", positionX);
            }
            function postiionUpdate2(){
                if (positionX > BOARD_WIDTH) {
					speedX = -speedX;
				}
				else if (positionX < 0) {
					speedX = -speedX;
				}
            }
            function update() {
                postiionUpdate1();
                postiionUpdate2();
			}

			/* 
			This Function will be called each time the box is clicked. Each time it is called,
			it should increase the points total, increase the speed, and move the box to
			the left side of the screen.
			*/
            /////////////////////////////////////////////////
            ////////////// HELPER FUNCTIONS /////////////////
            /////////////////////////////////////////////////

            /* functions for executing sub-tasks of the core logic */
            function pointsUpdate() {
                points += 1;            
                $('#box').text(points);
            }
            function speedIncrease() {
                if (speedX >= 0) {
					speedX += 3;
				} 
				else if (speedX < 0) {
					speedX -= 3;
				}
            } 
            function resetPosition() {
                positionX = 0;
            }
			function handleBoxClick() {
				// increase points
                pointsUpdate();
				// increase speed
				speedIncrease();
				// reset the position of the box
				resetPosition();
			}



		}); // DO NOT DELETE THIS LINE OF CODE. ALL JAVASCRIPT ABOVE HERE