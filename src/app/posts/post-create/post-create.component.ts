import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  afteraddPost: String = '';
  onaddPost() {
    this.afteraddPost = 'Post successfully added';
  }
}
