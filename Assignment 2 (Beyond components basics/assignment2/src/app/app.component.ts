import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootItems = ['Apples', 'Bananas', 'Cherries'];

  onItemWassAdded(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);

  }
}
