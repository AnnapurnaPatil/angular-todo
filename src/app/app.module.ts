import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {AutofocusModule} from 'angular-autofocus-fix';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

const routes: Routes = [
	{path: '', component: TodoListComponent, pathMatch: 'full'},
	{path: ':filter', component: TodoListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // AutofocusModule,
		RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
