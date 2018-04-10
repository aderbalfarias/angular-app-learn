import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { UsersTestComponent } from './components/userstest/userstest.component';
import { ExampleComponent } from './components/example/example.component';
import { CliexamplesComponent } from './components/cliexamples/cliexamples.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { PostFormComponent } from './components/post-form/post-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LogsComponent } from './components/logs/logs.component';
import { LogService } from './services/log.service';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UsersComponent,
        UsersTestComponent,
        ExampleComponent,
        CliexamplesComponent,
        NavbarComponent,
        PostsComponent,
        PostFormComponent,
        HomeComponent,
        PostComponent,
        NotFoundComponent,
        LogFormComponent,
        LogsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [UserService, PostService, LogService],
    bootstrap: [AppComponent]
})

export class AppModule { }
