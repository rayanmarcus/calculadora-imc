(function(e){function a(a){for(var r,i,n=a[0],l=a[1],c=a[2],d=0,p=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(a);while(p.length)p.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],r=!0,n=1;n<t.length;n++){var l=t[n];0!==s[l]&&(r=!1)}r&&(o.splice(a--,1),e=i(i.s=t[0]))}return e}var r={},s={app:0},o=[];function i(a){if(r[a])return r[a].exports;var t=r[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var r in e)i.d(t,r,function(a){return e[a]}.bind(null,r));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/calculadora-imc/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var u=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"25c5":function(e,a,t){"use strict";var r=t("89b2"),s=t.n(r);s.a},"37c7":function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"container-fluid"},[e._m(0),t("CalculadoraImc"),e._m(1)],1)])},o=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row"},[t("div",{staticClass:"col title"},[t("h1",{staticClass:"text-center"},[e._v(" Calculadora IMC "),t("br"),t("span",[e._v("adultos entre 20 e 59 anos")])])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("footer",{staticClass:"copyright text-right"},[t("p",[e._v(" by "),t("a",{attrs:{href:"https://github.com/rayanmarcus",target:"_blank"}},[e._v("@rayanmarcus")]),t("br"),e._v(" Feito com Vue.js 💚 ")])])}],i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-5 card-calculadora-imc"},[t("form",{staticClass:"form-calculadora-imc",attrs:{onsubmit:"return false;"}},[t("div",{staticClass:"col form-group form-calculadora mx-auto"},[t("span",[e._v("Seu peso")]),t("money",e._b({staticClass:"form form-control",model:{value:e.peso,callback:function(a){e.peso=a},expression:"peso"}},"money",e.maskPeso,!1)),t("span",{ref:"msg-erro-peso",staticClass:"msg-erro"},[e._v("Digite o peso")])],1),t("div",{staticClass:"col form-group form-calculadora mx-auto"},[t("span",[e._v("Sua altura")]),t("money",e._b({staticClass:"form form-control",model:{value:e.altura,callback:function(a){e.altura=a},expression:"altura"}},"money",e.maskAltura,!1)),t("span",{ref:"msg-erro-altura",staticClass:"msg-erro"},[e._v("Digite a altura")])],1),t("div",{staticClass:"col form-group form-calculadora mx-auto text-right"},[t("button",{staticClass:"btn btn-dark",on:{click:function(a){return e.calcularImc()}}},[e._v("Calcular")])])]),t("transition",{attrs:{name:"fade"}},[e.resultadoImc?t("div",[t("footer",{staticClass:"col-12 resultado mx-auto"},[t("h2",[e._v("Resultado")]),t("h3",[e._v(e._s(e.resultadoImc)+" "),t("span",[e._v("de IMC")])]),t("div",{staticClass:"progress"},[t("div",{staticClass:"progress-bar",staticStyle:{width:"100%"},style:{backgroundColor:e.barraNivelObesidade},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})]),t("h3",[e._v(" "+e._s(e.nivelObesidade)+" ")]),t("transition",{attrs:{name:"fade"}},[t("h4",{directives:[{name:"show",rawName:"v-show",value:"Obesidade"==e.nivelObesidade||"Abaixo do peso"==e.nivelObesidade,expression:"nivelObesidade == 'Obesidade' || nivelObesidade == 'Abaixo do peso'"}],staticClass:"procure-ajuda text-center"},[t("i",{staticClass:"fas fa-exclamation-triangle"}),e._v(" Procure a orientação de um profissional da saúde. ")])])],1),t("p",{staticClass:"fonte-imc"},[e._v(" Fonte: "),t("a",{attrs:{href:"https://www.saude.gov.br/component/content/article/804-imc/40509-imc-em-adultos",target:"_blank"}},[e._v("saude.gov.br")])])]):e._e()])],1)])},n=[],l=(t("b680"),{name:"CalculadoraImc",props:{},data:function(){return{peso:0,altura:0,resultadoImc:null,nivelObesidade:null,barraNivelObesidade:null,msgErro:{peso:!1,altura:!1},maskPeso:{decimal:",",thousands:".",suffix:" KG",precision:2,masked:!1},maskAltura:{decimal:",",thousands:".",suffix:" m",precision:2,masked:!1}}},methods:{calcularImc:function(){var e=this.peso,a=this.altura;if(!e||!a)return this.$refs["msg-erro-peso"].style.opacity=e?0:1,this.$refs["msg-erro-altura"].style.opacity=a?0:1,this.resultadoImc=null,!1;this.$refs["msg-erro-peso"].style.opacity=0,this.$refs["msg-erro-altura"].style.opacity=0;var t=parseFloat((e/Math.pow(a,2)).toFixed(2));t<18.5?(this.nivelObesidade="Abaixo do peso",this.barraNivelObesidade="#ECF033"):t>=18.5&&t<25?(this.nivelObesidade="Peso adequado",this.barraNivelObesidade="#33F03B"):t>=25&&t<30?(this.nivelObesidade="Sobrepeso",this.barraNivelObesidade="#F0BB33"):t>=30&&(this.nivelObesidade="Obesidade",this.barraNivelObesidade="#F05533"),this.resultadoImc=t,setTimeout((function(){document.getElementsByClassName("progress-bar")[0].setAttribute("id","progress-animate")}),10),setTimeout((function(){document.getElementsByClassName("progress-bar")[0].removeAttribute("id")}),2e3)}}}),c=l,u=(t("25c5"),t("0c7c")),d=Object(u["a"])(c,i,n,!1,null,"702a968c",null),p=d.exports,m={name:"App",components:{CalculadoraImc:p}},f=m,v=(t("5c0b"),Object(u["a"])(f,s,o,!1,null,null,null)),b=v.exports,h=(t("7e7d"),t("716b")),g=t.n(h);r["a"].use(g.a),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,a,t){"use strict";var r=t("37c7"),s=t.n(r);s.a},"7e7d":function(e,a,t){},"89b2":function(e,a,t){}});
//# sourceMappingURL=app.12fd0ac0.js.map