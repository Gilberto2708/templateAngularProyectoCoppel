import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRolesUsuariosComponent } from './gestion-roles-usuarios.component';

describe('GestionRolesUsuariosComponent', () => {
  let component: GestionRolesUsuariosComponent;
  let fixture: ComponentFixture<GestionRolesUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionRolesUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionRolesUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
