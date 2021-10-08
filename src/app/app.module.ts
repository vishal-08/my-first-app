import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SuccessButtonComponent } from './success-button/success-button.component';
import { WarningButtonComponent } from './warning-button/warning-button.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessButtonComponent,
    WarningButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
