import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  games = [
    { name: 'Game 1', thumbnail: 'assets/game1.jpg' },
    { name: 'Game 2', thumbnail: 'assets/game2.jpg' },
    { name: 'Game 3', thumbnail: 'assets/game3.jpg' }
  ];

  sideProjects = [
    { name: 'Project A', route: '/project-a' },
    { name: 'Project B', route: '/project-b' }
  ];
}
