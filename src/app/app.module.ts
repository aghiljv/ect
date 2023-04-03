import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SortPipe } from './sort.pipe';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomSortPipeComponent } from './components/custom-sort-pipe/custom-sort-pipe.component';
import { RepeaterComponent } from './components/repeater/repeater.component';
import { MainComponent } from './components/main/main.component';
import { RepeaterMainComponent } from './components/repeater-main/repeater-main.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sort', component: CustomSortPipeComponent },
  { path: 'repeater', component: RepeaterMainComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomSortPipeComponent,
    SortPipe,
    RepeaterComponent,
    MainComponent,
    RepeaterMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
