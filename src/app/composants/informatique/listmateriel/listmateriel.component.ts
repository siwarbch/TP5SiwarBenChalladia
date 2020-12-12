import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'siw-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css']
})
export class ListmaterielComponent implements OnInit {

  materiels: Materiel[];
    
  constructor(private materielservice:MaterielService) { }

  ngOnInit(): void {
    this.materiels=this.materielservice.getMateriels();
  }

}
