import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'field-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  solarBodies = [
    'Mercury',
    'Venus',
    'Moon',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
    'Pluto',
    'Sun',
    'Ganymede',
    'Europa',
    'Callisto',
    'Io',
    'Titan',
    'Ceres',
    'Pallas',
    'Juno',
    'Vesta',
    'Ephemeris'
  ];

  systems =[
    'ICRS',
    'FK5 J2000',
    'galactic',
    'eliptic',
    'horizon',
    'azel'
  ];

  constructor() { }

  ngOnInit() {
  }

}
