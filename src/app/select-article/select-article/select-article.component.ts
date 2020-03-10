import { Component, OnInit } from '@angular/core';
import { Article } from '../../shared/article';
import { ArticleService } from '../../shared/article.service';

@Component({
	selector: 'app-select-article',
	templateUrl: './select-article.component.html',
	styleUrls: ['./select-article.component.css']
})
export class SelectArticleComponent implements OnInit {
	// Warning! Data should normally live in a service
	chronoCrusade: Article = {
		title: 'Chrono crusade',
		content: `Chrono Crusade
From Wikipedia, the free encyclopedia
Jump to navigationJump to search
"Magdalene Order" redirects here. For the real-world religious institutions, see Magdalene asylum.
Chrono Crusade
Chrono Crusade US DVD vol 6.jpg
Sixth US DVD volume of Chrono Crusade, featuring Chrono (left) and Rosette Christopher (right)
クロノ クルセイド
(Kurono Kuruseido)
Genre	Adventure, comedy, action[1]
Manga
Written by	Daisuke Moriyama
Published by	Kadokawa Shoten
English publisher
AUS
Madman Entertainment
NA
ADV Manga
SG
Chuang Yi
Demographic	Shōnen
Imprint	Dragon Comics
Magazine	Comic Dragon
Monthly Dragon Age
Original run	November 1998 – June 2004
Volumes	8 (List of volumes)
Anime television series
Directed by	Yū Kō
Produced by	Atsuya Takase
Gō Wakamatsu
Shigeaki Tomioka
Tsuneo Takeuchi
Written by	Kiyoko Yoshimura
Music by	Hikaru Nanase
Studio	Gonzo
Licensed by
AUS
Madman Entertainment
NA
Funimation
UK
Anime Limited
Original network	Fuji TV
English network
US
Showtime Beyond, Syfy
ZA
Animax
Original run	November 24, 2003 – June 10, 2004
Episodes	24 (List of episodes)
Wikipe-tan face.svg Anime and manga portal
Chrono Crusade, originally known in Japan as Chrno Crusade (Japanese: クロノ クルセイド, Hepburn: Kurono Kuruseido),[2] due to a typo,[citation needed] is a Japanese manga series written and illustrated by Daisuke Moriyama. It was originally published by Kadokawa Shoten in Comic Dragon, then a special issue of the Dragon Magazine. A 24-episode anime television series by Gonzo based on the manga ran from 2003 to 2004 on Fuji TV. The series was released in North America by ADV Manga and ADV Films, titled Chrono Crusade.

Set in New York during the 1920s, Chrono Crusade follows the story of Rosette Christopher, and her demon partner Chrono. As members of the Magdalene Order, they travel around the country eliminating demonic threats to society, while Rosette searches for her lost brother Joshua.`
	};
	// template string: `fkjkgfjgkf ${x} kdklffd`

	selectChronoCrusade() {
		this.articleService.setArticle(this.chronoCrusade);
	}

	// DI == Dependency Injection
	constructor(public articleService: ArticleService) { }

	ngOnInit(): void { }

}
