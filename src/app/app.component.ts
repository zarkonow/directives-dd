import { Component } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';

import { AuthDirective } from './auth/auth.directive';
import { LogDirective } from './log.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, AuthDirective, LogDirective],
})
export class AppComponent {}
