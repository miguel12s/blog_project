import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBlogComponent } from './components/list-blog/list-blog.component';
import { ContainerBlogComponent } from './components/container-blog/container-blog.component';
import { CrearBlogComponent } from './components/crear-blog/crear-blog.component';
import { ActualizarBlogComponent } from './components/actualizar-blog/actualizar-blog.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';

const routes: Routes = [{
path:'',component:ContainerBlogComponent,children:[
    {path:'list',component:ListBlogComponent},
    {path:'newList',component:CrearBlogComponent},
    {path:'updateList/:id',component:ActualizarBlogComponent},
    {path:'visualizar/:id',component:VisualizarComponent},  
    {path:'',redirectTo:'list',pathMatch:'full'}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
