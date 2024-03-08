import { Component, Input } from '@angular/core';
import { Blog } from '../../interfaces/blog';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrl: './visualizar.component.css'
})
export class VisualizarComponent {
  @Input() blogData!:Blog
  constructor(){
    console.log(this.blogData);
    
  }
}
