import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SelectArticleModule } from './select-article/select-article.module';
import { ViewArticlesModule } from './view-articles/view-articles.module';
import { ChatModule } from './chat/chat.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SelectArticleModule,
		ViewArticlesModule,
		ChatModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
