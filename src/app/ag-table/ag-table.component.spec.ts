import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgTableComponent } from './ag-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AgGridModule } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { ToggleRendererComponent } from '../toggle-renderer/toggle-renderer.component';
import { DialogComponent } from '../dialog/dialog.component';

describe('AgTableComponent', () => {
  let component: AgTableComponent;
  let fixture: ComponentFixture<AgTableComponent>;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgTableComponent, ToggleRendererComponent, DialogComponent],
      imports: [MatDialogModule, AgGridModule],
      providers: [MatDialog]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgTableComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize originalData on ngOnInit', () => {
    component.ngOnInit();
    expect(component.originalData).toEqual(component.rowData);
  });

  it('should update lastModified date for changed rows on saveChanges', () => {
    spyOn(dialog, 'open').and.returnValue({
      afterClosed: () => of(true)
    } as any);

    component.rowData[0].price = 70000; // Change a row
    component.saveChanges();

    expect(component.rowData[0].lastModified).toEqual(jasmine.any(Date));
  });

  it('should not update lastModified date for unchanged rows on saveChanges', () => {
    spyOn(dialog, 'open').and.returnValue({
      afterClosed: () => of(true)
    } as any);

    const originalDate = component.rowData[1].lastModified;
    component.saveChanges();

    expect(component.rowData[1].lastModified).toEqual(originalDate);
  });

  it('should call getChanges and open dialog on saveChanges', () => {
    spyOn(component, 'getChanges').and.callThrough();
    spyOn(dialog, 'open').and.returnValue({
      afterClosed: () => of(true)
    } as any);

    component.saveChanges();

    expect(component.getChanges).toHaveBeenCalled();
    expect(dialog.open).toHaveBeenCalled();
  });

  it('should return changes in getChanges', () => {
    component.rowData[0].price = 70000; // Change a row
    const changes = component.getChanges();
    expect(changes.length).toBe(1);
    expect(changes[0]).toContain('Tesla');
  });
});