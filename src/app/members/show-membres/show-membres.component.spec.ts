import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMembresComponent } from './show-membres.component';

describe('ShowMembresComponent', () => {
  let component: ShowMembresComponent;
  let fixture: ComponentFixture<ShowMembresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowMembresComponent]
    });
    fixture = TestBed.createComponent(ShowMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
