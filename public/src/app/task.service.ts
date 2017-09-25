import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class TaskService {
questions=[];
Score=0;
submitted=false;
User_Name="";
  constructor(private _http:Http) {
  }

createques(question){
    console.log("In TASK SERVICE");
    console.log(question);
    this._http.post('/new_question',question).subscribe(
      (response) =>
      {
        console.log(response);
      },
      (err) =>
      {
        console.log("Some Error occured");
      }
    )
  }

  getrandom(callback){
    console.log("SERVICE => GET METHOD");
    this._http.get('/get_questions').subscribe(
      (response) =>
      {
        this.questions=response.json();
        console.log("RESPONSE =>"+this.questions);
        callback(this.questions);
      },
      (err) =>
      {
        console.log("Some Error occured");
      })
  }
updatescore(score){
  console.log("TaskService SCORE IS =>"+score);
  this.Score=score;
  this.submitted=true;
}
getscore(callback){
  callback(this.Score);
}
register_user(name){
this.User_Name=name;
}
get_user(callback){
  callback(this.User_Name);
}
logout(){
  this.Score=0;
  this.submitted=false;
  this.User_Name="";
}
}
