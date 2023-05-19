import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MessageComponentModule } from '../message/message.module';

import { ThemesPage } from './themes.page';

describe('HomePage', () => {
  let component: ThemesPage;
  let fixture: ComponentFixture<ThemesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemesPage],
      imports: [IonicModule.forRoot(), MessageComponentModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
