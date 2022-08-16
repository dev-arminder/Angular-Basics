import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styles: [` 
          p { 
            font-weight: bold;
            color: crimson;}
           .interaction__component {
            padding: 1em
           } 
            `]
})

export class InteractionComponent implements OnInit {
  @Input() hero!: any;
  @Input('master') masterName = '';


  constructor(){

  }
  ngOnInit(): void {
    
  }
}

