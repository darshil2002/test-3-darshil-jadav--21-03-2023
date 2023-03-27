import { Component, Input } from '@angular/core';
import { MyservService } from './allserv/myserv.service';
import { HttpClient } from '@angular/common/http';
import { map, pluck } from 'rxjs';
import { Program } from './model/program';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myFormData = [{}];

  title = 'test-3';

  editData = {
    programBudget: 0,
    programDescription: '',
    programName: '',
    programNumber: '',
    isVirtual: false,
    programID: '',
    isActive: false,
    canDelete: false
  }
 formData:any;
  showFrom = false;
  myGridData: any = [];
  isActivate: any = [];
  location: any;
  ngOnInit(): void {
    this.myservice
      .getProgram()
      .pipe(pluck('programs'))
      .subscribe((res) => {
        this.myGridData = res;
        console.log(res);
      });
    this.myservice
      .getProgram()
      .pipe(pluck('programs', 'isActive'))
      .subscribe((res) => {
        this.isActivate = res;
        console.log(res);
      });
  }
  constructor(private myservice: MyservService) {}

  addButtonClicked() {
    
  this.editData = {
    programBudget: 0,
    programDescription: '',
    programName: '',
    programNumber: '',
    isVirtual: false,
    programID: '',
    isActive: false,
    canDelete: false
  }
    console.log('the btn is clicked');
    this.showFrom = !this.showFrom;
  }
  editButtonPushed(programData: any){
   console.log(programData);
    this.editData=programData;
    this.myservice.formDataOne=programData;
    this.myservice.formDataOne = programData;
  }


  pushEditedValue(programId:string,programData: Program) {
    programData.programID=programId;
    console.log(programId);
    this.myservice.formDataOne=programData;
    this.myservice.editData(programData).subscribe();
  
  }

  sendData(myForm: any) {
    this.formData=myForm;
    this.myservice.addingData(this.formData).subscribe(res=>{
      console.log(res);
    
    })
    // window.location.reload();
 //   console.log(this.formData);
 this.location.reload();
    
  }
}
