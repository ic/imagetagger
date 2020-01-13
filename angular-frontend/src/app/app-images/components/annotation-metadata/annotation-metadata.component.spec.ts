import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationMetadataComponent } from './annotation-metadata.component';

describe('AnnotationMetadataComponent', () => {
  let component: AnnotationMetadataComponent;
  let fixture: ComponentFixture<AnnotationMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotationMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
