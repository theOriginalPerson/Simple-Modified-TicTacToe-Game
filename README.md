<h1>A Modified Tic-Tac-Toe Game</h1>
<h3>Intro</h3>
<p>Here we will develop a Tic-Tac-Toe game using new JS concepts. Feel free to follow the templates provided in this GitHub repository! Click on <code>script.js</code>, <code>index.html</code> or <code>style.css</code> to use for reference when trying to develop your own game.</p>
<h3>How to reproduce this</h3>
<ol>
	<li>Copy the HTML code from the <code>index.html</code> file listed here. Also copy the CSS code and place it into your <code>style.css</code> file</li>
	<li>Start by making two players and name them the string of the colours you wish to represent them by. For example, <code>let player1 = "red";</code></li>
	<li>Create a player turn variable and set it to player 1</li>
	<li>Retrieve the turn header ID from the HTML page and set its innerHTML to player 1</li>
	<li>Retrieve all nine boxes using <code>document.getElementById</code></li>
	<li>Put those boxes in an array</li>
	<li>Create a function that changes the box's background color to whoever just completed their turn. For example, if player 1 (red) completed their turn (clicked on the box), then change the box's background color accordingly (to red). Make sure to switch whoever's turn it is and so it displays in the innerHTML element</li>
	<li>Add an "onClick" function that changes the background color when a box is clicked</li>
	<li>Add a <code>boxes_array.forEach(myFunction())</code> line of code that simply returns the "onClick" function you made in step 8</li>
	<li>Check to see if it works! If it does not, open up the console and try to see the mistake. A helpful tip when debugging your JS code in the developer console is to add <code>console.log(variable_or_function_name)</code> to see if something is accurately being looped over. If it isn't showing up in the developer console, it means this line of code is being skipped for some reason and you need to figure out why. Ask your instructor for assistance here.</li>
	<li>If you made it this far and your Tic Tac Toe game is working, great job! Congratulations on finishing a difficult project!</li>
</ol>
<h3>How to use this</h3>
<p>Simply click on any of the boxes and watch the turns keep switching between players. There is no detection on the computer's part so you'll have to keep your eyes peeled for the winning combination!</p>