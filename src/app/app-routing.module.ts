import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserlistComponent} from "./userlist/userlist.component";


const routes: Routes = [
  {
    path: 'user',
    component: UserlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
