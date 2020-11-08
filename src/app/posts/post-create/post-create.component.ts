import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  enteredTitle: string = "";
  enteredContent: string = "";
  afteraddPost: string = '';

  @Output() postCreated = new EventEmitter();

  onaddPost() {

    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };

    this.postCreated.emit(post);
    this.afteraddPost = 'Post successfully added';
  }
}
