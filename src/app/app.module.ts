import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListBlogComponent } from './components/list-blog/list-blog.component';
import { BlogComponent } from './components/blog/blog.component';
import { CrearBlogComponent } from './components/crear-blog/crear-blog.component';
import { ActualizarBlogComponent } from './components/actualizar-blog/actualizar-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisualizarComponent } from './components/visualizar/visualizar.component';
import { FilterdatePipe } from './pipes/filterdate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListBlogComponent,
    BlogComponent,
    CrearBlogComponent,
    ActualizarBlogComponent,
    VisualizarComponent,
    FilterdatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
