import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChampComponent } from './champ/champ.component';
import { TableComponent } from './table/table.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { DameComponent } from './dame/dame.component';
import { ImageComponent } from './image/image.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ValidateComponent } from './components/validate/validate.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampComponent,
    TableComponent,
    NameComponent,
    IdentityComponent,
    DameComponent,
    ImageComponent,
    FormComponent,
    ValidateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
