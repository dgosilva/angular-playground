import { Injectable } from '@angular/core';

export interface FeatureNavItem {
  id: number;
  name: string;
  route: string;
}

@Injectable({
  providedIn: 'root',
})
export class FeatureNavigationService {
  getFeatureNavItems(): FeatureNavItem[] {
    return [
      { id: 1, name: 'Random User', route: '/random-user' },
      { id: 2, name: 'Fake Store', route: '/fake-store' },
    ];
  }
}
