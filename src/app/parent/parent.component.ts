import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    
  Ename : string = "kumar";
  Eobj = {
    Name :"Zkel05",
    id: 10
  }
    
  @ViewChild('name')
   private elname = {} as ElementRef;
  @ViewChild('City')
   private elcity = {} as ElementRef;
  
   ngAfterViewInit(){
     this.elname.nativeElement.style.color = 'red';
     this.elcity.nativeElement.style.color = 'grey';

   }

  @ViewChild(ChildComponent)
  private childComponent =  {} as ChildComponent;
    increase(){
      this.childComponent.increaseByOne();

    }
    decrease(){
      this.childComponent.decreaseByOne();
    }


    
    Cstop()
    {
      this.childComponent.stop();
    }
    Cstart()
    {
      this.childComponent.start();
    }



  constructor() { }

  ReciveData : string = "";

  ngOnInit(): void {
    
  }
  
  Recive(event:string){
    console.log(event);
    this.ReciveData = event;
  }


  

}
