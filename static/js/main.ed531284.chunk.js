(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t.p+"static/media/perfil.7d2350aa.jpg"},15:function(e,a,t){e.exports=t.p+"static/media/logo.b368aff5.svg"},16:function(e,a,t){e.exports=t(32)},25:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(9),c=t.n(r),i=t(5),s=(t(25),t(0)),m=t(13),o=t(12),d=t(11),E=t(6),u=t(10),_=t.n(u);function b(){return n.a.createElement("section",{className:"profile__container flex flex-wrap"},n.a.createElement("article",{className:"avatar"},n.a.createElement("img",{src:_.a,className:"avatar__image",alt:"Avatar Asarael Navarro Beltr\xe1n"}),n.a.createElement("h1",{className:"avatar__name"},"Asarael Navarro"),n.a.createElement("small",{className:"avatar__info"},"El / He / Him - 38 a\xf1os")),n.a.createElement("article",{className:"contact"},n.a.createElement(i.b,{className:"contact__link mail",to:"mailto:asarael.navarro@gmail.com"},n.a.createElement(E.a,{icon:d.faEnvelope}),"  asarael.navarro@gmail.com"),n.a.createElement(i.b,{className:"contact__link behance",to:"https://www.behance.net/asarael_navarro"},n.a.createElement(E.a,{icon:o.faBehance}),"  /asarael_navarro"),n.a.createElement(i.b,{className:"contact__link github",to:"https://github.com/AsaraelNavarro/"},n.a.createElement(E.a,{icon:m.faGithub}),"  @AsaraelNavarro")))}var p=t(7),f=t.n(p),v=t(14),N=t(4),g=function(e){var a=Object(l.useState)(null),t=Object(N.a)(a,2),n=t[0],r=t[1],c=Object(l.useState)(null),i=Object(N.a)(c,2),s=i[0],m=i[1],o=Object(l.useState)(!0),d=Object(N.a)(o,2),E=d[0],u=d[1];return Object(l.useEffect)(function(){!function(){var a=Object(v.a)(f.a.mark(function a(){var t,l;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return u(!0),a.prev=1,a.next=4,fetch(e);case 4:return t=a.sent,a.next=7,t.json();case 7:l=a.sent,r(l),u(!1),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(1),m(a.t0),u(!1);case 16:case"end":return a.stop()}},a,null,[[1,12]])}));return function(){return a.apply(this,arguments)}}()()},[e]),{loading:E,error:s,data:n}},h=function(e){return n.a.createElement("h2",{className:"title"},e.title)};function w(){var e=g("http://localhost:1337/api/jobs/"),a=e.loading,t=e.error,l=e.data;return a?n.a.createElement("p",null,"Loading..."):t?n.a.createElement("p",null,"Error"):n.a.createElement("section",{className:"job-list__container flex flex-wrap"},n.a.createElement(h,{title:"Experiencia profesional"}),l.data.map(function(e){return n.a.createElement("article",{key:e.id,className:"card"},n.a.createElement("div",{className:"card__header"},n.a.createElement("h3",{className:"card__header__title"},e.attributes.puesto," en ",e.attributes.empresa," "),n.a.createElement("small",{className:"card__header__date"},e.attributes.fecha_entrada," - "),n.a.createElement("small",{className:"card__header__date"},e.attributes.fecha_salida)),n.a.createElement("p",{className:"card__content"},e.attributes.actividades))}))}var x=function(e){return n.a.createElement("article",{className:"card"},n.a.createElement("div",{className:"card__header"},n.a.createElement("h3",{className:"card__header__title"},e.cardTitle),n.a.createElement("small",{className:"card__header__date"},e.dateStart," - "),n.a.createElement("small",{className:"card__header__date"},e.dateFinished)),n.a.createElement("p",{className:"card__content"},e.cardContent))},T=function(e){return n.a.createElement("span",{className:"badge"},e.badgeTitle)};function j(){return n.a.createElement("main",{className:"main"},n.a.createElement("div",{className:"content home"},n.a.createElement("div",{className:"profile"},n.a.createElement(b,null),n.a.createElement("section",{className:"profile__container flex flex-wrap"},n.a.createElement(h,{title:"\xc1reas de especialidad"}),n.a.createElement("div",null,n.a.createElement(T,{badgeTitle:"Dise\xf1o gr\xe1fico"}),n.a.createElement(T,{badgeTitle:"Dise\xf1o web"}),n.a.createElement(T,{badgeTitle:"UI"}),n.a.createElement(T,{badgeTitle:"Desarrollo web"}))),n.a.createElement("section",{className:"profile__container flex flex-wrap"},n.a.createElement(h,{title:"Habilidades"}),n.a.createElement("div",null,n.a.createElement(T,{badgeTitle:"Adobe Creative Suite"}),n.a.createElement(T,{badgeTitle:"HTML"}),n.a.createElement(T,{badgeTitle:"CSS"}),n.a.createElement(T,{badgeTitle:"Javascript"}),n.a.createElement(T,{badgeTitle:"Git"}),n.a.createElement(T,{badgeTitle:"React Js"}),n.a.createElement(T,{badgeTitle:"Maquetaci\xf3n web"}),n.a.createElement(T,{badgeTitle:"Fotocomposici\xf3n"}),n.a.createElement(T,{badgeTitle:"SEO"}),n.a.createElement(T,{badgeTitle:"Multimedia"}),n.a.createElement(T,{badgeTitle:"WordPress"})))),n.a.createElement("div",{className:"job-list"},n.a.createElement(w,null),n.a.createElement("section",{className:"job-list__container flex flex-wrap"},n.a.createElement(h,{title:"Educaci\xf3n"}),n.a.createElement(x,{cardTitle:"Universidad Aut\xf3noma de Coahuila",dateStart:"2008",dateFinished:"2013",cardContent:"Escuela de Artes Pl\xe1sticas - Licenciatura en dise\xf1o gr\xe1fico."})),n.a.createElement("section",{className:"job-list__container flex flex-wrap"},n.a.createElement(h,{title:"Idiomas"}),n.a.createElement("div",null,n.a.createElement(T,{badgeTitle:"Ingl\xe9s intermedio"}))))))}var S=t(15),A=t.n(S);function O(){return n.a.createElement("header",{className:"site-header"},n.a.createElement("nav",{className:"main-navigation content"},n.a.createElement("img",{src:A.a,className:"app-logo",alt:"logo"}),n.a.createElement("ul",null)))}var k=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(O,null),n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/",element:n.a.createElement(j,null)}),n.a.createElement(s.a,{path:"*",element:n.a.createElement("h1",null,"404")})))};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,null,n.a.createElement(k,null))))}},[[16,2,1]]]);
//# sourceMappingURL=main.ed531284.chunk.js.map