import { Component, Input, OnInit } from '@angular/core';
import { Cakes } from '../models/cakes';

@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.css']
})
export class CakeCardComponent implements OnInit {
 
  @Input()
  cake!: Cakes
  constructor() { }
 
  ngOnInit(): void {
    
  }
}
