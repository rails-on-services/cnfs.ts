import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IPool } from '../../models/pool';
@Component({
  selector: 'cnfs-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.scss'],
})
export class PoolsComponent {
  public constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public onAction(evt: { action: string; pool: IPool }): void {
    const { action, pool } = evt;
    if (action === 'edit') {
      this.router.navigate(['..', 'pool-edit', pool.id], {
        relativeTo: this.activatedRoute,
      });
    }
  }
}
