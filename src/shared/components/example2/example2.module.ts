import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Example2Component } from "./example2";

@NgModule({
      declarations: [
            Example2Component
      ],
      imports: [
            CommonModule,
            RouterModule.forChild([
                  { path: '', component:Example2Component }
            ])
      ],
      exports:[
            Example2Component 
      ]
})
export class Example2Module { }
