import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './components/all/all.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { NewComponent } from './components/new/new.component';
import { FindComponent } from './components/find/find.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoadingComponent } from './components/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpManagerInterceptor } from './components/intercepters/http-manager.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    UpdateComponent,
    DeleteComponent,
    NewComponent,
    FindComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
   MatIconModule,
   MatProgressSpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpManagerInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
