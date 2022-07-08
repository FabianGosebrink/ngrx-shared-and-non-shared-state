import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeatureListComponent } from './shared-feature-list/shared-feature-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { sharedFeatureReducer } from './state/shared-feature.reducer';
import { SharedFeatureEffects } from './state/shared-feature.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('sharedfeature', sharedFeatureReducer),
    EffectsModule.forFeature([SharedFeatureEffects]),
  ],
  declarations: [SharedFeatureListComponent],
  exports: [SharedFeatureListComponent],
})
export class SharedFeatureStatelessModule {}
