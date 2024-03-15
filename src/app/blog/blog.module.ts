import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBlogComponent } from './components/list-blog/list-blog.component';
import { BlogComponent } from './components/blog/blog.component';
import { CrearBlogComponent } from './components/crear-blog/crear-blog.component';
import { ActualizarBlogComponent } from './components/actualizar-blog/actualizar-blog.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';
import { FilterdatePipe } from './pipes/filterdate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoleculesModule } from '../molecules/molecules.module';
import { IconUpdateComponent } from './components/icon-update/icon-update.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ContainerBlogComponent } from './components/container-blog/container-blog.component';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [ListBlogComponent,
    BlogComponent,
    CrearBlogComponent,
    ActualizarBlogComponent,
    VisualizarComponent,
    FilterdatePipe,
    IconUpdateComponent,
    FilterPipe,
    ContainerBlogComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,MoleculesModule,FormsModule,BlogRoutingModule
  ],
  exports:[
    BlogComponent,
    CrearBlogComponent,
    ActualizarBlogComponent,
    VisualizarComponent,ListBlogComponent
  ]
})
export class BlogModule { }
