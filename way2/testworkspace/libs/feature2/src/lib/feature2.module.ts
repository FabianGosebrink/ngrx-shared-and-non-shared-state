import { feature2Reducer } from './state/feature2.reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SharedFeatureStatelessModule } from '@testworkspace/shared-feature-statefull';
import { Feature2Component } from './feature2/feature2.component';

@NgModule({
  imports: [
    CommonModule,
    SharedFeatureStatelessModule,
    StoreModule.forFeature('feature2', feature2Reducer),
    EffectsModule.forFeature([]),
    RouterModule.forChild([
      {
        path: '',
        component: Feature2Component,
      },
    ]),
  ],
  declarations: [Feature2Component],
})
export class Feature2Module {}
