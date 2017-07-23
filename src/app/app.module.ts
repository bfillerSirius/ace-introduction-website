import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ForumMessageComponent } from './forum-message/forum-message.component';
import { ForumMessageContainerComponent } from './forum/forum-message-container.component';
import { ForumModalComponent } from './forum-modal/forum-modal.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { HomeComponent } from './home/home.component';
import { FullProfileComponent } from './full-profile/full-profile.component';
import { ForumQuestionModalComponent } from './forum-question-modal/forum-question-modal.component'
import { QuestionsService } from './services/questions.service'

@NgModule({
  declarations: [
    AppComponent,
    ForumMessageComponent,
    ForumMessageContainerComponent,
    ForumModalComponent,
    ForumQuestionModalComponent,
    ProfileListComponent,
    HomeComponent,
    FullProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
