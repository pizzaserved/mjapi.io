import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { DolarPipe } from './shared/dolar.pipe';
import { CollapsiblePanelDirective } from './shared/collapsible-panel.directive';
import { TryFormComponent } from './try-form/try-form.component';
import { RegisterLoginComponent } from './register-login/register-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DolarPipe,
    CollapsiblePanelDirective,
    TryFormComponent,
    RegisterLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
