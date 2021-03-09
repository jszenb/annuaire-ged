export interface Entree {
  //constructor(
     nom: string;
     prenom: string;
     telephone: string;
     email: string;
     laboratoire?: string;
     id?: number;
     commentaire?: string;
     //) {}
}

export class Entree implements Entree {};