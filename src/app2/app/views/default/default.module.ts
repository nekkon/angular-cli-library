import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DefaultComponent } from './default.component';
import { AngularCLIModule } from "angular-cli-library/components/angular-cli/angular-cli.module";

@NgModule({
  declarations: [
      DefaultComponent
  ],
  imports: [
      CommonModule,
      AngularCLIModule,
      RouterModule.forChild([
        { path: '', component:DefaultComponent},
      ])
  ]
})
export class DefaultModule { }
