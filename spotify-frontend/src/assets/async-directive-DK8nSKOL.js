import{z as u}from"./index-Be4DDZz4.js";const b="https://dev.dms.heliosz.ai/api";class A{constructor(){this.data=`${b}/dms`}async getFileContentURL(s){return this.getFileAsBlob(s).then(async t=>({url:URL.createObjectURL(await t.blob),type:"pdf"}))}async getFolderContent(s=0){return fetch(`${this.data}/document?parent_folder_id=${s}`).then(t=>{if(t.ok)return t.json();throw t.json()}).then(t=>(console.log(t),t._data))}getFileAsBlob(s){const t=`${this.data}/files/download?id=${encodeURIComponent(s)}`;return fetch(t).then(n=>({headers:n.headers,blob:n.blob()}))}downloadFile(s){const t=`${this.data}/files/download?id=${encodeURIComponent(s)}`,n=document.createElement("a");n.href=t,n.download="download",n.click(),n.remove()}static get instance(){return this._globalInstance?this._globalInstance:(this._globalInstance=new A,this._globalInstance)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:p}=u,w=e=>e===null||typeof e!="object"&&typeof e!="function",g=e=>e.strings===void 0,h=()=>document.createComment(""),B=(e,s,t)=>{var o;const n=e._$AA.parentNode,i=s===void 0?e._$AB:s._$AA;if(t===void 0){const c=n.insertBefore(h(),i),l=n.insertBefore(h(),i);t=new p(c,l,e,e.options)}else{const c=t._$AB.nextSibling,l=t._$AM,_=l!==e;if(_){let r;(o=t._$AQ)==null||o.call(t,e),t._$AM=e,t._$AP!==void 0&&(r=e._$AU)!==l._$AU&&t._$AP(r)}if(c!==i||_){let r=t._$AA;for(;r!==c;){const f=r.nextSibling;n.insertBefore(r,i),r=f}}}return t},E=(e,s,t=e)=>(e._$AI(s,t),e),C={},y=(e,s=C)=>e._$AH=s,M=e=>e._$AH,R=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let s=e._$AA;const t=e._$AB.nextSibling;for(;s!==t;){const i=s.nextSibling;s.remove(),s=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},L=e=>(...s)=>({_$litDirective$:e,values:s});class v{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,t,n){this._$Ct=s,this._$AM=t,this._$Ci=n}_$AS(s,t){return this.update(s,t)}update(s,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=(e,s)=>{var n;const t=e._$AN;if(t===void 0)return!1;for(const i of t)(n=i._$AO)==null||n.call(i,s,!1),$(i,s);return!0},a=e=>{let s,t;do{if((s=e._$AM)===void 0)break;t=s._$AN,t.delete(e),e=s}while((t==null?void 0:t.size)===0)},d=e=>{for(let s;s=e._$AM;e=s){let t=s._$AN;if(t===void 0)s._$AN=t=new Set;else if(t.has(e))break;t.add(e),T(s)}};function I(e){this._$AN!==void 0?(a(this),this._$AM=e,d(this)):this._$AM=e}function N(e,s=!1,t=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(s)if(Array.isArray(n))for(let o=t;o<n.length;o++)$(n[o],!1),a(n[o]);else n!=null&&($(n,!1),a(n));else $(this,e)}const T=e=>{e.type==m.CHILD&&(e._$AP??(e._$AP=N),e._$AQ??(e._$AQ=I))};class O extends v{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,t,n){super._$AT(s,t,n),d(this),this.isConnected=s._$AU}_$AO(s,t=!0){var n,i;s!==this.isConnected&&(this.isConnected=s,s?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),t&&($(this,s),a(this))}setValue(s){if(g(this._$Ct))this._$Ct._$AI(s,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=s,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}export{A,v as a,L as e,O as f,R as h,w as i,y as m,M as p,B as r,m as t,E as v};
