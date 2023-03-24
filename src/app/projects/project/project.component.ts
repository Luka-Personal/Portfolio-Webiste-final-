import { Component, Input, OnInit } from '@angular/core';
import Project from 'src/app/models/projects.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  @Input() mainObj!: Project;
  constructor() {}

  callbackHover(e: any) {
    let bounds = e.target.closest(`.project-box`).getBoundingClientRect();
    let xPos = e.clientX - bounds.left;
    let yPos = e.clientY - bounds.top;
    let contWidth = e.target.closest(`.project-box`).clientWidth / 2;
    let contHeight = e.target.closest(`.project-box`).clientHeight / 2;
    e.target.closest(`.project-box`).style.transform = `rotateX(${
      (contWidth - xPos) / 45
    }deg) rotateY(${
      (contHeight - yPos) / 45
    }deg) perspective(1px) translateZ(0)`;
  }
  callbackOut(e: any) {
    e.target.closest(
      `.project-box`
    ).style.transform = `perspective(1px) translateZ(0)`;
  }
}
