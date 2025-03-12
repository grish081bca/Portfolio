import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'Work',
      Orgenization: 'Techzen company limited',
      Title: 'Fullstack Developer Intern',
      Date: '19/08/2024 - 11/10/2024',
      Description: [
        'I am a fullstack developer intern at Techzen company limited. During my internship, I have been working on a project to build an online learning platform website for the company. I am responsible for the front-end (VueJs) and back-end (Spring boot) of the website. I have gained a lot of experience in web development and teamwork follow Agile Scrum methodology.',
      ],
      Link: [
        'https://github.com/lethanhtuan939/Techlearn-BE',
        'https://github.com/lethanhtuan939/Techlearn-FE'
      ]
    },
    {
      Tab: 'Education',
      Orgenization: 'University of Technology and Education',
      Title: 'IT Student',
      Date: '2021 — Present',
      Description: [
        'I am the first salutatorian of 2021. During my studies, I was honored to receive a scholarship, which is a great motivation for me to continue to strive and improve in acquiring knowledge.'
      ]
    }
  ];

  active = 0

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }
}
