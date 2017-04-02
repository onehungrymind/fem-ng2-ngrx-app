import 'core-js';
import 'zone.js/dist/zone';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreLogMonitorModule, useLogMonitor} from '@ngrx/store-log-monitor';
import {items} from './src/common/stores/items.store';
import {selectedItem} from './src/common/stores/selectedItem.store';
import {selectedWidget} from './src/common/stores/selectedWidget.store';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {App} from './src/app';
import {Items} from './src/items/items.component';
import {Widgets} from './src/widgets/widgets.component';
import {GadgetService} from "./src/common/services/gadget.service";
import {routes} from './routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore({items, selectedItem, selectedWidget}),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: false,
        position: 'right'
      })
    }),
    StoreLogMonitorModule
  ],
  declarations: [App, Items, Widgets],
  providers: [GadgetService],
  bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
