import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input()id: number;
  myForm: FormGroup;
  constructor( public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.createForm();
  }
  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }
  public submitForm() {
    this.activeModal.close(this.myForm.value);
  }
}
