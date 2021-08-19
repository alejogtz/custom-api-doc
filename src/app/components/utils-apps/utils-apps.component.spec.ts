import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilsAppsComponent } from './utils-apps.component';

describe('UtilsAppsComponent', () => {
  let component: UtilsAppsComponent;
  let fixture: ComponentFixture<UtilsAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilsAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilsAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
