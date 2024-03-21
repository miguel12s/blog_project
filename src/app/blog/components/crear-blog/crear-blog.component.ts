import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../../core/services/blog.service';
import { Blog } from '../../../core/interfaces/blog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-blog',
  templateUrl: './crear-blog.component.html',
  styleUrl: './crear-blog.component.css'
})
export class CrearBlogComponent {
public fb=inject(FormBuilder)
public router=inject(Router)
crearBlog!:FormGroup
@Output() crear:EventEmitter<any>=new EventEmitter()
constructor(private service:BlogService){
  this.crearBlog=this.initForm()
}

initForm():FormGroup{
  return this.fb.group(
    {
      title: new FormControl('',[Validators.required,Validators.minLength(5)]),
      description:new FormControl('',[Validators.required,Validators.minLength(20)]),
      author:new FormControl('',[Validators.required,Validators.minLength(10)]),
      date:new FormControl('',[Validators.required]),

    }
  )
}   
onSubmit() {
const blog:Blog=this.crearBlog.value
console.log(blog.date);

this.service.crearBlog(blog)
this.router.navigate(['blog'])
}

}
