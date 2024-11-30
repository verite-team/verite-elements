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
  inputs: ['action', 'description', 'elevation', 'heading', 'prompt', 'submitLabel', 'variant']
})
@Component({
  selector: 'vui-auth-alt-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'description', 'elevation', 'heading', 'prompt', 'submitLabel', 'variant'],
})
export class VuiAuthAltCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiAuthAltCard extends Components.VuiAuthAltCard {}


@ProxyCmp({
  inputs: ['action', 'brandLabel', 'brandLogo', 'description', 'elevation', 'heading', 'prompt', 'submitLabel', 'variant']
})
@Component({
  selector: 'vui-auth-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'brandLabel', 'brandLogo', 'description', 'elevation', 'heading', 'prompt', 'submitLabel', 'variant'],
})
export class VuiAuthCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiAuthCard extends Components.VuiAuthCard {}


@ProxyCmp({
  inputs: ['action', 'brandLabel', 'brandLogo', 'prompt', 'showBrand', 'showDivider', 'variant']
})
@Component({
  selector: 'vui-auth-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'brandLabel', 'brandLogo', 'prompt', 'showBrand', 'showDivider', 'variant'],
})
export class VuiAuthFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['actionClick']);
  }
}


export declare interface VuiAuthFooter extends Components.VuiAuthFooter {

  actionClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['action', 'elements', 'email', 'emailLabel', 'emailPlaceholder', 'emailValidation', 'firstName', 'firstnameLabel', 'firstnamePlaceholder', 'forgotPasswordLabel', 'isLoading', 'lastName', 'lastnameLabel', 'lastnamePlaceholder', 'password', 'passwordHideLabel', 'passwordLabel', 'passwordPlaceholder', 'passwordShowLabel', 'passwordValidation', 'phone', 'phoneLabel', 'phonePlaceholder', 'styles', 'submitLabel']
})
@Component({
  selector: 'vui-auth-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'elements', 'email', 'emailLabel', 'emailPlaceholder', 'emailValidation', 'firstName', 'firstnameLabel', 'firstnamePlaceholder', 'forgotPasswordLabel', 'isLoading', 'lastName', 'lastnameLabel', 'lastnamePlaceholder', 'password', 'passwordHideLabel', 'passwordLabel', 'passwordPlaceholder', 'passwordShowLabel', 'passwordValidation', 'phone', 'phoneLabel', 'phonePlaceholder', 'styles', 'submitLabel'],
})
export class VuiAuthForm {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['formSubmit', 'forgotPassword']);
  }
}


import type { SignUpFormData as IVuiAuthFormSignUpFormData } from 'stencil-library';

export declare interface VuiAuthForm extends Components.VuiAuthForm {

  formSubmit: EventEmitter<CustomEvent<IVuiAuthFormSignUpFormData>>;

  forgotPassword: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['align', 'description', 'heading', 'size']
})
@Component({
  selector: 'vui-auth-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'description', 'heading', 'size'],
})
export class VuiAuthHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiAuthHeader extends Components.VuiAuthHeader {}


@ProxyCmp({
  inputs: ['label', 'logo']
})
@Component({
  selector: 'vui-brand',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'logo'],
})
export class VuiBrand {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiBrand extends Components.VuiBrand {}


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
  inputs: ['align']
})
@Component({
  selector: 'vui-card-description',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align'],
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
  inputs: ['align', 'size', 'weight']
})
@Component({
  selector: 'vui-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'size', 'weight'],
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
  inputs: ['breakpoint', 'breakpointDirection', 'direction', 'gap', 'grow', 'items', 'justify', 'spaceUnit', 'width', 'wrap']
})
@Component({
  selector: 'vui-flex',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['breakpoint', 'breakpointDirection', 'direction', 'gap', 'grow', 'items', 'justify', 'spaceUnit', 'width', 'wrap'],
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
  inputs: ['errorMessage', 'htmlFor', 'label']
})
@Component({
  selector: 'vui-form-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['errorMessage', 'htmlFor', 'label'],
})
export class VuiFormInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiFormInput extends Components.VuiFormInput {}


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
  inputs: ['params', 'text']
})
@Component({
  selector: 'vui-i18n',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['params', 'text'],
})
export class VuiI18n {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiI18n extends Components.VuiI18n {}


@ProxyCmp({
  inputs: ['fallbackLocale', 'loadTranslations', 'locale', 'supportedLocales', 'translations', 'translationsPath']
})
@Component({
  selector: 'vui-i18n-provider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['fallbackLocale', 'loadTranslations', 'locale', 'supportedLocales', 'translations', 'translationsPath'],
})
export class VuiI18nProvider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['translationsLoaded']);
  }
}


export declare interface VuiI18nProvider extends Components.VuiI18nProvider {

  translationsLoaded: EventEmitter<CustomEvent<void>>;
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
  inputs: ['currentLocale', 'languages', 'variant']
})
@Component({
  selector: 'vui-language-switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentLocale', 'languages', 'variant'],
})
export class VuiLanguageSwitcher {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['localeChange']);
  }
}


export declare interface VuiLanguageSwitcher extends Components.VuiLanguageSwitcher {

  localeChange: EventEmitter<CustomEvent<string>>;
}


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
  inputs: ['submitLabel']
})
@Component({
  selector: 'vui-otp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['submitLabel'],
})
export class VuiOtp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['formSubmit']);
  }
}


export declare interface VuiOtp extends Components.VuiOtp {

  formSubmit: EventEmitter<CustomEvent<string>>;
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
  inputs: ['application', 'isLoading', 'permissions', 'redirectUri', 'showRedirect']
})
@Component({
  selector: 'vui-request',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['application', 'isLoading', 'permissions', 'redirectUri', 'showRedirect'],
})
export class VuiRequest {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['requestApprove', 'requestDeny']);
  }
}


export declare interface VuiRequest extends Components.VuiRequest {

  requestApprove: EventEmitter<CustomEvent<void>>;

  requestDeny: EventEmitter<CustomEvent<void>>;
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
  inputs: ['autocomplete', 'autocorrect', 'disabled', 'focusable', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'type', 'value']
})
@Component({
  selector: 'vui-textbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'autocorrect', 'disabled', 'focusable', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'type', 'value'],
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
  inputs: ['duration', 'gap', 'position', 'theme'],
  methods: ['show', 'update', 'dismissToast']
})
@Component({
  selector: 'vui-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['duration', 'gap', 'position', 'theme'],
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


