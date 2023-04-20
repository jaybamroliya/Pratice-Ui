import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './users/login/login.component'
import {SignupComponent} from './users/signup/signup.component'


const routes: Routes = [
  {path:'login',component:LoginComponent  },
  {path:'signup',component:SignupComponent},
  {path:'admin', loadChildren:() =>import('./admin/admin.module')
  .then(mod=>mod.AdminModule) },
  {path:'user',loadChildren:()=>import('./user/user.module')
  .then(mod=>mod.UserModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
