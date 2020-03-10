import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectArticleComponent } from './select-article/select-article.component';



@NgModule({
	declarations: [SelectArticleComponent],
	imports: [
		CommonModule
	],
	exports: [ SelectArticleComponent ]
})
export class SelectArticleModule { }
