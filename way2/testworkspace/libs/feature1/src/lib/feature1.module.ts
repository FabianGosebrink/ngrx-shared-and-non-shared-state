import { feature1Reducer } from './state/feature1.reducer';
import { StoreModule } from '@ngrx/store';
import { Feature1Component } from './feature1/feature1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SharedFeatureStatelessModule } from '@testworkspace/shared-feature-statefull';

@NgModule({
  imports: [
    CommonModule,
    SharedFeatureStatelessModule,
    StoreModule.forFeature('feature1', feature1Reducer),
    EffectsModule.forFeature([]),
    RouterModule.forChild([
      {
        path: '',
        component: Feature1Component,
      },
    ]),
  ],
  declarations: [Feature1Component],
})
export class Feature1Module {}
