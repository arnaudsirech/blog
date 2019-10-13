import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "blog";

  posts = [
    {
      title: "Mon premier post",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate quidem. Dicta odio optio, ab qui exercitationem, perferendis reprehenderit iste nemo provident quasi dolore sunt quia at dolores fugiat culpa.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon deuxieme post",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate quidem. Dicta odio optio, ab qui exercitationem, perferendis reprehenderit iste nemo provident quasi dolore sunt quia at dolores fugiat culpa.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon troisieme post",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate quidem. Dicta odio optio, ab qui exercitationem, perferendis reprehenderit iste nemo provident quasi dolore sunt quia at dolores fugiat culpa.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon quatrieme post",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cupiditate quidem. Dicta odio optio, ab qui exercitationem, perferendis reprehenderit iste nemo provident quasi dolore sunt quia at dolores fugiat culpa.",
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
