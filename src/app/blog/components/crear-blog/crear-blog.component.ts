import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../../core/services/blog.service';
import { Blog } from '../../../core/interfaces/blog';


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
      title: new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      author:new FormControl('',Validators.required),
      date:new FormControl('',Validators.required),

    }
  )
}   
onSubmit() {
const blog:Blog=this.crearBlog.value
console.log(blog.date);

this.service.crearBlog(blog)
this.crear.emit("list")
}

}
