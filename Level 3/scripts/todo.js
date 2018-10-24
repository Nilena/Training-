var f = null;
var btn=document.getElementsByClassName("btn");
function get_todos() {
    var todos;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    } else {
        todos = [];
    }
    return todos;
}

function complete(id){
   // var id = this.getAttribute('id');
    var todos = get_todos();
    // console.log(todos[id].status);
    if(todos[id].status === false) {
        todos[id].status = true;
    } else {
        todos[id].status = false;
    }
    localStorage.setItem('todo', JSON.stringify(todos));
 
  if(f === null) {show();}
    else {filter(f);}
    // return false;
}

 function objTodo(taskvalue)
 {
this.taskval=taskvalue;
this.status=false;
 }

function add() {

    var task = document.getElementById('task').value;
 document.getElementById('task').value="";//Add a new task.

    if (task!="")
    {
    var todos = get_todos();
    todos.push(new objTodo(task));// to create todo object
    localStorage.setItem('todo', JSON.stringify(todos));
    if(f === null) show(); else filter(f);
    // show();
    return todos;
    }
    else{    
        alert("Empty field");
    }
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
      if(f === null) show(); else filter(f);

    return false;
}
function act() {
    if(f===null){
        btn[2].setAttribute("class","btn active");
          btn[1].setAttribute("class"," btn");
            btn[0].setAttribute("class","btn");
    }
    else if (f===true){
        btn[1].setAttribute("class","btn active");
          btn[2].setAttribute("class"," btn");
            btn[0].setAttribute("class","btn");
    }
    else if(f === false) {
        btn[0].setAttribute("class","btn active");
          btn[2].setAttribute("class"," btn");
            btn[1].setAttribute("class","btn");
    }
}
function show() {
    f = null;
    act();
    console.log(f);
    var todos = get_todos();
   
    var html = '<ul>';

    for(var i=0; i<todos.length; i++)
     {
        if(todos[i].status === false)
         {
            html += '<li class ="nonstrike"><span>' + todos[i].taskval + "</span> <button  class='comp' onclick='complete("+i+")'>Complete</button>" +'<button class="remove" id="' + i  + '"> Delete </button></li>';
        } else
        {
            html += '<li class="strike"><span>' + todos[i].taskval + "</span> <button  class='comp' onclick='complete("+i+")'>Incomplete</button>"  +'<button class="remove" id="' + i  + '"> Delete </button></li>';
        }        
    }
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++)
     {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();

function filter( b)
{
    f = b;
    console.log(f);
    act();
    var todos = get_todos();
   
    var html = '<ul>';
    var c = "";
    var stat = "completed";
    if(b=== false) {
        c = "nonstrike";
        stat = "completed";
    } else {
        c = "strike";
        stat = "Incomplete";
    }
    for(var i=0; i<todos.length; i++)
     {
        if(todos[i].status === b)
         {
            html += '<li class ='+c+'><span>' + todos[i].taskval + "</span> <button  class='comp' onclick='complete("+i+")'>"+stat+"</button>" +'<button class="remove" id="' + i  + '"> Delete </button></li>';
        }
        
    }
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++)
     {
        buttons[i].addEventListener('click', remove);
    };
}

