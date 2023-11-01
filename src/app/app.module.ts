import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
                    //derives meta data
@NgModule({        //this derives the metadata which is passes in the component
  declarations: [AppComponent],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }   //appmodule defines how to move one part to the another part of the application
