import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { AppComponent } from './app.component';

// Import any other components, services, or modules here
import { HomeComponent } from './home/home.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

// Import third-party modules here (e.g., NgBootstrap, Toastr)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Ensure this is installed
import { ToastrModule } from 'ngx-toastr'; // Ensure this is installed

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    routes,
    NgbModule,
    ToastrModule.forRoot() // Toastr configuration
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
