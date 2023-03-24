import { Component, OnInit } from '@angular/core';
import Project from '../models/projects.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  testing!: Project[];
  constructor(private service: ProjectsService) {}
  ngOnInit(): void {
    this.testing = this.service.getTest();
  }
}
