import{w as C,x as b,s as _,A as L,_ as o,r as S,t as P}from"./index-Be4DDZz4.js";import{e as T,f as M,i as D,a as F,t as j,p as q,v as x,r as y,h as k,m as A,A as I}from"./async-directive-DK8nSKOL.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class G{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class Y{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(t=>this.q=t))}resume(){var t;(t=this.q)==null||t.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=n=>!D(n)&&typeof n.then=="function",W=1073741823;let O=class extends M{constructor(){super(...arguments),this._$Cwt=W,this._$Cbt=[],this._$CK=new G(this),this._$CX=new Y}render(...t){return t.find(r=>!z(r))??C}update(t,r){const s=this._$Cbt;let e=s.length;this._$Cbt=r;const u=this._$CK,d=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<r.length&&!(c>this._$Cwt);c++){const h=r[c];if(!z(h))return this._$Cwt=c,h;c<e&&h===s[c]||(this._$Cwt=W,e=0,Promise.resolve(h).then(async m=>{for(;d.get();)await d.get();const f=u.deref();if(f!==void 0){const i=f._$Cbt.indexOf(h);i>-1&&i<f._$Cwt&&(f._$Cwt=i,f.setValue(m))}}))}return C}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const X=T(O);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=(n,t,r)=>{const s=new Map;for(let e=t;e<=r;e++)s.set(n[e],e);return s},Z=T(class extends F{constructor(n){if(super(n),n.type!==j.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,t,r){let s;r===void 0?r=t:t!==void 0&&(s=t);const e=[],u=[];let d=0;for(const c of n)e[d]=s?s(c,d):d,u[d]=r(c,d),d++;return{values:u,keys:e}}render(n,t,r){return this.dt(n,t,r).values}update(n,[t,r,s]){const e=q(n),{values:u,keys:d}=this.dt(t,r,s);if(!Array.isArray(e))return this.ut=d,u;const c=this.ut??(this.ut=[]),h=[];let m,f,i=0,g=e.length-1,a=0,p=u.length-1;for(;i<=g&&a<=p;)if(e[i]===null)i++;else if(e[g]===null)g--;else if(c[i]===d[a])h[a]=x(e[i],u[a]),i++,a++;else if(c[g]===d[p])h[p]=x(e[g],u[p]),g--,p--;else if(c[i]===d[p])h[p]=x(e[i],u[p]),y(n,h[p+1],e[i]),i++,p--;else if(c[g]===d[a])h[a]=x(e[g],u[a]),y(n,e[i],e[g]),g--,a++;else if(m===void 0&&(m=E(d,a,p),f=E(c,i,g)),m.has(c[i]))if(m.has(c[g])){const v=f.get(d[a]),R=v!==void 0?e[v]:null;if(R===null){const B=y(n,e[i]);x(B,u[a]),h[a]=B}else h[a]=x(R,u[a]),y(n,e[i],R),e[v]=null;a++}else k(e[g]),g--;else k(e[i]),i++;for(;a<=p;){const v=y(n,h[p+1]);x(v,u[a]),h[a++]=v}for(;i<=g;){const v=e[i++];v!==null&&k(v)}return this.ut=d,A(n,h),C}}),w={pdf:b`
    <svg xmlns="http://www.w3.org/2000/svg" width="30.22" height="30.582" viewBox="0 0 30.22 37.582">
      <path id="Path_1430" data-name="Path 1430" d="M29.037,0H49.183A4.876,4.876,0,0,1,54.22,4.7V32.884a4.876,4.876,0,0,1-5.037,4.7H29.037A4.876,4.876,0,0,1,24,32.884V4.7A4.876,4.876,0,0,1,29.037,0Zm.416,27.406a1.986,1.986,0,0,0,1.1.984,2.128,2.128,0,0,0,1.461-.07,6.646,6.646,0,0,0,2.332-1.846,26.522,26.522,0,0,0,2.571-3.547,31.178,31.178,0,0,1,5.029-.954A13.882,13.882,0,0,0,44.24,24.2a4.454,4.454,0,0,0,2.352.979,2.274,2.274,0,0,0,1.284-.324,2.477,2.477,0,0,0,.891-.977,2.6,2.6,0,0,0,.348-1.322,1.909,1.909,0,0,0-.5-1.217,4.136,4.136,0,0,0-2.418-1.092,15.541,15.541,0,0,0-3.362-.117,25.373,25.373,0,0,1-2.468-3.96,21.771,21.771,0,0,0,1.31-4.214,6.851,6.851,0,0,0,.121-1.442,2.749,2.749,0,0,0-.32-1.264,1.752,1.752,0,0,0-1.2-.857,2.788,2.788,0,0,0-1.513.181,2.574,2.574,0,0,0-1.639,1.933,6.1,6.1,0,0,0,.116,2.668,16.218,16.218,0,0,0,1.083,3.042,44.984,44.984,0,0,1-2.674,5.231,20.043,20.043,0,0,0-3.732,1.515,6.63,6.63,0,0,0-2.259,1.849,2.381,2.381,0,0,0-.2,2.591Z" transform="translate(-24)" fill="red" fill-rule="evenodd"/>
    </svg>
  `,excel:b`<svg
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 14l9-5-9-5-9 5 9 5z"
    ></path>
  </svg>`,docs:b`
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 32 32"
    >
      <title>file-text-o</title>
      <path
        d="M20.5 15h-9c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5v0h9c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5v0z"
      ></path>
      <path
        d="M18.5 23h-7c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5v0h7c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5v0z"
      ></path>
      <path
        d="M20.5 19h-9c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5v0h9c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5v0z"
      ></path>
      <path
        d="M19 5.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0 4.5c0 0.552 0.448 1 1 1v0h4.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5v0h-4.5z"
      ></path>
      <path
        d="M25.707 9l-5.707-5.707c-0.18-0.181-0.428-0.293-0.703-0.293-0.001 0-0.002 0-0.004 0h-12.293c-0.552 0-1 0.448-1 1v0 24c0 0.552 0.448 1 1 1v0h18c0.552 0 1-0.448 1-1v0-18.293c0-0.001 0-0.002 0-0.003 0-0.275-0.112-0.524-0.293-0.704l-0-0zM25 28h-18v-24h12.293l5.707 5.707z"
      ></path>
    </svg>
  `,folder:b`
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 32 32"
    >
      <title>folder-o</title>
      <path
        d="M29 7h-15.464c-0.002 0-0.004 0-0.006 0-0.551 0-1.049-0.224-1.409-0.586l-1.535-1.535c-0.54-0.543-1.287-0.879-2.113-0.879-0.003 0-0.006 0-0.009 0h-5.464c-0.552 0-1 0.448-1 1v0 20c0 0.552 0.448 1 1 1v0h26c0.552 0 1-0.448 1-1v0-17c0-0.552-0.448-1-1-1v0zM29 25h-26v-20h5.464c0.002 0 0.004 0 0.006 0 0.551 0 1.049 0.224 1.409 0.586l1.535 1.535c0.54 0.543 1.287 0.879 2.113 0.879 0.003 0 0.006 0 0.009 0h15.464z"
      ></path>
      <path
        d="M4 10.5c0 0.276 0.224 0.5 0.5 0.5v0h23c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5v0h-23c-0.276 0-0.5 0.224-0.5 0.5v0z"
      ></path>
    </svg>
  `,upFolder:b`
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <title>folder-open-o</title>
      <path
        d="M29.654 12.377c-0.185-0.231-0.466-0.377-0.782-0.377-0 0-0.001 0-0.001 0h-0.871v-4c0-0.552-0.448-1-1-1v0h-11.464c-0.002 0-0.004 0-0.006 0-0.551 0-1.049-0.224-1.409-0.586l-1.535-1.535c-0.54-0.543-1.287-0.879-2.113-0.879-0.003 0-0.006 0-0.009 0h-5.464c-0.552 0-1 0.448-1 1v0 7h-0.872c-0.552 0-1 0.448-1 1 0 0.080 0.009 0.157 0.027 0.232l-0.001-0.007 2.769 12c0.106 0.447 0.502 0.775 0.974 0.775 0.001 0 0.002 0 0.003 0h20.2c0.472-0 0.868-0.328 0.973-0.768l0.001-0.007 2.769-12c0.017-0.069 0.026-0.147 0.026-0.228 0-0.235-0.081-0.451-0.217-0.622l0.002 0.002zM5 5h5.464c0.002 0 0.004 0 0.006 0 0.551 0 1.049 0.224 1.409 0.586l1.535 1.535c0.54 0.543 1.287 0.879 2.113 0.879 0.003 0 0.006 0 0.009 0h11.464v4h-22zM26.1 25h-20.2l-2.772-12h25.743z"
      ></path>
    </svg>
  `},H=n=>n.endsWith(".pdf")?"pdf":n.endsWith(".xlsx")?"excel":"unknown";var K=Object.defineProperty,U=Object.getOwnPropertyDescriptor,$=(n,t,r,s)=>{for(var e=s>1?void 0:s?U(t,r):t,u=n.length-1,d;u>=0;u--)(d=n[u])&&(e=(s?d(t,r,e):d(e))||e);return s&&e&&K(t,r,e),e};let l=class extends _{constructor(){super(),this.visits=[0],this.search="",this.promise=I.instance.getFolderContent(),this.folders=null,this._folderId=0,this.folders=this.getFolderContent(),this._auth=new L(this)}get folderId(){return this._folderId}set folderId(n){this._folderId=n,this.promise=I.instance.getFolderContent(),this.visits.push(n),this.folders=this.getFolderContent()}async getFolderContent(){const t=(await this.promise).filter(r=>this.search?r.name.toLowerCase().includes(this.search.toLowerCase()):!0);return this.mapData(t)}mapData(n){return b`
      ${this.visits.length>1?b`
            <li
              class="${o(l.style.listItem,l.style.listItemUp)}"
              @click="${()=>{const t=this.visits.pop();t&&(this.folderId=t,this.visits.pop())}}"
            >
              <div
                class="${o(l.style.flex,l.style.fullWidth)}"
              >
                <div class="${o(l.style.centerImage)}">
                  ${w.upFolder}
                </div>
                <span
                  class="${o(l.style.listItemText,l.style.flexGrow)}"
                >
                  Up
                </span>
              </div>
            </li>
          `:""}
      ${Z(n,t=>t.id,t=>{const r=new Date(t.createdDate),s=`${r.getDate()}/${r.getMonth()}/${r.getFullYear()}`;return t.IsFolder||t.isFolder?b`
              <li
                class="${o(l.style.listItem)}"
                @click="${()=>{this.folderId=t.id}}"
              >
                <div
                  class="${o(l.style.flex,l.style.fullWidth)}"
                >
                  <div class="${o(l.style.centerImage)}">
                    ${w.folder}
                  </div>
                  <span
                    class="${o(l.style.listItemText,l.style.flexGrow)}"
                  >
                    ${t.name}
                  </span>
                  <span>${s}</span>
                </div>
              </li>
            `:b`
            <li
              class="${o(l.style.listItem,l.style.flex,l.style.flexRow)}"
            >
              <div
                class="${o(l.style.flex,l.style.fullWidth)}"
              >
                <div class="${o(l.style.centerImage)}">
                  ${w[H(t.name)]??w.docs}
                </div>
                <div
                  class="${o(l.style.flex,l.style.fullWidth)}"
                >
                  <div
                    class="${o(l.style.flex,l.style.fullWidth)}"
                  >
                    <div class="${o(l.style.flexGrow)}">
                      <span class="${o(l.style.listItemText)}">
                        ${t.name}
                      </span>
                      <div class="${o(l.style.imageSize)}">
                        ${this.bytesToSize(+t.size)}
                      </div>

                      <div class="${o(l.style.buttons)}">
                        <button
                          @click="${()=>{I.instance.downloadFile(t.id)}}"
                          class="${o(l.style.actionButton)}"
                        >
                          <span>Download</span>
                        </button>
                        <button
                          @click="${()=>{window.open(`/view/${t.id}`,"_blank","toolbar=no, width=1000")}}"
                          class="${o(l.style.actionButton)}"
                        >
                          <span>View</span>
                        </button>
                      </div>
                    </div>
                    <span>${s}</span>
                  </div>
                </div>
              </div>
            </li>
          `})}
    `}bytesToSize(n){const t=["Bytes","KB","MB","GB","TB"];if(n===0)return"0 Byte";const r=Math.floor(Math.log(n)/Math.log(1024));return(n/Math.pow(1024,r)).toFixed(2)+" "+t[r]}render(){return b`
      <div class="${o(l.style.topItems)}">
        <input
          class="${o(l.style.search)}"
          value="${this.search}"
          @keyup="${n=>{this.search=n.target.value,this.requestUpdate(),this.folders=this.getFolderContent()}}"
          type="search"
        />

        <button
          class="${o(l.style.actionButton)}"
          @click="${async()=>{await this._auth.logout()}}"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>sign-out</title>
            <path
              d="M29.707 15.293l-6-6c-0.18-0.174-0.425-0.281-0.695-0.281-0.552 0-1 0.448-1 1 0 0.27 0.107 0.515 0.281 0.695l4.293 4.293h-17.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h17.586l-4.293 4.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l6-6c0.181-0.181 0.293-0.431 0.293-0.707s-0.112-0.526-0.293-0.707v0z"
            ></path>
            <path
              d="M19.5 21c-0.276 0-0.5 0.224-0.5 0.5v0 3.5c0 1.105-0.895 2-2 2v0h-10c-1.105 0-2-0.895-2-2v0-18c0-1.105 0.895-2 2-2v0h10c1.105 0 2 0.895 2 2v0 3.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v0-3.5c0-1.657-1.343-3-3-3v0h-10c-1.657 0-3 1.343-3 3v0 18c0 1.657 1.343 3 3 3v0h10c1.657 0 3-1.343 3-3v0-3.5c0-0.276-0.224-0.5-0.5-0.5v0z"
            ></path>
          </svg>
        </button>
      </div>
      <ul class="${o(l.style.listWrapper)}">
        ${X(this.folders,this.loadingFragment)}
      </ul>
    `}createRenderRoot(){return this}get loadingFragment(){return b`
      <div
        class="${o(l.style.listItem,l.style.loadingAnimation)}"
      >
        <div class="${o(l.style.flex,l.style.fullWidth)}">
          <div class="${o(l.style.centerImage)}">
            <div class="${o(l.style.flex,l.style.flexCol)}">
              <div class="${o(l.style.fullWidth)}"></div>
              <div class="${o(l.style.fullWidth)}"></div>
            </div>
          </div>
          <div class="${o(l.style.flex,l.style.fullWidth)}">
            <div
              class="${o(l.style.flex,l.style.fullWidth)}"
            >
              <div class="${o(l.style.flexGrow)}">
                <div class="${o(l.style.listItemText)}"></div>
                <div class="${o(l.style.imageSize)}"></div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    `}};l.style={topItems:{display:"x78zum5",height:"xng8ra",flexDirection:"x15zctf7",alignItems:"x6s0dn4",gap:"x1v2ro7d",rowGap:null,columnGap:null,justifyContent:"x1qughib",$$css:!0},search:{width:"xycev2y",padding:"x7z7khe",paddingInline:null,paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,paddingBlock:null,paddingTop:null,paddingBottom:null,borderRadius:"x4pepcl",borderStartStartRadius:null,borderStartEndRadius:null,borderEndStartRadius:null,borderEndEndRadius:null,borderTopLeftRadius:null,borderTopRightRadius:null,borderBottomLeftRadius:null,borderBottomRightRadius:null,border:"x1gs6z28",borderWidth:null,borderInlineWidth:null,borderInlineStartWidth:null,borderLeftWidth:null,borderInlineEndWidth:null,borderRightWidth:null,borderBlockWidth:null,borderTopWidth:null,borderBottomWidth:null,borderStyle:null,borderInlineStyle:null,borderInlineStartStyle:null,borderLeftStyle:null,borderInlineEndStyle:null,borderRightStyle:null,borderBlockStyle:null,borderTopStyle:null,borderBottomStyle:null,borderColor:null,borderInlineColor:null,borderInlineStartColor:null,borderLeftColor:null,borderInlineEndColor:null,borderRightColor:null,borderBlockColor:null,borderTopColor:null,borderBottomColor:null,boxShadow:"xxcxs9l",":focus_boxShadow":"x1n1iy1v",$$css:!0},home:{marginTop:"xdj266r",marginBottom:"xat24cr",$$css:!0},listWrapper:{listStyle:"xe8uvvx",listStyleImage:null,listStylePosition:null,listStyleType:null,marginLeft:"xj3b58b",marginInlineStart:null,marginInlineEnd:null,paddingLeft:"x1uhho1l",paddingInlineStart:null,paddingInlineEnd:null,$$css:!0},upButton:{padding:"x84vhe8",paddingInline:null,paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,paddingBlock:null,paddingTop:null,paddingBottom:null,borderRadius:"x4pepcl",borderStartStartRadius:null,borderStartEndRadius:null,borderEndStartRadius:null,borderEndEndRadius:null,borderTopLeftRadius:null,borderTopRightRadius:null,borderBottomLeftRadius:null,borderBottomRightRadius:null,background:"x1ua00lu",backgroundAttachment:null,backgroundClip:null,backgroundColor:null,backgroundImage:null,backgroundOrigin:null,backgroundPosition:null,backgroundPositionX:null,backgroundPositionY:null,backgroundRepeat:null,backgroundSize:null,boxShadow:"xxcxs9l",cursor:"x1ypdohk",border:"x1gs6z28",borderWidth:null,borderInlineWidth:null,borderInlineStartWidth:null,borderLeftWidth:null,borderInlineEndWidth:null,borderRightWidth:null,borderBlockWidth:null,borderTopWidth:null,borderBottomWidth:null,borderStyle:null,borderInlineStyle:null,borderInlineStartStyle:null,borderLeftStyle:null,borderInlineEndStyle:null,borderRightStyle:null,borderBlockStyle:null,borderTopStyle:null,borderBottomStyle:null,borderColor:null,borderInlineColor:null,borderInlineStartColor:null,borderLeftColor:null,borderInlineEndColor:null,borderRightColor:null,borderBlockColor:null,borderTopColor:null,borderBottomColor:null,transition:"x2ortz2",transitionBehavior:null,transitionDelay:null,transitionDuration:null,transitionProperty:null,transitionTimingFunction:null,":hover_boxShadow":"xccq1rt",$$css:!0},listItemUp:{padding:"x11v7fy3",paddingInline:null,paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,paddingBlock:null,paddingTop:null,paddingBottom:null,$$css:!0},listItem:{padding:"xwj8inx",paddingInline:null,paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,paddingBlock:null,paddingTop:null,paddingBottom:null,borderRadius:"x4pepcl",borderStartStartRadius:null,borderStartEndRadius:null,borderEndStartRadius:null,borderEndEndRadius:null,borderTopLeftRadius:null,borderTopRightRadius:null,borderBottomLeftRadius:null,borderBottomRightRadius:null,boxShadow:"xxcxs9l",background:"x1ua00lu",backgroundAttachment:null,backgroundClip:null,backgroundColor:null,backgroundImage:null,backgroundOrigin:null,backgroundPosition:null,backgroundPositionX:null,backgroundPositionY:null,backgroundRepeat:null,backgroundSize:null,marginBottom:"xod5an3",cursor:"x1ypdohk",transition:"x2ortz2",transitionBehavior:null,transitionDelay:null,transitionDuration:null,transitionProperty:null,transitionTimingFunction:null,fontSize:"x4z9k3i",":hover_boxShadow":"xccq1rt",$$css:!0},listItemText:{fontWeight:"xk50ysn",fontSize:"x4z9k3i",$$css:!0},flexGrow:{flexGrow:"x1iyjqo2",$$css:!0},itemHeader:{display:"x78zum5",justifyContent:"x1qughib",marginTop:"xdj266r",marginBottom:"xat24cr",flexGrow:"x1iyjqo2",$$css:!0},flex:{display:"x78zum5",$$css:!0},fullWidth:{width:"xh8yej3",$$css:!0},icon:{marginRight:"x1wsuqlk",marginInlineStart:null,marginInlineEnd:null,$$css:!0},imageSize:{fontSize:"xif65rj",color:"x18ea61d",marginTop:"x1k70j0n",$$css:!0},flexCol:{flexDirection:"xdt5ytf",$$css:!0},flexRow:{flexDirection:"x1q0g3np",$$css:!0},centerImage:{display:"x78zum5",marginRight:"x1wsuqlk",marginInlineStart:null,marginInlineEnd:null,$$css:!0},loadingAnimation:{animation:"xsie5ml",animationComposition:null,animationName:null,animationDuration:null,animationTimingFunction:null,animationDelay:null,animationIterationCount:null,animationDirection:null,animationFillMode:null,animationPlayState:null,animationRange:null,animationRangeEnd:null,animationRangeStart:null,animationTimeline:null,background:"x1jj4yhz",backgroundAttachment:null,backgroundClip:null,backgroundColor:null,backgroundImage:null,backgroundOrigin:null,backgroundPosition:null,backgroundPositionX:null,backgroundPositionY:null,backgroundRepeat:null,backgroundSize:"x1db4oza",borderRadius:"x4pepcl",borderStartStartRadius:null,borderStartEndRadius:null,borderEndStartRadius:null,borderEndEndRadius:null,borderTopLeftRadius:null,borderTopRightRadius:null,borderBottomLeftRadius:null,borderBottomRightRadius:null,overflow:"xb3r6kr",overflowX:null,overflowY:null,$$css:!0},buttons:{display:"x78zum5",gap:"x17d4w8g",rowGap:null,columnGap:null,marginTop:"x14vqqas",flexDirection:"x15zctf7",position:"x1n2onr6",right:"x1apxi4v",insetInlineStart:null,insetInlineEnd:null,$$css:!0},actionButton:{background:"xvbja92",backgroundAttachment:null,backgroundClip:null,backgroundColor:null,backgroundImage:null,backgroundOrigin:null,backgroundPosition:null,backgroundPositionX:null,backgroundPositionY:null,backgroundRepeat:null,backgroundSize:null,borderRadius:"xqx0amy",borderStartStartRadius:null,borderStartEndRadius:null,borderEndStartRadius:null,borderEndEndRadius:null,borderTopLeftRadius:null,borderTopRightRadius:null,borderBottomLeftRadius:null,borderBottomRightRadius:null,border:"x1gs6z28",borderWidth:null,borderInlineWidth:null,borderInlineStartWidth:null,borderLeftWidth:null,borderInlineEndWidth:null,borderRightWidth:null,borderBlockWidth:null,borderTopWidth:null,borderBottomWidth:null,borderStyle:null,borderInlineStyle:null,borderInlineStartStyle:null,borderLeftStyle:null,borderInlineEndStyle:null,borderRightStyle:null,borderBlockStyle:null,borderTopStyle:null,borderBottomStyle:null,borderColor:null,borderInlineColor:null,borderInlineStartColor:null,borderLeftColor:null,borderInlineEndColor:null,borderRightColor:null,borderBlockColor:null,borderTopColor:null,borderBottomColor:null,padding:"x1v7pko",paddingInline:null,paddingStart:null,paddingLeft:null,paddingEnd:null,paddingRight:null,paddingBlock:null,paddingTop:null,paddingBottom:null,color:"xfungia",cursor:"x1ypdohk",$$css:!0}};$([S({})],l.prototype,"search",2);$([S()],l.prototype,"promise",2);$([S()],l.prototype,"folders",2);$([S({})],l.prototype,"_folderId",2);l=$([P("dms-home")],l);export{l as default};
