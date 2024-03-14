import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { BlogService } from '../../../core/services/blog.service';
import { Blog } from '../../../core/interfaces/blog';


@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrl: './list-blog.component.css'
})
export class ListBlogComponent implements OnChanges {
  @Output() update:EventEmitter<Blog>=new EventEmitter()
  @Output() notification:EventEmitter<Blog>=new EventEmitter()
  @Input() word!:string
  public blogs:Blog[]=[]
  title = 'blog';
  
  constructor(private blogservice:BlogService){}
    ngOnChanges(): void {
    this.blogs=this.blogservice.blog
    console.log(this.blogs);
    
  }

  //   onCLick(){
  //   this.update.emit(true)
    
  // }
  updateBlog(blog:Blog){
    console.log('hola desde list-blog');
    this.update.emit(blog)
    
  }
  notificationf(blog:Blog){
    this.notification.emit(blog)
  } 
}
