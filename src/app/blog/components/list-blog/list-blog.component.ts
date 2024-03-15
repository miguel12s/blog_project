import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { BlogService } from '../../../core/services/blog.service';
import { Blog } from '../../../core/interfaces/blog';


@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrl: './list-blog.component.css'
})
export class ListBlogComponent implements OnInit {
  public blogs:Blog[]=[]
  
  constructor(private blogservice:BlogService){}
  ngOnInit(): void {
    
    this.blogs=this.blogservice.blog
    
  }

}
