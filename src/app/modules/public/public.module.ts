import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { ErrorPageComponent } from './components/pages/error/error.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CommonModule } from '@angular/common';

const declarations = [
  HomeComponent,
  AboutComponent,
  PrivacyComponent,
  ErrorPageComponent,
];

@NgModule({
  declarations,
  exports: [...declarations],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
