import { Component, OnInit } from '@angular/core';
import { BlogService } from './core/services/blog.service';
import { Blog } from './core/interfaces/blog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public blogs:Blog[]=[]
  showComponent:string="list"
  public blog!:Blog
public blogData!: Blog;
public blogd!: Blog;
word=""


  wordSearch(word: string) {
    console.log(word);
    
    this.word=word
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
