import { AngularCLIModule } from '@shared/components/angular-cli/angular-cli.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultComponent } from './default.component';

describe('Default view of app2 ', () => {
    let component: DefaultComponent;
    let fixture: ComponentFixture<DefaultComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [AngularCLIModule],
          declarations: [ DefaultComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(DefaultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
