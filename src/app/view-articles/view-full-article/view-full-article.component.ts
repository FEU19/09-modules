import { Component, OnInit } from '@angular/core';
import { Article } from '../../shared/article';
import { ArticleService } from '../../shared/article.service';

@Component({
	selector: 'app-view-full-article',
	templateUrl: './view-full-article.component.html',
	styleUrls: ['./view-full-article.component.css']
})
export class ViewFullArticleComponent implements OnInit {
	fetchedArticle: Article = null;

	viewArticle() {
		this.fetchedArticle = this.articleService.getArticle();
	}
	constructor(public articleService: ArticleService) { }

	ngOnInit(): void {
	}

}
