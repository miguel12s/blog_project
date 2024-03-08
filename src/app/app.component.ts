import { Component, OnInit } from '@angular/core';
import { Blog } from './interfaces/blog';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public blogs:Blog[]=[]
  showComponent=false
  showUpdate=false
  showVisualizar=false
  showList=true
  public blog!:Blog
public blogData!: Blog;
public blogd!: Blog;


  constructor(private blogservice:BlogService){}
  ngOnInit(): void {
    this.blogs=this.blogservice.blog
    console.log(this.blogs);
    
  }
  crear(event:any){
    console.log(event);
    
    this.showComponent=event
    this.showUpdate=false

    }
  actualizar(blog:Blog){
    console.log(blog)
    console.log('actualizar');
    
    this.showComponent=true
  }
  update(blog:Blog){

    this.blog=blog   
    this.showUpdate=true   
    this.showComponent=false 
    console.log('hola desde update');
    
  }
  notification(blog:Blog){
   this.blogd=blog
   console.log(this.blogd);
   
   this.showVisualizar=true
   this.showUpdate=false
   this.showComponent=false
   this.showList=false
    
  }

}
