export class Task {

     id ?: string;
     
     titre ?: string;
     description ?: string;
     datedebut ?: Date;
     dateecheance ?: Date;
     statut : string;
     statutModif ?: boolean;

     constructor() {
        this.statut = 'NPEC';  /*NPEC = non prise en charge */
       this.statutModif = false;  /* par defaut le task lors de la création au statut NPEC# terminé , cette attribut utilisé comme indicateur 
                                     selon sa valeur en va afficher ou pas le button modifer, vue que dans ce cas il va prendre la valeur true */
   }

}
