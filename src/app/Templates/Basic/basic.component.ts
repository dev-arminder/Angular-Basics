import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-basic',
  template: `
       <div [class] ="{ darkMode: isDarkMode, lightMode: !isDarkMode}">
         <p>Understanding Templates in Angular.</p>
         <p>Interpolation in Angular - {{interpolatedBy}}</p>
         <p>{{ 2 + 1}}</p>
         <p>Current Mode - {{isDarkMode}}</p>
         <button (click)=changeMode()>Toggle Mode</button>
       </div>
  `,
  styles: [` 
          p { 
            font-weight: bold;
            color: crimson;
            padding: 1em }
          div {
            width: 80%;
            border: 1px solid black;
            padding: 1em;
            margin: 1em auto;
            box-shadow: 1px 10px 10px black;
          }
          div.darkMode {
            background: black;
            color: white;
          } 
          div.lightMode{
            background: white;
            color: black
          } 
          `]
})
export class TempBasicComponent implements OnInit {
  interpolatedBy: string  = 'Ravi'
  isDarkMode: boolean = false;
  constructor() { 
    this.interpolatedBy = 'Interpolation Done By Arminder'
   }

  ngOnInit(): void {
  }

  changeMode(): void {
    console.log(this.isDarkMode)
    this.isDarkMode = !this.isDarkMode  
  }

}
