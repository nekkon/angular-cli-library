import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-cli',
  templateUrl: './angular-cli.html',
  styleUrls: ['./angular-cli.css']
})
export class AngularCLI implements OnInit {
    title = 'an extended version of angular-cli! This is a shared Module between multiple apps'
    
    constructor() { }

    ngOnInit() {
    }

}
