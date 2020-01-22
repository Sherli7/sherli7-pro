import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { FolderComponent } from './folder/folder.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { GroupComponent } from './group/group.component';
import { createComponent } from '@angular/compiler/src/core';
import { CreateComponent } from './group/create/create.component';
import { SiteComponent } from './site/site.component';
import { FormsComponent } from './site/forms/forms.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'form',
    component: FormsComponent
  },
  {
    path: 'site',
    component: SiteComponent
  },
  {
    path: 'update-user',
    component: UpdateUserComponent
  }, {
    path: 'group',
    component: GroupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list-users',
    component: ListUsersComponent
  },
  {
    path: 'folderlist',
    component: FolderComponent
  },
  {
    path: 'fileupload',
    component: FileuploadComponent
  },
  {
    path: './group/create',
    component: CreateComponent
  },
  
  {
    path: './update-user',
    component: UpdateUserComponent
  },{
    path:'group/:create',
    component:CreateComponent,
  },
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'list-users/:username',
    component:UpdateUserComponent,
  },
  {
    path:'list-users',
    component:ListUsersComponent,
  },
  
  {
    path:'group/:create',
    component:CreateComponent,
  },
  {
    path:'site/:form',
    component:FormsComponent,
  },
  {
    path:'**',
    component:NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
