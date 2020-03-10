import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFullArticleComponent } from './view-full-article/view-full-article.component';



@NgModule({
	declarations: [ViewFullArticleComponent],
	imports: [
		CommonModule
	],
	exports: [ViewFullArticleComponent]
})
export class ViewArticlesModule { }
