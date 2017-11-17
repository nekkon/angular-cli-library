import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularCLI } from './angular-cli';

@NgModule({
  declarations: [
      AngularCLI
  ],
  entryComponents:[
      AngularCLI
  ],
  imports: [
      CommonModule
  ],
  exports:[
      AngularCLI
  ]
})
export class AngularCLIModule { }
