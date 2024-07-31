import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

const config = {
  providers: [
    provideHttpClient(), // Provides HttpClient functionality
    provideRouter([]) // Add your routes here
  ]
};

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
