(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bffbb"],{"409b":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-card",{staticClass:"ma-md-6 ma-sm-3"},[e("v-card-title",{staticClass:"py-2"},[e("v-icon",{staticClass:"mr-3"}),a._v(" Daftar Jurusan ")],1),e("v-divider"),e("v-card-text",[e("TambahJurusan"),e("DataJurusan")],1)],1)},i=[],s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[a.isLoading?e("Loader"):e("v-data-table",{staticClass:"mt-6",attrs:{headers:a.header,items:a.dataJurusan,"items-per-page":10},scopedSlots:a._u([{key:"no-data",fn:function(){return[e("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[e("div",[a._v("Data tidak ditemukan")])])]},proxy:!0},{key:"item.no",fn:function(t){var e=t.item;return[a._v(" "+a._s(a.dataJurusan.map((function(a){return a.id})).indexOf(e.id)+1)+" ")]}},{key:"item.action",fn:function(t){var n=t.item;return[e("v-btn",{attrs:{icon:"",color:"success"}},[e("v-icon",{attrs:{small:""}},[a._v("mdi-eye")])],1),e("EditJurusan",{attrs:{data:n}}),e("HapusJurusan",{attrs:{id:n.id}})]}}])})],1)},r=[],d=e("5530"),u=e("2f62"),l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:a._u([{key:"activator",fn:function(t){var n=t.on;return[e("v-btn",a._g({attrs:{icon:"",color:"primary"}},n),[e("v-icon",{attrs:{small:""}},[a._v("mdi-pencil")])],1)]}}]),model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"py-2"},[a._v(" Edit Jurusan ")]),e("v-divider"),e("v-form",{ref:"form",model:{value:a.valid,callback:function(t){a.valid=t},expression:"valid"}},[e("v-card-text",{staticClass:"pa-6 pb-0"},[e("v-text-field",{attrs:{label:"Nama",outlined:"",dense:"",rules:a.requiredRule,autocomplete:"off"},model:{value:a.data.nama,callback:function(t){a.$set(a.data,"nama",t)},expression:"data.nama"}}),a._l(a.data.jenjang,(function(t,n){return e("v-select",{key:n,attrs:{items:a.dataJenjang,"item-text":"nama","return-object":"",label:"Pilihan jenjang",outlined:"",dense:"",rules:a.requiredRule,autocomplete:"off","append-outer-icon":"mdi-minus"},on:{"click:append-outer":function(t){return a.minus(n)}},model:{value:a.detailJenjang[n],callback:function(t){a.$set(a.detailJenjang,n,t)},expression:"detailJenjang[i]"}})})),e("v-btn",{staticClass:"mb-6",attrs:{depressed:"",color:"success",block:""},on:{click:function(t){return a.data.jenjang.push("")}}},[a._v(" tambah jenjang ")]),e("Notif",{attrs:{msg:a.msg,status:a.status},on:{visible:a.visible}})],2),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){a.dialog=!1}}},[a._v(" kembali ")]),e("v-btn",{attrs:{disabled:!a.valid,color:"primary",loading:a.isLoading,type:"submit",depressed:""},on:{click:function(t){return t.preventDefault(),a.validate(t)}}},[a._v(" simpan ")])],1)],1)],1)],1)},o=[],c=(e("4de4"),e("d81d"),e("a434"),e("2ef0")),v=e("6959"),m={props:["data"],data:function(){return{dialog:!1,valid:!0,requiredRule:[function(a){return!!a||"Data harus diisi"}],msg:{success:"Data berhasil diedit",error:"Data gagal diedit",visible:!1}}},components:{Notif:v["a"]},computed:Object(d["a"])({},Object(u["b"])("dataJurusan",["status","isLoading"]),{},Object(u["b"])("dataJenjang",["dataJenjang"]),{detailJenjang:{get:function(){var a=this,t=this.data.jenjang.map((function(t){return a.dataJenjang.filter((function(a){return a.nama===t}))}));return Object(c["flatten"])(t)}}}),methods:{validate:function(){if(this.$refs.form.validate()){var a={id:this.data.id,nama:this.data.nama,jenjang_id:this.detailJenjang.map((function(a){return a.id}))};this.$store.dispatch("dataJurusan/putDataJurusan",a),this.$store.dispatch("dataJurusan/updateIsLoading",!0),this.msg.visible=!0}},visible:function(a){this.msg.visible=a},minus:function(a){this.data.jenjang.splice(a,1)}}},p=m,f=e("2877"),b=e("6544"),g=e.n(b),h=e("8336"),j=e("b0af"),J=e("99d9"),_=e("169a"),k=e("ce7e"),V=e("4bd4"),x=e("132d"),C=e("b974"),D=e("2fa4"),y=e("8654"),$=Object(f["a"])(p,l,o,!1,null,null,null),O=$.exports;g()($,{VBtn:h["a"],VCard:j["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VDialog:_["a"],VDivider:k["a"],VForm:V["a"],VIcon:x["a"],VSelect:C["a"],VSpacer:D["a"],VTextField:y["a"]});var L=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:a._u([{key:"activator",fn:function(t){var n=t.on;return[e("v-btn",a._g({attrs:{icon:"",color:"red"}},n),[e("v-icon",{attrs:{small:""}},[a._v("mdi-trash-can")])],1)]}}]),model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"title pa-6"},[a._v(" Apakah anda yakin ingin menghapusnya ? ")]),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){a.dialog=!1}}},[a._v("kembali")]),e("v-btn",{attrs:{loading:a.isLoading,color:"primary"},on:{click:a.hapusData}},[a._v("hapus")])],1)],1)],1)},T=[],I={props:["id"],data:function(){return{dialog:!1}},methods:{hapusData:function(){this.$store.dispatch("dataJurusan/deleteDataJurusan",this.id),this.$store.dispatch("dataJurusan/updateIsLoading",!0)}},computed:Object(d["a"])({},Object(u["b"])("dataJurusan",["isLoading"]))},S=I,w=Object(f["a"])(S,L,T,!1,null,null,null),A=w.exports;g()(w,{VBtn:h["a"],VCard:j["a"],VCardActions:J["a"],VCardTitle:J["c"],VDialog:_["a"],VDivider:k["a"],VIcon:x["a"],VSpacer:D["a"]});var E=e("555f"),N={data:function(){return{expanded:[],header:[{text:"No",value:"no",sortable:!1},{text:"Nama",value:"nama",sortable:!1},{text:"Jenjang",value:"jenjang",sortable:!1},{text:"Action",value:"action",align:"center",sortable:!1},{text:"",value:"data-table-expand"}],data:[{nama:"IPA",jenjang:{id:1,nama:"SMA"},id:1}]}},components:{Loader:E["a"],HapusJurusan:A,EditJurusan:O},created:function(){this.$store.dispatch("dataJurusan/getDataJurusan"),this.$store.dispatch("dataJenjang/getDataJenjang"),this.$store.dispatch("dataJurusan/updateIsLoading",!0)},computed:Object(d["a"])({},Object(u["b"])("dataJurusan",["dataJurusan","isLoading"]))},q=N,R=e("0798"),B=e("8fea"),F=Object(f["a"])(q,s,r,!1,null,null,null),P=F.exports;g()(F,{VAlert:R["a"],VBtn:h["a"],VDataTable:B["a"],VIcon:x["a"]});var H=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:a._u([{key:"activator",fn:function(t){var n=t.on;return[e("v-btn",a._g({staticClass:"mr-3",attrs:{depressed:"",color:"primary"}},n),[e("v-icon",{staticClass:"mr-3"},[a._v("mdi-plus-circle")]),a._v(" Tambah data ")],1)]}}]),model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"py-2"},[a._v(" Tambah Jurusan ")]),e("v-divider"),e("v-form",{ref:"form",model:{value:a.valid,callback:function(t){a.valid=t},expression:"valid"}},[e("v-card-text",{staticClass:"pa-6 pb-0"},[e("v-text-field",{attrs:{label:"Nama",outlined:"",dense:"",rules:a.requiredRule,autocomplete:"off"},model:{value:a.dataJurusan.nama,callback:function(t){a.$set(a.dataJurusan,"nama",t)},expression:"dataJurusan.nama"}}),a._l(a.dataJurusan.jenjang_id.length,(function(t,n){return e("v-select",{key:n,attrs:{items:a.dataJenjang,"item-text":"nama","item-value":"id",label:"Pilihan jenjang",outlined:"",dense:"",rules:a.requiredRule,autocomplete:"off","append-outer-icon":"mdi-minus"},on:{"click:append-outer":function(t){return a.minus(n)}},model:{value:a.dataJurusan.jenjang_id[n],callback:function(t){a.$set(a.dataJurusan.jenjang_id,n,t)},expression:"dataJurusan.jenjang_id[i]"}})})),e("v-btn",{staticClass:"mb-6",attrs:{depressed:"",color:"success",block:""},on:{click:function(t){return a.dataJurusan.jenjang_id.push("")}}},[a._v(" tambah jenjang ")]),e("Notif",{attrs:{msg:a.msg,status:a.status},on:{visible:a.visible}})],2),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){a.dialog=!1}}},[a._v(" kembali ")]),e("v-btn",{attrs:{disabled:!a.valid,color:"primary",loading:a.isLoading,type:"submit",depressed:""},on:{click:function(t){return t.preventDefault(),a.validate(t)}}},[a._v(" simpan ")])],1)],1)],1)],1)},M=[],z={data:function(){return{dialog:!1,valid:!0,dataJurusan:{nama:"",jenjang_id:[""]},requiredRule:[function(a){return!!a||"Data harus diisi"}],msg:{success:"Data berhasil ditambahkan",error:"Data gagal ditambahkan",visible:!1}}},components:{Notif:v["a"]},computed:Object(d["a"])({},Object(u["b"])("dataJurusan",["status","isLoading"]),{},Object(u["b"])("dataJenjang",["dataJenjang"])),methods:{validate:function(){this.$refs.form.validate()&&(this.$store.dispatch("dataJurusan/postDataJurusan",this.dataJurusan),this.$store.dispatch("dataJurusan/updateIsLoading",!0),this.msg.visible=!0)},visible:function(a){this.msg.visible=a},minus:function(a){this.dataJurusan.jenjang_id.splice(a,1)}}},G=z,K=Object(f["a"])(G,H,M,!1,null,null,null),Q=K.exports;g()(K,{VBtn:h["a"],VCard:j["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VDialog:_["a"],VDivider:k["a"],VForm:V["a"],VIcon:x["a"],VSelect:C["a"],VSpacer:D["a"],VTextField:y["a"]});var U={components:{TambahJurusan:Q,DataJurusan:P}},W=U,X=Object(f["a"])(W,n,i,!1,null,null,null);t["default"]=X.exports;g()(X,{VCard:j["a"],VCardText:J["b"],VCardTitle:J["c"],VDivider:k["a"],VIcon:x["a"]})}}]);
//# sourceMappingURL=chunk-2d0bffbb.db47959f.js.map