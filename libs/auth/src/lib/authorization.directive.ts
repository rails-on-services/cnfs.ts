import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Directive({
  selector: '[authorization]',
})
export class AuthorizationDirective {
  private hasView: boolean;

  public constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    private authorizationService: AuthorizationService
  ) {}

  @Input() public set authorization(resource: string) {
    this.authorizationService
      .hasAccess(resource)
      .subscribe((condition: boolean) => {
        if (condition && !this.hasView) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.hasView = true;
        } else if (!condition && this.hasView) {
          this.viewContainer.clear();
          this.hasView = false;
        }
      });
  }
}
