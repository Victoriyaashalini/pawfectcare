import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homecarousel',
  standalone: true,
  imports: [NgbCarouselModule,CommonModule],
  templateUrl: './homecarousel.component.html',
  styleUrl: './homecarousel.component.scss'
})
export class HomecarouselComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
