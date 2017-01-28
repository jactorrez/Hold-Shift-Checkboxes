var checkboxes = document.querySelectorAll("input[type='checkbox']");
var firstCheck;
var secondCheck;

checkboxes.forEach(function(el){
	el.addEventListener("click", isShift);
});

function isShift(e){

	if(e.target.dataset.pos === firstCheck){
			e.target.checked = false; 
			console.log("here!");
			firstCheck = null;
	}
	else if(e.target.dataset.pos === secondCheck){
		e.target.checked = false;
		secondCheck = false;
	}
	
	if(e.shiftKey){
		if(firstCheck == null){
			firstCheck = this.dataset.pos; 
			checkVal();
		} else if(secondCheck == null){
			secondCheck = this.dataset.pos; 
			checkVal();
			selectAllChecks();
		}
	}

}

function checkVal(){
	console.log("first");
	console.dir(firstCheck);
	console.log("second");
	console.dir(secondCheck);
}

function selectAllChecks(){

	if(firstCheck > secondCheck){
		for(let x = secondCheck; x <= firstCheck; x++){
			checkboxes[x].checked = true;
		}

	}
	else { 
		for(let x = firstCheck; x <= secondCheck; x++){
		checkboxes[x].checked = true;
		}
	}
	
	firstCheck = null;
	secondCheck = null;

}