import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';
// import { clearInterval } from 'timers';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
     

 @Input() EmployeeName !: string;
 @Input() EmpObj : any;
 messeges: string = '';
 count: number = 0;
 
 Run : boolean = false;
 count1 : number = 0;
  
 start(){
   this.Run = true;
   let interval = setInterval(() =>
   {
     if(this.Run === false)
     {
       clearInterval(interval);
     }
     this.count1 = this.count1 + 1;
   },1000)
 }
 stop()
 {
   this.Run = false;
 }

 
 increaseByOne(){
   this.count = this.count + 1;
   this.messeges =  "Counter :  " + this.count;
   console.log(this.messeges);
 }
 decreaseByOne(){
   this.count = this.count - 1;
   this.messeges = "Counter : " + this.count;
   console.log(this.messeges);
   
 }
childData : string = "Child Component Data";
@Output() ch = new EventEmitter();

 
  constructor() { }

  ngOnInit(): void {

  }
  sendData(){
     this.ch.emit(this.childData);
  }
  
}
