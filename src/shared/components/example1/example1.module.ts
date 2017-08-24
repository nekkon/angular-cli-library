import { RouterModule } from '@angular/router';
import { Example1Component } from './example1';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
        Example1Component,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component:Example1Component},
            { path: 'example2', loadChildren:'../example2/example2.module#Example2Module'},
        ])
    ],
    exports:[
        Example1Component
    ]
})
export class Example1Module { }
