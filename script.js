let userTask=document.getElementById("todoInpt")

let addBtn=document.querySelector("button")

let todoListItems=document.querySelector("ul")

/******************************** */
addBtn.addEventListener("click",()=>{
    if(userTask.value.trim()!="" )
    {
      
      todoListItems.classList.add("ulStyle");
        let todoItem=document.createElement("li")
        let taskText = document.createElement("p");
        taskText.innerText = userTask.value.trim();
        taskText.classList.add("task");
        let container=document.createElement("div")
        container.classList.add("controlBtns")
        let itemCheckBox=document.createElement("input")
        itemCheckBox.type="checkbox";
        itemCheckBox.classList.add("form-check-input");
        let btnDelete=document.createElement("button")
        btnDelete.innerText="Delete"
        container.append(itemCheckBox,btnDelete)

        /******************************** */

        itemCheckBox.addEventListener("change",(event)=>{
          if(event.target.checked)
          {
            taskText.style.textDecorationLine="line-through"
          }else{
            taskText.style.textDecorationLine="none"
          }
        })
       
        todoItem.append(taskText,container)
        todoItem.classList.add("toDoItem")

        
        userTask.style=`
        max-width:70%;
        min-width:50%
        `
        btnDelete.classList.add("btn","delBtn")
        itemCheckBox.style.marginLeft="25PX"
        itemCheckBox.style.padding="3PX"
        todoListItems.appendChild(todoItem);
        userTask.value="";

         /******************************** */
         
        btnDelete.addEventListener("click",()=>{
         let question=   confirm("Are you sure for deleting element ?")

         if(question)
         {
            todoListItems.removeChild(todoItem);
          }
         

          if(todoListItems.innerHTML==""){
            todoListItems.classList.remove("ulStyle");
  
           }
        })
    }
})
