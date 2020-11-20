import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { LoaderComponent } from './loader/loader.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  imports: [
    CommonModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatIconModule,
  ],
  declarations: [PaginatorComponent, LoaderComponent],
  exports: [PaginatorComponent, LoaderComponent],
})
export class TableModule {}
