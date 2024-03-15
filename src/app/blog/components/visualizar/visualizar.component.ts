import { Component, Input, inject } from '@angular/core';
import { Blog } from '../../../core/interfaces/blog';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../core/services/blog.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrl: './visualizar.component.css'
})
export class VisualizarComponent {
  private index!:number
  private router=inject(ActivatedRoute)
  public blogData?:Blog
  private sv=inject(BlogService)
  constructor(){
    this.index=this.router.snapshot.params['id']
    this.blogData=this.sv.getBlogForId(this.index)
    console.log(this.blogData);
    
  }
}
