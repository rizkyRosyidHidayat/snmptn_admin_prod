(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e061b6c"],{"0354":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"ma-md-6 ma-sm-3"},[a("v-card-title",{staticClass:"py-2"},[a("v-icon",{staticClass:"mr-3"},[t._v("mdi-face")]),t._v(" Daftar Peserta ")],1),a("v-divider"),a("v-card-text",[a("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-row",{attrs:{dense:""}},[a("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"6"}},[a("v-autocomplete",{attrs:{label:"Provinsi",outlined:"",dense:"",items:t.dataProv,"item-text":"nama","item-value":"id",required:"",rules:t.requiredRule},model:{value:t.dataFilter.provinsi,callback:function(e){t.$set(t.dataFilter,"provinsi",e)},expression:"dataFilter.provinsi"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"6"}},[a("v-autocomplete",{attrs:{label:"Kabupaten",outlined:"",dense:"",items:t.dataKab,"item-text":"nama","item-value":"id",disabled:""===t.dataFilter.provinsi,required:"",rules:t.requiredRule},model:{value:t.dataFilter.kabupaten,callback:function(e){t.$set(t.dataFilter,"kabupaten",e)},expression:"dataFilter.kabupaten"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"6"}},[a("v-autocomplete",{attrs:{label:"Jenjang",outlined:"",dense:"",disabled:""===t.dataFilter.kabupaten,items:t.dataJenjang,"item-text":"nama","item-value":"id",required:"",rules:t.requiredRule},model:{value:t.dataFilter.jenjang,callback:function(e){t.$set(t.dataFilter,"jenjang",e)},expression:"dataFilter.jenjang"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"6"}},[a("v-autocomplete",{attrs:{label:"Sekolah",outlined:"",dense:"",disabled:""===t.dataFilter.jenjang,items:t.filterSekolah,"item-text":"sekolah","item-value":"id",required:"",rules:t.requiredRule},model:{value:t.dataFilter.sekolah,callback:function(e){t.$set(t.dataFilter,"sekolah",e)},expression:"dataFilter.sekolah"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"6"}},[a("v-autocomplete",{attrs:{label:"Kelas",outlined:"",dense:"",items:t.dataKelas,"item-text":"nama","item-value":"id",required:"",rules:t.requiredRule},model:{value:t.dataFilter.kelas,callback:function(e){t.$set(t.dataFilter,"kelas",e)},expression:"dataFilter.kelas"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"6"}},[a("v-autocomplete",{attrs:{label:"Kantor Unit",outlined:"",dense:"",items:t.dataUnit,"item-text":"nama","item-value":"id",required:"",rules:t.requiredRule},model:{value:t.dataFilter.unit,callback:function(e){t.$set(t.dataFilter,"unit",e)},expression:"dataFilter.unit"}})],1)],1),a("v-btn",{attrs:{type:"submit",disabled:!t.valid,block:"",color:"primary",depressed:""},on:{click:function(e){return e.preventDefault(),t.validate(e)}}},[t._v(" filter ")])],1),a("DataPeserta")],1)],1)},s=[],n=(a("4de4"),a("5530")),o=a("2f62"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?a("Loader"):a("v-data-table",{staticClass:"mt-6",attrs:{headers:t.header,items:t.dataPeserta,"items-per-page":10},scopedSlots:t._u([{key:"item.aktif",fn:function(e){var i=e.item;return[a("v-btn",{staticStyle:{"border-radius":"2px 0 0 2px"},attrs:{"x-small":"",color:!0===i.aktif?"success":"default",depressed:""},on:{click:function(t){i.aktif=!0}}},[t._v(" on ")]),a("v-btn",{staticStyle:{"border-radius":"0 2px 2px 0"},attrs:{"x-small":"",color:!1===i.aktif?"red":"default",dark:!1===i.aktif,depressed:""},on:{click:function(t){i.aktif=!1}}},[t._v(" off ")])]}},{key:"item.no",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.dataPeserta.map((function(t){return t.personal.id})).indexOf(a.personal.id)+1)+" ")]}},{key:"no-data",fn:function(){return[a("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[a("div",[t._v("Data tidak ditemukan")])])]},proxy:!0},{key:"item.action",fn:function(e){var i=e.item;return[a("v-btn",{attrs:{icon:"",color:"success"}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-eye")])],1),a("v-btn",{attrs:{icon:"",color:"primary"}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1),a("HapusPeserta",{attrs:{id:i.id}})]}}])})],1)},l=[],d=a("555f"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:"",color:"red"}},i),[a("v-icon",{attrs:{small:""}},[t._v("mdi-trash-can")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"title pa-6"},[t._v(" Apakah anda yakin ingin menghapusnya ? ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("kembali")]),a("v-btn",{attrs:{loading:t.isLoading,color:"primary"},on:{click:t.hapusData}},[t._v("hapus")])],1)],1)],1)},u=[],h={props:["id"],data:function(){return{dialog:!1}},methods:{hapusData:function(){this.$store.dispatch("dataPeserta/deleteDataPeserta",this.id),this.$store.dispatch("dataPeserta/updateIsLoading",!0)}},computed:Object(n["a"])({},Object(o["b"])("dataPeserta",["isLoading"]))},v=h,m=a("2877"),p=a("6544"),f=a.n(p),b=a("8336"),g=a("b0af"),k=a("99d9"),x=a("169a"),y=a("ce7e"),C=a("132d"),w=a("2fa4"),$=Object(m["a"])(v,c,u,!1,null,null,null),j=$.exports;f()($,{VBtn:b["a"],VCard:g["a"],VCardActions:k["a"],VCardTitle:k["c"],VDialog:x["a"],VDivider:y["a"],VIcon:C["a"],VSpacer:w["a"]});var _={data:function(){return{header:[{text:"No",value:"no",sortable:!1},{text:"Nama",value:"personal.nama",sortable:!1},{text:"Sekolah Asal",value:"sekolah.nama",sortable:!1},{text:"Program Studi",value:"prodi",sortable:!1},{text:"Kantor Unit",value:"unit.nama",sortable:!1},{text:"Username",value:"username",sortable:!1},{text:"Password",value:"password",sortable:!1},{text:"Aktifasi",value:"aktif",sortable:!1},{text:"Action",value:"action",align:"center",sortable:!1}],data:[{name:"s",asal:"s",prodi:"s",unit:"s",user:"s",pass:"s",aktivasi:!0}]}},components:{HapusPeserta:j,Loader:d["a"]},created:function(){this.$store.dispatch("dataPeserta/getDataPeserta"),this.$store.dispatch("dataPeserta/updateIsLoading",!0)},computed:Object(n["a"])({},Object(o["b"])("dataPeserta",["isLoading","dataPeserta"]))},F=_,O=a("0798"),S=a("8fea"),A=Object(m["a"])(F,r,l,!1,null,null,null),D=A.exports;f()(A,{VAlert:O["a"],VBtn:b["a"],VDataTable:S["a"],VIcon:C["a"]});var P={data:function(){return{valid:!0,requiredRule:[function(t){return!!t||"Data harus diisi"}],dataFilter:{provinsi:"",kabupaten:"",jenjang:"",sekolah:"",kelas:"",unit:""}}},created:function(){this.$store.dispatch("dataTempat/getDataProv"),this.$store.dispatch("dataJenjang/getDataJenjang"),this.$store.dispatch("dataKelas/getDataKelas"),this.$store.dispatch("dataUnit/getDataUnit")},computed:Object(n["a"])({},Object(o["b"])("dataTempat",["dataProv","dataKab"]),{},Object(o["b"])("dataJenjang",["dataJenjang"]),{},Object(o["b"])("dataKelas",["dataKelas"]),{},Object(o["b"])("dataUnit",["dataUnit"]),{},Object(o["b"])("dataSekolah",["dataSekolah"]),{filterSekolah:function(){var t=this;return this.dataSekolah.filter((function(e){return e.jenjang.id===t.dataFilter.jenjang}))}}),components:{DataPeserta:D},watch:{"dataFilter.provinsi":function(t){this.$store.dispatch("dataTempat/getDataKab",t)},"dataFilter.jenjang":function(t){this.$store.dispatch("dataSekolah/getDataSekolahFilter",{provinsi_id:this.dataFilter.provinsi,kabupaten_id:this.dataFilter.kabupaten})}},methods:{validate:function(){this.$refs.form.validate()&&console.log(this.dataFilter)}}},V=P,T=a("c6a6"),B=a("62ad"),I=a("4bd4"),q=a("0fd9"),K=Object(m["a"])(V,i,s,!1,null,null,null);e["default"]=K.exports;f()(K,{VAutocomplete:T["a"],VBtn:b["a"],VCard:g["a"],VCardText:k["b"],VCardTitle:k["c"],VCol:B["a"],VDivider:y["a"],VForm:I["a"],VIcon:C["a"],VRow:q["a"]})},"169a":function(t,e,a){"use strict";a("368e");var i=a("480e"),s=a("4ad4"),n=a("b848"),o=a("75eb"),r=a("e707"),l=a("e4d3"),d=a("21be"),c=a("f2e7"),u=a("a293"),h=a("58df"),v=a("d9bd"),m=a("80d2");const p=Object(h["a"])(s["a"],n["a"],o["a"],r["a"],l["a"],d["a"],c["a"]);e["a"]=p.extend({name:"v-dialog",directives:{ClickOutside:u["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(v["d"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m["v"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(i["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(m["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["g"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,a){},"555f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-skeleton-loader",{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{type:t.type}})},s=[],n={props:{type:{type:String,default:"table"}}},o=n,r=a("2877"),l=a("6544"),d=a.n(l),c=a("3129"),u=Object(r["a"])(o,i,s,!1,null,null,null);e["a"]=u.exports;d()(u,{VSkeletonLoader:c["a"]})}}]);
//# sourceMappingURL=chunk-1e061b6c.a1fc3a73.js.map