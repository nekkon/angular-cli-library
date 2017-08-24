import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularCLI } from './angular-cli';

@NgModule({
  declarations: [
      AngularCLI
  ],
  imports: [
      RouterModule,
      CommonModule
  ],
  exports:[
      AngularCLI
  ]
})
export class AngularCLIModule { }
