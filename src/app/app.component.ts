import { Component, OnInit } from '@angular/core';

import { Entree } from './entree';
import { EntreeService } from './entree.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  entrees: Entree[];
  error = '';
  success = '';
  entree = new Entree('','');
        
  constructor(private entreeService: EntreeService) {
  }
        
  ngOnInit() {
    this.getEntrees();
    //console.log(this.entree.nom);
    //console.log(this.entree.prenom);
  }
        
  getEntrees(): void {
    this.entreeService.getAll().subscribe(
      (res: Entree[]) => {
        this.entrees = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  addEntree(f) {
    this.error = '';
    this.success = '';

    this.entreeService.store(this.entree)
      .subscribe(
        (res: Entree[]) => {
          // Update the list of entrees
          this.entrees = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }

  updateEntree(unNom, unPrenom, unId) {
    this.success = '';
    this.error = '';

    this.entreeService.update({ nom: unNom.value, prenom: unPrenom.value, id: +unId })
      .subscribe(
        (res) => {
          this.entrees = res;
          this.success = 'Updated successfully';
        },
        (err) => this.error = err
      );
  }
  
  deleteEntree(id) {
    this.success = '';
    this.error   = '';
    
    this.entreeService.delete(+id)
      .subscribe(
        (res: Entree[]) => {
          this.entrees = res;
          this.success = 'Deleted successfully';
        },
        (err) => this.error = err
      );
  }

}