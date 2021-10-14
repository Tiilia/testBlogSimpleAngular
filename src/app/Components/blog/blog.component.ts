import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() title: string = ""
  @Input() content: string = ""
  @Input() loveIts: number = 0
  @Input() created_at: Date = new Date()


  constructor() { }

  ngOnInit(): void {
  }

}
