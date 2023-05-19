import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ViewMessage2PageRoutingModule } from './view-message2-routing.module';
import { ViewMessage2Page } from './view-message2.page';

describe('ViewMessagePage', () => {
  let component: ViewMessage2Page;
  let fixture: ComponentFixture<ViewMessage2Page>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ViewMessage2Page],
      imports: [IonicModule.forRoot(), ViewMessage2PageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMessage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
