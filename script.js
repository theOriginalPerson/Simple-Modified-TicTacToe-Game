/////////////////
// our players //
/////////////////

const player = 'salmon';
const player2 = 'skyblue';

let turn = player;
let turn_header = document.getElementById("turn");
turn_header.innerHTML = "Red's Turn!";


///////////////
// our boxes //
///////////////

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const boxes = [one, two, three, four, five, six, seven, eight, nine];

///////////////
// functions //
///////////////

// to change the colours of the boxes depending on whose turn it is

function change_box_col(event) {
	if (turn === player) {
		event.target.style.backgroundColor = player;
		turn_header.innerHTML = "Blue's Turn!";
		turn = player2;
	}
	else if (turn === player2) {
		event.target.style.backgroundColor = player2;
		turn_header.innerHTML = "Red's Turn!";
		turn = player;	
	}
}

// to add the change_box_col function to the action of clicking

function onClick(item) {
	item.addEventListener("click", change_box_col, {once : true});
}

// this allows each box from the list of boxes above to work independently, executing the colour-change for each one separately

boxes.forEach(onClick);
