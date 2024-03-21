import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../../core/services/blog.service';
import { Blog } from '../../../core/interfaces/blog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-blog',
  templateUrl: './actualizar-blog.component.html',
  styleUrl: './actualizar-blog.component.css'
})
export class ActualizarBlogComponent implements OnInit {
  crearBlog!: FormGroup
  @Input() blog!: Blog
  @Output() update: EventEmitter<Blog> = new EventEmitter()
  private index!: number
  private readonly routerSna = inject(ActivatedRoute)

  constructor(private service: BlogService, private fb: FormBuilder, private router: Router) {
    this.crearBlog = this.initForm()
  }
  ngOnInit(): void {
    this.index = this.routerSna.snapshot.params['id']
    const blogf = this.service.getBlogForId(this.index)
    this.crearBlog.patchValue({
      title: blogf?.title,
      description: blogf?.description,
      author: blogf?.author,
    })

  }

  initForm(): FormGroup {
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
    const blogcreate: Blog = this.crearBlog.value
    console.log(this.blog);

    this.service.actualizarBlog(blogcreate, this.index)
    this.router.navigate(['/blog/list'])


  }


}
