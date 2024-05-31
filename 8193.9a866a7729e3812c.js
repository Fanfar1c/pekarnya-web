"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8193],{8193:(_,y,c)=>{c.r(y),c.d(y,{ion_searchbar:()=>m});var b=c(467),n=c(9672),p=c(4920),x=c(5083),k=c(333),d=c(3992),u=c(3664);const m=class{constructor(a){var e=this;(0,n.r)(this,a),this.ionInput=(0,n.d)(this,"ionInput",7),this.ionChange=(0,n.d)(this,"ionChange",7),this.ionCancel=(0,n.d)(this,"ionCancel",7),this.ionClear=(0,n.d)(this,"ionClear",7),this.ionBlur=(0,n.d)(this,"ionBlur",7),this.ionFocus=(0,n.d)(this,"ionFocus",7),this.ionStyle=(0,n.d)(this,"ionStyle",7),this.isCancelVisible=!1,this.shouldAlignLeft=!0,this.inputId="ion-searchbar-"+f++,this.inheritedAttributes={},this.onClearInput=function(){var r=(0,b.A)(function*(o){return e.ionClear.emit(),new Promise(s=>{setTimeout(()=>{const l=e.getValue();""!==l&&(e.value="",e.emitInputChange(),o&&!e.focused&&(e.setFocus(),e.focusedValue=l)),s()},64)})});return function(o){return r.apply(this,arguments)}}(),this.onCancelSearchbar=function(){var r=(0,b.A)(function*(o){o&&(o.preventDefault(),o.stopPropagation()),e.ionCancel.emit();const s=e.getValue(),l=e.focused;yield e.onClearInput(),s&&!l&&e.emitValueChange(o),e.nativeInput&&e.nativeInput.blur()});return function(o){return r.apply(this,arguments)}}(),this.onInput=r=>{const o=r.target;o&&(this.value=o.value),this.emitInputChange(r)},this.onChange=r=>{this.emitValueChange(r)},this.onBlur=r=>{this.focused=!1,this.ionBlur.emit(),this.positionElements(),this.focusedValue!==this.value&&this.emitValueChange(r),this.focusedValue=void 0},this.onFocus=()=>{this.focused=!0,this.focusedValue=this.value,this.ionFocus.emit(),this.positionElements()},this.focused=!1,this.noAnimate=!0,this.color=void 0,this.animated=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.cancelButtonIcon=u.c.get("backButtonIcon",d.a),this.cancelButtonText="Cancel",this.clearIcon=void 0,this.debounce=void 0,this.disabled=!1,this.inputmode=void 0,this.enterkeyhint=void 0,this.maxlength=void 0,this.minlength=void 0,this.name=this.inputId,this.placeholder="Search",this.searchIcon=void 0,this.showCancelButton="never",this.showClearButton="always",this.spellcheck=!1,this.type="search",this.value=""}onLangChanged(a){this.inheritedAttributes=Object.assign(Object.assign({},this.inheritedAttributes),{lang:a}),(0,n.j)(this)}onDirChanged(a){this.inheritedAttributes=Object.assign(Object.assign({},this.inheritedAttributes),{dir:a}),(0,n.j)(this)}debounceChanged(){const{ionInput:a,debounce:e,originalIonInput:r}=this;this.ionInput=void 0===e?null!=r?r:a:(0,p.e)(a,e)}valueChanged(){const a=this.nativeInput,e=this.getValue();a&&a.value!==e&&(a.value=e)}showCancelButtonChanged(){requestAnimationFrame(()=>{this.positionElements(),(0,n.j)(this)})}connectedCallback(){this.emitStyle()}componentWillLoad(){this.inheritedAttributes=Object.assign({},(0,p.h)(this.el,["lang","dir"]))}componentDidLoad(){this.originalIonInput=this.ionInput,this.positionElements(),this.debounceChanged(),setTimeout(()=>{this.noAnimate=!1},300)}emitStyle(){this.ionStyle.emit({searchbar:!0})}setFocus(){var a=this;return(0,b.A)(function*(){a.nativeInput&&a.nativeInput.focus()})()}getInputElement(){var a=this;return(0,b.A)(function*(){return a.nativeInput||(yield new Promise(e=>(0,p.c)(a.el,e))),Promise.resolve(a.nativeInput)})()}emitValueChange(a){const{value:e}=this,r=null==e?e:e.toString();this.focusedValue=r,this.ionChange.emit({value:r,event:a})}emitInputChange(a){const{value:e}=this;this.ionInput.emit({value:e,event:a})}positionElements(){const a=this.getValue(),e=this.shouldAlignLeft,r=(0,u.b)(this),o=!this.animated||""!==a.trim()||!!this.focused;this.shouldAlignLeft=o,"ios"===r&&(e!==o&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())}positionPlaceholder(){const a=this.nativeInput;if(!a)return;const e=(0,x.i)(this.el),r=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)a.removeAttribute("style"),r.removeAttribute("style");else{const o=document,s=o.createElement("span");s.innerText=this.placeholder||"",o.body.appendChild(s),(0,p.r)(()=>{const l=s.offsetWidth;s.remove();const g="calc(50% - "+l/2+"px)",v="calc(50% - "+(l/2+r.clientWidth+8)+"px)";e?(a.style.paddingRight=g,r.style.marginRight=v):(a.style.paddingLeft=g,r.style.marginLeft=v)})}}positionCancelButton(){const a=(0,x.i)(this.el),e=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button"),r=this.shouldShowCancelButton();if(null!==e&&r!==this.isCancelVisible){const o=e.style;if(this.isCancelVisible=r,r)a?o.marginLeft="0":o.marginRight="0";else{const s=e.offsetWidth;s>0&&(a?o.marginLeft=-s+"px":o.marginRight=-s+"px")}}}getValue(){return this.value||""}hasValue(){return""!==this.getValue()}shouldShowCancelButton(){return!("never"===this.showCancelButton||"focus"===this.showCancelButton&&!this.focused)}shouldShowClearButton(){return!("never"===this.showClearButton||"focus"===this.showClearButton&&!this.focused)}render(){const{cancelButtonText:a,autocapitalize:e}=this,r=this.animated&&u.c.getBoolean("animated",!0),o=(0,u.b)(this),s=this.clearIcon||("ios"===o?d.b:d.d),l=this.searchIcon||("ios"===o?d.s:d.e),g=this.shouldShowCancelButton(),v="never"!==this.showCancelButton&&(0,n.h)("button",{key:"20b2d0f2e3425eede725dbe3323c7c29cdb66f4e","aria-label":a,"aria-hidden":g?void 0:"true",type:"button",tabIndex:"ios"!==o||g?void 0:-1,onMouseDown:this.onCancelSearchbar,onTouchStart:this.onCancelSearchbar,class:"searchbar-cancel-button"},(0,n.h)("div",{key:"3a516c3fdd35256eb79639fd340afcdd92cfd7aa","aria-hidden":"true"},"md"===o?(0,n.h)("ion-icon",{"aria-hidden":"true",mode:o,icon:this.cancelButtonIcon,lazy:!1}):a));return(0,n.h)(n.f,{key:"34878db21f63a9bdffca0446d8ad5619ff04cac3",role:"search","aria-disabled":this.disabled?"true":null,class:(0,k.c)(this.color,{[o]:!0,"searchbar-animated":r,"searchbar-disabled":this.disabled,"searchbar-no-animate":r&&this.noAnimate,"searchbar-has-value":this.hasValue(),"searchbar-left-aligned":this.shouldAlignLeft,"searchbar-has-focus":this.focused,"searchbar-should-show-clear":this.shouldShowClearButton(),"searchbar-should-show-cancel":this.shouldShowCancelButton()})},(0,n.h)("div",{key:"faa7b011206a8359b1963368c65988e506b260cb",class:"searchbar-input-container"},(0,n.h)("input",Object.assign({key:"732d3e5a2b258da6f136a14472ac872816a9853b","aria-label":"search text",disabled:this.disabled,ref:C=>this.nativeInput=C,class:"searchbar-input",inputMode:this.inputmode,enterKeyHint:this.enterkeyhint,name:this.name,onInput:this.onInput,onChange:this.onChange,onBlur:this.onBlur,onFocus:this.onFocus,minLength:this.minlength,maxLength:this.maxlength,placeholder:this.placeholder,type:this.type,value:this.getValue(),autoCapitalize:"default"===e?void 0:e,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellcheck:this.spellcheck},this.inheritedAttributes)),"md"===o&&v,(0,n.h)("ion-icon",{key:"767dca971849f221dde220deae728b41bf764b98","aria-hidden":"true",mode:o,icon:l,lazy:!1,class:"searchbar-search-icon"}),(0,n.h)("button",{key:"9941b5de1ed9ebcf3e81de8e0731c09dea5a89d9","aria-label":"reset",type:"button","no-blur":!0,class:"searchbar-clear-button",onPointerDown:C=>{C.preventDefault()},onClick:()=>this.onClearInput(!0)},(0,n.h)("ion-icon",{key:"cb2b543d286373a84e2c6c2a959f92b045bbd7dd","aria-hidden":"true",mode:o,icon:s,lazy:!1,class:"searchbar-clear-icon"}))),"ios"===o&&v)}get el(){return(0,n.i)(this)}static get watchers(){return{lang:["onLangChanged"],dir:["onDirChanged"],debounce:["debounceChanged"],value:["valueChanged"],showCancelButton:["showCancelButtonChanged"]}}};let f=0;m.style={ios:".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;min-height:inherit;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-ios::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios>div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-clear-button.sc-ion-searchbar-ios:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-ios-h{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);--border-radius:10px;--box-shadow:none;--cancel-button-color:var(--ion-color-primary, #0054e9);--clear-button-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--color:var(--ion-text-color, #000);--icon-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:12px;padding-bottom:12px;min-height:60px;contain:content}.searchbar-input-container.sc-ion-searchbar-ios{min-height:36px}.searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px);top:0;position:absolute;width:1.375rem;height:100%;contain:strict}.searchbar-search-icon.sc-ion-searchbar-ios{inset-inline-start:5px}.searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:6px;padding-bottom:6px;height:100%;font-size:1.0625rem;font-weight:400;contain:strict}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:1.75rem;padding-inline-start:1.75rem;-webkit-padding-end:1.75rem;padding-inline-end:1.75rem}.searchbar-clear-button.sc-ion-searchbar-ios{top:0;background-position:center;position:absolute;width:1.875rem;height:100%;border:0;background-color:transparent}.searchbar-clear-button.sc-ion-searchbar-ios{inset-inline-end:0}.searchbar-clear-icon.sc-ion-searchbar-ios{width:1.125rem;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:17px}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:0;margin-inline-start:0}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:1.875rem;padding-inline-start:1.875rem}.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-transition:all 300ms ease;transition:all 300ms ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-margin-end:-100%;margin-inline-end:-100%;-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;pointer-events:none}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover: hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.sc-ion-searchbar-ios-h,ion-toolbar .sc-ion-searchbar-ios-h{padding-top:1px;padding-bottom:15px;min-height:52px}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color),ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb), 0.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}",md:".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;min-height:inherit;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-md::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md>div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-clear-button.sc-ion-searchbar-md:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-md-h{--background:var(--ion-background-color, #fff);--border-radius:2px;--box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--cancel-button-color:var(--ion-color-step-900, var(--ion-text-color-step-100, #1a1a1a));--clear-button-color:initial;--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--icon-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;background:inherit}.searchbar-search-icon.sc-ion-searchbar-md{top:11px;width:1.3125rem;height:1.3125rem}.searchbar-search-icon.sc-ion-searchbar-md{inset-inline-start:16px}.searchbar-cancel-button.sc-ion-searchbar-md{top:0;background-color:transparent;font-size:1.5em}.searchbar-cancel-button.sc-ion-searchbar-md{inset-inline-start:9px}.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-cancel-button.sc-ion-searchbar-md{position:absolute}.searchbar-search-icon.ion-activated.sc-ion-searchbar-md,.searchbar-cancel-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{-webkit-padding-start:3.4375rem;padding-inline-start:3.4375rem;-webkit-padding-end:3.4375rem;padding-inline-end:3.4375rem;padding-top:0.375rem;padding-bottom:0.375rem;background-position:left 8px center;height:auto;font-size:1rem;font-weight:400;line-height:30px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}[dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}@supports selector(:dir(rtl)){.searchbar-input.sc-ion-searchbar-md:dir(rtl){background-position:right 8px center}}.searchbar-clear-button.sc-ion-searchbar-md{top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}.searchbar-clear-button.sc-ion-searchbar-md{inset-inline-end:13px}.searchbar-clear-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:1.375rem;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h,ion-toolbar .sc-ion-searchbar-md-h{-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px;padding-top:3px;padding-bottom:3px}"}},333:(_,y,c)=>{c.d(y,{c:()=>p,g:()=>k,h:()=>n,o:()=>u});var b=c(467);const n=(t,i)=>null!==i.closest(t),p=(t,i)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},i):i,k=t=>{const i={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(h=>null!=h).map(h=>h.trim()).filter(h=>""!==h):[])(t).forEach(h=>i[h]=!0),i},d=/^[a-z][a-z0-9+\-.]*:/,u=function(){var t=(0,b.A)(function*(i,h,w,m){if(null!=i&&"#"!==i[0]&&!d.test(i)){const f=document.querySelector("ion-router");if(f)return null!=h&&h.preventDefault(),f.push(i,w,m)}return!1});return function(h,w,m,f){return t.apply(this,arguments)}}()}}]);