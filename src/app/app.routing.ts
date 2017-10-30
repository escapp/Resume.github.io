import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import { ContactComponent } from './contact/contact.component';
import { MyresumeComponent } from './myresume/myresume.component';
import { LoginPComponent } from './public/login-p/index';
import { RegisterPComponent } from './public/register-p/index';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent },
    { path: 'loginp', component: LoginPComponent},
    { path: 'registerp', component: RegisterPComponent},
    

 	{ path: 'myresume', component: MyresumeComponent,canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);