import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
	providedIn: 'root'
})
export class ArticleService {
	private article: Article = null;

	// We use console.log to verify that the functions are called
	setArticle(article: Article) {
		this.article = article;
		console.log('ArticleService.setArticle')
	}
	getArticle(): Article {
		console.log('ArticleService.getArticle')
		return this.article;
	}

	constructor() { }
}
