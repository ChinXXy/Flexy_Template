import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { NgIf } from '@angular/common';
import {FeatherModule } from "angular-feather"
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule, NgIf, FeatherModule],
  templateUrl: './login.component.html',
  providers: [LoginService],
})
export class AppLoginComponent {
  options = this.settings.getOptions();
  msg = '';

  constructor(private settings: CoreService,
    private service: LoginService,
    private routes: Router) {}

  check(uname: string, p: string) {
    const output = this.service.checkusernameandpassword(uname, p);
    if (output == true) {
      this.routes.navigate(['/starter']);
    } else {
      this.msg = 'Invalid Username or Password';
    }
  }
}
