import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Post 1',
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptatibus officiis sit ipsum laborum quos necessitatibus voluptate sint. Doloribus enim obcaecati ipsa, optio quidem asperiores exercitationem error sequi. Libero, facilis?<hr>      Deserunt provident libero debitis facilis maxime omnis animi consequuntur laboriosam voluptate, minus perferendis iure error nihil inventore porro earum dolores doloremque necessitatibus ea perspiciatis unde nobis. Sapiente quaerat eius labore?<hr>      Beatae ipsam placeat sapiente natus, at, adipisci explicabo impedit dolores eos non blanditiis neque iusto illo repellat rerum quis recusandae repudiandae, consequuntur deserunt obcaecati delectus est provident. Suscipit, voluptatum impedit!",
      loveIts: 10,
      created_at: new Date()
    },
    {
      title: 'Post 2',
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptatibus officiis sit ipsum laborum quos necessitatibus voluptate sint. Doloribus enim obcaecati ipsa, optio quidem asperiores exercitationem error sequi. Libero, facilis?<hr>      Deserunt provident libero debitis facilis maxime omnis animi consequuntur laboriosam voluptate, minus perferendis iure error nihil inventore porro earum dolores doloremque necessitatibus ea perspiciatis unde nobis. Sapiente quaerat eius labore?<hr>      Beatae ipsam placeat sapiente natus, at, adipisci explicabo impedit dolores eos non blanditiis neque iusto illo repellat rerum quis recusandae repudiandae, consequuntur deserunt obcaecati delectus est provident. Suscipit, voluptatum impedit!",
      loveIts: -2,
      created_at: new Date()
    },
    {
      title: 'Post 3',
      content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore voluptatibus officiis sit ipsum laborum quos necessitatibus voluptate sint. Doloribus enim obcaecati ipsa, optio quidem asperiores exercitationem error sequi. Libero, facilis?<hr>      Deserunt provident libero debitis facilis maxime omnis animi consequuntur laboriosam voluptate, minus perferendis iure error nihil inventore porro earum dolores doloremque necessitatibus ea perspiciatis unde nobis. Sapiente quaerat eius labore?<hr>      Beatae ipsam placeat sapiente natus, at, adipisci explicabo impedit dolores eos non blanditiis neque iusto illo repellat rerum quis recusandae repudiandae, consequuntur deserunt obcaecati delectus est provident. Suscipit, voluptatum impedit!",
      loveIts: 0,
      created_at: new Date()
    }
  ]

}
