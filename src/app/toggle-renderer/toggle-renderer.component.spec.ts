import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleRendererComponent } from './toggle-renderer.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { By } from '@angular/platform-browser';

describe('ToggleRendererComponent', () => {
  let component: ToggleRendererComponent;
  let fixture: ComponentFixture<ToggleRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleRendererComponent],
      imports: [MatSlideToggleModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleRendererComponent);
    component = fixture.componentInstance;
    component.params = {
      value: true,
      node: { rowIndex: 0, setDataValue: jasmine.createSpy('setDataValue') },
      colDef: { field: 'electric' },
      onToggleChange: jasmine.createSpy('onToggleChange')
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct value', () => {
    const toggle = fixture.debugElement.query(By.css('mat-slide-toggle')).nativeElement;
    expect(toggle.checked).toBe(true);
  });

  it('should call onToggleChange on toggle change', () => {
    const toggle = fixture.debugElement.query(By.css('mat-slide-toggle')).nativeElement;
    toggle.click();
    fixture.detectChanges();
    expect(component.params.onToggleChange).toHaveBeenCalledWith(0);
  });

  it('should call setDataValue on toggle change', () => {
    const toggle = fixture.debugElement.query(By.css('mat-slide-toggle')).nativeElement;
    toggle.click();
    fixture.detectChanges();
    expect(component.params.node.setDataValue).toHaveBeenCalledWith('electric', false);
  });
});