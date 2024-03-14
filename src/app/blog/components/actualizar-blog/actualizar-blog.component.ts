import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../../core/services/blog.service';
import { Blog } from '../../../core/interfaces/blog';

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
    })
  }

  initForm(): FormGroup {
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
    const blogcreate: Blog = this.crearBlog.value
    this.service.actualizarBlog(blogcreate, this.blog.id)
    this.update.emit()

  }


}
