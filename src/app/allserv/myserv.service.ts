import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ApiDataType, Program } from '../model/program';

@Injectable({
  providedIn: 'root',
})
export class MyservService {
  data: Program[] = [];
  formDataOne = {
    programBudget: 0,
    programDescription: '',
    programName: '',
    programNumber: '',
    isVirtual: false,
    programID: '',
    isActive: false,
    canDelete: false
  }
  
  allPrograms = new BehaviorSubject<Program[]>([]);
  formdata = new BehaviorSubject<any>({});

  ngOninit() {  
    console.log(this.getProgram());
  }

  getProgram() {
    
    return this.http.get<any>('http://cmi-ofm.azurewebsites.net/api/Program')
  }

  addingData(formData: any) {
    const formObject = new FormData();
    Object.keys(formData).forEach((key) =>
      formObject.append(key, (formData as any)[key])
    );
    return this.http
      .post<ApiDataType<Program>>(
        'http://cmi-ofm.azurewebsites.net/api/program',formObject)
  }

  setData(data:any){
    this.formdata.next(data);
    console.log(this.formdata.getValue());
  }

  editData(data:Program){
    console.log('in service ');
    
    const formObject = new FormData();
    Object.keys(data).forEach((key) =>
      formObject.append(key, (data as any)[key])
    );
    return this.http
      .put(
        'http://cmi-ofm.azurewebsites.net/api/program',formObject)
  }
  constructor(private http: HttpClient) {}
}
