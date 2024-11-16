/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'stencil-library';


@ProxyCmp({
})
@Component({
  selector: 'custom-text-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class CustomTextInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CustomTextInput extends Components.CustomTextInput {}


@ProxyCmp({
})
@Component({
  selector: 'date-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class DateSelector {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface DateSelector extends Components.DateSelector {

  valueChange: EventEmitter<CustomEvent<{ month: string; day: string; year: string; }>>;
}


@ProxyCmp({
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clicked']);
  }
}


export declare interface MyComponent extends Components.MyComponent {

  clicked: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color']
})
@Component({
  selector: 'my-embedded-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
})
export class MyEmbeddedComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyEmbeddedComponent extends Components.MyEmbeddedComponent {}


@ProxyCmp({
})
@Component({
  selector: 'my-parent-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class MyParentComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyParentComponent extends Components.MyParentComponent {}


@ProxyCmp({
  inputs: ['type']
})
@Component({
  selector: 'roc-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['type'],
})
export class RocBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RocBadge extends Components.RocBadge {}


@ProxyCmp({
})
@Component({
  selector: 'roc-clock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class RocClock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['timeChange']);
  }
}


export declare interface RocClock extends Components.RocClock {

  timeChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['todos']
})
@Component({
  selector: 'todo-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['todos'],
})
export class TodoList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ready']);
  }
}


export declare interface TodoList extends Components.TodoList {

  ready: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['checked']
})
@Component({
  selector: 'todo-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked'],
})
export class TodoListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface TodoListItem extends Components.TodoListItem {

  checkedChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
})
@Component({
  selector: 'verite-dropdown-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VeriteDropdownMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VeriteDropdownMenu extends Components.VeriteDropdownMenu {}


@ProxyCmp({
})
@Component({
  selector: 'verite-dropdown-menu-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VeriteDropdownMenuContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VeriteDropdownMenuContent extends Components.VeriteDropdownMenuContent {}


@ProxyCmp({
  inputs: ['disabled']
})
@Component({
  selector: 'verite-dropdown-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
})
export class VeriteDropdownMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
  }
}


export declare interface VeriteDropdownMenuItem extends Components.VeriteDropdownMenuItem {

  itemClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
})
@Component({
  selector: 'verite-dropdown-menu-separator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VeriteDropdownMenuSeparator {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VeriteDropdownMenuSeparator extends Components.VeriteDropdownMenuSeparator {}


@ProxyCmp({
})
@Component({
  selector: 'verite-dropdown-menu-trigger',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VeriteDropdownMenuTrigger {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VeriteDropdownMenuTrigger extends Components.VeriteDropdownMenuTrigger {}


@ProxyCmp({
})
@Component({
  selector: 'verite-otp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VeriteOtp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['formSubmit']);
  }
}


export declare interface VeriteOtp extends Components.VeriteOtp {

  formSubmit: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
})
@Component({
  selector: 'verite-user-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VeriteUserMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VeriteUserMenu extends Components.VeriteUserMenu {}


@ProxyCmp({
  inputs: ['busy', 'disabled', 'form', 'name', 'size', 'type', 'value', 'variant', 'width']
})
@Component({
  selector: 'vf-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['busy', 'disabled', 'form', 'name', 'size', 'type', 'value', 'variant', 'width'],
})
export class VfButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['buttonClick']);
  }
}


export declare interface VfButton extends Components.VfButton {

  buttonClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
})
@Component({
  selector: 'vf-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VfCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfCard extends Components.VfCard {}


@ProxyCmp({
})
@Component({
  selector: 'vf-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VfCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfCardContent extends Components.VfCardContent {}


@ProxyCmp({
  inputs: ['align']
})
@Component({
  selector: 'vf-card-description',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align'],
})
export class VfCardDescription {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfCardDescription extends Components.VfCardDescription {}


@ProxyCmp({
  inputs: ['variant']
})
@Component({
  selector: 'vf-card-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['variant'],
})
export class VfCardFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfCardFooter extends Components.VfCardFooter {}


@ProxyCmp({
})
@Component({
  selector: 'vf-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VfCardHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfCardHeader extends Components.VfCardHeader {}


@ProxyCmp({
  inputs: ['align', 'size', 'weight']
})
@Component({
  selector: 'vf-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'size', 'weight'],
})
export class VfCardTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfCardTitle extends Components.VfCardTitle {}


@ProxyCmp({
  inputs: ['orientation']
})
@Component({
  selector: 'vf-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['orientation'],
})
export class VfDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfDivider extends Components.VfDivider {}


@ProxyCmp({
  inputs: ['direction', 'gap', 'grow', 'halign', 'spaceUnit', 'valign', 'width']
})
@Component({
  selector: 'vf-flex',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'gap', 'grow', 'halign', 'spaceUnit', 'valign', 'width'],
})
export class VfFlex {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfFlex extends Components.VfFlex {}


@ProxyCmp({
  inputs: ['googleClientId']
})
@Component({
  selector: 'vf-google-one-tap',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['googleClientId'],
})
export class VfGoogleOneTap {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['googleCredential', 'googleError']);
  }
}


export declare interface VfGoogleOneTap extends Components.VfGoogleOneTap {

  googleCredential: EventEmitter<CustomEvent<any>>;

  googleError: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['color', 'name', 'size']
})
@Component({
  selector: 'vf-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'name', 'size'],
})
export class VfIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfIcon extends Components.VfIcon {}


@ProxyCmp({
  inputs: ['for', 'required']
})
@Component({
  selector: 'vf-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['for', 'required'],
})
export class VfLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfLabel extends Components.VfLabel {}


@ProxyCmp({
  inputs: ['disabled', 'href', 'target', 'variant']
})
@Component({
  selector: 'vf-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'href', 'target', 'variant'],
})
export class VfLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfLink extends Components.VfLink {}


@ProxyCmp({
  inputs: ['name', 'size']
})
@Component({
  selector: 'vf-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'size'],
})
export class VfLogo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfLogo extends Components.VfLogo {}


@ProxyCmp({
  inputs: ['label']
})
@Component({
  selector: 'vf-powered-by',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
})
export class VfPoweredBy {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfPoweredBy extends Components.VfPoweredBy {}


@ProxyCmp({
  inputs: ['styles']
})
@Component({
  selector: 'vf-signin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['styles'],
})
export class VfSignin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['formSubmit', 'ready']);
  }
}


export declare interface VfSignin extends Components.VfSignin {

  formSubmit: EventEmitter<CustomEvent<any>>;

  ready: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['styles']
})
@Component({
  selector: 'vf-signup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['styles'],
})
export class VfSignup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ready']);
  }
}


export declare interface VfSignup extends Components.VfSignup {

  ready: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['autocomplete', 'autocorrect', 'disabled', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'type', 'value']
})
@Component({
  selector: 'vf-textbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'autocorrect', 'disabled', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'type', 'value'],
})
export class VfTextbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'inputChange', 'enterKey']);
  }
}


export declare interface VfTextbox extends Components.VfTextbox {

  valueChange: EventEmitter<CustomEvent<string>>;

  inputChange: EventEmitter<CustomEvent<string>>;

  enterKey: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
})
@Component({
  selector: 'vf-theme-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VfThemeToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VfThemeToggle extends Components.VfThemeToggle {}


