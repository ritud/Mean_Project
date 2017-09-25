import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
questions=[];
question=[];
answer=[];
result=0;
user=""
  constructor(private _taskService: TaskService,private _router: Router) {
    this._taskService.getrandom((questions)=> {
        this.questions=questions;
        for(let i=0;i<3;i++){
          let len=this.questions.length;
          var randomidx=Math.floor(Math.random()*len);
          this.question.push(this.questions[randomidx]);
          this.questions.splice(randomidx,1);
        }
      }),
      this._taskService.get_user((user)=>{
        this.user=user;
      })
    }

  ngOnInit() {
  }
  submit(){
    if(this.question[0].cans===this.answer[0]){
      this.result=this.result+1;
    }
    if(this.question[1].cans===this.answer[1]){
      this.result=this.result+1;
    }
    if(this.question[2].cans===this.answer[2]){
      this.result=this.result+1;
    }
    this._taskService.updatescore(this.result);
    this._router.navigate(['']);
  }
logout(){
  this._taskService.logout();
  this._router.navigate(['']);
}
}
