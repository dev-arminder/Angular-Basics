import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: `
       <p>Basic Component With Inline HTML.</p>
  `,
  styles: [` 
          p { 
            font-weight: bold;
            color: crimson;
            padding: 1em }`]
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
