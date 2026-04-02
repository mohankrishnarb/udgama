import{a as R,b as rt,c as ct,d as lt,e as mt,f as dt}from"./chunk-QSX6OBSU.js";import{h as wt}from"./chunk-IQEIREXT.js";import{Ac as gt,Eb as it,Fa as p,Ga as C,Ha as g,Ia as A,Ja as _,Lc as bt,Nb as nt,Nc as E,Ob as at,Pc as ut,Qc as ft,Ra as O,S as w,Sc as vt,Tc as xt,U as H,Uc as kt,W as l,Wc as yt,Xa as d,Xc as F,Ya as o,Yc as B,Za as a,_a as y,bc as ot,ca as W,d as K,da as Z,dc as L,fc as st,ha as Y,hb as k,ic as P,ja as J,ka as x,kb as S,lb as b,mb as z,na as D,nb as tt,ob as f,pa as M,pb as v,pc as I,qc as ht,ta as m,vb as u,vc as pt,wb as et,xb as s,y as X,za as $,zc as _t}from"./chunk-RJFNCZEK.js";var St=["*",[["mat-toolbar-row"]]],zt=["*","mat-toolbar-row"],Rt=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275dir=g({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),Mt=(()=>{class t{_elementRef=l(M);_platform=l(P);_document=l(Z);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["mat-toolbar"]],contentQueries:function(e,n,c){if(e&1&&z(c,Rt,5),e&2){let h;f(h=v())&&(n._toolbarRows=h)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,n){e&2&&(et(n.color?"mat-"+n.color:""),u("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:zt,decls:2,vars:0,template:function(e,n){e&1&&(S(St),b(0),b(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Ct=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[I]})}return t})();var j=class t{onToggle=nt();toggleMenu(){this.onToggle.emit()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=p({type:t,selectors:[["app-header"]],outputs:{onToggle:"onToggle"},decls:9,vars:0,consts:[["color","primary",1,"d-flex","justify-content-between","shadow-sm","header"],[1,"d-flex","align-items-center"],["mat-icon-button","",3,"click"],["mat-icon-button",""]],template:function(i,e){i&1&&(o(0,"mat-toolbar",0)(1,"div",1)(2,"button",2),k("click",function(){return e.toggleMenu()}),o(3,"mat-icon"),s(4,"menu"),a()()(),o(5,"div")(6,"button",3)(7,"mat-icon"),s(8,"account_circle"),a()()()())},dependencies:[Ct,Mt,yt,xt,B,F],styles:[".header[_ngcontent-%COMP%]{height:79px!important;border-bottom:2px solid #ebebeb}"]})};var Lt=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[I]})}return t})();var Bt=["*"],jt=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Nt=["unscopedContent"],Qt=["text"],Vt=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Ht=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Ut=new H("ListOption"),Gt=(()=>{class t{_elementRef=l(M);constructor(){}static \u0275fac=function(e){return new(e||t)};static \u0275dir=g({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),qt=(()=>{class t{_elementRef=l(M);constructor(){}static \u0275fac=function(e){return new(e||t)};static \u0275dir=g({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),Kt=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275dir=g({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),It=(()=>{class t{_listOption=l(Ut,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||t)};static \u0275dir=g({type:t,hostVars:4,hostBindings:function(e,n){e&2&&u("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return t})(),Xt=(()=>{class t extends It{static \u0275fac=(()=>{let i;return function(n){return(i||(i=D(t)))(n||t)}})();static \u0275dir=g({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[A]})}return t})(),q=(()=>{class t extends It{static \u0275fac=(()=>{let i;return function(n){return(i||(i=D(t)))(n||t)}})();static \u0275dir=g({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[A]})}return t})(),Wt=new H("MAT_LIST_CONFIG"),G=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(i){this._disableRipple=E(i)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(i){this._disabled.set(E(i))}_disabled=x(!1);_defaultOptions=l(Wt,{optional:!0});static \u0275fac=function(e){return new(e||t)};static \u0275dir=g({type:t,hostVars:1,hostBindings:function(e,n){e&2&&O("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),Zt=(()=>{class t{_elementRef=l(M);_ngZone=l(Y);_listBase=l(G,{optional:!0});_platform=l(P);_hostElement;_isButtonElement;_noopAnimations=bt();_avatars;_icons;set lines(i){this._explicitLines=ht(i,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(i){this._disableRipple=E(i)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(i){this._disabled.set(E(i))}_disabled=x(!1);_subscriptions=new K;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){l(pt).load(vt);let i=l(ft,{optional:!0});this.rippleConfig=i||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ut(this,this._ngZone,this._hostElement,this._platform,l(W)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(X(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(i){if(!this._lines||!this._titles||!this._unscopedContent)return;i&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let c=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",c),n.classList.toggle("mdc-list-item__secondary-text",!c)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let i=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(i+=1),i}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(i=>i.nodeType!==i.COMMENT_NODE).some(i=>!!(i.textContent&&i.textContent.trim()))}static \u0275fac=function(e){return new(e||t)};static \u0275dir=g({type:t,contentQueries:function(e,n,c){if(e&1&&z(c,Xt,4)(c,q,4),e&2){let h;f(h=v())&&(n._avatars=h),f(h=v())&&(n._icons=h)}},hostVars:4,hostBindings:function(e,n){e&2&&(O("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),u("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var Et=(()=>{class t extends Zt{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(i){this._activated=E(i)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let i;return function(n){return(i||(i=D(t)))(n||t)}})();static \u0275cmp=p({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,c){if(e&1&&z(c,qt,5)(c,Gt,5)(c,Kt,5),e&2){let h;f(h=v())&&(n._lines=h),f(h=v())&&(n._titles=h),f(h=v())&&(n._meta=h)}},viewQuery:function(e,n){if(e&1&&tt(Nt,5)(Qt,5),e&2){let c;f(c=v())&&(n._unscopedContent=c.first),f(c=v())&&(n._itemText=c.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(O("aria-current",n._getAriaCurrent()),u("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[A],ngContentSelectors:Ht,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(S(Vt),b(0),o(1,"span",1),b(2,1),b(3,2),o(4,"span",2,0),k("cdkObserveContent",function(){return n._updateItemLines(!0)}),b(6,3),a()(),b(7,4),b(8,5),y(9,"div",3))},dependencies:[_t],encapsulation:2,changeDetection:0})}return t})();var Tt=(()=>{class t extends G{_isNonInteractive=!1;static \u0275fac=(()=>{let i;return function(n){return(i||(i=D(t)))(n||t)}})();static \u0275cmp=p({type:t,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[it([{provide:G,useExisting:t}]),A],ngContentSelectors:Bt,decls:1,vars:0,template:function(e,n){e&1&&(S(),b(0))},styles:[jt],encapsulation:2,changeDetection:0})}return t})();var Dt=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=C({type:t});static \u0275inj=w({imports:[gt,kt,wt,I,Lt]})}return t})();function Jt(t,r){t&1&&(o(0,"h4",16),s(1,"UDGAMA"),a())}function $t(t,r){t&1&&(o(0,"p",17),s(1,"UBS"),a())}function te(t,r){t&1&&(o(0,"span",18),s(1,"Dashboard"),a())}function ee(t,r){t&1&&(o(0,"span",18),s(1,"Kanban"),a())}function ie(t,r){t&1&&(o(0,"span",18),s(1,"Notes"),a())}function ne(t,r){t&1&&(o(0,"span",18),s(1,"Todo"),a())}function ae(t,r){t&1&&(o(0,"span",18),s(1,"Drive"),a())}function oe(t,r){t&1&&(o(0,"span",18),s(1,"Calendar"),a())}function se(t,r){t&1&&(o(0,"span",18),s(1,"Users"),a())}function re(t,r){t&1&&(o(0,"span",18),s(1,"Settings"),a())}function ce(t,r){t&1&&(o(0,"span",18),s(1,"Logout"),a())}var N=class t{constructor(r){this.router=r}isExpanded=at(!0);onLogout(){localStorage.removeItem("token"),this.router.navigate(["/"])}static \u0275fac=function(i){return new(i||t)($(rt))};static \u0275cmp=p({type:t,selectors:[["app-menu"]],inputs:{isExpanded:[1,"isExpanded"]},decls:42,vars:13,consts:[[1,"sidebar","bg-dark"],[1,"brand","p-3","border-bottom","border-secondary","text-center"],["class","m-0 text-white sidebarTitle",4,"ngIf"],["class","text-white fs-4 mb-0",4,"ngIf"],["mat-list-item","","routerLink","/dashboard","routerLinkActive","active","title","Dashboard"],["matListItemIcon",""],["class","menu-text",4,"ngIf"],["mat-list-item","","routerLink","/kanban","routerLinkActive","active","title","Kanban"],["mat-list-item","","routerLink","/notes","routerLinkActive","active","title","Notes"],["mat-list-item","","routerLink","/todo","routerLinkActive","active","title","Todo"],["mat-list-item","","routerLink","/drive","routerLinkActive","active","title","Drive"],["mat-list-item","","routerLink","/calendar","routerLinkActive","active","title","Calendar"],["mat-list-item","","routerLink","/users","routerLinkActive","active","title","Users"],["mat-list-item","","routerLink","/settings","routerLinkActive","active","title","Settings"],[1,"logout-nav"],["mat-list-item","","title","Logout",1,"logout-item",3,"click"],[1,"m-0","text-white","sidebarTitle"],[1,"text-white","fs-4","mb-0"],[1,"menu-text"]],template:function(i,e){i&1&&(o(0,"div",0)(1,"div",1),_(2,Jt,2,0,"h4",2)(3,$t,2,0,"p",3),a(),o(4,"mat-nav-list")(5,"a",4)(6,"mat-icon",5),s(7,"dashboard"),a(),_(8,te,2,0,"span",6),a(),o(9,"a",7)(10,"mat-icon",5),s(11,"art_track"),a(),_(12,ee,2,0,"span",6),a(),o(13,"a",8)(14,"mat-icon",5),s(15,"notes"),a(),_(16,ie,2,0,"span",6),a(),o(17,"a",9)(18,"mat-icon",5),s(19,"list_alt"),a(),_(20,ne,2,0,"span",6),a(),o(21,"a",10)(22,"mat-icon",5),s(23,"filter_drama"),a(),_(24,ae,2,0,"span",6),a(),o(25,"a",11)(26,"mat-icon",5),s(27,"insert_invitation"),a(),_(28,oe,2,0,"span",6),a(),o(29,"a",12)(30,"mat-icon",5),s(31,"people"),a(),_(32,se,2,0,"span",6),a(),o(33,"a",13)(34,"mat-icon",5),s(35,"settings"),a(),_(36,re,2,0,"span",6),a()(),o(37,"mat-nav-list",14)(38,"a",15),k("click",function(){return e.onLogout()}),o(39,"mat-icon",5),s(40,"logout"),a(),_(41,ce,2,0,"span",6),a()()()),i&2&&(u("mini",!e.isExpanded()),m(2),d("ngIf",e.isExpanded()),m(),d("ngIf",!e.isExpanded()),m(5),d("ngIf",e.isExpanded()),m(4),d("ngIf",e.isExpanded()),m(4),d("ngIf",e.isExpanded()),m(4),d("ngIf",e.isExpanded()),m(4),d("ngIf",e.isExpanded()),m(4),d("ngIf",e.isExpanded()),m(4),d("ngIf",e.isExpanded()),m(4),d("ngIf",e.isExpanded()),m(5),d("ngIf",e.isExpanded()))},dependencies:[L,ot,dt,ct,lt,Dt,Tt,Et,q,B,F],styles:[".sidebar[_ngcontent-%COMP%]{width:300px;height:100vh;background-color:#212529;transition:width .3s ease-in-out;overflow-x:hidden;border-right:2px solid #cdcdcd}.sidebarTitle[_ngcontent-%COMP%]{padding-top:1rem}.sidebar.mini[_ngcontent-%COMP%]{width:125px;padding:10px}mat-nav-list[_ngcontent-%COMP%]{padding:1.5rem}  .mat-mdc-nav-list .mat-mdc-list-item{color:#fff!important;display:flex;align-items:center}.active[_ngcontent-%COMP%]{background-color:#165a50!important;border-left:4px solid #ffffff;border-radius:8px!important}  .mat-mdc-nav-list .mat-mdc-list-item mat-icon, .menu-text[_ngcontent-%COMP%]{color:#fff!important}.sidebar.mini[_ngcontent-%COMP%]     .mat-mdc-nav-list .mat-mdc-list-item{justify-content:center}.sidebar.mini[_ngcontent-%COMP%]     .mat-mdc-nav-list .mat-mdc-list-item mat-icon{margin-right:0!important}.brand[_ngcontent-%COMP%]{color:#fff;padding:1rem}"]})};var Q=class t{isExpanded=x(!0);toggleSidebar(){this.isExpanded.update(r=>!r)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=p({type:t,selectors:[["app-layouts"]],decls:7,vars:3,consts:[[1,"main-wrapper"],["id","udgama-dashboard-shell",1,"d-flex"],[3,"isExpanded"],["id","main-wrapper"],[3,"onToggle"],[1,"container-fluid","p-4"]],template:function(i,e){i&1&&(o(0,"div",0)(1,"div",1),y(2,"app-menu",2),o(3,"div",3)(4,"app-header",4),k("onToggle",function(){return e.toggleSidebar()}),a(),o(5,"div",5),y(6,"router-outlet"),a()()()()),i&2&&(m(2),d("isExpanded",e.isExpanded()),m(),u("content-collapsed",!e.isExpanded()))},dependencies:[R,L,j,N],styles:["#udgama-dashboard-shell[_ngcontent-%COMP%]{height:100vh;overflow:hidden;display:flex}#main-wrapper[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;height:100vh;overflow:hidden;transition:margin-left .3s ease}.container-fluid.p-4[_ngcontent-%COMP%]{flex:1;overflow-y:auto;background-color:#f4f7f6}.container-fluid.p-4[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px}.container-fluid.p-4[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:10px}.container-fluid.p-4[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#165a50;border-radius:10px}.container-fluid.p-4[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#0e3d36}.container-fluid.p-4[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{scrollbar-width:thin;scrollbar-color:#165a50 #f1f1f1}"]})};var At=[{path:"",loadChildren:()=>import("./chunk-UGFTNIVR.js").then(t=>t.auth_routes)},{path:"",component:Q,loadChildren:()=>import("./chunk-E7MITG6Z.js").then(t=>t.pages_routes)}];var Ot={providers:[J(),mt(At)]};var V=class t{title=x("udgama");isExpanded=x(!0);toggleSidebar(){this.isExpanded.update(r=>!r)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=p({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(i,e){i&1&&y(0,"router-outlet")},dependencies:[R,L],styles:["#udgama-wrapper[_ngcontent-%COMP%]{height:100vh;background-color:#f4f7f6}#content-area[_ngcontent-%COMP%]{flex-grow:1;transition:all .3s ease}"]})};st(V,Ot).catch(t=>console.error(t));
