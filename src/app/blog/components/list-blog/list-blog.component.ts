import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { BlogService } from '../../../core/services/blog.service';
import { Blog } from '../../../core/interfaces/blog';
import { tap } from 'rxjs';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrl: './list-blog.component.css',
})
export class ListBlogComponent implements OnInit {
  public blogs: Blog[] = [];
  private service = inject(BlogService);
  public $search=this.service.searchObservable
  public word!:string
  constructor(private blogservice: BlogService) {}
  ngOnInit(): void {
    this.$search.pipe(
      tap((word:string)=>{
        console.log(word);
        this.word=word
      })
    ).subscribe()
    this.blogs = this.blogservice.blog;

  }


}
