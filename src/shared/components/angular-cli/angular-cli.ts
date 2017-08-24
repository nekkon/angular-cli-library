import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-cli',
  templateUrl: './angular-cli.html',
  styleUrls: ['./angular-cli.css']
})
export class AngularCLI implements OnInit {
    title = 'an extended version of a new app generated with ng new with Library suppport for multiple apps!'
    
    constructor() { }

    ngOnInit() {
    }

}
