import { Component, OnInit } from '@angular/core';

import { Entree } from '../entree';
import { EntreeService } from '../entree.service';

@Component({
  selector: 'app-entrees',
  templateUrl: './entrees.component.html',
  styleUrls: ['./entrees.component.css']
})
export class EntreesComponent implements OnInit {

  entrees: Entree[];
  error = '';
  success = '';
  entree = new Entree;
  selectedEntree?: Entree;
        
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
        this.sortBy( 'nom');
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
          this.sortBy( 'nom');
          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }

  //updateEntree(unNom, unPrenom, unTelephone, unEmail, unId, unLaboratoire, unCommentaire) {
  updateEntree(f) {
    this.success = '';
    this.error = '';
    
    this.entreeService.update(this.selectedEntree)
      .subscribe(
        (res) => {
          this.entrees = res;
          this.sortBy( 'nom');
          this.success = 'Updated successfully';
        },
        (err) => this.error = err
      );
  }
  
  deleteEntree(id) {
    this.success = '';
    this.error   = '';
    if (confirm('Are you sure you want to delete this?')){
    this.entreeService.delete(+id)
      .subscribe(
        (res: Entree[]) => {
          this.entrees = res;
          this.sortBy( 'nom');
          this.success = 'Deleted successfully';
        },
        (err) => this.error = err
      );
      }
  }
  
  
  // Tri du tableau des entrées
  sortBy(prop: string) {
    return this.entrees.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  onSelect(entree: Entree): void {
    this.selectedEntree = entree;
  }

}
