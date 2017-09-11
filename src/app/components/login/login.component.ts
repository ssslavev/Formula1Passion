import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    password: '',
    email: ''

  };
  constructor(private authService: AuthService,
    private router: Router,
    private toastr: ToastsManager) { }

  login() {
    const { email, password } = this.user;
    this.authService.login(email, password);
    this.router.navigate(['home']);
    this.toastr.success('You are logged in.');
  }

  ngOnInit() {
  }

}
