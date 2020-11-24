import { Routes, Route } from '@angular/router';
import { ILink } from './ilink';

export const routes2Links = (routes: Routes): ILink[] =>
  routes
    .filter((route: Route) => route.data?.label !== undefined)
    .map((route: Route) => ({
      label: route.data?.label || '',
      route: route.path || '',
      icon: route.data?.icon,
    }));
