import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

titles: string[] = [
'Offshore SAP Basis Consultant Trainee',
'Software Engineer @ HCLTech',
'SAP Basis & ABAP Enthusiast',
'Full Stack Developer',
'Technology Explorer'
];

currentTitle: string = '';
currentIndex: number = 0;
isDeleting: boolean = false;

typingSpeed: number = 100;
deletingSpeed: number = 50;
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



}
}
