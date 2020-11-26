import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { IPool } from '../../models/pool';
import { PoolsAdapter } from '../../services/pools.adapter';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'cnfs-edit-pool',
  templateUrl: './edit-pool.component.html',
  styleUrls: ['./edit-pool.component.scss'],
})
export class EditPoolComponent {
  public pool: IPool | undefined;

  public constructor(
    activatedRoute: ActivatedRoute,
    poolsAdapter: PoolsAdapter,
    private location: Location,
    private router: Router
  ) {
    activatedRoute.paramMap
      .pipe(
        filter((ps: ParamMap) => ps.has('poolId')),
        map((ps: ParamMap) => ps.get('poolId')),
        switchMap((id: string) => poolsAdapter.getOne(id))
      )
      .subscribe((pool: IPool) => (this.pool = pool));
  }

  public onDone(): void {
    try {
      this.location.back();
    } catch {
      this.router.navigate(['..', '..', 'pools']);
    }
  }
}
