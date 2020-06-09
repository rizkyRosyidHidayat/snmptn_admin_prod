(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-002e02c8"],{"169a":function(t,a,e){"use strict";e("368e");var i=e("480e"),n=e("4ad4"),s=e("b848"),o=e("75eb"),r=e("e707"),l=e("e4d3"),d=e("21be"),c=e("f2e7"),u=e("a293"),v=e("58df"),p=e("d9bd"),m=e("80d2");const h=Object(v["a"])(n["a"],s["a"],o["a"],r["a"],l["a"],d["a"],c["a"]);a["a"]=h.extend({name:"v-dialog",directives:{ClickOutside:u["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(p["d"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const a=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(a)||this.overlay&&a&&!this.overlay.$el.contains(a))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m["v"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const a=t.target;if(a&&![document,this.$refs.content].includes(a)&&!this.$refs.content.contains(a)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(a))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(i["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(m["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["g"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},2532:function(t,a,e){"use strict";var i=e("23e7"),n=e("5a34"),s=e("1d80"),o=e("ab13");i({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~String(s(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},"368e":function(t,a,e){},"44e7":function(t,a,e){var i=e("861d"),n=e("c6b6"),s=e("b622"),o=s("match");t.exports=function(t){var a;return i(t)&&(void 0!==(a=t[o])?!!a:"RegExp"==n(t))}},"555f":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-skeleton-loader",{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{type:t.type}})},n=[],s={props:{type:{type:String,default:"table"}}},o=s,r=e("2877"),l=e("6544"),d=e.n(l),c=e("3129"),u=Object(r["a"])(o,i,n,!1,null,null,null);a["a"]=u.exports;d()(u,{VSkeletonLoader:c["a"]})},"5a34":function(t,a,e){var i=e("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},6959:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return!0===t.status?e("div",{directives:[{name:"show",rawName:"v-show",value:t.msg.visible,expression:"msg.visible"}],staticClass:"pa-4 radius green white--text mb-5"},[e("div",{staticClass:"d-flex"},[e("div",[e("v-btn",{staticClass:"white green--text mr-3",attrs:{icon:"",small:""}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-check")])],1),t._v(" "+t._s(t.msg.success)+" ")],1),e("v-spacer"),e("v-btn",{attrs:{icon:"",small:"",dark:""},on:{click:t.close}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-close")])],1)],1)]):!1===t.status?e("div",{directives:[{name:"show",rawName:"v-show",value:t.msg.visible,expression:"msg.visible"}],staticClass:"pa-4 radius red white--text mb-5"},[e("div",{staticClass:"d-flex"},[e("div",[e("v-btn",{staticClass:"white red--text mr-3",attrs:{icon:"",small:""}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-close")])],1),t._v(" "+t._s(t.msg.error)+" ")],1),e("v-spacer"),e("v-btn",{attrs:{icon:"",small:"",dark:""},on:{click:t.close}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-close")])],1)],1)]):t._e()},n=[],s={props:["status","msg"],methods:{close:function(){this.$emit("visible",!1)}}},o=s,r=e("2877"),l=e("6544"),d=e.n(l),c=e("8336"),u=e("132d"),v=e("2fa4"),p=Object(r["a"])(o,i,n,!1,null,null,null);a["a"]=p.exports;d()(p,{VBtn:c["a"],VIcon:u["a"],VSpacer:v["a"]})},ab13:function(t,a,e){var i=e("b622"),n=i("match");t.exports=function(t){var a=/./;try{"/./"[t](a)}catch(e){try{return a[n]=!1,"/./"[t](a)}catch(i){}}return!1}},c294:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"ma-md-6 ma-sm-3"},[e("v-card-title",{staticClass:"py-2"},[e("v-icon",{staticClass:"mr-3"},[t._v("mdi-office-building")]),t._v(" Daftar Unit ")],1),e("v-divider"),e("v-card-text",[e("TambahUnit"),e("KosongkanUnit"),e("v-form",{ref:"form",staticClass:"mt-6",model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-row",{attrs:{dense:""}},[e("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"6"}},[e("v-autocomplete",{attrs:{label:"Provinsi",outlined:"",dense:"",items:t.dataProv,"item-text":"nama","return-object":""},model:{value:t.provinsi,callback:function(a){t.provinsi=a},expression:"provinsi"}})],1),e("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"6"}},[e("v-autocomplete",{attrs:{label:"Kabupaten",outlined:"",dense:"",items:t.dataKab,"item-text":"nama","item-value":"nama",disabled:""===t.provinsi},model:{value:t.dataFilter.kabupaten,callback:function(a){t.$set(t.dataFilter,"kabupaten",a)},expression:"dataFilter.kabupaten"}})],1),e("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"4",sm:"6"}},[e("v-btn",{attrs:{color:"error",depressed:""},on:{click:t.reset}},[t._v(" reset ")])],1)],1)],1),e("DataUnit",{attrs:{data:t.dataFilter}})],1)],1)},n=[],s=e("5530"),o=e("2f62"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.isLoading?e("Loader"):e("v-data-table",{staticClass:"mt-0",attrs:{headers:t.header,items:t.dataResult,"items-per-page":10},scopedSlots:t._u([{key:"item.no",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.dataUnit.map((function(t){return t.id})).indexOf(e.id)+1)+" ")]}},{key:"item.aktif",fn:function(a){var i=a.item;return[e("v-btn",{staticStyle:{"border-radius":"2px 0 0 2px"},attrs:{"x-small":"",color:1===i.aktif?"success":"default",depressed:""},on:{click:function(a){return t.activated(i.id,1)}}},[t._v(" on ")]),e("v-btn",{staticStyle:{"border-radius":"0 2px 2px 0"},attrs:{"x-small":"",color:0===i.aktif?"red":"default",dark:0===i.aktif,depressed:""},on:{click:function(a){return t.activated(i.id,0)}}},[t._v(" off ")])]}},{key:"no-data",fn:function(){return[e("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[e("div",[t._v("Data tidak ditemukan")])])]},proxy:!0},{key:"item.action",fn:function(a){var i=a.item;return[e("v-btn",{attrs:{icon:"",color:"success"}},[e("v-icon",{attrs:{small:""}},[t._v("mdi-eye")])],1),e("EditUnit",{attrs:{data:i}}),e("HapusUnit",{attrs:{id:i.id}})]}}])})],1)},l=[],d=(e("4de4"),e("caad"),e("2532"),e("555f")),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({attrs:{icon:"",color:"primary"}},i),[e("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"py-2"},[t._v(" Edit Unit ")]),e("v-divider"),e("v-form",{ref:"form",model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-card-text",{staticClass:"pa-6 pb-0"},[e("v-text-field",{attrs:{label:"Nama unit",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.data.nama,callback:function(a){t.$set(t.data,"nama",a)},expression:"data.nama"}}),e("v-text-field",{attrs:{label:"Password",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.data.password,callback:function(a){t.$set(t.data,"password",a)},expression:"data.password"}}),e("v-text-field",{attrs:{label:"Kepala unit",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.data.nama_kepala,callback:function(a){t.$set(t.data,"nama_kepala",a)},expression:"data.nama_kepala"}}),e("v-text-field",{attrs:{label:"No Hp/WA",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.data.nohp,callback:function(a){t.$set(t.data,"nohp",a)},expression:"data.nohp"}}),e("v-text-field",{attrs:{label:"Alamat kantor",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.data.alamat,callback:function(a){t.$set(t.data,"alamat",a)},expression:"data.alamat"}}),e("v-autocomplete",{attrs:{items:t.detailProv,"item-text":"nama","item-value":"id",label:"Provinsi",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.data.provinsi.id,callback:function(a){t.$set(t.data.provinsi,"id",a)},expression:"data.provinsi.id"}}),e("v-autocomplete",{attrs:{items:t.detailKab,"item-text":"nama","item-value":"id",disabled:""===t.data.provinsi.id,label:"Kabupaten",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.data.kabupaten.id,callback:function(a){t.$set(t.data.kabupaten,"id",a)},expression:"data.kabupaten.id"}}),e("Notif",{attrs:{status:t.status,msg:t.msg},on:{visible:t.visible}})],1),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" kembali ")]),e("v-btn",{attrs:{disabled:!t.valid,color:"primary",loading:t.isLoading,type:"submit",depressed:""},on:{click:function(a){return a.preventDefault(),t.validate(a)}}},[t._v(" simpan ")])],1)],1)],1)],1)},u=[],v=e("6959"),p={props:["data"],data:function(){return{dialog:!1,valid:!0,requiredRule:[function(t){return!!t||"Data harus diisi"}],msg:{success:"Data berhasil diedit",error:"Data gagal diedit",visible:!1}}},components:{Notif:v["a"]},computed:Object(s["a"])({},Object(o["b"])("dataUnit",["status","isLoading"]),{},Object(o["b"])("dataTempat",["dataProv","dataKab"]),{detailProv:{get:function(){return this.dataProv},set:function(t){var a=this;this.dataProv.filter((function(t){return t.id===a.data.provinsi.id}))}},detailKab:{get:function(){return this.dataKab},set:function(t){var a=this;this.dataKab.filter((function(t){return t.id===a.data.kabupaten.id}))}}}),watch:{dialog:function(t){!0===t&&this.$store.dispatch("dataTempat/getDataKab",this.data.provinsi.id)},"data.provinsi.id":function(t){this.$store.dispatch("dataTempat/getDataKab",t)}},methods:{validate:function(){this.$refs.form.validate()&&(this.data.provinsi_id=this.data.provinsi.id,this.data.kabupaten_id=this.data.kabupaten.id,this.$store.dispatch("dataUnit/putDataUnit",this.data),this.$store.dispatch("dataUnit/updateIsLoading",!0),this.msg.visible=!0)},visible:function(t){this.msg.visible=t}}},m=p,h=e("2877"),f=e("6544"),b=e.n(f),g=e("c6a6"),k=e("8336"),x=e("b0af"),_=e("99d9"),y=e("169a"),C=e("ce7e"),w=e("4bd4"),$=e("132d"),U=e("2fa4"),V=e("8654"),D=Object(h["a"])(m,c,u,!1,null,null,null),O=D.exports;b()(D,{VAutocomplete:g["a"],VBtn:k["a"],VCard:x["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VDialog:y["a"],VDivider:C["a"],VForm:w["a"],VIcon:$["a"],VSpacer:U["a"],VTextField:V["a"]});var A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({attrs:{icon:"",color:"red"}},i),[e("v-icon",{attrs:{small:""}},[t._v("mdi-trash-can")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"title pa-6"},[t._v(" Apakah anda yakin ingin menghapusnya ? ")]),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("kembali")]),e("v-btn",{attrs:{loading:t.isLoading,color:"primary"},on:{click:t.hapusData}},[t._v("hapus")])],1)],1)],1)},T=[],S={props:["id"],data:function(){return{dialog:!1}},methods:{hapusData:function(){this.$store.dispatch("dataUnit/deleteDataUnit",this.id),this.$store.dispatch("dataUnit/updateIsLoading",!0)}},computed:Object(s["a"])({},Object(o["b"])("dataUnit",["isLoading"]))},j=S,E=Object(h["a"])(j,A,T,!1,null,null,null),I=E.exports;b()(E,{VBtn:k["a"],VCard:x["a"],VCardActions:_["a"],VCardTitle:_["c"],VDialog:y["a"],VDivider:C["a"],VIcon:$["a"],VSpacer:U["a"]});var K={props:["data"],data:function(){return{header:[{text:"No",value:"no",sortable:!1},{text:"Nama",value:"nama",sortable:!1},{text:"Password",value:"password",sortable:!1},{text:"Kepala Unit",value:"nama_kepala",sortable:!1},{text:"No HP/WA",value:"nohp",sortable:!1},{text:"Aktifasi",value:"aktif",sortable:!1},{text:"Action",value:"action",align:"center",sortable:!1}]}},components:{EditUnit:O,HapusUnit:I,Loader:d["a"]},created:function(){this.$store.dispatch("dataUnit/getDataUnit"),this.$store.dispatch("dataUnit/updateIsLoading",!0)},computed:Object(s["a"])({},Object(o["b"])("dataUnit",["isLoading","dataUnit"]),{dataResult:function(){var t=this;return this.dataUnit.filter((function(a){return a.provinsi.nama.includes(t.data.provinsi)})).filter((function(a){return a.kabupaten.nama.includes(t.data.kabupaten)}))}}),methods:{activated:function(t,a){this.$store.dispatch("dataUnit/putDataUnitActivated",{id:t,aktif:a})}}},L=K,R=e("0798"),B=e("8fea"),q=Object(h["a"])(L,r,l,!1,null,null,null),F=q.exports;b()(q,{VAlert:R["a"],VBtn:k["a"],VDataTable:B["a"],VIcon:$["a"]});var P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({staticClass:"mr-3",attrs:{depressed:"",color:"primary"}},i),[e("v-icon",{staticClass:"mr-3"},[t._v("mdi-plus-circle")]),t._v(" Tambah data ")],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"py-2"},[t._v(" Tambah Unit ")]),e("v-divider"),e("v-form",{ref:"form",model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-card-text",{staticClass:"pa-6 pb-0"},[e("v-text-field",{attrs:{label:"Nama unit",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.dataUnit.nama,callback:function(a){t.$set(t.dataUnit,"nama",a)},expression:"dataUnit.nama"}}),e("v-text-field",{attrs:{label:"Kepala unit",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.dataUnit.nama_kepala,callback:function(a){t.$set(t.dataUnit,"nama_kepala",a)},expression:"dataUnit.nama_kepala"}}),e("v-text-field",{attrs:{label:"No Hp/WA",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.dataUnit.nohp,callback:function(a){t.$set(t.dataUnit,"nohp",a)},expression:"dataUnit.nohp"}}),e("v-text-field",{attrs:{label:"Alamat kantor",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.dataUnit.alamat,callback:function(a){t.$set(t.dataUnit,"alamat",a)},expression:"dataUnit.alamat"}}),e("v-autocomplete",{attrs:{items:t.dataProv,"item-text":"nama","item-value":"id",label:"Provinsi",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.dataUnit.provinsi_id,callback:function(a){t.$set(t.dataUnit,"provinsi_id",a)},expression:"dataUnit.provinsi_id"}}),e("v-autocomplete",{attrs:{items:t.dataKab,"item-text":"nama","item-value":"id",disabled:""===t.dataUnit.provinsi_id,required:"",label:"Kabupaten",outlined:"",dense:"",rules:t.requiredRule,autocomplete:"off"},model:{value:t.dataUnit.kabupaten_id,callback:function(a){t.$set(t.dataUnit,"kabupaten_id",a)},expression:"dataUnit.kabupaten_id"}}),e("Notif",{attrs:{status:t.status,msg:t.msg},on:{visible:t.visible}})],1),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" kembali ")]),e("v-btn",{attrs:{disabled:!t.valid,loading:t.isLoading,color:"primary",type:"submit",depressed:""},on:{click:function(a){return a.preventDefault(),t.validate(a)}}},[t._v(" simpan ")])],1)],1)],1)],1)},N=[],W={data:function(){return{dialog:!1,valid:!0,dataUnit:{nama:"",nama_kepala:"",nohp:"",alamat:"",provinsi_id:"",kabupaten_id:""},item:["foo","bar","zee"],requiredRule:[function(t){return!!t||"Data harus diisi"}],msg:{success:"Data berhasil ditambah",error:"Data berhasil diedit",visible:!1}}},components:{Notif:v["a"]},computed:Object(s["a"])({},Object(o["b"])("dataUnit",["isLoading","status"]),{},Object(o["b"])("dataTempat",["dataProv","dataKab"])),watch:{"dataUnit.provinsi_id":function(t){this.$store.dispatch("dataTempat/getDataKab",t),this.$store.dispatch("dataTempat/updateIsLoading",!0)}},methods:{validate:function(){this.$refs.form.validate()&&(this.$store.dispatch("dataUnit/postDataUnit",this.dataUnit),this.$store.dispatch("dataUnit/updateIsLoading",!0),this.msg.visible=!0)},visible:function(t){this.msg.visible=t,this.$store.commit("dataUnit/updateStatus",null)}}},Z=W,H=Object(h["a"])(Z,P,N,!1,null,null,null),M=H.exports;b()(H,{VAutocomplete:g["a"],VBtn:k["a"],VCard:x["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VDialog:y["a"],VDivider:C["a"],VForm:w["a"],VIcon:$["a"],VSpacer:U["a"],VTextField:V["a"]});var z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({attrs:{depressed:"",dark:"",color:"red"}},i),[e("v-icon",{staticClass:"mr-3"},[t._v("mdi-trash-can")]),t._v(" kosongkan data ")],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"title pa-6"},[t._v(" Apakah anda yakin ingin menghapus semua data unit ? ")]),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("kembali")]),e("v-btn",{attrs:{color:"primary"},on:{click:t.hapusData}},[t._v("hapus")])],1)],1)],1)},J=[],G={data:function(){return{dialog:!1}},methods:{hapusData:function(){console.log("kk")}}},Q=G,X=Object(h["a"])(Q,z,J,!1,null,null,null),Y=X.exports;b()(X,{VBtn:k["a"],VCard:x["a"],VCardActions:_["a"],VCardTitle:_["c"],VDialog:y["a"],VDivider:C["a"],VIcon:$["a"],VSpacer:U["a"]});var tt={data:function(){return{valid:!0,dataFilter:{provinsi:"",kabupaten:""},provinsi:""}},components:{KosongkanUnit:Y,TambahUnit:M,DataUnit:F},created:function(){this.$store.dispatch("dataTempat/getDataProv"),this.$store.dispatch("dataTempat/updateIsLoading",!0)},computed:Object(s["a"])({},Object(o["b"])("dataTempat",["dataProv","dataKab","isLoading"])),watch:{provinsi:function(t){""!==t&&(this.$store.dispatch("dataTempat/getDataKab",t.id),this.dataFilter.provinsi=t.nama)}},methods:{reset:function(){this.provinsi="",this.dataFilter={provinsi:"",kabupaten:""}}}},at=tt,et=e("62ad"),it=e("0fd9"),nt=Object(h["a"])(at,i,n,!1,null,null,null);a["default"]=nt.exports;b()(nt,{VAutocomplete:g["a"],VBtn:k["a"],VCard:x["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:et["a"],VDivider:C["a"],VForm:w["a"],VIcon:$["a"],VRow:it["a"]})},caad:function(t,a,e){"use strict";var i=e("23e7"),n=e("4d64").includes,s=e("44d2"),o=e("ae40"),r=o("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!r},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")}}]);
//# sourceMappingURL=chunk-002e02c8.55f1e119.js.map