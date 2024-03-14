import { Pipe, PipeTransform } from '@angular/core';
import { Blog } from '../../core/interfaces/blog';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(blogs: Blog[],word:string): Blog[] {  

    console.log(word)
    if(word!==""){
        const user:Blog[]=blogs.filter(
          (blog:Blog)=>
            
            blog.title.toLowerCase().includes(word.toLowerCase())
          
        )
        console.log(user);
        return user
       }
        return blogs
       
    
    
      }

}
