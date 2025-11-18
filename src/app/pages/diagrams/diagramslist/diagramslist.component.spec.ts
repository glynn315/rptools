import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramslistComponent } from './diagramslist.component';

describe('DiagramslistComponent', () => {
  let component: DiagramslistComponent;
  let fixture: ComponentFixture<DiagramslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
