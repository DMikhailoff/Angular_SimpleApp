import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../articles/Article';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {
  articleForm : FormGroup;

  @Output()
  createdArticle : EventEmitter<Article> = new EventEmitter();

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router: Router) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  createArticle() {
    let newArticle: Article;

    const formModel = this.articleForm.value;
    newArticle = {
      id : Date.now(),
      title : formModel.title,
      content : formModel.content,
      authors : formModel.authors
    }

    this.articleService.createdArticle(newArticle).subscribe(_ => { this.router.navigateByUrl("/"); });
  }

  ngOnInit() {
  }

}
