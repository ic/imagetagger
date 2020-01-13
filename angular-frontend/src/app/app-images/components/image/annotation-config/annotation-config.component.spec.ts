import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationConfigComponent } from './annotation-config.component';

describe('AnnotationTypeConfigComponent', () => {
  let component: AnnotationConfigComponent;
  let fixture: ComponentFixture<AnnotationConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotationConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
