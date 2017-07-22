import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ProfileListComponent} from './profile-list/profile-list.component';
import{HomeComponent} from './home/home.component';
import{ForumMessageContainerComponent} from './forum/forum-message-container.component';
import{FullProfileComponent} from './full-profile/full-profile.component';
import{} from '';
const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'profile-list', component:ProfileListComponent},
{path: 'home', component:HomeComponent},
{path: 'forum-message', component:ForumMessageContainerComponent},
{path: 'full-profile', component:FullProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
