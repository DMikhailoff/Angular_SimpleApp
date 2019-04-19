import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../articles/Article';

@Component({
  selector: 'app-one-article',
  templateUrl: './one-article.component.html',
  styleUrls: ['./one-article.component.css']
})
export class OneArticleComponent implements OnInit {
  article: Article;

  constructor(private articleService: ArticleService, private activatedRouter: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(value => { this.articleService.getOneArticle(value['id']).subscribe(article => { this.article = article}); } )
  }

  delete(article: Article){
    this.articleService.deleteArticle(article).subscribe(_=>{ this.router.navigateByUrl("/"); });
  }

}
