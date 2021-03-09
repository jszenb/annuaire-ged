import { Component, OnInit } from '@angular/core';

import { Entree } from './entree';
import { EntreeService } from './entree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Annuaire du GED"; 
  constructor() { }

  ngOnInit(): void {
  }
}