import { Component, EventEmitter, Output } from '@angular/core';
import { Blog } from '../../interfaces/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrl: './list-blog.component.css'
})
export class ListBlogComponent {
  @Output() update:EventEmitter<Blog>=new EventEmitter()
  @Output() notification:EventEmitter<Blog>=new EventEmitter()

  public blogs:Blog[]=[]
  title = 'blog';

  constructor(private blogservice:BlogService){}
    ngOnInit(): void {
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
