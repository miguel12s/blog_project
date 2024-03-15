import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './atoms/button/button.component';
import {InputComponent} from './atoms/input/input.component';
import { ParagraphComponent } from './atoms/paragraph/paragraph.component';
import { AlertComponent } from './atoms/alert/alert.component'



@NgModule({
  declarations: [InputComponent,ButtonComponent, ParagraphComponent, AlertComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule
  ],
  exports:[
    InputComponent,ButtonComponent,ParagraphComponent,AlertComponent
  ]
})
export class MoleculesModule { }
