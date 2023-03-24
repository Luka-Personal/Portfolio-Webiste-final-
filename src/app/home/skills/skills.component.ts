import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skillsArray = [
    'HTML5',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Netlify',
    'Photoshop',
    'Angular',
  ];
}
