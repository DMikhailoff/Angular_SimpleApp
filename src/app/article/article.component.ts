import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../articles/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input()
  article: Article;

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  delete(){
    this.deletedArticle.emit(this.article);
  }

  ngOnInit() {
  }

}
