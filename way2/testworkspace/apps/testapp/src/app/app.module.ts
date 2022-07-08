import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([
      {
        path: 'feature1',
        loadChildren: () =>
          import('@testworkspace/feature1').then((m) => m.Feature1Module),
      },
      {
        path: 'feature2',
        loadChildren: () =>
          import('@testworkspace/feature2').then((m) => m.Feature2Module),
      },
      {
        path: 'feature3',
        loadChildren: () =>
          import('@testworkspace/feature3').then((m) => m.Feature3Module),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
