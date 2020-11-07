import { Component } from '@angular/core';
import {image, lorem, name, date} from 'faker';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent {

  posts = [
    {title: lorem.word(), authorImg: image.avatar(),author: name.firstName() + ' ' + name.lastName(), authorProfile: '@' + name.firstName().toLowerCase() + name.lastName().toLowerCase(), content: lorem.sentences(), time: date.recent()},
    {title: lorem.word(), authorImg: image.avatar(),author: name.firstName() + ' ' + name.lastName(), authorProfile: '@' + name.firstName().toLowerCase() + name.lastName().toLowerCase(), content: lorem.sentences(), time: date.recent()},
    {title: lorem.word(), authorImg: image.avatar(),author: name.firstName() + ' ' + name.lastName(), authorProfile: '@' + name.firstName().toLowerCase() + name.lastName().toLowerCase(), content: lorem.sentences(), time: date.recent()},
    {title: lorem.word(), authorImg: image.avatar(),author: name.firstName() + ' ' + name.lastName(), authorProfile: '@' + name.firstName().toLowerCase() + name.lastName().toLowerCase(), content: lorem.sentences(), time: date.recent()},
    {title: lorem.word(), authorImg: image.avatar(),author: name.firstName() + ' ' + name.lastName(), authorProfile: '@' + name.firstName().toLowerCase() + name.lastName().toLowerCase(), content: lorem.sentences(), time: date.recent()},
  ]
}
