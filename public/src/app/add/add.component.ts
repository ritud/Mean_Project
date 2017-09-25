import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { TaskService } from '../task.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
question="";
cans="";
fans1="";
fans2="";
  constructor(private _taskService: TaskService,private _router: Router) { }

  ngOnInit() {
  }
submit(){
this._taskService.createques({question:this.question,cans:this.cans,fans1:this.fans1,fans2:this.fans2});
this.question="";
this.cans="";
this.fans1="";
this.fans2="";
this._router.navigate(['']);
}

cancel(){
  this.question="";
  this.cans="";
  this.fans1="";
  this.fans2="";
  this._router.navigate(['']);
}

}
