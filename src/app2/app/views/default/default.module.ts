import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularCLIModule } from "@angular-cli-library/components/angular-cli/angular-cli.module";
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations:[DefaultComponent],
  imports: [
      CommonModule,
      AngularCLIModule,
      RouterModule.forChild([
        { path: '', component:DefaultComponent},
      ])
  ]
})
export class DefaultModule { }
