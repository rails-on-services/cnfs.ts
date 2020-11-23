import { Routes, Route } from '@angular/router';
import { ILink } from './ilink';

export const routes: Routes = [
  {
    path: 'cognito',
    loadChildren: (): Promise<unknown> =>
      import('@cnfs/cognito').then((m) => m.CognitoModule),
    data: { label: 'Cognito', icon: 'people' },
  },
  {
    path: 'iam',
    loadChildren: (): Promise<unknown> =>
      import('@cnfs/iam').then((m) => m.IamModule),
    data: { label: 'IAM', icon: 'admin_panel_settings' },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'iam',
  },
];

export const links: ILink[] = routes
  .filter((route: Route) => route.data?.label !== undefined)
  .map((route: Route) => ({
    label: route.data?.label || '',
    route: route.path || '',
    icon: route.data?.icon,
  }));
