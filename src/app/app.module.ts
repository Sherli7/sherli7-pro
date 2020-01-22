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
import { ListUsersComponent } from './list-users/list-users.component';
import { FolderComponent } from './folder/folder.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { GroupComponent } from './group/group.component';
import { CreateComponent } from './group/create/create.component';
import { SiteComponent } from './site/site.component';
import { FormsComponent } from './site/forms/forms.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadFileComponent,
    UsersComponent,
    ListUsersComponent,
    FolderComponent,
    FileuploadComponent,
    UpdateUserComponent,
    GroupComponent,
    CreateComponent,
    SiteComponent,
    FormsComponent,
    NotFoundComponent,
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
