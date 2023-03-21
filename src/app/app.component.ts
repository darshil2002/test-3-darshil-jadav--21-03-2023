import { Component, Input } from '@angular/core';
import { MyservService } from './allserv/myserv.service';
import { HttpClient } from '@angular/common/http';
import { map, pluck } from 'rxjs';
import { Program } from './model/program';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myFormData=[{

  }];


  title = 'behaviourSubject';
  programName='';
  programNumber='';
  programBudget='';
  programDescription='';
  canDelete=true;
  isActive= true;
  isVirtual=false;
  programID= '';

    myGridData: any=[];
    isActivate:any=[];
  ngOnInit(): void {
    this.myservice.getProgram().pipe(pluck('programs')).subscribe(res => {
      this.myGridData = res
      console.log(res);
      
    });
    this.myservice.getProgram().pipe(pluck('programs','isActive')).subscribe(res => {
      this.isActivate = res
      console.log(res);
    });
  }
  constructor(private http: HttpClient, private myservice: MyservService) {}
  showFrom=false;
  
  addButtonClicked(){
    console.log('the btn is clicked')
    this.showFrom=!this.showFrom;
  }

  submitForm(myForm:any){
    console.log('submit button is clicked')
    const programName=this.programName;
    const programDescription=this.programDescription;
    const programBudget=this.programBudget;
    const programNumber=this.programNumber;
    console.log(programName);
    console.log(programDescription);
    console.log(programNumber);
    console.log(programBudget);

  }
}
