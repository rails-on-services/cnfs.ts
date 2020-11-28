import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationDirective } from './authorization.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AuthorizationDirective],
  exports: [AuthorizationDirective],
})
export class AuthModule {}
