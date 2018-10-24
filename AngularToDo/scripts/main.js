var app=angular.module("todoApp",[]);
	app.controller('todoController',function($scope){
		$scope.tasks=[];
		$scope.completeText="Complete";

		function localStore(){
				localStorage.setItem('todo-ang', JSON.stringify($scope.tasks));
			}
				// if( localStorage.getItem('todo-ang') != null ){
				// 	console.log(JSON.parse(localStorage.getItem('todo-ang'));
				// 	$scope.tasks = JSON.parse(localStorage.getItem('todo-ang'));
				// } 
				// else {
				// 	$scope.tasks = [];
				// }
				if(localStorage.getItem('todo-ang') != null) {
					let data = JSON.parse(localStorage.getItem('todo-ang'));
					if(data.length > 0) {
						$scope.tasks = JSON.parse(localStorage.getItem('todo-ang'));
					}
				}else {
					$scope.tasks = [];
				}
			
		$scope.onAdd=function(){

		if($scope.toDo !=""){
			$scope.toDoItem = {
				value : $scope.toDo,
				status : false
			};
			$scope.tasks.push($scope.toDoItem );
			$scope.toDo="";	
			localStore();
		} 

		else{
			alert("Empty field");
			}
		}

		$scope.delete= function(id){
			console.log(id);
			$scope.tasks.splice(id,1);
			localStore();
		}

		$scope.complete= function(id){
			console.log($scope.tasks[id]);
			$scope.tasks[id].status = !$scope.tasks[id].status;
			console.log($scope.tasks[id].status);
			if( $scope.tasks[id].status ){
				$scope.completeText="InComplete";
			}
			else{
				$scope.completeText="Complete";
			}
			localStore();
		}

		$scope.filterS = function(stat)	 {
			if(stat == 'true') {
				$scope.flag = true;
			} else if(stat == 'false'){
				$scope.flag = false;
			}else {
				$scope.flag = '';
			}
		}
	});
