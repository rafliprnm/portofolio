import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLangComponent } from './basic-lang.component';

describe('BasicLangComponent', () => {
  let component: BasicLangComponent;
  let fixture: ComponentFixture<BasicLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicLangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
