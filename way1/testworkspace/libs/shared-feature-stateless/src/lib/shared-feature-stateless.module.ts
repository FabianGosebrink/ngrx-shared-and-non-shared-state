import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeatureListComponent } from './shared-feature-list/shared-feature-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SharedFeatureListComponent],
  exports: [SharedFeatureListComponent],
})
export class SharedFeatureStatelessModule {}
