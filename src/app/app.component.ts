import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray=[]
  addTodo(todo){
    if(todo.value!==null && todo.value!==""){
      this.todoArray.push(todo.value)
      console.log(this,todo)
      todo.value=""
    }else{
      alert("Input Required")
    }
  }

  deleteItem(value) {
    this.todoArray=this.todoArray.filter(x=>x!==value)
  }

  todoSubmit(value:any,todoForm:any){
    if(value.todo!==null && value.todo!==""){
      this.todoArray.push(todoForm.value.todo)
      todoForm.resetForm()
      }else{
        alert('Input required ')
      }
    console.log(value)
  }
}
