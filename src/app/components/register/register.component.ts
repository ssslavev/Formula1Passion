import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    displayName: '',
    password: '',
    email: ''

  };

  constructor(private authService: AuthService,
     private router: Router,
     private toastr: ToastsManager) { }


  registerUser() {
    const { displayName, email, password } = this.user;
    this.authService.register(email, password, displayName);
    this.router.navigate(['home']);
    this.toastr.success('You are registered.');
  }
  ngOnInit() {

  }

}
