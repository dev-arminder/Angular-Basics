import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifeCycle',
  template: '<p>App LifeCycle Works !!</p>',
  styles: [``]})

export class LifeCycle implements OnInit{
   
  constructor(){
     console.log('Constructor - LifeCycle Component')
  }
  ngOnInit(): void {
    console.log('ngOnInit - LifeCycle Component')
  }
  
}