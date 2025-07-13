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
      ghLink: 'https://github.com/grish081bca/Ramro_Bazar-Backend-',
      demoLink: ''
    },
    {
      imgs : [
        '../../../../assets/images/Food_Rescue/Food Rescue 1.png',
        '../../../../assets/images/Food_Rescue/Food Rescue 2.png',
        '../../../../assets/images/Food_Rescue/Food Rescue 3.png',
        '../../../../assets/images/Food_Rescue/Food Rescue 4.png',
        '../../../../assets/images/Food_Rescue/Food Rescue 5.png',
        '../../../../assets/images/Food_Rescue/Food Rescue 6.png',
        '../../../../assets/images/Food_Rescue/Food Rescue 7.png',
        '../../../../assets/images/Food_Rescue/Food Rescue 8.png',
        '../../../../assets/images/Food_Rescue/Food Rescue 9.png',
        '../../../../assets/images/Food_Rescue/Food Rescue 10.png',
      ],
      Title : 'Food_Rescue',
      Description : 'Food Rescue is a cross-platform solution designed to connect restaurants, industries, and food providers with customers seeking affordable meals. Businesses can post leftover food that would otherwise go to waste, and customers can order these meals at a significantly reduced cost.',
      Technologies : ['React', 'Flutter', 'Java', 'SpringBoot', 'RestAPIs', 'Mysql','Monolithic Architecture', 'Spring Security', 'JWT', 'Meven', 'SCSS', 'HTML5'],
      ghLink : 'https://github.com/gitSuyog404/nullPointers_hackForBusiness',
      demoLink: ''
    }
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
