import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {  
  @Output() wordSearch:EventEmitter<string> =new EventEmitter<string>

  @Output() ocultarComponente: EventEmitter<boolean> = new EventEmitter()
  public showComponent = false
  crear(event:any) {    
    this.ocultarComponente.emit(event)



  }
  onChange(event: any) {
    const palabra=event.target.value
    this.wordSearch.emit(palabra)
    
    
    }
}
