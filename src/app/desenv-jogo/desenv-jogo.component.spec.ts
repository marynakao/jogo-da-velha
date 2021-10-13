import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvJogoComponent } from './desenv-jogo.component';

describe('DesenvJogoComponent', () => {
  let component: DesenvJogoComponent;
  let fixture: ComponentFixture<DesenvJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesenvJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenvJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
