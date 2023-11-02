import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_PATH } from '../../global';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http:HttpClient) { }
  
  addJob(key: string, prompt: string) {
    let params: HttpParams = new HttpParams;
    params = params.append('key', key);
    params = params.append('prompt', prompt.replace(/[\r\n\t]+/gm, ''));

    let responseObject = {
      data: {},
      value: {},
      url: '',
      isError: false
    }

    this.http.get(`${URL_PATH}/addjob`, {params: params})
      .subscribe({
        next: (response:any) => {
          // let json = JSON.stringify(response, null, 2);
          let json = response;
          responseObject.value = json;
          responseObject.isError = false;
          // try {
            // responseObject.data = json['data'];
            // responseObject.url = json['data']['result_url']
          // } catch (error) {
            // console.log("Eroare getjob", error);
          // }
        },
        error:(error) => {
          let json = error.error;
          responseObject.value = json;
          responseObject.isError = true;
        }
      })

    return responseObject;
  }
  getJob(jobId: string) {
    let params: HttpParams = new HttpParams;
    params = params.append('job_id', jobId);

    let responseObject = {
      data: {},
      value: {},
      url: '',
      isError: false
    }

    this.http.get(`${URL_PATH}/getjob`, {params: params})
      .subscribe({
        next: (response:any) => {
          // let json = JSON.stringify(response, null, 2);
          let json = response;
          responseObject.value = json;
          try {
            // responseObject.data = json['data'];
            responseObject.url = json['data']['result_url']
            responseObject.isError = false;
          } catch (error) {
            console.log("Eroare getjob", error);
          }
        },
        error:(error) => {
          console.log(error);
          if(error.statusText == 'Unknown Error'){
            responseObject.value = {error: error.message}
          } else {
            let json = error.error;
            responseObject.value = json;
          }
          responseObject.isError = true;
        }
      })

    return responseObject;
  }

}
