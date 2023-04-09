import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './components/home/form-modal/form-modal.component';
import { FormsModule } from '@angular/forms';
import { IgxAccordionModule } from 'igniteui-angular';
import { AccordionComponent } from './components/home/accordion/accordion.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormModalComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    IgxAccordionModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
