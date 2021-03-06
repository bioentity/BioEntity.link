import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyWordComponent } from './key-word.component';

describe('KeyWordComponent', () => {
  let component: KeyWordComponent;
  let fixture: ComponentFixture<KeyWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
