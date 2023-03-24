import { Injectable } from '@angular/core';
import Project from './models/projects.model';
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  test: Project[] = [
    {
      id: 0,
      webUrl: 'https://weathersitee.netlify.app',
      photoUrl: 'assets/images/weather.jpeg',
      githubUrl: 'https://github.com/Luka-Personal/Weather-Forecast-Project',
      usedRecourses: ['JavaScript', 'HTML5', 'CSS', 'Leaflet', 'Geoapify'],
      titles: ['weather', '.site'],
      description: `A website that allows you to search for the current weather and forecast in any location using a search bar or your device's geolocation.`,
      mySite: true,
    },
    {
      id: 1,
      webUrl: 'https://country-pop-game.netlify.app',
      photoUrl: 'assets/images/webPop.jpeg',
      githubUrl: 'https://github.com/Luka-Personal/Country-Pop-Game',
      usedRecourses: ['TypeScript', 'HTML5', 'CSS', 'REST', 'Angular'],
      titles: ['country', '.pop'],
      description: `A game where you will be presented with a set of countries to choose from. If you select the country with the largest population, you will earn points. Otherwise, you will lose points.`,
      mySite: true,
    },
    {
      id: 0,
      webUrl: 'https://tic-game-toe.netlify.app/',
      photoUrl: 'assets/images/ticTac.jpeg',
      githubUrl: 'https://github.com/Luka-Personal/Tic-tac-toe--game',
      usedRecourses: ['JavaScript', 'HTML5', 'CSS'],
      titles: ['Tic-tac', '.toe'],
      description: `A game where players take turns placing their marker (either "X" or "O") on a 3x3 grid with the goal of getting three in a row horizontally, vertically, or diagonally.`,
      mySite: true,
    },
    {
      id: 1,
      webUrl: 'https://github.com/Luka-Personal',
      photoUrl: 'assets/images/github.jpeg',
      githubUrl: '',
      usedRecourses: ['None'],
      titles: ['git', '.hub'],
      description: `A site where you can check out all my projects. This is a platform where you can showcase and collaborate on coding projects.`,
      mySite: false,
    },
  ];
  constructor() {}

  getTest() {
    return this.test;
  }
}
