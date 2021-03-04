import { Component, OnInit, Input } from '@angular/core';

import { Entree } from '../entree';

@Component({
  selector: 'app-entree-detail',
  templateUrl: './entree-detail.component.html',
  styleUrls: ['./entree-detail.component.css']
})

 

export class EntreeDetailComponent implements OnInit {
  @Input() entree: Entree; 
  constructor() { }

  ngOnInit(): void {
  }

}
