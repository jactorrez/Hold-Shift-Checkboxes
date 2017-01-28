var checkboxes = document.querySelectorAll("input[type='checkbox']");
var firstCheck;
var secondCheck;

checkboxes.forEach((el) => {
	el.addEventListener("click", handleCheck);
});

function handleCheck(e){

	// check if checkbox being clicked is one we stored earlier 
	// if so, the user is trying to 'uncheck', so mark reference to stored checkbox as null
	// this lets the user set a new starting/end point
	if(e.target.dataset.pos === firstCheck){
		firstCheck = null;
	}

	else if(e.target.dataset.pos === secondCheck){
		secondCheck = null;
	}
	
	// check if user clicked on checkbox while holding shift AND is trying to 'check' a checkbox vs. uncheck
	if(e.shiftKey && this.checked){

		// if firstCheck is still undefined/null, set it equal to the checkbox we clicked on. 
		// this sets the 'starting point'
		if(firstCheck == null){
			firstCheck = this.dataset.pos; 

		} else if(secondCheck == null){			// similar to what happens above, only it sets the 'end point'
			secondCheck = this.dataset.pos; 
			markChecks();
		}
	}

}


// function to iterate over the elements in between the starting and ending point 
function markChecks(){

	// checks if our starting point was at the bottom of the list, and the ending point at the top
	// (checked from the bottom to top)
	if(firstCheck > secondCheck){
		for(let x = secondCheck; x <= firstCheck; x++){
			checkboxes[x].checked = true;
		}

	} else { 											
		for(let x = firstCheck; x <= secondCheck; x++){
		checkboxes[x].checked = true;
		}
	}
	

	// since we've already checked all the boxes that needed to be checked, our operation is complete
	// and it's time to nullify all previously stored values to allow the user to start over 
	firstCheck = null;
	secondCheck = null;

}