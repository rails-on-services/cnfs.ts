import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  imports: [CommonModule, MatSortModule, MatPaginatorModule],
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent],
})
export class TableModule {}
