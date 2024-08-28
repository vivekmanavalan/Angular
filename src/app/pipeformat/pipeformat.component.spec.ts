import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeformatComponent } from './pipeformat.component';

describe('PipeformatComponent', () => {
  let component: PipeformatComponent;
  let fixture: ComponentFixture<PipeformatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipeformatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
