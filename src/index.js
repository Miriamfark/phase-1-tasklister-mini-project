document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault() 
    handleTask(document.getElementById("new-task-description").value)
  })
});

function handleTask (todo) {
 let list = document.createElement('li')
list.innerText = todo
document.querySelector('#tasks').appendChild(list)
}


