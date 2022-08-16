import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nameChild',
  templateUrl: './nameChild.component.html',
  styles: [` 
  p { 
    font-weight: bold;
    padding: 1em }
            `]
})

export class NameChild implements OnInit {
  @Input()
  get name(){ return this._name } 
  set name(name: String){ this._name = (name && name.trim()) || '<no name set>'; }
  private _name=""


  constructor(){

  }

  ngOnInit(): void {
    
  }
}

