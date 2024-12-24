/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from 'stencil-library/dist/components';

import { defineCustomElement as defineVeriteConnector } from 'stencil-library/dist/components/verite-connector.js';
import { defineCustomElement as defineVuiAuthAltCard } from 'stencil-library/dist/components/vui-auth-alt-card.js';
import { defineCustomElement as defineVuiAuthCard } from 'stencil-library/dist/components/vui-auth-card.js';
import { defineCustomElement as defineVuiAuthFooter } from 'stencil-library/dist/components/vui-auth-footer.js';
import { defineCustomElement as defineVuiAuthForm } from 'stencil-library/dist/components/vui-auth-form.js';
import { defineCustomElement as defineVuiAuthHeader } from 'stencil-library/dist/components/vui-auth-header.js';
import { defineCustomElement as defineVuiBrand } from 'stencil-library/dist/components/vui-brand.js';
import { defineCustomElement as defineVuiButton } from 'stencil-library/dist/components/vui-button.js';
import { defineCustomElement as defineVuiCard } from 'stencil-library/dist/components/vui-card.js';
import { defineCustomElement as defineVuiCardContent } from 'stencil-library/dist/components/vui-card-content.js';
import { defineCustomElement as defineVuiCardDescription } from 'stencil-library/dist/components/vui-card-description.js';
import { defineCustomElement as defineVuiCardFooter } from 'stencil-library/dist/components/vui-card-footer.js';
import { defineCustomElement as defineVuiCardHeader } from 'stencil-library/dist/components/vui-card-header.js';
import { defineCustomElement as defineVuiCardTitle } from 'stencil-library/dist/components/vui-card-title.js';
import { defineCustomElement as defineVuiDivider } from 'stencil-library/dist/components/vui-divider.js';
import { defineCustomElement as defineVuiDropdownMenu } from 'stencil-library/dist/components/vui-dropdown-menu.js';
import { defineCustomElement as defineVuiDropdownMenuContent } from 'stencil-library/dist/components/vui-dropdown-menu-content.js';
import { defineCustomElement as defineVuiDropdownMenuItem } from 'stencil-library/dist/components/vui-dropdown-menu-item.js';
import { defineCustomElement as defineVuiDropdownMenuSeparator } from 'stencil-library/dist/components/vui-dropdown-menu-separator.js';
import { defineCustomElement as defineVuiDropdownMenuTrigger } from 'stencil-library/dist/components/vui-dropdown-menu-trigger.js';
import { defineCustomElement as defineVuiErrorMessage } from 'stencil-library/dist/components/vui-error-message.js';
import { defineCustomElement as defineVuiFlex } from 'stencil-library/dist/components/vui-flex.js';
import { defineCustomElement as defineVuiFormInput } from 'stencil-library/dist/components/vui-form-input.js';
import { defineCustomElement as defineVuiGoogleOneTap } from 'stencil-library/dist/components/vui-google-one-tap.js';
import { defineCustomElement as defineVuiI18n } from 'stencil-library/dist/components/vui-i18n.js';
import { defineCustomElement as defineVuiI18nProvider } from 'stencil-library/dist/components/vui-i18n-provider.js';
import { defineCustomElement as defineVuiIcon } from 'stencil-library/dist/components/vui-icon.js';
import { defineCustomElement as defineVuiLabel } from 'stencil-library/dist/components/vui-label.js';
import { defineCustomElement as defineVuiLanguageSwitcher } from 'stencil-library/dist/components/vui-language-switcher.js';
import { defineCustomElement as defineVuiLink } from 'stencil-library/dist/components/vui-link.js';
import { defineCustomElement as defineVuiLogo } from 'stencil-library/dist/components/vui-logo.js';
import { defineCustomElement as defineVuiOtp } from 'stencil-library/dist/components/vui-otp.js';
import { defineCustomElement as defineVuiPlaceholder } from 'stencil-library/dist/components/vui-placeholder.js';
import { defineCustomElement as defineVuiRequest } from 'stencil-library/dist/components/vui-request.js';
import { defineCustomElement as defineVuiSpinner } from 'stencil-library/dist/components/vui-spinner.js';
import { defineCustomElement as defineVuiTextbox } from 'stencil-library/dist/components/vui-textbox.js';
import { defineCustomElement as defineVuiThemeToggle } from 'stencil-library/dist/components/vui-theme-toggle.js';
import { defineCustomElement as defineVuiToast } from 'stencil-library/dist/components/vui-toast.js';
import { defineCustomElement as defineVuiUserMenu } from 'stencil-library/dist/components/vui-user-menu.js';
@ProxyCmp({
  defineCustomElementFn: defineVeriteConnector,
  inputs: ['type']
})
@Component({
  selector: 'verite-connector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['type'],
  standalone: true
})
export class VeriteConnector {
  protected el: HTMLVeriteConnectorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VeriteConnector extends Components.VeriteConnector {}


@ProxyCmp({
  defineCustomElementFn: defineVuiAuthAltCard,
  inputs: ['action', 'description', 'elevation', 'heading', 'prompt', 'submitLabel', 'variant']
})
@Component({
  selector: 'vui-auth-alt-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'description', 'elevation', 'heading', 'prompt', 'submitLabel', 'variant'],
  standalone: true
})
export class VuiAuthAltCard {
  protected el: HTMLVuiAuthAltCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiAuthAltCard extends Components.VuiAuthAltCard {}


@ProxyCmp({
  defineCustomElementFn: defineVuiAuthCard,
  inputs: ['action', 'brandLabel', 'brandLogo', 'description', 'elevation', 'heading', 'prompt', 'submitLabel', 'variant']
})
@Component({
  selector: 'vui-auth-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'brandLabel', 'brandLogo', 'description', 'elevation', 'heading', 'prompt', 'submitLabel', 'variant'],
  standalone: true
})
export class VuiAuthCard {
  protected el: HTMLVuiAuthCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiAuthCard extends Components.VuiAuthCard {}


@ProxyCmp({
  defineCustomElementFn: defineVuiAuthFooter,
  inputs: ['action', 'brandLabel', 'brandLogo', 'prompt', 'showBrand', 'showDivider', 'variant']
})
@Component({
  selector: 'vui-auth-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'brandLabel', 'brandLogo', 'prompt', 'showBrand', 'showDivider', 'variant'],
  standalone: true
})
export class VuiAuthFooter {
  protected el: HTMLVuiAuthFooterElement;
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
  defineCustomElementFn: defineVuiAuthForm,
  inputs: ['action', 'display', 'email', 'emailLabel', 'emailPlaceholder', 'emailValidation', 'firstName', 'firstnameLabel', 'firstnamePlaceholder', 'forgotPasswordLabel', 'isLoading', 'lastName', 'lastnameLabel', 'lastnamePlaceholder', 'password', 'passwordHideLabel', 'passwordLabel', 'passwordPlaceholder', 'passwordShowLabel', 'passwordValidation', 'phone', 'phoneLabel', 'phonePlaceholder', 'styles', 'submitLabel']
})
@Component({
  selector: 'vui-auth-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'display', 'email', 'emailLabel', 'emailPlaceholder', 'emailValidation', 'firstName', 'firstnameLabel', 'firstnamePlaceholder', 'forgotPasswordLabel', 'isLoading', 'lastName', 'lastnameLabel', 'lastnamePlaceholder', 'password', 'passwordHideLabel', 'passwordLabel', 'passwordPlaceholder', 'passwordShowLabel', 'passwordValidation', 'phone', 'phoneLabel', 'phonePlaceholder', 'styles', 'submitLabel'],
  standalone: true
})
export class VuiAuthForm {
  protected el: HTMLVuiAuthFormElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['formError', 'formSubmit', 'linkClick']);
  }
}


import type { FormErrorDetail as IVuiAuthFormFormErrorDetail } from 'stencil-library/dist/components';
import type { FormSubmitDetail as IVuiAuthFormFormSubmitDetail } from 'stencil-library/dist/components';
import type { LinkClickDetail as IVuiAuthFormLinkClickDetail } from 'stencil-library/dist/components';

export declare interface VuiAuthForm extends Components.VuiAuthForm {

  formError: EventEmitter<CustomEvent<IVuiAuthFormFormErrorDetail>>;

  formSubmit: EventEmitter<CustomEvent<IVuiAuthFormFormSubmitDetail>>;

  linkClick: EventEmitter<CustomEvent<IVuiAuthFormLinkClickDetail>>;
}


@ProxyCmp({
  defineCustomElementFn: defineVuiAuthHeader,
  inputs: ['align', 'description', 'heading', 'size']
})
@Component({
  selector: 'vui-auth-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'description', 'heading', 'size'],
  standalone: true
})
export class VuiAuthHeader {
  protected el: HTMLVuiAuthHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiAuthHeader extends Components.VuiAuthHeader {}


@ProxyCmp({
  defineCustomElementFn: defineVuiBrand,
  inputs: ['label', 'logo']
})
@Component({
  selector: 'vui-brand',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'logo'],
  standalone: true
})
export class VuiBrand {
  protected el: HTMLVuiBrandElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiBrand extends Components.VuiBrand {}


@ProxyCmp({
  defineCustomElementFn: defineVuiButton,
  inputs: ['busy', 'disabled', 'form', 'name', 'size', 'type', 'value', 'variant', 'width']
})
@Component({
  selector: 'vui-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['busy', 'disabled', 'form', 'name', 'size', 'type', 'value', 'variant', 'width'],
  standalone: true
})
export class VuiButton {
  protected el: HTMLVuiButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['buttonClick']);
  }
}


import type { ButtonClickDetail as IVuiButtonButtonClickDetail } from 'stencil-library/dist/components';

export declare interface VuiButton extends Components.VuiButton {

  buttonClick: EventEmitter<CustomEvent<IVuiButtonButtonClickDetail>>;
}


@ProxyCmp({
  defineCustomElementFn: defineVuiCard,
  inputs: ['elevation']
})
@Component({
  selector: 'vui-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elevation'],
  standalone: true
})
export class VuiCard {
  protected el: HTMLVuiCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiCard extends Components.VuiCard {}


@ProxyCmp({
  defineCustomElementFn: defineVuiCardContent
})
@Component({
  selector: 'vui-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class VuiCardContent {
  protected el: HTMLVuiCardContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiCardContent extends Components.VuiCardContent {}


@ProxyCmp({
  defineCustomElementFn: defineVuiCardDescription,
  inputs: ['align']
})
@Component({
  selector: 'vui-card-description',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align'],
  standalone: true
})
export class VuiCardDescription {
  protected el: HTMLVuiCardDescriptionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiCardDescription extends Components.VuiCardDescription {}


@ProxyCmp({
  defineCustomElementFn: defineVuiCardFooter,
  inputs: ['variant']
})
@Component({
  selector: 'vui-card-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['variant'],
  standalone: true
})
export class VuiCardFooter {
  protected el: HTMLVuiCardFooterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiCardFooter extends Components.VuiCardFooter {}


@ProxyCmp({
  defineCustomElementFn: defineVuiCardHeader
})
@Component({
  selector: 'vui-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class VuiCardHeader {
  protected el: HTMLVuiCardHeaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiCardHeader extends Components.VuiCardHeader {}


@ProxyCmp({
  defineCustomElementFn: defineVuiCardTitle,
  inputs: ['align', 'size', 'weight']
})
@Component({
  selector: 'vui-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'size', 'weight'],
  standalone: true
})
export class VuiCardTitle {
  protected el: HTMLVuiCardTitleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiCardTitle extends Components.VuiCardTitle {}


@ProxyCmp({
  defineCustomElementFn: defineVuiDivider,
  inputs: ['orientation']
})
@Component({
  selector: 'vui-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['orientation'],
  standalone: true
})
export class VuiDivider {
  protected el: HTMLVuiDividerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiDivider extends Components.VuiDivider {}


@ProxyCmp({
  defineCustomElementFn: defineVuiDropdownMenu,
  inputs: ['position']
})
@Component({
  selector: 'vui-dropdown-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['position'],
  standalone: true
})
export class VuiDropdownMenu {
  protected el: HTMLVuiDropdownMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiDropdownMenu extends Components.VuiDropdownMenu {}


@ProxyCmp({
  defineCustomElementFn: defineVuiDropdownMenuContent
})
@Component({
  selector: 'vui-dropdown-menu-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class VuiDropdownMenuContent {
  protected el: HTMLVuiDropdownMenuContentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiDropdownMenuContent extends Components.VuiDropdownMenuContent {}


@ProxyCmp({
  defineCustomElementFn: defineVuiDropdownMenuItem,
  inputs: ['disabled']
})
@Component({
  selector: 'vui-dropdown-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
  standalone: true
})
export class VuiDropdownMenuItem {
  protected el: HTMLVuiDropdownMenuItemElement;
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
  defineCustomElementFn: defineVuiDropdownMenuSeparator
})
@Component({
  selector: 'vui-dropdown-menu-separator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class VuiDropdownMenuSeparator {
  protected el: HTMLVuiDropdownMenuSeparatorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiDropdownMenuSeparator extends Components.VuiDropdownMenuSeparator {}


@ProxyCmp({
  defineCustomElementFn: defineVuiDropdownMenuTrigger
})
@Component({
  selector: 'vui-dropdown-menu-trigger',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class VuiDropdownMenuTrigger {
  protected el: HTMLVuiDropdownMenuTriggerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiDropdownMenuTrigger extends Components.VuiDropdownMenuTrigger {}


@ProxyCmp({
  defineCustomElementFn: defineVuiErrorMessage,
  inputs: ['message', 'showIcon']
})
@Component({
  selector: 'vui-error-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['message', 'showIcon'],
  standalone: true
})
export class VuiErrorMessage {
  protected el: HTMLVuiErrorMessageElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiErrorMessage extends Components.VuiErrorMessage {}


@ProxyCmp({
  defineCustomElementFn: defineVuiFlex,
  inputs: ['breakpoint', 'breakpointDirection', 'direction', 'gap', 'grow', 'items', 'justify', 'spaceUnit', 'width', 'wrap']
})
@Component({
  selector: 'vui-flex',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['breakpoint', 'breakpointDirection', 'direction', 'gap', 'grow', 'items', 'justify', 'spaceUnit', 'width', 'wrap'],
  standalone: true
})
export class VuiFlex {
  protected el: HTMLVuiFlexElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiFlex extends Components.VuiFlex {}


@ProxyCmp({
  defineCustomElementFn: defineVuiFormInput,
  inputs: ['errorMessage', 'htmlFor', 'label']
})
@Component({
  selector: 'vui-form-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['errorMessage', 'htmlFor', 'label'],
  standalone: true
})
export class VuiFormInput {
  protected el: HTMLVuiFormInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiFormInput extends Components.VuiFormInput {}


@ProxyCmp({
  defineCustomElementFn: defineVuiGoogleOneTap,
  inputs: ['googleClientId']
})
@Component({
  selector: 'vui-google-one-tap',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['googleClientId'],
  standalone: true
})
export class VuiGoogleOneTap {
  protected el: HTMLVuiGoogleOneTapElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['googleCredential', 'googleError']);
  }
}


import type { SignInWithIdTokenCredentials as IVuiGoogleOneTapSignInWithIdTokenCredentials } from 'stencil-library/dist/components';

export declare interface VuiGoogleOneTap extends Components.VuiGoogleOneTap {

  googleCredential: EventEmitter<CustomEvent<IVuiGoogleOneTapSignInWithIdTokenCredentials>>;

  googleError: EventEmitter<CustomEvent<Error>>;
}


@ProxyCmp({
  defineCustomElementFn: defineVuiI18n,
  inputs: ['params', 'text']
})
@Component({
  selector: 'vui-i18n',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['params', 'text'],
  standalone: true
})
export class VuiI18n {
  protected el: HTMLVuiI18nElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiI18n extends Components.VuiI18n {}


@ProxyCmp({
  defineCustomElementFn: defineVuiI18nProvider,
  inputs: ['fallbackLocale', 'loadTranslations', 'locale', 'supportedLocales', 'translations', 'translationsPath']
})
@Component({
  selector: 'vui-i18n-provider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['fallbackLocale', 'loadTranslations', 'locale', 'supportedLocales', 'translations', 'translationsPath'],
  standalone: true
})
export class VuiI18nProvider {
  protected el: HTMLVuiI18nProviderElement;
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
  defineCustomElementFn: defineVuiIcon,
  inputs: ['color', 'name', 'size']
})
@Component({
  selector: 'vui-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'name', 'size'],
  standalone: true
})
export class VuiIcon {
  protected el: HTMLVuiIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiIcon extends Components.VuiIcon {}


@ProxyCmp({
  defineCustomElementFn: defineVuiLabel,
  inputs: ['for', 'required']
})
@Component({
  selector: 'vui-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['for', 'required'],
  standalone: true
})
export class VuiLabel {
  protected el: HTMLVuiLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiLabel extends Components.VuiLabel {}


@ProxyCmp({
  defineCustomElementFn: defineVuiLanguageSwitcher,
  inputs: ['currentLocale', 'languages', 'variant']
})
@Component({
  selector: 'vui-language-switcher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentLocale', 'languages', 'variant'],
  standalone: true
})
export class VuiLanguageSwitcher {
  protected el: HTMLVuiLanguageSwitcherElement;
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
  defineCustomElementFn: defineVuiLink,
  inputs: ['disabled', 'href', 'name', 'target', 'variant']
})
@Component({
  selector: 'vui-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'href', 'name', 'target', 'variant'],
  standalone: true
})
export class VuiLink {
  protected el: HTMLVuiLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['linkClick']);
  }
}


export declare interface VuiLink extends Components.VuiLink {

  linkClick: EventEmitter<CustomEvent<CustomEvent<{ name: string; event: MouseEvent }>>>;
}


@ProxyCmp({
  defineCustomElementFn: defineVuiLogo,
  inputs: ['name', 'size']
})
@Component({
  selector: 'vui-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'size'],
  standalone: true
})
export class VuiLogo {
  protected el: HTMLVuiLogoElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiLogo extends Components.VuiLogo {}


@ProxyCmp({
  defineCustomElementFn: defineVuiOtp,
  inputs: ['submitLabel']
})
@Component({
  selector: 'vui-otp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['submitLabel'],
  standalone: true
})
export class VuiOtp {
  protected el: HTMLVuiOtpElement;
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
  defineCustomElementFn: defineVuiPlaceholder,
  inputs: ['height', 'radius', 'width']
})
@Component({
  selector: 'vui-placeholder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['height', 'radius', 'width'],
  standalone: true
})
export class VuiPlaceholder {
  protected el: HTMLVuiPlaceholderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiPlaceholder extends Components.VuiPlaceholder {}


@ProxyCmp({
  defineCustomElementFn: defineVuiRequest,
  inputs: ['application', 'isLoading', 'permissions', 'redirectUri', 'showRedirect']
})
@Component({
  selector: 'vui-request',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['application', 'isLoading', 'permissions', 'redirectUri', 'showRedirect'],
  standalone: true
})
export class VuiRequest {
  protected el: HTMLVuiRequestElement;
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
  defineCustomElementFn: defineVuiSpinner,
  inputs: ['color', 'size']
})
@Component({
  selector: 'vui-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'size'],
  standalone: true
})
export class VuiSpinner {
  protected el: HTMLVuiSpinnerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiSpinner extends Components.VuiSpinner {}


@ProxyCmp({
  defineCustomElementFn: defineVuiTextbox,
  inputs: ['autocomplete', 'autocorrect', 'disabled', 'focusable', 'invalid', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'type', 'value']
})
@Component({
  selector: 'vui-textbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'autocorrect', 'disabled', 'focusable', 'invalid', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'type', 'value'],
  standalone: true
})
export class VuiTextbox {
  protected el: HTMLVuiTextboxElement;
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
  defineCustomElementFn: defineVuiThemeToggle
})
@Component({
  selector: 'vui-theme-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class VuiThemeToggle {
  protected el: HTMLVuiThemeToggleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface VuiThemeToggle extends Components.VuiThemeToggle {}


@ProxyCmp({
  defineCustomElementFn: defineVuiToast,
  inputs: ['duration', 'gap', 'position', 'theme'],
  methods: ['show', 'update', 'dismissToast']
})
@Component({
  selector: 'vui-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['duration', 'gap', 'position', 'theme'],
  standalone: true
})
export class VuiToast {
  protected el: HTMLVuiToastElement;
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
  defineCustomElementFn: defineVuiUserMenu
})
@Component({
  selector: 'vui-user-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: true
})
export class VuiUserMenu {
  protected el: HTMLVuiUserMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['menuAction']);
  }
}


import type { MenuAction as IVuiUserMenuMenuAction } from 'stencil-library/dist/components';

export declare interface VuiUserMenu extends Components.VuiUserMenu {

  menuAction: EventEmitter<CustomEvent<IVuiUserMenuMenuAction>>;
}


