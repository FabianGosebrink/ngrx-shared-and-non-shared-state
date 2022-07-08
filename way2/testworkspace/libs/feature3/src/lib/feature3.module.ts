import { feature3Reducer } from './state/feature3.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Feature3Component } from './feature3/feature3.component';
import { SharedFeatureStatelessModule } from '@testworkspace/shared-feature-statefull';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    SharedFeatureStatelessModule,
    StoreModule.forFeature('feature3', feature3Reducer),
    EffectsModule.forFeature([]),
    RouterModule.forChild([
      {
        path: '',
        component: Feature3Component,
      },
    ]),
  ],
  declarations: [Feature3Component],
})
export class Feature3Module {}
