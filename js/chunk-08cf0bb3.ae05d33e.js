(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08cf0bb3"],{"169a":function(t,e,a){"use strict";a("368e");var i=a("480e"),n=a("4ad4"),s=a("b848"),o=a("75eb"),r=a("e707"),l=a("e4d3"),c=a("21be"),d=a("f2e7"),u=a("a293"),h=a("58df"),v=a("d9bd"),m=a("80d2");const p=Object(h["a"])(n["a"],s["a"],o["a"],r["a"],l["a"],c["a"],d["a"]);e["a"]=p.extend({name:"v-dialog",directives:{ClickOutside:u["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(v["d"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m["v"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(i["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(m["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["g"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,a){},"555f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-skeleton-loader",{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{type:t.type}})},n=[],s={props:{type:{type:String,default:"table"}}},o=s,r=a("2877"),l=a("6544"),c=a.n(l),d=a("3129"),u=Object(r["a"])(o,i,n,!1,null,null,null);e["a"]=u.exports;c()(u,{VSkeletonLoader:d["a"]})},d186:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"ma-md-6 ma-sm-3"},[a("v-card-title",{staticClass:"py-2"},[a("v-icon",{staticClass:"mr-3"},[t._v("mdi-file-outline")]),t._v(" Daftar Newsletter ")],1),a("v-divider"),a("v-card-text",[a("v-btn",{staticClass:"mr-3",attrs:{depressed:"",color:"primary"},on:{click:function(e){return t.$router.push({name:"tambah-berita"})}}},[a("v-icon",{staticClass:"mr-3"},[t._v("mdi-plus-circle")]),t._v(" Tambah data ")],1),a("TambahKategori"),a("DataBerita")],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?a("Loader"):a("v-data-table",{staticClass:"mt-6",attrs:{headers:t.header,items:t.dataBerita,"items-per-page":10},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[a("div",[t._v("Data tidak ditemukan")])])]},proxy:!0},{key:"item.no",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.dataBerita.map((function(t){return t.id})).indexOf(a.id)+1)+" ")]}},{key:"item.action",fn:function(e){var i=e.item;return[a("v-btn",{attrs:{icon:"",color:"success"}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-eye")])],1),a("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(e){return t.$router.push({name:"edit-berita",params:{id:i.id}})}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1),a("HapusBerita",{attrs:{id:i.id}})]}}])})],1)},o=[],r=a("5530"),l=a("2f62"),c=a("555f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:"",color:"red"}},i),[a("v-icon",{attrs:{small:""}},[t._v("mdi-trash-can")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"title pa-6"},[t._v(" Apakah anda yakin ingin menghapusnya ? ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("kembali")]),a("v-btn",{attrs:{loading:t.isLoading,color:"primary"},on:{click:t.hapusData}},[t._v("hapus")])],1)],1)],1)},u=[],h={props:["id"],data:function(){return{dialog:!1}},methods:{hapusData:function(){this.$store.dispatch("dataBerita/deleteDataBerita",this.id),this.$store.dispatch("dataBerita/updateIsLoading",!0)}},computed:Object(r["a"])({},Object(l["b"])("dataBerita",["isLoading"]))},v=h,m=a("2877"),p=a("6544"),f=a.n(p),g=a("8336"),b=a("b0af"),k=a("99d9"),y=a("169a"),x=a("ce7e"),C=a("132d"),_=a("2fa4"),$=Object(m["a"])(v,d,u,!1,null,null,null),w=$.exports;f()($,{VBtn:g["a"],VCard:b["a"],VCardActions:k["a"],VCardTitle:k["c"],VDialog:y["a"],VDivider:x["a"],VIcon:C["a"],VSpacer:_["a"]});var B={data:function(){return{header:[{text:"No",value:"no",sortable:!1},{text:"Judul",value:"judul",sortable:!1},{text:"Kategori",value:"kategori.nama",sortable:!1},{text:"Action",value:"action",align:"center",sortable:!1}],data:[{name:"s",user:"s",pass:"s"}]}},components:{Loader:c["a"],HapusBerita:w},created:function(){this.$store.dispatch("dataBerita/getDataBerita"),this.$store.dispatch("dataBerita/updateIsLoading",!0)},computed:Object(r["a"])({},Object(l["b"])("dataBerita",["dataBerita","isLoading"]))},V=B,O=a("0798"),A=a("8fea"),D=Object(m["a"])(V,s,o,!1,null,null,null),T=D.exports;f()(D,{VAlert:O["a"],VBtn:g["a"],VDataTable:A["a"],VIcon:C["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mr-3",attrs:{depressed:"",loading:t.isLoading,color:"success"}},i),[a("v-icon",{staticClass:"mr-3"},[t._v("mdi-plus-circle")]),t._v(" Tambah kategori ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"py-2"},[t._v(" Tambah Kategori ")]),a("v-divider"),a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",{staticClass:"pa-6 pb-0"},[t._l(t.dataKategori,(function(e,i){return a("v-text-field",{key:i,attrs:{label:"Nama kategori",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off","append-outer-icon":"mdi-minus"},on:{"click:append-outer":function(a){return t.minus(e.id)}},model:{value:e.nama,callback:function(a){t.$set(e,"nama",a)},expression:"item.nama"}})})),a("v-text-field",{attrs:{label:"Nama",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.data.nama,callback:function(e){t.$set(t.data,"nama",e)},expression:"data.nama"}}),a("v-btn",{staticClass:"mb-6",attrs:{disabled:!t.valid,color:"primary",loading:t.isLoading,type:"submit",block:"",depressed:""},on:{click:function(e){return e.preventDefault(),t.validate(e)}}},[t._v(" tambah kategori ")])],2),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" kembali ")])],1)],1)],1)],1)},I=[],L={data:function(){return{dialog:!1,valid:!0,data:{nama:""},requiredRule:[function(t){return!!t||"Data harus diisi"}]}},created:function(){this.$store.dispatch("dataKategori/getDataKategori"),this.$store.dispatch("dataKategori/updateIsLoading",!0)},computed:Object(r["a"])({},Object(l["b"])("dataKategori",["dataKategori","isLoading"])),methods:{validate:function(){this.$refs.form.validate()&&(this.$store.dispatch("dataKategori/postDataKategori",this.data),this.$store.dispatch("dataKategori/updateIsLoading",!0))},minus:function(t){this.$store.dispatch("dataKategori/deleteDataKategori",t),this.$store.dispatch("dataKategori/updateIsLoading",!0)}}},K=L,j=a("4bd4"),E=a("8654"),F=Object(m["a"])(K,S,I,!1,null,null,null),N=F.exports;f()(F,{VBtn:g["a"],VCard:b["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VDialog:y["a"],VDivider:x["a"],VForm:j["a"],VIcon:C["a"],VSpacer:_["a"],VTextField:E["a"]});var Z={components:{TambahKategori:N,DataBerita:T}},q=Z,M=Object(m["a"])(q,i,n,!1,null,null,null);e["default"]=M.exports;f()(M,{VBtn:g["a"],VCard:b["a"],VCardText:k["b"],VCardTitle:k["c"],VDivider:x["a"],VIcon:C["a"]})}}]);
//# sourceMappingURL=chunk-08cf0bb3.ae05d33e.js.map