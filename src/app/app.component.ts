import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Grish Shrestha | Software Developer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Full Stack Developer, Java, Spring Boot, Angular, Software Developer, Grish Shrestha, Software Engineer, Frontend, Backend, Software Applications' },
      { name: 'description', content: 'Grish Shrestha is a passionate Full Stack Developer skilled in building Software applications using Java Spring Framework and Angular. Eager to learn, contribute, and grow through real-world development experience.' }
    ]);
    this.metaService.updateTag({ name: 'author', content: 'Grish Shrestha' });

    AOS.init();
  }
}
