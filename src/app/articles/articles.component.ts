import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from './Article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private articles : Article[];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(article => this.articles = article);
  }

  delete(article: Article){
    this.articleService.deleteArticle(article).subscribe(_=>{ this.articleService.getArticles().subscribe(article => this.articles = article); });
  }

  onInputText(userText:string){
    this.articleService.searchArticles(userText).subscribe(article => {this.articles = article;} );
  }
}
