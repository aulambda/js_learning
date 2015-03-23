var todoList = [];

function reminderTo(task) {
  todoList.push(task);
}
reminderTo('Brush teeth');
reminderTo('Kill dog');
console.log(todoList);
function whatIsNext(){
    return todoList.shift();
}
console.log(whatIsNext());
console.log(todoList);
function urgentlyRememberTo(task) {
    todoList.unshift(task);
}
urgentlyRememberTo("Eat Peanut Butter!");
console.log(todoList);
reminderTo("Free Animal Shelter CEO");
function listMyList() {
    console.log(todoList);
}
listMyList();

function remove(array, index) {
    return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
