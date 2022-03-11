import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  addCrewMember(name: string, photo: string) {
    let candidate: object = {name: name, photo: photo};
    
    if (this.crew.includes(candidate)) {
      this.inCrew = true;
    } else {
      this.inCrew = false;
    }

    if (this.inCrew) {
      let doubledIndex = this.crew.indexOf(candidate);
      this.crew.splice(0, 1);
    } else if (!this.inCrew && this.crew.length < 3) {
      this.crew.push(candidate);
    }
    // if (this.crew.length < 3 && !this.crew.includes(candidate)) {
    //   this.crew.push(candidate);
    // } else if (this.crew.includes(candidate)) {
    //   this.crew.splice(doubleIndex, 1);
    // }
    // if (this.crew.length < 3 && doubleIndex < 0) {
    //   this.crew.push(candidate);
    // } else if (doubleIndex >= 0) {
    //   this.crew.splice(doubleIndex, 1)
    // }
  //   let doubleCandidate = this.crew.some(name => this.candidates.name === name)
  //   if (this.crew.includes(candidate)) {
  //     let candidateIndex = this.crew.indexOf(candidate)
  //     this.crew.splice(candidateIndex, 1)
  //   } else if (this.crew.length<3 && !this.crew.includes(candidate)) {
  //     this.crew.push(candidate)
  //   }
  // }
  }}
