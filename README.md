#frontend-nanodegree-arcade-game
===============================

##The game's objectives

*Use JS to build functions Classes and Subclasses to populate a game environment
*Use JS to randomize speed and position of enemies and to respond to key input with player movement
*Create collision detection when reaching water or when getting caught by a bug

The game was developed purely within JS with sprite objects and the use of pseudo-classical classes within Javascript.
It is primarily built within the engine.js file which controls the time based update check every second, as
well as containing all of the information on collision detection by comparing bug positions against player position, or when
the players height position reaches the waterline.

Within the app.js file we build the actual player model set his speed and initial position,
after which we set the canvas frame boundries and make the player input a straight return at the boundry
rather than a valid movement. We also define what the distance for each movement direction is, in this case
84 pixels up or down and 100pixels to the left or right. We then update the player position within the next canvas update
by taking his current position and adding or subtracting the correct amount of pixels based on the players input.

At the end of app.js we instantiate a player object create an array for the bugs.

To use this application you simply have to open the index.html file within your browser. The Javascript code will perform all the functions involved in making the objects move and behave as they should.

To move the play you simply use the arrow keys on your keyboard, the corresponding arrow will move in that direction.

Have fun! :)
