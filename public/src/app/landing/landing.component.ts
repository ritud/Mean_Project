import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
score=0;
status="";
user=false;
user_name="";
  constructor(private _taskService: TaskService,private _router: Router) {
    this._taskService.get_user((name)=>{
      this.user_name=name;
      if(this.user_name){this.user=true;}
    }),
    this._taskService.getscore((result) =>
    {
      console.log("Landing Component"+result);
      // this.score=result.score;
      // this.status=result.status;
    });
   }

  ngOnInit() {
  }
play(){
console.log("in play");
this._router.navigate(['lets_play']);
}

submit(){
  this.user=true;
  this._taskService.register_user(this.user_name);
}
logout(){
  this._taskService.logout();
  this._router.navigate(['']);
}
}
