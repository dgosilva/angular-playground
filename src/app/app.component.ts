import { Component } from '@angular/core';
import {
  FeatureNavigationService,
  FeatureNavItem,
} from './core/services/feature-navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  navItems: FeatureNavItem[];

  constructor(
    private featureNavigationService: FeatureNavigationService,
    private router: Router
  ) {
    this.navItems = this.featureNavigationService.getFeatureNavItems();
  }

  navigateToFeature(route: string) {
    this.router.navigate([route]);
  }
}
