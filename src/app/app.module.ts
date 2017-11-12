import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';


// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './secure/home/index';
import { ContactComponent } from './contact/contact.component';
import { MyresumeComponent } from './myresume/myresume.component';
import { LoginPComponent } from './public/login-p/index';
import { RegisterPComponent } from './public/register-p/index';
import { LandingComponent } from './public/landing/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        NgbModule.forRoot(),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
  
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        ContactComponent,
        MyresumeComponent,
        LoginPComponent,
        RegisterPComponent,
        LandingComponent
    
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }