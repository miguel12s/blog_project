import { Component, EventEmitter, Output } from '@angular/core';
import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Output() wordSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() ocultarComponente: EventEmitter<boolean> = new EventEmitter();
  constructor(private service:BlogService){

  }
  private $search=this.service.$search

  crear(event: any) {
    this.ocultarComponente.emit(event);
  }
  onChange(event: any) {
    const palabra = event.target.value;
    this.service.getBlogsForSearch(palabra)
    this.wordSearch.emit(palabra)
  }


}
