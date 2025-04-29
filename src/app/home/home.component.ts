import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  titles: string[] = [ 'Full Stack Developer', 'Web Designer', 'Software Engineer', 'Programmer', 'Prompt Engineer' ];
  currentTitle: string = '';
  currentIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 150;
  deletingSpeed: number = 75;
  pauseDuration: number = 2000;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId); // To ensure code runs only on the browser
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.type(); // Initialize the typing effect when the page loads
    }
  }

  private type(): void {
    const currentTitleLength = this.titles[this.currentIndex].length;

    if (this.isDeleting) {
      // Deleting the text
      this.currentTitle = this.titles[this.currentIndex].substring(0, this.currentTitle.length - 1);

      if (this.currentTitle.length === 0) {
        this.isDeleting = false; // Stop deleting
        this.currentIndex = (this.currentIndex + 1) % this.titles.length; // Move to next title
        setTimeout(() => this.type(), this.pauseDuration); // Wait before starting to type
      } else {
        setTimeout(() => this.type(), this.deletingSpeed); // Speed of deletion
      }
    } else {
      // Typing the text
      this.currentTitle = this.titles[this.currentIndex].substring(0, this.currentTitle.length + 1);

      if (this.currentTitle.length === currentTitleLength) {
        this.isDeleting = true; // Start deleting once the full word is typed
        setTimeout(() => this.type(), this.pauseDuration); // Pause before starting deletion
      } else {
        setTimeout(() => this.type(), this.typingSpeed); // Speed of typing
      }
    }
  }
}
