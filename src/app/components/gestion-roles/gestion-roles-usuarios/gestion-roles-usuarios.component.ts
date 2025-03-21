import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { MsalService } from '@azure/msal-angular';
import { GraphService } from '../../../services/graph.service';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DropdownOption {
  name: string;
  code: string;
}

@Component({
  selector: 'app-gestion-roles-usuarios',
  standalone: true,
  imports: [
    DropdownModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './gestion-roles-usuarios.component.html',
  styleUrl: './gestion-roles-usuarios.component.scss',
})
export class GestionRolesUsuariosComponent implements OnInit {
  // Datos para el dropdown de Solución
  solucionesOptions: DropdownOption[] = [
    { name: 'Centro de Distribución', code: 'CD' },
    { name: 'Estrategia Comercial', code: 'EC' },
    { name: 'Transporte y Fulfillment', code: 'TF' },
    { name: 'Torre de Control', code: 'TC' },
  ];

  // Mapeo de soluciones a sistemas
  sistemasMap: { [key: string]: DropdownOption[] } = {
    'Centro de Distribución': [
      { name: 'Sistema de Inventario', code: 'SI' },
      { name: 'Admin. de Configuraciones', code: 'AC' },
    ],
    'Estrategia Comercial': [
      { name: 'Sistema de EC', code: 'SIEC' },
      { name: 'Admin. de Configuraciones EC', code: 'ACSC' },
    ],
    'Transporte y Fulfillment': [
      { name: 'Sistema de Inventario TF', code: 'SITF' },
      { name: 'Admin. de Configuraciones', code: 'ACTF' },
    ],
    'Torre de Control': [
      { name: 'Sistema de Inventario TC', code: 'SITC' },
      { name: 'Admin. de Configuraciones TC', code: 'ACTC' },
    ],
  };

  // Variables para almacenar las selecciones
  selectedSolucion: DropdownOption | null = null;
  selectedSistema: DropdownOption | null = null;
  sistemasOptions: DropdownOption[] = [];
  constructor(
    private appService: AppService,
    private msalService: MsalService
  ) {}

  ngOnInit(): void {}
  // Método para actualizar los sistemas cuando cambia la solución
  onSolucionChange(event: any): void {
    if (event.value) {
      const solucionName = event.value.name;
      this.sistemasOptions = this.sistemasMap[solucionName] || [];
      this.selectedSistema = null; // Resetear la selección de sistema
    } else {
      this.sistemasOptions = [];
    }
  }
  // Método para agregar un nuevo rol
  agregarNuevoRol(): void {
    console.log('Agregamos nuevo rol');
    // Implementar lógica para agregar un nuevo rol
  }
}
