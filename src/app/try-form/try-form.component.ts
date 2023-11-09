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
  tryNowCancelForm:FormGroup = new FormGroup({
    key: new FormControl(''),
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
    switch (this.jobType) {
      case 'add':
        console.log(this.tryNowAddForm);
    
        let addKey = this.tryNowAddForm.get('key')!.value;      
        let prompt = this.tryNowAddForm.get('prompt')!.value;
        this.response = this.apiService.addJob(addKey, prompt);
        break;
    
      case 'get':
        let getJobId = this.tryNowGetForm.get('jobId')!.value;
        this.response = this.apiService.getJob(getJobId);
        console.log("Raspuns primit: ", this.response);
        break;
    
      case 'cancel':
        let cancelKey = this.tryNowCancelForm.get('key')!.value;    
        let cancelJobId = this.tryNowCancelForm.get('jobId')!.value;
        this.response = this.apiService.cancelJob(cancelKey, cancelJobId);
        console.log("Raspuns primit: ", this.response);
        break;
    }
  }
}
