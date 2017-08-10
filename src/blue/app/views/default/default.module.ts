import { CoreModule } from '../../../../core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DefaultComponent } from './default.component';

@NgModule({
  declarations: [
      DefaultComponent
  ],
  imports: [
      CommonModule,
      CoreModule,
      RouterModule.forChild([
        { path: '', component:DefaultComponent},
      ])
  ]
})
export class DefaultModule { }
