import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogs: Blog[] = [
    {
      id: 1,
      title: 'aprendiendo a programar',
      description: 'segundo dia aprendiendo',
      author: 'miguel',
      date: '2024-03-27',
    },
    {
      id: 2,
      title: 'aprendiendo a programar',
      description: 'tercer dia aprendiendo',
      author: 'miguel',
      date: '2024-02-27',
    },
    {
      id: 3,
      title: 'aprendiendo a programar',
      description: 'cuarto dia aprendiendo',
      author: 'miguel',
      date: '2024-01-27',
    },
    {
      id: 4,
      title: 'aprendiendo a programar',
      description: 'quinto dia aprendiendo',
      author: 'miguel',
      date: '2023-03-27',
    },
  ];
  constructor() {}

  get blog() {
    return this.blogs;
  }

  showComponentsApp(): boolean {
    return true;
  }
  crearBlog(blog: Blog) {
    blog.id = this.blogs.length + 1;
    this.blogs.push(blog);
  }
  actualizarBlog(blog: Blog, id: number | undefined) {
    console.log(blog);

    const index = this.blogs.findIndex((blog) => blog.id == id);
    console.log(index);

    if (index != -1) {
      blog.id = id;
      this.blogs[index] = blog;

      console.log('encontrado');
    } else {
      console.log('blog no encontrado');
    }
  }
}
