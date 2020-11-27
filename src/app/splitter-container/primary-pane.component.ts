import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Inject, NgZone, ViewEncapsulation } from '@angular/core';
import { SplitterContainerComponent } from './splitter-container.component';

@Component({
  selector: 'splitter-primary',
  template: '<ng-content></ng-content>',
  styleUrls: ['primary-pane.component.scss'],
  // host: {
  //   'class': 'splitter-content',
  //   '[style.margin-left.px]': '_container._contentMargins.left',
  //   '[style.margin-right.px]': '_container._contentMargins.right',
  // },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PrimaryPaneComponent extends CdkScrollable implements AfterContentInit {
  constructor(
      private _changeDetectorRef: ChangeDetectorRef,
      @Inject(forwardRef(() => SplitterContainerComponent)) public _container: SplitterContainerComponent,
      elementRef: ElementRef<HTMLElement>,
      scrollDispatcher: ScrollDispatcher,
      ngZone: NgZone
      ) {
    super(elementRef, scrollDispatcher, ngZone);
  }

  ngAfterContentInit() {
    this._container._contentMarginChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
}
