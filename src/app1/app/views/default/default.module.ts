import { AngularCLIModule } from '@shared/components/views/angular-cli/angular-cli.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DefaultComponent } from './default.component';

@NgModule({
  declarations: [
      DefaultComponent
  ],
  imports: [
      CommonModule,
      AngularCLIModule
  ]
})
export class DefaultModule { }
