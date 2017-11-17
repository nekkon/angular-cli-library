import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'app1'}),
        RouterModule.forRoot([
            { path: '', loadChildren:'./views/default/default.module#DefaultModule'},
            { path: 'example1', loadChildren:'@shared/components/example1/example1.module#Example1Module'},
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
