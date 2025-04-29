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
      Tab: 'Ismart',
      Orgenization: 'Devanasoft Pvt. Ltd.',
      Title: 'Full Stack Developer',
      // Date: 'Currently Working',
      Description: [
        'Currently working as a Full Stack Developer at a Devanasoft Pvt. Ltd.(Fintech company) that provides mobile banking services to cooperatives.',
        'My responsibilities include implementing RESTful APIs in the backend (Java Spring) and handing them over to the mobile or frontend teams for integration.',
        'I actively debug issues and errors using tools like Postman and Graylog, ensuring smooth system performance.',
        'Lead a team of interns in the development of a Meeting Management System, coordinating tasks and mentoring team members.',
        'Modernized and redesigned several components of the company’s legacy dashboard, replacing outdated pages with responsive, modern design and user-friendly interfaces.',
        'Contributed to scalable code practices, problem-solving, and bug fixing in both new features and existing systems.',
        'Collaborated closely with cross-functional teams to ensure quality, consistency, and timely delivery.',
        'Regularly involved in API testing and error validation using Postman, and practively resolved backend issues identified through logs and testing.'
      ],
      // Link: [
      //   'https://github.com/yourusername/meeting-management-system-backend',
      //   'https://github.com/yourusername/meeting-management-system-frontend'
      // ]
    }
    // {
    //   Tab: 'Education',
    //   Orgenization: 'University of Technology and Education',
    //   Title: 'IT Student',
    //   Date: '2021 — Present',
    //   Description: [
    //     'I am the first salutatorian of 2021. During my studies, I was honored to receive a scholarship, which is a great motivation for me to continue to strive and improve in acquiring knowledge.'
    //   ]
    // }
  ];

  active = 0

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }
}
