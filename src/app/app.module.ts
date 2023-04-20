import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChildComponent } from './child/child.component';
import { UserDeatailsComponent } from './user-deatails/user-deatails.component';
import { Child1Component } from './child1/child1.component';
import {ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { UsersModule } from "./users/users.module";
// import {AdminModule} from './admin/admin.module';
import {UserModule} from './user/user.module';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';
 

@NgModule({
    declarations: [
        AppComponent,
        ChildComponent,
        UserDeatailsComponent,
        Child1Component,
        FooterComponent,
        AdminlistComponent,
        UserlistComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        ReactiveFormsModule,
        HttpClientModule,
        UsersModule,
        // AdminModule,
        UserModule
    ]
})
export class AppModule { }
