import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example2',
  templateUrl: './example2.html',
  styleUrls: ['./example2.css']
})
export class Example2Component implements OnInit {
      title = 'Example2: This Shared module/component was lazily loaded from another Shared lazy loaded module/component!';
      
      constructor() { }

      ngOnInit() {
      }

}
