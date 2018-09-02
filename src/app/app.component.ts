import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray=[]
  addTodo(todo){
      this.todoArray.push(todo.value)
      console.log(this,todo)
      todo.value=""
  }

  deleteItem(value) {
    this.todoArray=this.todoArray.filter(x=>x!==value)
  }

  todoSubmit(value:any,todoForm:any){
    if(value.todo!==null && value.todo!==""){
      this.todoArray.push(todoForm.value.todo)
      todoForm.resetForm()
      }else{
        alert('Field required **')
      }
    console.log(value)
  }
}
