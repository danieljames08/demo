import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  addUserForm;
  
  user;
  users: any[] = [];
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      job: new FormControl('', [Validators.required]),
    });
  }
  saveUser() {
    this.user = this.addUserForm.value;
    this._userService.saveUser(this.user).subscribe((response: any) => {
      console.log(response);
      
      this.addUserForm.reset();
      this.users.push({ name: response.name, job: response.job });
    });
}

}
