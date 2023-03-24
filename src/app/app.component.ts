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

  title = 'behaviourSubject';
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
    console.log('the btn is clicked');
    this.showFrom = !this.showFrom;
  }
  editButtonPushed(programData: any){
   this.showFrom=!this.showFrom;
//  this.myservice.formData = programData;
 this.myservice.data = programData;
//  this.myservice.isClicked.next(true);
//  this.myservice.addOrEdit.next(false);
  }


  editdata(programData: any) {

    ;
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
