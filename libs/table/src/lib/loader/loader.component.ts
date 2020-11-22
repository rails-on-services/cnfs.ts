import { Component, Input } from '@angular/core';
import { CustomDataSource } from '../custom-data-source';

@Component({
  selector: 'cnfs-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input('dataSource')
  public dataSource?: CustomDataSource<unknown>;
}
