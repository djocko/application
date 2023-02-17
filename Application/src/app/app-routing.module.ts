import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { IdentifierComponent } from './identifier/identifier.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path: "identifier", component : IdentifierComponent},
  {path: "map", component : MapComponent},
  {path: "inscrit", component : InscritComponent},
  
  {path: "acceuil", component : AcceuilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
