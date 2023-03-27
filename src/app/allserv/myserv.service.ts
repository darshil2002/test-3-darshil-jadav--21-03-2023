import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ApiDataType, Program } from '../model/program';

@Injectable({
  providedIn: 'root',
})
export class MyservService {
  data: Program[] = [];
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
      // .pipe(
      //   map((res) => {
      //     if (res) {
      //       this.data.push(formData);
      //       this.allPrograms.next(this.data);
      //     }
      //     return res;
      //   })
      // );
  }

  setData(data:any){
    this.formdata.next(data);
    console.log(this.formdata.getValue());
  }

  constructor(private http: HttpClient) {}
}
