import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ForumMessageComponent } from './forum-message/forum-message.component';
import { ForumMessageContainerComponent } from './forum/forum-message-container.component';
import { ForumModalComponent } from './forum-modal/forum-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumMessageComponent,
    ForumMessageContainerComponent,
    ForumModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
