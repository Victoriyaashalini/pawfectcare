import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-adoption',
  standalone: true,
  imports:[],
  templateUrl: './adoption.component.html',
  styleUrl: './adoption.component.scss'
})
export class AdoptionComponent implements OnInit {
  images: string[] = [
    '../../../assets/images/erica-magugliani-q_TH75_MFTc-unsplash.webp',
    '../../../assets/images/hanny-naibaho--Go4DH2pZbc-unsplash.jpg',
    '../../../assets/images/joey-banks-_hF2yHMFMLc-unsplash.jpg'
  ];
  currentImageIndex: number = 0;
  isFirstImage: boolean = true;

  ngOnInit(): void {
    this.preloadImages();
    this.changeBackgroundImage();
  }

  preloadImages(): void {
    this.images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }

  changeBackgroundImage(): void {
    const heroContainer = document.querySelector('.hero-container') as HTMLElement;
    heroContainer.style.backgroundImage = `url(${this.images[this.currentImageIndex]})`;
    
    setTimeout(() => {
      this.isFirstImage = false;
      this.scheduleNextImageChange();
    }, 0); // Immediately load the first image
  }

  scheduleNextImageChange(): void {
    setTimeout(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      const heroContainer = document.querySelector('.hero-container') as HTMLElement;
      heroContainer.style.backgroundImage = `url(${this.images[this.currentImageIndex]})`;

      this.scheduleNextImageChange();
    }, this.isFirstImage ? 0 : 5000); // Set a longer interval for subsequent images
  }
}