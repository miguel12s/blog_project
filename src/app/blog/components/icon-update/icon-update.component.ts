import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../../../core/interfaces/blog';

@Component({
  selector: 'app-icon-update',
  templateUrl: './icon-update.component.html',
  styleUrl: './icon-update.component.css'
})
export class IconUpdateComponent {
@Input() blog!:Blog

@Output() update:EventEmitter<Blog>=new EventEmitter()

updateBlog(){
  this.update.emit(this.blog)
}
}
