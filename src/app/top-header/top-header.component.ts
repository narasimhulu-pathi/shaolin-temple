import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../interfaces/route.constants';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  tabs = APP_ROUTES;
  activeTab = 'Home';
  background: ThemePalette = undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

}
