var dataList = [];

var incompleteTasks= document.getElementById("incomplete-tasks");
var completeTasks= document.getElementById("complete-tasks");


function newElement(){
	var taskInput=document.getElementById("new_task").value;
	document.getElementById("new_task").value="";//Add a new task.

	if (taskInput!="")
	{
	var objToDo = new toDo(taskInput);
	dataList.push(objToDo);
	window.localStorage.datastring=dataList;
	objToDo.show();
	}

else{
	alert("Empty field");
}}

function toDo(data) {
	this.show=function(){
		var li=document.createElement("li");
		li.innerHTML="<input type='checkbox'><label>"+data+"</label><button class='edit'>Edit</button><button class='delete'>Delete</button>";
		console.log(li);
		var ul = document.getElementById("incomplete-tasks");
		ul.appendChild(li);
	}
}

function removeDummy(){
	console.log("de");
 incompleteTasks.parentNode.removeChild( incompleteTasks);
}


// function temp () {
// 	var ab=JSON.stringify(dataList);
// 	console.log(ab);

// 	var abarr= JSON.parse(ab);
// 	console.log(abarr);
//  }

// //Delete task.

// var deleteTask=function(){
// 		console.log("Delete Task...");

// 		var listItem=this.parentNode;
// 		var ul=listItem.parentNode;
// 		//Remove the parent list item from the ul.
// 		ul.removeChild(li);
// 	}

