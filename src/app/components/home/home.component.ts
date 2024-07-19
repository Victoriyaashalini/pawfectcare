import { Component } from '@angular/core';
import { HomecarouselComponent } from "../../carousel/homecarousel/homecarousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomecarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
