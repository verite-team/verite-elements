import{r as o,c as t}from"./p-bcf8319a.js";const i=":host{display:block}";const s=i;const e=class{constructor(i){o(this,i);this.googleCredential=t(this,"googleCredential",7);this.googleError=t(this,"googleError",7);this.cleanup=null;this.googleClientId=undefined}componentDidLoad(){const o=document.createElement("script");o.id="google-sign-in";o.src="https://accounts.google.com/gsi/client";o.async=true;o.defer=true;o.onload=()=>{if(globalThis.google){this.oneTapSignInPrompt();this.cleanup=()=>{var o;return(o=globalThis.google)===null||o===void 0?void 0:o.accounts.id.cancel()}}};document.body.appendChild(o)}disconnectedCallback(){if(this.cleanup){this.cleanup()}}oneTapSignInPrompt(){globalThis.google.accounts.id.initialize({client_id:this.googleClientId,callback:this.handleCredentialResponse.bind(this),cancel_on_tap_outside:false,itp_support:true});globalThis.google.accounts.id.prompt()}handleCredentialResponse(o){const t=this.decodeJWT(o.credential);if(!(t===null||t===void 0?void 0:t.email_verified)){this.oneTapSignInPrompt()}else{this.oauthSignIn(t.email)}}decodeJWT(o){try{const t=o.split(".")[1];const i=t.replace(/-/g,"+").replace(/_/g,"/");const s=decodeURIComponent(atob(i).split("").map((o=>"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2))).join(""));return JSON.parse(s)}catch(o){console.error("Error decoding JWT:",o);this.googleError.emit(o instanceof Error?o:new Error("Failed to decode JWT"));return null}}oauthSignIn(o){const t=globalThis.google.accounts.oauth2.initTokenClient({client_id:this.googleClientId,scope:"https://www.googleapis.com/auth/userinfo.profile",hint:o,prompt:"",callback:o=>{this.googleCredential.emit({provider:"google",token:o.access_token})}});t.requestAccessToken()}render(){return null}};e.style=s;export{e as vui_google_one_tap};
//# sourceMappingURL=p-f1167dfc.entry.js.map