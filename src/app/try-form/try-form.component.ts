import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'try-form',
  templateUrl: './try-form.component.html',
  styleUrls: ['./try-form.component.scss']
})
export class TryFormComponent {

  @Input() jobType!: string;

  tryNowAddForm:FormGroup = new FormGroup({
    key: new FormControl(''),
    prompt: new FormControl('')
  });
  tryNowGetForm:FormGroup = new FormGroup({
    jobId: new FormControl('')
  });

  response: {
    data:{},
    value: {},
    url:string,
    isError: boolean
  }| null = null

  constructor(private apiService: ApiService){}

  submitTryNow(){
    if(this.jobType == 'add') {
      console.log(this.tryNowAddForm);
      
      let key = this.tryNowAddForm.get('key')!.value;      
      let prompt = this.tryNowAddForm.get('prompt')!.value;
      this.response = this.apiService.addJob(key, prompt)

    } else if(this.jobType == 'get') {
      let jobId = this.tryNowGetForm.get('jobId')!.value;
      this.response = this.apiService.getJob(jobId);
      console.log("Raspuns primit: ", this.response);
    }
  }
}