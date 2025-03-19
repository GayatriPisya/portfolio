import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  titles: string[] = [ 'Full Stack Developer', 'Web Designer', 'Software Engineer','Programmer', 'Prompt Engineer'];
  currentTitle: string = '';
  currentIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 150;
  deletingSpeed: number = 75;
  pauseDuration: number = 2000;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.type();
    }
  }

  private type(): void {
    const currentTitleLength = this.titles[this.currentIndex].length;

    if (this.isDeleting) {
      this.currentTitle = this.titles[this.currentIndex].substring(0, this.currentTitle.length - 1);

      if (this.currentTitle.length === 0) {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.titles.length;
        setTimeout(() => this.type(), this.pauseDuration);
      } else {
        setTimeout(() => this.type(), this.deletingSpeed);
      }
    } else {
      this.currentTitle = this.titles[this.currentIndex].substring(0, this.currentTitle.length + 1);

      if (this.currentTitle.length === currentTitleLength) {
        this.isDeleting = true;
        setTimeout(() => this.type(), this.pauseDuration);
      } else {
        setTimeout(() => this.type(), this.typingSpeed);
      }
    }
  }
}
