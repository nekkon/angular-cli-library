import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCLI } from './angular-cli';

describe('Shared Angular CLI component/module', () => {
    let component: AngularCLI;
    let fixture: ComponentFixture<AngularCLI>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ AngularCLI ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AngularCLI);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
