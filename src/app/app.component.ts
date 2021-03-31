import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public p = true;
  title = 'Testproject';
  changeClass() {
    this.p = !this.p;
    console.log('p');
    
  }
}
