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
  showComponent:string="list"
  public blog!:Blog
public blogData!: Blog;
public blogd!: Blog;


  constructor(private blogservice:BlogService){}
  ngOnInit(): void {
    this.blogs=this.blogservice.blog
    
  }
  crear(event:any){
    
    this.showComponent="create"

    }
  actualizar(blog:Blog){
    console.log('hola desde actualizar list')
    this.showComponent="list"

    
  }
  update(blog:Blog){
console.log('hola desde actualizar');

    this.blog=blog   
    this.showComponent="update"
    
    
  }
  notification(blog:Blog){
   this.blogd=blog
   this.showComponent="views"

    
  }

  crearEntrada(select:string){
this.showComponent=select
  }

}
