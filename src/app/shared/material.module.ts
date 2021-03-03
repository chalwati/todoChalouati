import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [],

  imports: [MatTableModule,
            CommonModule
  ],

  exports: [MatTableModule,


  ]

})
export class MaterialModule { }
