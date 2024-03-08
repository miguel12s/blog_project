import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../interfaces/blog';

@Component({
  selector: 'app-crear-blog',
  templateUrl: './crear-blog.component.html',
  styleUrl: './crear-blog.component.css'
})
export class CrearBlogComponent {
public fb=inject(FormBuilder)
crearBlog!:FormGroup
@Output() crear:EventEmitter<any>=new EventEmitter()
constructor(private service:BlogService){
  this.crearBlog=this.initForm()
}

initForm():FormGroup{
  return this.fb.group(
    {
      title:['',Validators.required],
      description:['',Validators.required],
      author:['',Validators.required],
      date:['',Validators.required],

    }
  )
}  
onSubmit() {
const blog:Blog=this.crearBlog.value
this.service.crearBlog(blog)
this.crear.emit("list")
}

}
