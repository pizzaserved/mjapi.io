import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'try-form',
  templateUrl: './try-form.component.html',
  styleUrls: ['./try-form.component.scss']
})
export class TryFormComponent {

  tryNowForm:FormGroup = new FormGroup({
    tryInput: new FormControl(''),
    propmpt: new FormControl('')
  });


  submitTryNow(){

  }
}
