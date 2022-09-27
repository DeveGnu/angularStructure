import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularStructure';

  ngOnInit() {
    this.hello();
  }

  public hello() {
    // alert('Test Hello');
  }

  public test() {
    return 'test texts';
  }
}
