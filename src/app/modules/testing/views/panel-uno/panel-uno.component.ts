import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestingService } from '../../../../core/services/testing.service';

@Component({
  selector: 'panel-uno',
  templateUrl: './panel-uno.component.html',
  styleUrls: ['./panel-uno.component.scss'],
})
export class PanelUnoComponent implements OnInit {
  public showModal:boolean = false;
  public response: Array<any> = [];
  public responseDog: any = {
    message: '',
    status: '',
  };

  constructor(private testingService: TestingService, private router: Router) {
  }

  ngOnInit(): void {
    this.getTestData();
  }

  public getTestData(): void {
    this.testingService.getTestData((response) => {
      this.response = response;
      console.log('Response: ', response)
    });
  }

  public getTestDataDog(): void {
    this.testingService.getTestDataDog((response) => {
      this.responseDog = response;
      console.log('Response: ', response)
    });
  }

  public login(role: string) {
    localStorage.setItem('angular-testing-role', role);
  }

  public logout() {
    localStorage.removeItem('angular-testing-role');
  }

  get isLogged() {
    return localStorage.getItem('angular-testing-role');
  }

  public acceptBtn(msg: string) {
    alert(msg);
    this.showModal = false
  }

  public redirect(role: string) {
    console.log('redirectr')
    this.router.navigate([`testing/${role}`])
  }

  get isAdmin() {
    const role = localStorage.getItem('angular-testing-role');
    return role === 'admin';
  }

  public getCarts() {
    this.testingService.getCarts('1', ({ message, data }) => {
      alert(message);
      console.log(data);
    })
  }
}
