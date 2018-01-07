import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitCollectionComponent } from './exhibit-collection.component';

describe('ExhibitCollectionComponent', () => {
  let component: ExhibitCollectionComponent;
  let fixture: ComponentFixture<ExhibitCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
