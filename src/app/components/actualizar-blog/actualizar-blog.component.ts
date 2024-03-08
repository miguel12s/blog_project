import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../interfaces/blog';

@Component({
  selector: 'app-actualizar-blog',
  templateUrl: './actualizar-blog.component.html',
  styleUrl: './actualizar-blog.component.css'
})
export class ActualizarBlogComponent implements OnChanges {
  crearBlog!: FormGroup
  @Input() blog!: Blog
  @Output() update: EventEmitter<Blog> = new EventEmitter()
  constructor(private service: BlogService, private fb: FormBuilder) {
    this.crearBlog = this.initForm()
  }

  ngOnChanges(): void {
    this.crearBlog.patchValue({
      title: this.blog.title,
      description: this.blog.description,
      author: this.blog.author,
      date: this.blog.date
    })
  }

  initForm(): FormGroup {
    return this.fb.group(
      {
        title: ['', Validators.required],
        description: ['', Validators.required],
        author: ['', Validators.required],
        date: ['', Validators.required],

      }
    )
  }
  onSubmit() {
    const blogcreate: Blog = this.crearBlog.value
    console.log(blogcreate,this.blog.id);
    
    this.service.actualizarBlog(blogcreate, this.blog.id)
    this.update.emit()

  }


}
