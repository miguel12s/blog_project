import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Blog } from '../../../core/interfaces/blog';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() blog!: Blog
  @Output() updateBlog: EventEmitter<Blog> = new EventEmitter()
  @Output() notification: EventEmitter<Blog> = new EventEmitter()
  dateToday!:any


  constructor(){
    const today =new Date()
   today.setDate(today.getDate());

    this.dateToday = today.toISOString().substring(0, 10);

  
  }

  update(blog: Blog) {
    this.updateBlog.emit(blog)

  }
  onClick(blog: Blog) {
    this.notification.emit(blog)
  }
}
