import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http:HttpClient) { }
  
  getJob(jobId: string) {
    let params: HttpParams = new HttpParams;
    params = params.append('job_id', jobId);

    let responseObject = {
      data: {},
      value: {},
      url: ''
    }

    this.http.get('https://api.mjapi.io/getjob', {params: params})
      .subscribe({
        next: (response:any) => {
          // let json = JSON.stringify(response, null, 2);
          let json = response;
          responseObject.value = json;
          try {
            responseObject.data = json['data'];
            responseObject.url = json['data']['result_url']
          } catch (error) {
            console.log("Eroare getjob", error);
          }
        }
      })

    return responseObject;
  }

}
