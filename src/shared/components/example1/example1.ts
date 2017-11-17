import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example1',
  templateUrl: './example1.html',
  styleUrls: ['./example1.css']
})
export class Example1Component implements OnInit {
      title = 'Example1: This component/module was lazy loaded from a Shared Library';
      
      constructor() { }

      ngOnInit() {
      }

}
