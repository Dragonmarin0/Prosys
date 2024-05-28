import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navs2',
  standalone: true,
  imports: [],
  templateUrl: './navs2.component.html',
  styleUrl: './navs2.component.css',
})
export class Navs2Component implements OnInit {
  model: any = {};

  constructor() {}

  ngOnInit(): void {}

  /*  login() {
      this.accountService.login(this.model).subscribe(response => {
        this.router.navigateByUrl('/members');
      })
    } */

 /*  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/login');
  } */
}
