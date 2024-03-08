import { Component, EventEmitter, Output } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() ocultarComponente: EventEmitter<boolean> = new EventEmitter()
  public showComponent = false
  // constructor(private service:BlogService){}
  crear() {
    console.log('entras a crear');
    
    this.ocultarComponente.emit(true)



  }
}
