import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-post-list-component-item",
  templateUrl: "./post-list-component-item.component.html",
  styleUrls: ["./post-list-component-item.component.css"]
})
export class PostListComponentItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {}

  ngOnInit() {}

  addLike() {
    this.loveIts++;
  }

  removeLike() {
    this.loveIts--;
  }
}
