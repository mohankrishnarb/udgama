import{b as L,c as I,f as R}from"./chunk-QSX6OBSU.js";import{a as U,b as z,c as Q,g as H,h as J,l as K,m as Z,n as X}from"./chunk-LABTZ22Q.js";import{$ as b,$a as pe,Bb as S,Cb as M,Db as y,Fa as f,Ga as ce,Gb as Se,Ja as de,Kc as Ce,Ra as _,S as ae,Sa as h,Ta as w,U as se,Ub as P,Vc as T,W as ie,Wc as W,Xa as p,Xc as N,Ya as r,Yc as B,Za as i,_ as v,_a as u,_c as V,aa as ne,ab as ue,ad as d,ba as me,cc as Me,cd as D,dc as F,dd as A,eb as C,ed as xe,fb as ge,gd as Ee,hb as x,hd as O,jb as fe,jd as ke,kd as Pe,ld as Fe,md as q,nb as _e,nd as j,ob as he,od as G,pa as le,pb as we,pc as ye,ta as m,tb as E,ub as k,vb as ve,wb as be,xb as a,za as g}from"./chunk-RJFNCZEK.js";var Te=["determinateSpinner"];function We(o,s){if(o&1&&(ne(),r(0,"svg",11),u(1,"circle",12),i()),o&2){let e=fe();_("viewBox",e._viewBox()),m(),k("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),_("r",e._circleRadius())}}var Ne=new se("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Le})}),Le=100,Be=10,Y=(()=>{class o{_elementRef=ie(le);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=ie(Ne),t=Ce(),n=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=n.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&n.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Le;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Be)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=f({type:o,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,n){if(t&1&&_e(Te,5),t&2){let l;he(l=we())&&(n._determinateCircle=l.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,n){t&2&&(_("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",n.mode==="determinate"?n.value:null)("mode",n.mode),be("mat-"+n.color),k("width",n.diameter,"px")("height",n.diameter,"px")("--mat-progress-spinner-size",n.diameter+"px")("--mat-progress-spinner-active-indicator-width",n.diameter+"px"),ve("_mat-animation-noopable",n._noopAnimations)("mdc-circular-progress--indeterminate",n.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",P],diameter:[2,"diameter","diameter",P],strokeWidth:[2,"strokeWidth","strokeWidth",P]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,n){if(t&1&&(de(0,We,2,8,"ng-template",null,0,Se),r(2,"div",2,1),ne(),r(4,"svg",3),u(5,"circle",4),i()(),me(),r(6,"div",5)(7,"div",6)(8,"div",7),C(9,8),i(),r(10,"div",9),C(11,8),i(),r(12,"div",10),C(13,8),i()()()),t&2){let l=E(1);m(4),_("viewBox",n._viewBox()),m(),k("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeDashOffset(),"px")("stroke-width",n._circleStrokeWidth(),"%"),_("r",n._circleRadius()),m(4),p("ngTemplateOutlet",l),m(2),p("ngTemplateOutlet",l),m(2),p("ngTemplateOutlet",l)}},dependencies:[Me],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return o})();var $=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=ce({type:o});static \u0275inj=ae({imports:[ye]})}return o})();function Ue(o,s){o&1&&(r(0,"mat-error"),a(1,"Enter registered emailId"),i())}function ze(o,s){o&1&&(r(0,"mat-error"),a(1,"Enter correct password"),i())}function Qe(o,s){o&1&&u(0,"mat-spinner",9)}function He(o,s){o&1&&(r(0,"span"),a(1,"Sign In"),i())}var ee=class o{constructor(s,e,t){this.router=s;this.fb=e;this.userService=t;this.loginForm=this.fb.group({email:["",[d.required,d.email]],password:["",[d.required]]})}isLoading=!1;loginForm;onSubmit(){this.isLoading=!0,this.userService.login(this.loginForm.value).subscribe({next:s=>{this.isLoading=!1,localStorage.setItem("token","udgama_token"),this.router.navigate(["/dashboard"])},error:s=>{this.isLoading=!1,alert(s.error.message||"Login failed")}}),console.log(this.loginForm.value)}static \u0275fac=function(e){return new(e||o)(g(L),g(q),g(X))};static \u0275cmp=f({type:o,selectors:[["app-login"]],decls:29,vars:5,consts:[[1,"login-wrapper"],[1,"card","shadow-sm"],[1,"text-center","mb-4","fw-bold",2,"color","#165a50"],[3,"ngSubmit","formGroup"],["appearance","outline",1,"w-100","mb-3"],["matIconPrefix","",2,"color","#165a50"],["matInput","","type","email","formControlName","email","placeholder","name@udgama.com"],["matInput","","type","password","formControlName","password","placeholder","Enter your password"],["mat-raised-button","","type","submit",1,"w-100","mb-3",2,"background-color","#165a50","color","white","height","45px",3,"disabled"],["diameter","24"],[1,"text-center","small"],["routerLink","/reset-password"],[1,"mt-3","text-muted"],["routerLink","/signup",1,"fw-bold",2,"color","#165a50"]],template:function(e,t){if(e&1&&(r(0,"div",0)(1,"div",1)(2,"h2",2),a(3,"Login to Udgama"),i(),r(4,"form",3),x("ngSubmit",function(){return t.onSubmit()}),r(5,"mat-form-field",4)(6,"mat-label"),a(7,"Email"),i(),r(8,"mat-icon",5),a(9,"email"),i(),u(10,"input",6),h(11,Ue,2,0,"mat-error"),i(),r(12,"mat-form-field",4)(13,"mat-label"),a(14,"Password"),i(),r(15,"mat-icon",5),a(16,"lock"),i(),u(17,"input",7),h(18,ze,2,0,"mat-error"),i(),r(19,"button",8),h(20,Qe,1,0,"mat-spinner",9)(21,He,2,0,"span"),i()(),r(22,"div",10)(23,"a",11),a(24,"Forgot Password?"),i(),r(25,"p",12),a(26," Don't have an account? "),r(27,"a",13),a(28,"Sign Up"),i()()()()()),e&2){let n,l;m(4),p("formGroup",t.loginForm),m(7),w((n=t.loginForm.get("email"))!=null&&n.invalid&&((n=t.loginForm.get("email"))!=null&&n.touched||(n=t.loginForm.get("email"))!=null&&n.dirty)?11:-1),m(7),w((l=t.loginForm.get("password"))!=null&&l.invalid&&((l=t.loginForm.get("password"))!=null&&l.touched||(l=t.loginForm.get("password"))!=null&&l.dirty)?18:-1),m(),p("disabled",t.loginForm.invalid||t.isLoading),m(),w(t.isLoading?20:21)}},dependencies:[R,I,F,j,O,V,D,A,G,Pe,ke,B,N,J,H,U,z,Q,Z,K,W,T,$,Y],styles:[".login-wrapper[_ngcontent-%COMP%]{background-color:#165a50!important;min-height:100vh;width:100vw;display:flex;align-items:center;justify-content:center;margin:0;padding:0}.card[_ngcontent-%COMP%]{width:100%;max-width:400px;border-radius:12px;border:none;padding:2rem;box-shadow:0 10px 25px #0003}.w-100[_ngcontent-%COMP%]{width:100%!important}button[mat-raised-button][_ngcontent-%COMP%]{background-color:#165a50!important;color:#fff!important;height:48px;border-radius:24px}a[_ngcontent-%COMP%]{color:#165a50!important;font-weight:500;text-decoration:none}  .mat-mdc-form-field.mat-focused .mat-mdc-floating-label{color:#165a50!important}  .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,   .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,   .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing{border-color:#165a50!important;border-width:2px}  .mat-mdc-form-field .mdc-text-field__input{caret-color:#165a50!important}button[mat-raised-button][_ngcontent-%COMP%]{background-color:#165a50!important;color:#fff!important}  .mat-mdc-form-field .mdc-text-field__input::placeholder{color:#165a5080}"]})};function Je(o,s){o&1&&u(0,"mat-spinner",15)}function Ke(o,s){o&1&&(r(0,"span"),a(1,"Sign Up"),i())}var te=class o{constructor(s,e,t){this.router=s;this.userService=e;this.fb=t;this.signupForm=this.fb.group({fullname:["",[d.required,d.minLength(2)]],email:["",[d.required,d.email]],password:["",[d.required,d.minLength(8)]],confirmPassword:["",[d.required]]},{validators:this.passwordMatchValidator})}user={fullname:"",email:"",password:""};confirmPassword="";isLoading=!1;signupForm;passwordMatchValidator(s){let e=s.get("password"),t=s.get("confirmPassword");return e&&t&&e.value!==t.value?(t.setErrors({passwordMismatch:!0}),{passwordMismatch:!0}):null}signup(){if(console.log("Data in Angular before sending:",this.user),!this.user.fullname||!this.user.email||!this.user.password){alert("Please fill all fields");return}this.isLoading=!0,this.userService.createUser(this.user).subscribe({next:s=>{this.isLoading=!1,this.router.navigate(["/dashboard"])},error:s=>{this.isLoading=!1,console.error("Backend Error Details:",s.error),alert(s.error.message||"Signup failed")}})}onSubmit(){}static \u0275fac=function(e){return new(e||o)(g(L),g(X),g(q))};static \u0275cmp=f({type:o,selectors:[["app-signup"]],decls:49,vars:6,consts:[["signupForm","ngForm"],[1,"signup-wrapper"],[1,"card","shadow-lg","bg-white"],[1,"text-center","mb-4"],[1,"fw-bold","title-color"],[1,"text-muted"],[3,"ngSubmit"],["appearance","outline",1,"w-100","mb-2"],["matIconPrefix",""],["matInput","","name","fullname","required","",3,"ngModelChange","ngModel"],["matInput","","name","email","required","",3,"ngModelChange","ngModel"],["matInput","","name","password","type","password","required","",3,"ngModelChange","ngModel"],["appearance","outline",1,"w-100","mb-4"],["matInput","","name","confirmPassword","type","password","required","",3,"ngModelChange","ngModel"],["mat-raised-button","","type","submit",1,"w-100",2,"background-color","#165a50","color","white",3,"disabled"],["diameter","24"],[1,"text-center","small"],["routerLink","/",1,"ms-2","sign-in-link"]],template:function(e,t){if(e&1){let n=ge();r(0,"div",1)(1,"div",2)(2,"div",3)(3,"h2",4),a(4,"Create Account"),i(),r(5,"p",5),a(6,"Join the Udgama Business Suite"),i()(),r(7,"form",6,0),x("ngSubmit",function(){return t.signup()}),r(9,"mat-form-field",7)(10,"mat-label"),a(11,"Full Name"),i(),r(12,"mat-icon",8),a(13,"person"),i(),r(14,"input",9),y("ngModelChange",function(c){return v(n),M(t.user.fullname,c)||(t.user.fullname=c),b(c)}),i(),r(15,"mat-error"),a(16,"FullName is required*"),i()(),r(17,"mat-form-field",7)(18,"mat-label"),a(19,"Email Address"),i(),r(20,"mat-icon",8),a(21,"mail"),i(),r(22,"input",10),y("ngModelChange",function(c){return v(n),M(t.user.email,c)||(t.user.email=c),b(c)}),i(),r(23,"mat-error"),a(24,"Email-Id is required*"),i()(),r(25,"mat-form-field",7)(26,"mat-label"),a(27,"Password"),i(),r(28,"mat-icon",8),a(29,"lock"),i(),r(30,"input",11),y("ngModelChange",function(c){return v(n),M(t.user.password,c)||(t.user.password=c),b(c)}),i(),r(31,"mat-error"),a(32,"Password is required*"),i()(),r(33,"mat-form-field",12)(34,"mat-label"),a(35,"Confirm Password"),i(),r(36,"mat-icon",8),a(37,"lock_reset"),i(),r(38,"input",13),y("ngModelChange",function(c){return v(n),M(t.confirmPassword,c)||(t.confirmPassword=c),b(c)}),i(),r(39,"mat-error"),a(40,"Entered Password not matched*"),i()(),r(41,"button",14),h(42,Je,1,0,"mat-spinner",15)(43,Ke,2,0,"span"),i()(),r(44,"div",16)(45,"span",5),a(46,"Already have an account?"),i(),r(47,"a",17),a(48,"Sign In"),i()()()()}if(e&2){let n=E(8);m(14),S("ngModel",t.user.fullname),m(8),S("ngModel",t.user.email),m(8),S("ngModel",t.user.password),m(8),S("ngModel",t.confirmPassword),m(3),p("disabled",!n.valid||t.isLoading),m(),w(t.isLoading?42:43)}},dependencies:[F,j,O,V,D,A,Fe,Ee,xe,G,I,R,Z,K,H,U,z,Q,J,W,T,B,N,$,Y],styles:[".signup-wrapper[_ngcontent-%COMP%]{background-color:#165a50;min-height:100vh;display:flex;align-items:center;justify-content:center}.card[_ngcontent-%COMP%]{width:100%;max-width:450px;border-radius:12px;padding:2.5rem}  .mat-mdc-form-field.mat-focused .mat-mdc-floating-label{color:#165a50!important}  .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,   .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,   .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing{border-color:#165a50!important;border-width:2px}  .mat-mdc-form-field .mdc-text-field__input{caret-color:#165a50!important}  .mat-mdc-form-field .mat-icon{color:#165a50!important;margin-right:8px}  .mat-mdc-form-field.mat-focused .mat-icon{color:#165a50!important;transform:scale(1.1);transition:transform .2s ease}  .mat-mdc-form-field-icon-prefix{padding:0 4px 0 0!important;display:flex;align-items:center}button[mat-raised-button][_ngcontent-%COMP%]{background-color:#165a50!important;color:#fff!important;height:50px;border-radius:25px}a[_ngcontent-%COMP%]{color:#165a50;font-weight:600;text-decoration:none}.title-color[_ngcontent-%COMP%]{color:#165a50}"]})};var re=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=f({type:o,selectors:[["app-reset-password"]],decls:2,vars:0,template:function(e,t){e&1&&(pe(0,"p"),a(1,"reset-password works!"),ue())},encapsulation:2})};var At=[{path:"",component:ee},{path:"signup",component:te},{path:"reset-password",component:re}];export{At as auth_routes};
