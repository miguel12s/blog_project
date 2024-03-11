import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Blog } from '../../interfaces/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() blog!: Blog
  @Output() updateBlog: EventEmitter<Blog> = new EventEmitter()
  @Output() notification: EventEmitter<Blog> = new EventEmitter()
  dateToday!:Date


  constructor(){
    this.dateToday = new Date(new Date().toLocaleString("en-US", {timeZone: "America/Bogota"}));
    console.log(this.dateToday);
    
  
  }

  update(blog: Blog) {
    this.updateBlog.emit(blog)
    console.log('hola');

  }
  onClick(blog: Blog) {
    this.notification.emit(blog)
  }
}
