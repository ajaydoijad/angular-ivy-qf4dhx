import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RecipeComponent } from './recipe/recipe.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    BrowserModule,

    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AuthComponent,
    HomeComponent,
    AboutComponent,
    RecipeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
