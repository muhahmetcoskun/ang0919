import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelPrimTanimlamaComponent } from './personel-prim-tanimlama.component';

describe('PersonelPrimTanimlamaComponent', () => {
  let component: PersonelPrimTanimlamaComponent;
  let fixture: ComponentFixture<PersonelPrimTanimlamaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonelPrimTanimlamaComponent]
    });
    fixture = TestBed.createComponent(PersonelPrimTanimlamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
