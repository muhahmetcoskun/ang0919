import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonelPrimTanimlamaComponent } from './personel-prim-tanimlama/personel-prim-tanimlama.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'personelprimtanimla', component: PersonelPrimTanimlamaComponent,canActivate: [AuthGuard] },
  ])],
  exports: [RouterModule]
})
export class PbtanimlamalarRoutingModule { }
