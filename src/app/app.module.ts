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
import { CookieModule } from 'ngx-cookie';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalService } from './shared/modal.service';
import { UserService } from './shared/user.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DolarPipe,
    CollapsiblePanelDirective,
    TryFormComponent,
    RegisterLoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CookieModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    ModalService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
