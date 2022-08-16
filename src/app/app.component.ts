import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Basics';
  hero = "Dr Stange"
  mastersName = "Master Blah Man"
  herosNames = ['Dr IQ', '   ', '  Bombasto  '];
}
