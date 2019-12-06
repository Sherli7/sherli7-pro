import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { LoginService } from './services/login.service';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadFileComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
