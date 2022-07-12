import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './logindet.component.html',
  styleUrls: ['./logindet.component.css'],
})
export class LogindetComponent implements OnInit {
  formData = { email: '', password: '' };
  errorMessage = '';
  constructor(private auth: AuthServiceService) {}

  ngOnInit(): void {}

  onSubmit() {
    let userId = this.auth.login(this.formData.email, this.formData.password);
    if (!userId) {
      this.errorMessage = 'InValid Account!';
    } else {
      this.errorMessage = '';
      this.auth.storeToken(userId);
      this.auth.canAccess();
    }
  }
}