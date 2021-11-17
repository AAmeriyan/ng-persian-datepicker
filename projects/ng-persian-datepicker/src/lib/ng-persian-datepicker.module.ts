import {NgModule} from '@angular/core';
import {NgPersianDatepickerComponent} from './ng-persian-datepicker.component';
import {CommonModule} from '@angular/common';
import {MonthTextPipe} from './month-text.pipe';
import {FaNumPipe, NgxPersianModule} from 'ngx-persian';

@NgModule({
  declarations: [
    NgPersianDatepickerComponent,
    MonthTextPipe
  ],
  imports: [
    CommonModule,
    NgxPersianModule
  ],

  exports: [
    NgPersianDatepickerComponent
  ],
  providers: [FaNumPipe],
})
export class NgPersianDatepickerModule {
}
