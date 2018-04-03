import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { ExampleComponent } from './components/example/example.component';
import { CliexamplesComponent } from './components/cliexamples/cliexamples.component';


@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UsersComponent,
        ExampleComponent,
        CliexamplesComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
