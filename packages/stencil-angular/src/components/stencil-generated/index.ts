/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'stencil-library';


@ProxyCmp({
  inputs: ['type']
})
@Component({
  selector: 'verite-connector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['type'],
})
export class VeriteConnector {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VeriteConnector extends Components.VeriteConnector {}


@ProxyCmp({
  inputs: ['busy', 'disabled', 'form', 'name', 'size', 'type', 'value', 'variant', 'width']
})
@Component({
  selector: 'vui-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['busy', 'disabled', 'form', 'name', 'size', 'type', 'value', 'variant', 'width'],
})
export class VuiButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['buttonClick']);
  }
}


export declare interface VuiButton extends Components.VuiButton {

  buttonClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  inputs: ['elevation']
})
@Component({
  selector: 'vui-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elevation'],
})
export class VuiCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiCard extends Components.VuiCard {}


@ProxyCmp({
})
@Component({
  selector: 'vui-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VuiCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiCardContent extends Components.VuiCardContent {}


@ProxyCmp({
  inputs: ['halign']
})
@Component({
  selector: 'vui-card-description',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['halign'],
})
export class VuiCardDescription {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiCardDescription extends Components.VuiCardDescription {}


@ProxyCmp({
  inputs: ['variant']
})
@Component({
  selector: 'vui-card-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['variant'],
})
export class VuiCardFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiCardFooter extends Components.VuiCardFooter {}


@ProxyCmp({
})
@Component({
  selector: 'vui-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VuiCardHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiCardHeader extends Components.VuiCardHeader {}


@ProxyCmp({
  inputs: ['halign', 'size', 'weight']
})
@Component({
  selector: 'vui-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['halign', 'size', 'weight'],
})
export class VuiCardTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiCardTitle extends Components.VuiCardTitle {}


@ProxyCmp({
  inputs: ['orientation']
})
@Component({
  selector: 'vui-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['orientation'],
})
export class VuiDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiDivider extends Components.VuiDivider {}


@ProxyCmp({
  inputs: ['position']
})
@Component({
  selector: 'vui-dropdown-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['position'],
})
export class VuiDropdownMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiDropdownMenu extends Components.VuiDropdownMenu {}


@ProxyCmp({
})
@Component({
  selector: 'vui-dropdown-menu-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VuiDropdownMenuContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiDropdownMenuContent extends Components.VuiDropdownMenuContent {}


@ProxyCmp({
  inputs: ['disabled']
})
@Component({
  selector: 'vui-dropdown-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
})
export class VuiDropdownMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['itemClick']);
  }
}


export declare interface VuiDropdownMenuItem extends Components.VuiDropdownMenuItem {

  itemClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
})
@Component({
  selector: 'vui-dropdown-menu-separator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VuiDropdownMenuSeparator {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiDropdownMenuSeparator extends Components.VuiDropdownMenuSeparator {}


@ProxyCmp({
})
@Component({
  selector: 'vui-dropdown-menu-trigger',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VuiDropdownMenuTrigger {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiDropdownMenuTrigger extends Components.VuiDropdownMenuTrigger {}


@ProxyCmp({
  inputs: ['message', 'showIcon']
})
@Component({
  selector: 'vui-error-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['message', 'showIcon'],
})
export class VuiErrorMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiErrorMessage extends Components.VuiErrorMessage {}


@ProxyCmp({
  inputs: ['breakpoint', 'breakpointDirection', 'direction', 'gap', 'grow', 'halign', 'spaceUnit', 'valign', 'width']
})
@Component({
  selector: 'vui-flex',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['breakpoint', 'breakpointDirection', 'direction', 'gap', 'grow', 'halign', 'spaceUnit', 'valign', 'width'],
})
export class VuiFlex {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiFlex extends Components.VuiFlex {}


@ProxyCmp({
  inputs: ['rules', 'value']
})
@Component({
  selector: 'vui-form-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['rules', 'value'],
})
export class VuiFormControl {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiFormControl extends Components.VuiFormControl {}


@ProxyCmp({
  inputs: ['googleClientId']
})
@Component({
  selector: 'vui-google-one-tap',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['googleClientId'],
})
export class VuiGoogleOneTap {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['googleCredential', 'googleError']);
  }
}


import type { SignInWithIdTokenCredentials as IVuiGoogleOneTapSignInWithIdTokenCredentials } from 'stencil-library';

export declare interface VuiGoogleOneTap extends Components.VuiGoogleOneTap {

  googleCredential: EventEmitter<CustomEvent<IVuiGoogleOneTapSignInWithIdTokenCredentials>>;

  googleError: EventEmitter<CustomEvent<Error>>;
}


@ProxyCmp({
  inputs: ['color', 'name', 'size']
})
@Component({
  selector: 'vui-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'name', 'size'],
})
export class VuiIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiIcon extends Components.VuiIcon {}


@ProxyCmp({
  inputs: ['for', 'required']
})
@Component({
  selector: 'vui-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['for', 'required'],
})
export class VuiLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiLabel extends Components.VuiLabel {}


@ProxyCmp({
  inputs: ['disabled', 'href', 'target', 'variant']
})
@Component({
  selector: 'vui-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'href', 'target', 'variant'],
})
export class VuiLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiLink extends Components.VuiLink {}


@ProxyCmp({
  inputs: ['name', 'size']
})
@Component({
  selector: 'vui-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'size'],
})
export class VuiLogo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiLogo extends Components.VuiLogo {}


@ProxyCmp({
  inputs: ['labels']
})
@Component({
  selector: 'vui-otp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['labels'],
})
export class VuiOtp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['formSubmit', 'ready', 'resend']);
  }
}


export declare interface VuiOtp extends Components.VuiOtp {

  formSubmit: EventEmitter<CustomEvent<string>>;

  ready: EventEmitter<CustomEvent<void>>;

  resend: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['height', 'radius', 'width']
})
@Component({
  selector: 'vui-placeholder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['height', 'radius', 'width'],
})
export class VuiPlaceholder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiPlaceholder extends Components.VuiPlaceholder {}


@ProxyCmp({
  inputs: ['label']
})
@Component({
  selector: 'vui-powered-by',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
})
export class VuiPoweredBy {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiPoweredBy extends Components.VuiPoweredBy {}


@ProxyCmp({
  inputs: ['emailValidation', 'isLoading', 'labels', 'passwordValidation', 'styles']
})
@Component({
  selector: 'vui-signin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['emailValidation', 'isLoading', 'labels', 'passwordValidation', 'styles'],
})
export class VuiSignin {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['formSubmit', 'ready', 'signUp']);
  }
}


import type { SignInFormData as IVuiSigninSignInFormData } from 'stencil-library';

export declare interface VuiSignin extends Components.VuiSignin {

  formSubmit: EventEmitter<CustomEvent<IVuiSigninSignInFormData>>;

  ready: EventEmitter<CustomEvent<void>>;

  signUp: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['emailValidation', 'isLoading', 'labels', 'passwordValidation', 'styles']
})
@Component({
  selector: 'vui-signup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['emailValidation', 'isLoading', 'labels', 'passwordValidation', 'styles'],
})
export class VuiSignup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['formSubmit', 'ready', 'signIn']);
  }
}


import type { SignUpFormData as IVuiSignupSignUpFormData } from 'stencil-library';

export declare interface VuiSignup extends Components.VuiSignup {

  formSubmit: EventEmitter<CustomEvent<IVuiSignupSignUpFormData>>;

  ready: EventEmitter<CustomEvent<void>>;

  signIn: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['color', 'size']
})
@Component({
  selector: 'vui-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'size'],
})
export class VuiSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiSpinner extends Components.VuiSpinner {}


@ProxyCmp({
  inputs: ['autocomplete', 'autocorrect', 'disabled', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'type', 'value']
})
@Component({
  selector: 'vui-textbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'autocorrect', 'disabled', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'type', 'value'],
})
export class VuiTextbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'inputChange', 'enterKey']);
  }
}


export declare interface VuiTextbox extends Components.VuiTextbox {

  valueChange: EventEmitter<CustomEvent<string>>;

  inputChange: EventEmitter<CustomEvent<string>>;

  enterKey: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
})
@Component({
  selector: 'vui-theme-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VuiThemeToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiThemeToggle extends Components.VuiThemeToggle {}


@ProxyCmp({
  inputs: ['position'],
  methods: ['show', 'update', 'dismissToast']
})
@Component({
  selector: 'vui-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['position'],
})
export class VuiToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dismiss']);
  }
}


export declare interface VuiToast extends Components.VuiToast {

  dismiss: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
})
@Component({
  selector: 'vui-user-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class VuiUserMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['menuAction']);
  }
}


import type { MenuAction as IVuiUserMenuMenuAction } from 'stencil-library';

export declare interface VuiUserMenu extends Components.VuiUserMenu {

  menuAction: EventEmitter<CustomEvent<IVuiUserMenuMenuAction>>;
}


