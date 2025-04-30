import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  Projects = [
    {
      imgs: [

        '../../../../assets/images/E-Commerce/frontend4.png',
        '../../../../assets/images/E-Commerce/frontend3.png',
        '../../../../assets/images/E-Commerce/frontend2.png',
        '../../../../assets/images/E-Commerce/frontend1.png',
      ],
      Title: 'E-Commerce',
      Description: 'A full-stack e-commerce platform that allows users to browse, buy, and manage products. The application supports secure authentication, product management, and user roles.',
      Technologies: ['Angular 18', 'SCSS', 'Spring Boot', 'MySQL', 'HTML', 'Typescript', 'Spring Security', 'JWT', 'Maven', 'Monolithic Architecture', 'REST API', 'Java 21'],
      ghLink: 'https://github.com/lethanhtuan939/Health-Declaration',
      demoLink: ''
    },
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000
  }

  @ViewChild('imgContainer') imgContainer!: ElementRef;

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

  debug() {
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
