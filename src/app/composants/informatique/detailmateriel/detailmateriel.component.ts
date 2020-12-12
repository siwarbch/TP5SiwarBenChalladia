import { Component, Input, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'siw-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  afficher:boolean =false;
   materiel: Materiel ;
id: string="";

  constructor(private materielservice:MaterielService) { }

  ngOnInit(): void {
    this.materiel=this.materielservice.getMaterielById('2');
  }
  
  onClick(){
    this.afficher = !this.afficher;}
}
