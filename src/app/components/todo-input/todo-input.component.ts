import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Options } from 'selenium-webdriver';
// import { HttpClientModule} from '@angular/common/http';
// import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  todos : Todo[];
  todoTitle : string;
  idForTodo : number;

  ngOnInit() {
    this.idForTodo = 3;
    this.todoTitle = '';
    this.todos = [
      {
        'id' : 1,
        'title': 'Finish angular'  
      },
      {
        'id' : 2,
        'title' : 'call krishnaaa'
      }
    ]
  }
    addTodo(): void{
      if (this.todoTitle.trim().length=== 0 ){
        return;
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.todoTitle
      })
      this.todoTitle = '';
      this.idForTodo++;
    } 

    deleteTodo(id : number): void{
          this.todos = this.todos.filter(todo => todo.id !== id);
    }

    // api call for git account
    // title: String = "";
    // response : any;
    // status : String = "";
    // created_at : any;
    // constructor(private http : HttpClient){

    // }
    // search(){
    //   // this.http.get('https://api.github.com/users/' + this.username)
    //   this.http.post('http://localhost/todo_web_app/v1/todo', any,Options s:{title? :HttpHeaders | {[title : String] : String | String[]}})
    //   // return this.http.post(this._baseUrl + '/API/identity/user',user,{ headers: headers}).map((response: Response) =>{
     
    //     // })
      
    //   .subscribe((response) => {
    //     this.response = response;
    //     console.log(this.response);
        
    //   })
     
      
    // }
  }

  interface Todo{
    id : number,
    title : string,
  }
 


  


