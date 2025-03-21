import { DebugMode } from "../environments/environment";
import { Notification, SearchOption, SidebarMenuItem } from "./app.interfaces";

export const Notifications: Notification[] = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        icon: 'pi pi-objects-column',
        title: 'Notificación 1',
        type: 'info',
        date: new Date()
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        icon: 'pi pi-envelope',
        title: 'Notificación 2',
        type: 'success',
        date: new Date(Date.now() - 60000 * 5)
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        icon: 'pi pi-sparkles',
        title: 'Notificación 3',
        type: 'error',
        date: new Date(Date.now() - 60000 * 10)
      }
]

export const SearchOptions: SearchOption[] = [
    { label: 'Iniciar Sesión', value: 'login' },
    { label: 'Contenido Protegido', value: 'protected' }
]
export const sidebarData: SidebarMenuItem[] = [
  {
    title: 'Gestión de Precios',
    icon: 'pi pi-dollar',
    to: '/gestion-precios',
    // items: [
    //   { title: 'Parámetros', to: '/gestion-precios/markdown-muebles/parametros' },
    //   { title: 'Descuentos por Proveedor', to: '/gestion-precios/markdown-muebles/descuentos-proveedor' },
    //   { title: 'Códigos a Excluir', to: '/gestion-precios/markdown-muebles/codigos-a-excluir' },
    //   // { title: 'Dashboard de Avances', to: '/gestion-precios/markdown-muebles/dashboard' },
    // ],

  },
  {
    title: 'Gestión de Roles y Usuarios',
    icon: 'pi pi-users',
    items: [
      { title: 'Administrador de Permisos', to: '/gestion-roles/gestion-roles-usuarios' },
      { title: 'Asignación de Roles por Usuario', to: '/gestion-roles/asignacion-roles-usuario' },
      { title: 'Asignación de Roles por Rol', to: '/gestion-roles/asignacion-roles-rol' },
    ],
  },
  {
    title: 'Historial de Movimientos',
    icon: 'pi pi-file-o',
    items: [
      { title: 'Descuentos por Proveedor', to: '/historial/descuentos-proveedor' },
      { title: 'Códigos a Excluir', to: '/historial/codigos-a-excluir' },
    ],
  },
  {
    title: 'Dashboard de Avances',
    icon: 'pi pi-home',
    to: '/dashboard-avances',
  },
];
export const Logger = {
    info: (eventName: string, log: any) => {
        DebugMode&&console.info(eventName, log);
    },
    warn: (eventName: string, log: any) => {
        DebugMode&&console.warn(eventName, log);
    },
    error: (eventName: string, error: any) => {
        DebugMode&&console.error(eventName, error);
    }
}
