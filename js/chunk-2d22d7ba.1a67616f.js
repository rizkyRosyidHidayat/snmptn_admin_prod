(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d7ba"],{f84f:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-card",{staticClass:"ma-md-6 ma-sm-3"},[e("v-card-title",{staticClass:"py-2"},[e("v-icon",{staticClass:"mr-3"},[a._v("mdi-pencil")]),a._v(" Daftar Sekolah ")],1),e("v-divider"),e("v-card-text",[e("TambahSekolah"),e("UploadSekolah"),e("HapusSemuaSekolah"),e("DataSekolah")],1)],1)},s=[],l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[a.isLoading?e("Loader"):e("v-data-table",{staticClass:"mt-6",attrs:{headers:a.header,items:a.dataSekolah,"items-per-page":10},scopedSlots:a._u([{key:"item.no",fn:function(t){var e=t.item;return[a._v(" "+a._s(a.dataSekolah.map((function(a){return a.id})).indexOf(e.id)+1)+" ")]}},{key:"no-data",fn:function(){return[e("v-alert",{staticClass:"mt-4",attrs:{type:"info"}},[e("div",[a._v("Data tidak ditemukan")])])]},proxy:!0},{key:"item.action",fn:function(t){var i=t.item;return[e("v-btn",{attrs:{icon:"",color:"success"}},[e("v-icon",{attrs:{small:""}},[a._v("mdi-eye")])],1),e("v-btn",{attrs:{icon:"",color:"primary"}},[e("v-icon",{attrs:{small:""}},[a._v("mdi-pencil")])],1),e("HapusSekolah",{attrs:{id:i.id}})]}}])})],1)},o=[],n=e("5530"),r=e("2f62"),d=e("555f"),c=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-btn",a._g({attrs:{icon:"",color:"red"}},i),[e("v-icon",{attrs:{small:""}},[a._v("mdi-trash-can")])],1)]}}]),model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"title pa-6"},[a._v(" Apakah anda yakin ingin menghapusnya ? ")]),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){a.dialog=!1}}},[a._v("kembali")]),e("v-btn",{attrs:{loading:a.isLoading,color:"primary"},on:{click:a.hapusData}},[a._v("hapus")])],1)],1)],1)},u=[],v={props:["id"],data:function(){return{dialog:!1}},methods:{hapusData:function(){this.$store.dispatch("dataSekolah/deleteDataSekolah",this.id),this.$store.dispatch("dataSekolah/updateIsLoading",!0)}},computed:Object(n["a"])({},Object(r["b"])("dataSekolah",["isLoading"]))},p=v,m=e("2877"),h=e("6544"),f=e.n(h),b=e("8336"),k=e("b0af"),g=e("99d9"),_=e("169a"),V=e("ce7e"),S=e("132d"),x=e("2fa4"),y=Object(m["a"])(p,c,u,!1,null,null,null),C=y.exports;f()(y,{VBtn:b["a"],VCard:k["a"],VCardActions:g["a"],VCardTitle:g["c"],VDialog:_["a"],VDivider:V["a"],VIcon:S["a"],VSpacer:x["a"]});var D={data:function(){return{header:[{text:"No",value:"no",sortable:!1},{text:"Nama",value:"sekolah",sortable:!1},{text:"Provinsi",value:"provinsi.nama",sortable:!1},{text:"Kabupaten",value:"kabupaten.nama",sortable:!1},{text:"Jenjang",value:"jenjang.nama",sortable:!1},{text:"Akreditasi",value:"akreditasi",sortable:!1},{text:"Action",value:"action",align:"center",sortable:!1}],data:[{name:"s",user:"s",pass:"s",aktivasi:!0}]}},components:{Loader:d["a"],HapusSekolah:C},created:function(){this.$store.dispatch("dataSekolah/getDataSekolah"),this.$store.dispatch("dataSekolah/updateIsLoading",!0)},computed:Object(n["a"])({},Object(r["b"])("dataSekolah",["dataSekolah","isLoading"]))},j=D,$=e("0798"),L=e("8fea"),O=Object(m["a"])(j,l,o,!1,null,null,null),T=O.exports;f()(O,{VAlert:$["a"],VBtn:b["a"],VDataTable:L["a"],VIcon:S["a"]});var w=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-btn",a._g({staticClass:"mr-3",attrs:{depressed:"",color:"primary"}},i),[e("v-icon",{staticClass:"mr-3"},[a._v("mdi-plus-circle")]),a._v(" Tambah data ")],1)]}}]),model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"py-2"},[a._v(" Tambah Upload File ")]),e("v-divider"),e("v-card-text",{staticClass:"pa-6 pb-0"},[e("v-form",{ref:"form",model:{value:a.valid,callback:function(t){a.valid=t},expression:"valid"}},[e("v-text-field",{attrs:{label:"Nama file",outlined:"",dense:"",rules:a.requiredRule,autocomplete:"off"},model:{value:a.dataUpload.nama,callback:function(t){a.$set(a.dataUpload,"nama",t)},expression:"dataUpload.nama"}}),e("v-select",{attrs:{items:a.items,label:"Pilihan akses",outlined:"",dense:"",rules:a.requiredRule,autocomplete:"off"},model:{value:a.dataUpload.akses,callback:function(t){a.$set(a.dataUpload,"akses",t)},expression:"dataUpload.akses"}})],1)],1),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){a.dialog=!1}}},[a._v(" kembali ")]),e("v-btn",{attrs:{disabled:!a.valid,color:"primary",type:"submit",depressed:""},on:{click:function(t){return t.preventDefault(),a.validate(t)}}},[a._v(" simpan ")])],1)],1)],1)},U=[],A={data:function(){return{dialog:!1,valid:!0,dataUpload:{nama:"",akses:"",hp:"",alamat:"",prov:"",kab:""},items:["foo","bar","zee"],requiredRule:[function(a){return!!a||"Data harus diisi"}]}},methods:{validate:function(){this.$refs.form.validate()&&console.log(this.dataUpload)}}},B=A,I=e("4bd4"),N=e("b974"),E=e("8654"),P=Object(m["a"])(B,w,U,!1,null,null,null),q=P.exports;f()(P,{VBtn:b["a"],VCard:k["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VDialog:_["a"],VDivider:V["a"],VForm:I["a"],VIcon:S["a"],VSelect:N["a"],VSpacer:x["a"],VTextField:E["a"]});var F=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-btn",a._g({staticClass:"mr-3",attrs:{depressed:"",color:"success"}},i),[e("v-icon",{staticClass:"mr-3"},[a._v("mdi-upload")]),a._v(" upload sekolah ")],1)]}}]),model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"py-2"},[a._v(" Upload Sekolah ")]),e("v-divider"),e("v-form",{ref:"form",model:{value:a.valid,callback:function(t){a.valid=t},expression:"valid"}},[e("v-card-text",{staticClass:"pa-6"},[e("div",[a._v(" Silahkan upload data dari excel sesuai template yang sudah disediakan, jika belum ada silahkan download templatenya "),e("a",{attrs:{target:"_blank",href:"https://drive.google.com/open?id=12NBX_iSqqvZJPBG-ZtjLBZdu8ftUEXaB"}},[a._v(" disini. ")])]),e("v-file-input",{attrs:{loading:a.isLoading,accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel","show-size":"",counter:"",rules:a.requiredRule,label:"File excel template"},on:{change:a.importingData}}),e("Notif",{attrs:{msg:a.msg,status:a.status},on:{visible:a.visible}})],1),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){a.dialog=!1}}},[a._v(" kembali ")]),e("v-btn",{attrs:{disabled:!a.valid,loading:a.isLoading,color:"primary",type:"submit",depressed:""},on:{click:function(t){return t.preventDefault(),a.validate(t)}}},[a._v(" simpan ")])],1)],1)],1)],1)},R=[],H=(e("d81d"),e("ace4"),e("d3b7"),e("5cc6"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("1146")),J=e.n(H),Z=e("6959"),z={data:function(){return{dialog:!1,valid:!0,requiredRule:[function(a){return!!a||"Data harus diisi"}],dataSheets:[],msg:{success:"Berhasil diupload",error:"Gagal diupload",visible:!1}}},components:{Notif:Z["a"]},computed:Object(n["a"])({},Object(r["b"])("dataSekolah",["isLoading","status"])),methods:{importingData:function(a){var t=this,e=new FileReader;e.readAsArrayBuffer(a),e.onload=function(a){var i=new Uint8Array(e.result),s=J.a.read(i,{type:"array"});s.SheetNames.map((function(a,e){var i=s.Sheets[s.SheetNames[e]],l=J.a.utils.sheet_to_json(i);l.map((function(a,e){delete a.NO,delete a.__EMPTY,t.dataSheets[e]=a}))}))}},validate:function(){this.$refs.form.validate()&&(this.$store.dispatch("dataSekolah/postDataSekolah",this.dataSheets),this.$store.dispatch("dataSekolah/updateIsLoading",!0),this.msg.visible=!0)},visible:function(a){this.msg.visible=a}}},G=z,X=e("23a7"),K=Object(m["a"])(G,F,R,!1,null,null,null),M=K.exports;f()(K,{VBtn:b["a"],VCard:k["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VDialog:_["a"],VDivider:V["a"],VFileInput:X["a"],VForm:I["a"],VIcon:S["a"],VSpacer:x["a"]});var Y=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-btn",a._g({attrs:{color:"red",dark:"",depressed:""}},i),[e("v-icon",{staticClass:"mr-3"},[a._v("mdi-trash-can")]),a._v(" hapus semua ")],1)]}}]),model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"title pa-6"},[a._v(" Apakah anda yakin ingin menghapus semua data ? ")]),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){a.dialog=!1}}},[a._v("kembali")]),e("v-btn",{attrs:{loading:a.isLoading,color:"primary"},on:{click:a.hapusData}},[a._v("hapus")])],1)],1)],1)},Q=[],W={props:["id"],data:function(){return{dialog:!1}},methods:{hapusData:function(){this.$store.dispatch("dataPelajaran/deleteDataPelajaran",this.id),this.$store.dispatch("dataPelajaran/updateIsLoading",!0)}},computed:Object(n["a"])({},Object(r["b"])("dataPelajaran",["isLoading"]))},aa=W,ta=Object(m["a"])(aa,Y,Q,!1,null,null,null),ea=ta.exports;f()(ta,{VBtn:b["a"],VCard:k["a"],VCardActions:g["a"],VCardTitle:g["c"],VDialog:_["a"],VDivider:V["a"],VIcon:S["a"],VSpacer:x["a"]});var ia={components:{HapusSemuaSekolah:ea,UploadSekolah:M,TambahSekolah:q,DataSekolah:T}},sa=ia,la=Object(m["a"])(sa,i,s,!1,null,null,null);t["default"]=la.exports;f()(la,{VCard:k["a"],VCardText:g["b"],VCardTitle:g["c"],VDivider:V["a"],VIcon:S["a"]})}}]);
//# sourceMappingURL=chunk-2d22d7ba.1a67616f.js.map