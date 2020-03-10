import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
	providedIn: 'root'
})
export class ArticleService {
	article: Article = null;

	setArticle(article: Article) {
		this.article = article;
	}

	constructor() { }
}
