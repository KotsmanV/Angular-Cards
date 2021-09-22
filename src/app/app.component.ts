import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "Hanged Man's Tree",
      imageUrl: "assets/images/hanged-mans-tree.jpg",
      username: 'Geralt',
      content: "Many bodies hanging from there, a real feast for the crows."
    },
    {
      title: "Gondolin",
      imageUrl: "assets/images/gondolin.jpg",
      username: 'Turin',
      content: "Nice city, the Dark Lord will never find it."
    },
    {
      title: "Morgoth curses Turin",
      imageUrl: "assets/images/morgoth-punishes-hurin.jpg",
      username: 'Morgoth',
      content: "Sit now there; and look out upon the lands where evil and despair shall come upon those whom you lovest. Thou hast dared to mock me, and to question the power of Melkor, Master of the fates of Arda. Therefore with my eyes thou shalt see, and with my ears shalt hear; and never shalt thou move from this place until all is fulfilled unto its bitter end."
    }
  ]
}
