import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formAuth: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.createForm();

    this.authService.logout();
  }

  createForm(): void {
    this.formAuth = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  authenticate() {
    if (this.formAuth.valid) {
      const credencials = this.formAuth.getRawValue();
      this.authService.authenticate(credencials);
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/clientes']);
      } else {
        alert('LOGUEO INCORRECTO')!;
      }
    }
  }

}
