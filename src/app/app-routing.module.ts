import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHeaderComponent } from './Components/Main-Header/Main-Header.component';
import { SignUpComponent } from './Components/Sign-Up/Sign-Up.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: MainHeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
