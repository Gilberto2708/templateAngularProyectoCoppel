import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { ProtectedComponent } from './components/routes/protected/protected.component';
import { DefaultLayoutComponent } from './components/layout/default-layout/default-layout.component';
import { LoginComponent } from './components/routes/login/login.component';
// Correct the path to the component
import { GestionRolesUsuariosComponent } from './components/gestion-roles/gestion-roles-usuarios/gestion-roles-usuarios.component';



export const routesWithoutLoginComponent: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        data: { includeNavBar: true },
        children: [
            {
                path: '',
                component: ProtectedComponent,
                canActivate: []
                //canActivate: [MsalGuard],
            }
        ]
    }
]
export const routes: Routes = [
  
    {
        path: '',
        component: DefaultLayoutComponent,

        children: [
            {
                path: '',
                component: LoginComponent,
                canActivate: [],
            }
        ]
    },
    {
        path: 'protected',
        component: DefaultLayoutComponent,
        data: { includeNavBar: true },
        children: [
            {
                path: '',
                component: ProtectedComponent,
                canActivate: []
                //canActivate: [MsalGuard]
            }
        ]
    },{
      path: 'gestion-roles',
      component: DefaultLayoutComponent,
      data: { includeNavBar: true },
      children: [
        {
          path: 'gestion-roles-usuarios',
          component: GestionRolesUsuariosComponent, // Asegúrate de que este componente exista
          canActivate: []
        },
      ],
    }
];
