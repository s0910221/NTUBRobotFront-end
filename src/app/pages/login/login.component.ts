import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  display = true;
  account: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.account === 'ntub' && this.password === 'Ntub1234') {
      localStorage.setItem('login', 'true');
      const redirect_url = sessionStorage.getItem('redirect_url');
      sessionStorage.clear();
      if (redirect_url) {
        this.router.navigate(['/', redirect_url]);
      } else {
        this.router.navigate(['/q1']);
      }
    } else {
      alert('帳號或密碼錯誤。');
    }
  }

}
