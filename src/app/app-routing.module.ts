import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheaterListComponent } from './components/theater/theater-list/theater-list.component';
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {path: '', component: TheaterListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [
    TheaterListComponent
  ]
})
export class AppRoutingModule { }
