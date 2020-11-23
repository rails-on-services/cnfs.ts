import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CnfsCommonModule } from '@cnfs/common';
import { HomeComponent } from './pages/home/home.component';
import { routes } from './routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), CnfsCommonModule],
  declarations: [HomeComponent],
})
export class CognitoModule {}
