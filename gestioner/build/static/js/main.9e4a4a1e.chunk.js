(this.webpackJsonpgestioner=this.webpackJsonpgestioner||[]).push([[0],{46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(23),s=a.n(c),i=a(18),o=a(5),u=a.n(o),l=a(7),j=a(10),d=a(6),b=a(30),p=a(31),m=a(15),x=(a(38),a(58),{apiKey:"AIzaSyA5sY9N_TINZNrnelG1KSdd4812cBn-O_c",authDomain:"gestion-de-procesoso-tq.firebaseapp.com",databaseURL:"https://gestion-de-procesoso-tq.firebaseio.com",projectId:"gestion-de-procesoso-tq",storageBucket:"gestion-de-procesoso-tq.appspot.com",messagingSenderId:"156651852513",appId:"1:156651852513:web:e481bf0026651f271e9da0",measurementId:"G-YVPPSWK58L"}),f=new(function(){function e(){Object(b.a)(this,e),m.a.initializeApp(x)}return Object(p.a)(e,[{key:"autEmailPass",value:function(){var e=Object(l.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.auth().signInWithEmailAndPassword(t,a);case 3:if(!e.sent.user.emailVerified){e.next=8;break}return e.abrupt("return","/home");case 8:return e.next=10,m.a.auth().signOut();case 10:return e.abrupt("return","Por favor verifique email enviado");case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"crearCuentaEmailPass",value:function(){var e=Object(l.a)(u.a.mark((function e(t,a,n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.auth().createUserWithEmailAndPassword(t,a);case 3:return(r=e.sent).user.updateProfile({displayName:n}),c={url:"https://andrescalvog.github.io/GestionDeProcesos/",handleCodeInApp:!0},e.prev=6,r.user.sendEmailVerification(c),e.next=10,m.a.auth().sendSignInLinkToEmail(t,c);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.log(e.t0);case 15:return e.next=17,m.a.auth().signOut();case 17:return console.log("signOut Done"),e.abrupt("return",r.user);case 21:return e.prev=21,e.t1=e.catch(0),e.abrupt("return",e.t1);case 24:case"end":return e.stop()}}),e,null,[[0,21],[6,12]])})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"crearUsersDb",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m.a.firestore(),e.prev=1,e.next=4,a.collection("users").doc(t.id).set(t);case 4:e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(1),e.abrupt("return",e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getDataUser",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=m.a.firestore(),e.prev=1,e.next=4,a.collection("users").doc(t).get();case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"logoutUsers",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.auth().signOut();case 3:return e.abrupt("return","/GestionDeProcesos");case 6:return e.prev=6,e.t0=e.catch(0),console.log("no ha salido"),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"validUser",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){m.a.auth().onAuthStateChanged(function(){var a=Object(l.a)(u.a.mark((function a(n){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!n){a.next=4;break}e(n),a.next=15;break;case 4:return a.prev=4,a.next=7,m.a.auth().signOut();case 7:console.log("salida correcta"),e("/GestionDeProcesos"),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(4),console.log("no ha salido "+a.t0),t(a.t0);case 15:case"end":return a.stop()}}),a,null,[[4,11]])})));return function(e){return a.apply(this,arguments)}}())})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"resetPassword",value:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.auth().sendPasswordResetEmail(t);case 3:return e.abrupt("return","Mensaje enviado");case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0.code),e.abrupt("return",e.t0.code);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),h=a(1),A=r.a.createContext();function O(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)({}),i=Object(j.a)(s,2),o=i[0],b=i[1],p=Object(n.useState)(""),m=Object(j.a)(p,2),x=m[0],O=m[1],g=Object(n.useState)(""),v=Object(j.a)(g,2),k=v[0],w=v[1],y=Object(n.useState)(""),S=Object(j.a)(y,2),N=S[0],D=S[1],I=Object(n.useState)(!1),R=Object(j.a)(I,2),U=R[0],E=R[1],L=Object(d.f)(),Y=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),t={value:"0",exists:!1},e.next=4,f.validUser();case 4:if("/"===(a=e.sent)){e.next=9;break}return e.next=8,f.getDataUser(a.uid);case 8:t=e.sent;case 9:t.exists?(b(t._delegate._document.data.value.mapValue),c(!0),E(!1),console.log("reder true en app")):(c(!1),b({value:!1}),console.log("render false en app"));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==x&&""!==k){e.next=4;break}D("Por favor completa todos los campos"),e.next=28;break;case 4:return D(""),L.push("/home"),e.next=8,f.autEmailPass(x,k);case 8:if("auth/wrong-password"!==(t=e.sent).code){e.next=13;break}D("Contrase\xf1a Incorrecta"),e.next=28;break;case 13:if("auth/user-not-found"!==t.code){e.next=17;break}D("Usuario \xf3 Email Incorrecto"),e.next=28;break;case 17:if("auth/invalid-email"!==t.code){e.next=21;break}D("Email Invalido"),e.next=28;break;case 21:if("Por favor verifique email enviado"!==t){e.next=25;break}D(t),e.next=28;break;case 25:return L.push(t),e.next=28,Y();case 28:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(A.Provider,{value:{user:o,auth:r,email:x,password:k,fault:N,loader:U,setUser:b,setAuth:c,setEmail:O,setPassword:w,setFault:D,handleLogin:P,getDataUsers:Y},children:e.children})}var g=a(16),v=(a(46),a(47),a.p+"static/media/user.3c5dfe5d.svg"),k=(a(48),function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("input",{type:e.type,placeholder:e.label,autoComplete:"on",required:!0,value:e.value,onChange:function(t){return e.action(t.target.value)},className:"inputForm"})})}),w=function(){var e=r.a.useContext(A),t=e.email,a=e.setEmail,n=e.password,c=e.setPassword,s=e.fault,i=e.handleLogin;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("main",{className:"mainLogin",children:Object(h.jsxs)("article",{className:"mainLogin-card",children:[Object(h.jsx)("figure",{className:"mainLogin-image",children:Object(h.jsx)("img",{src:v,alt:"Logo Usuario"})}),Object(h.jsxs)("form",{className:"mainLogin-form",onSubmit:function(e){return e.preventDefault()},children:[Object(h.jsx)(k,{type:"email",label:"Email",value:t,action:a}),Object(h.jsx)(k,{type:"password",label:"Password",value:n,action:c}),Object(h.jsxs)("div",{className:"mainLogin-board",children:[Object(h.jsx)(g.b,{to:"/password/reset",className:"mainLogin-link",children:"\xbfOlvidaste tu Contrase\xf1a?"}),Object(h.jsx)("span",{children:s})]}),Object(h.jsxs)("div",{className:"mainLogin-keypad",children:[Object(h.jsx)("button",{onClick:i,children:"Ingresar"}),Object(h.jsx)(g.b,{to:"/Register",children:Object(h.jsx)("button",{children:"Registrarme"})})]})]})]})})})};a(49);var y=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"content-loader",children:Object(h.jsx)("div",{className:"loader"})})})},S=(a(50),function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(j.a)(c,2),i=s[0],o=s[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),p=b[0],m=b[1],x=Object(n.useState)(""),A=Object(j.a)(x,2),O=A[0],g=A[1],v=Object(n.useState)(""),w=Object(j.a)(v,2),y=w[0],S=w[1],N=Object(n.useState)(""),D=Object(j.a)(N,2),I=D[0],R=D[1],U=Object(n.useState)(""),E=Object(j.a)(U,2),L=E[0],Y=E[1],P=Object(n.useState)(""),B=Object(j.a)(P,2),M=B[0],F=B[1],G="".concat(i," ").concat(p),C=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==i&&""!==p&&""!==O&&""!==y&&""!==I&&""!==L){e.next=4;break}F("Por favor completa TODOS los campos"),e.next=37;break;case 4:return F(""),e.next=7,f.crearCuentaEmailPass(O,y,G);case 7:if("auth/wrong-password"!==(t=e.sent).code){e.next=12;break}F("Contrase\xf1a Incorrecta"),e.next=37;break;case 12:if("auth/user-not-found"!==t.code){e.next=16;break}F("Usuario Incorrecto"),e.next=37;break;case 16:if("auth/invalid-email"!==t.code){e.next=20;break}F("Email invalido"),e.next=37;break;case 20:if("auth/weak-password"!==t.code){e.next=24;break}F("Contrase\xf1a demasiado corta"),e.next=37;break;case 24:if("auth/email-already-in-use"!==t.code){e.next=28;break}F("Email ya registrado"),e.next=37;break;case 28:if(!t.uid){e.next=36;break}return e.next=31,f.crearUsersDb({first:i,last:p,email:O,cargo:I,code:L,id:t.uid});case 31:a=e.sent,console.log(a),r(!0),e.next=37;break;case 36:console.log(t.code);case 37:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:a?Object(h.jsxs)("main",{className:"main-success",children:[Object(h.jsx)("h1",{children:" Bienvenido "}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{className:"names",children:G.toLowerCase().trim().split(" ").map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(" ")}),Object(h.jsxs)("p",{children:[" ","Debes realizar el proceso de verificacion desde el correo enviado a tu email"," "]})]}):Object(h.jsx)("main",{className:"mainRegister",children:Object(h.jsxs)("section",{className:"form_register",children:[Object(h.jsx)("h1",{children:"Registro"}),Object(h.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(h.jsx)(k,{type:"text",label:"Tu nombre...",value:i,action:o}),Object(h.jsx)(k,{type:"text",label:"Tu apellido...",value:p,action:m}),Object(h.jsx)(k,{type:"email",label:"Tu correo...",value:O,action:g}),Object(h.jsx)(k,{type:"password",label:"Contrase\xf1a...",value:y,action:S}),Object(h.jsx)(k,{type:"text",label:"Tu cargo...",value:I,action:R}),Object(h.jsx)(k,{type:"text",label:"Tu codigo de empleado...",value:L,action:Y}),Object(h.jsx)("span",{children:M}),Object(h.jsx)("button",{className:"send",onClick:C,children:"Registrarme"})]})]})})})});a(51);var N=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h1",{className:"notFound",children:"404 Not Found"})})},D=(a(52),a.p+"static/media/pdf.2672353a.png"),I=a.p+"static/media/calendar.d0093ef4.png",R=a.p+"static/media/help.36cf5b7a.png",U=a.p+"static/media/turnos.0e575f74.png",E=a.p+"static/media/Bitacora.be86942d.jpg",L=a.p+"static/media/password.d297a302.svg";var Y=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("article",{className:"main-container--card",onClick:e.action,children:[Object(h.jsx)("h2",{children:e.name}),Object(h.jsx)("div",{className:"main-container--image",children:e.route?Object(h.jsx)(g.b,{to:e.route,children:Object(h.jsx)("img",{src:e.image,alt:e.name})}):Object(h.jsx)("img",{src:e.image,alt:e.name})})]})})},P=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("main",{className:"main-container",children:Object(h.jsxs)("section",{className:"main-container--menu",children:[Object(h.jsx)(Y,{name:"Logout",image:v,route:""}),Object(h.jsx)(Y,{name:"Manual",image:D,route:"/Manuals"}),Object(h.jsx)(Y,{name:"Maquinas",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAZlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADpYSfpYSfpYSfpYSfpYSfpYSfpYSfpYSfpYSfpYSfpYSfpYSfpYSfpYSfpYScAAADpYSf////r+ytiAAAAH3RSTlMAQIC/MHCvIO8QUJ/fz49gMEAgEGCv33Cf77+Az1CP1hrd9AAAAAFiS0dEIcRsDRYAAApBSURBVHja7V3rmqIwDF1A5C4o3plR3/8p15Fe0iat6GLL7Mf5pwL2NGmSpmn582fGjBkzZsyYMWPGjBkzZsyYMcOAIIwC3234Zyzi5fWOyHc7/glJvEyvDAvfjXkXWV6UV4DCd4PepFFcdWS+2/QWKsTjGvpu0ztYYB7X9DeKJCCI0CIJlpPml1BECMOV3U1zNWkmJJE0WoUBbPbiYZwnzaS6GlEWObsoZ05mykyiqw1pcdeyxVJ8rnw314zw+gSVIrPpesunRDRMlsnqRSITZUIEKL+SyaJ6nccUmSzSd3hMj0lN8YgeKO1MYt9NV3nozUuLPBG/BqFN7WrfjQfQ9SrK9SuS0Kh6pe/Wg1aqjYwS6qLMRGU6GYpMUZzS2LBsSfFYeW59EuYBi9AVP2idaeRYKN4jrpi1426WzDaoWa83yhfI2aTe8yykmgAL1G53+9sD+91Bssk0Jv6Nb2rlsTmebhDnNc3EvzukEg2ye7sbwplLJQNdUPqfXFER+5L91n7dCJy2uA9S3zTIySDv3uZ0o3HEneDfq5sdm5GHZCKHiXfjm2MeLPMO9erc3XHcyy8O/TUgAebb+q6MAtnxRu+3Lbu4OQomzHhJxfTt1yuTQL55k7sWXL7mYtr3n6VIPOtWhgXC4t29ZqIYhMJt9Y5IXvvnkYGHCDOkW7W9mAkTSTwRu4XTDMxFn5le4VtaZsy+H59kmtjvIMGz175jN0q3q9gqJlg8wesyI5F2T2Bjt+Rd/fA59R+ETL3OD2tMpP/hCNuq49CzbB4fQu1OP8AhPFOQfojs6Lsa6EqCSRBJVilNZG8a6g9AQyCJ5MP+80PI4pIiAg3TUCLXwi+VP3VpIrI23GEgcndCy9irXwwqmshrqsXl4pVKpBE5K9G6hg092IVYfDIRRpRFKDuzPxROpnl8iDERjzyAN+hnh51tkJyhk8HzgOXQP/0EZPDYWx7mKs7UtesbdDJ4HuA1epR5BBb77c0G+AuGL8Q8wG88LxwjC5mYbp026Eo2S2SahYMczzl5Gaz0k28erH+12oWHm2KacZDjOVUX6w3hqbmTMuBbPmvf9wSJ8NmBe7clOmSLeD2TSKIcpXptRSKF0SNyF5/POS5+IggjGWl9WD3TRqa1dof1pl1/X+Q3F0bfy+pCwcMhkgxwbMzsDEjQEQvyn5/xAkNJkQEpaT5pfZoypQrUPr/+pmWrERnQuzwZ3+xJHjyWzKgViY/zIPIMatQNiXKK7QXT2AszRhVDfT4FUV9JiEpFZdzKdbTNUaMh8xGF9Xkfg6GWrKZ/ByuCm8NZsDiCkIWuvPl4LjugeYixqUfj6tpms/6B4uRpHp8P4Ss7EVxJk1qD2ER53iq4D7VFUIfLUYxvZvapibFIsb8no3haFtrVypuRF3STKqXDnKxeXo3oL6Er5lLDyA3Ubhk5SnwoB+5Eez0PI5Kbfi1DLBWNxtjVskEvbEUocP+HlUhtuWBZw4lSsNLd0cg8ZFNW7MHa/g+7atXWa8poFf5gSQj3Yzzujw7so4Ii8oSJGSPzeKMqlIOr4ntMisnwkLUX8Rs3j2t3s7eqWwWEcrzeHePa3QE8ougxVsOCrBMV+bSXmYyawFrYbVNa1GoYF2CTLDpWYVI+76AxA0RrtXFqWLDIC/Uugkl6V//gmYhG5JFbeJS12aRkNb3JkDe9XLDLrB51PInUFmk8U2CFisYkAl2wiAtTCfZoGSyLxQwHGPgY9LZiu4hYkXSwo80GjbFeNUzoMLiXTMibyX1w45lfw36V4f42JpjQoAb+eIkG2oe8Yt6B1bMzST5KhLK+Kc6QNd9ddzzvuu67wU+oBjLBc8xqTIdYIx6ahrfbnZIv3G21dQIg1RLcm+is1OxFWeQjJ6uXVh56VqpPeKorg1A/izwIWCiDAkJx2WcW0zPVxiumfbO70Tg38DI6OkBLmr3wo/BTmSulklrpxu5mxqU1PUIA/VNZrT66iANMKDTsm6+bDV8N/QgJ99tahHLBAvX16WbHCS7YUmkv56V9AdWH29tzgPI4YuXJff2r6E2gWEN4KEwo5XK8Xi5cLjiUoRnEQ6nQIAJcxxUMIgiSsWj7bHyIcSLXa2tMxPGCeYoFch7IQ6k1wSJxW+WTY4EccIO/Ll3XXQiCB5tInG5AEJolhiZSLLnboN3qXE7CMRIrm07PdOF/LyMKzaFrVfrfGk1ZJIdnHC4NsIguhInRBIKKYlpNKOJ3Yr7pcAdYjP5THSHHFt+jRsSyABMTcVj+yqN4OVn7ssrjAUUme/QsLwaYG00xLjcGPwGhal/Dv8Yb+RzWkPG/FGGWolkHw11bUreIFWxnBlj8txgiO1JrdMAaE+EUifJEZxtwBRGyiQfjfVAkcm8F9iTOKl+5WsuxDpVmY7yvJQ0wmpW4qw5HRJpBmqXaNkO1T+qyyL3SVWBNKT+BHUUE2t90SPZ4NAh3KKwvJHKx3NlRRID9XbmkkcnUL0mks9xrJ+L02APlUA+RKIBEdpa77UQcJlC0s0nEYB86Rs4UERzvfBqJHnLT5tfyBBikNPxLbrWcuUFbUARb+G18QkPy5TbQmdkl1nfEb1BnjsYnwEj+S3zrPFQkpkDCzCjzQ5Nr35woujyx5DDFiImICaKiNKbhrmTphQLy/vEwnQJRkfhNKZ6mw0Y1DylCLa6xDn1hbRntau00tf1ZLXmX3oaNdZcpB2JlUpZO354w0Ur31/pDnWbh8Wqu/HtttU2PuLT0nQyReeDmdF1kZdEtTSSwmv3u+fUMnfyRd45LHtT0WnYk2mGwv/TV4M0BrWKd0SMdn3iAZ6WyAS2964NEI+7iUY/js6+XNpGsB/OQ5lnYD8d70rEBhjpxGMgDBPoiDHV8UBZVGgLMzXEQD5CHFDlk5yuHRDkNDPaGMIH5VJF3cL6WS1U4wXH6nAnkEZPPcAJyhw6caj8bJzDGB0Uc7g/OoQpIlCPtGlvpg1IuAMtq3B/YT1YZqkO1M67uXszbpZyfD8ANcBmFoCHqikZLUzmqEy4tAeD6gIAkDOMg6KfXQMe1tZl2q5c6nfXKM90leT1Ew8zkzmXd7c4/ktmfd90aLWHh4g2vh7CBafxrezqo6lGvR34BBamG6wZ9cK/f44yAiqRDG2La6uD3pSlQSYa93sT84gG/B1BAJunztGdg3nkSeT4rVt3IYvcHgeXNHP7P7lVNUBkbO7a2vWDE92GeP9Cdgrqtk0Hf0KPB/4G3j0aiNlZFHAg2QR7aX/byfAONKySGPV5VFA15+YP/s8YFskFbdA0op8PDfCjCAEzs/UdDd4qmyzpX7Jxv96Fj0At2KrbrAGyE8e8+XiVyFwXoex6oTMF9qLAb2BLtneiFMhWzCzBAoVRkq+m4j0FEQuNEJZ+S2eVYmHhM54Utw2DyI7/uXZkGIr/vVZnBfyIQ0zlBv04gPwhwsD45t/0umSna15fIsEnI734J9gOLx7EbU3Tcb5Hx3YIZM2bMmDFjxowZM2bMmDHjf8NfgGTWLnsrjpoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDYtMjNUMTQ6MjY6MzIrMDI6MDDqBRsOAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTA2LTIzVDE0OjI2OjMyKzAyOjAwm1ijsgAAAEd0RVh0c29mdHdhcmUASW1hZ2VNYWdpY2sgNi44LjYtMTAgMjAxMy0wOS0xOSBRMTYgaHR0cDovL3d3dy5pbWFnZW1hZ2ljay5vcmdjnhxOAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAyMDB91xVpAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADIwMO4mRTQAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTQzNTA2MjM5MuiNJrYAAAATdEVYdFRodW1iOjpTaXplADQuMzVLQkJWJyX0AAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdmFyL3d3dy9hZG1pbmlzdHJhdHIvc2l0ZWZpbGVzL3NpdGVfMTk4L2ljb25vXzIucG5ntDjuWQAAAABJRU5ErkJggg==",route:""}),Object(h.jsx)(Y,{name:"Calendario",image:I,route:""}),Object(h.jsx)(Y,{name:"Ayuda",image:R,route:""}),Object(h.jsx)(Y,{name:"Turnos",image:U,route:""}),Object(h.jsx)(Y,{name:"Bitacora",image:E,route:""}),Object(h.jsx)(Y,{name:"Contrase\xf1a",image:L,route:""})]})})})};a(53);var B=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(j.a)(c,2),i=s[0],o=s[1],d=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.resetPassword(a);case 2:"auth/invalid-email"===(t=e.sent)?o("Correo invalido"):"auth/user-not-found"===t?o("Usuario no Registrado"):(o(t),r(""));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("main",{className:"mainReset",children:Object(h.jsxs)("article",{className:"mainReset-card",children:[Object(h.jsx)("h1",{children:"Revisa tu correo y sigue las instrucciones"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("p",{children:["Te enviaremos un enlace a tu correo",Object(h.jsx)("br",{})," para que puedas cambiar la contrase\xf1a"]}),Object(h.jsxs)("form",{className:"mainReset-form",onSubmit:function(e){return e.preventDefault()},children:[Object(h.jsx)(k,{type:"email",label:"Email",value:a,action:r}),Object(h.jsxs)("div",{className:"mainReset-keypad",children:[Object(h.jsx)("button",{onClick:d,children:"Cambiar Contrase\xf1a"}),Object(h.jsx)(g.b,{to:"/",className:"mainReset-link",children:"\u2b05 Regresar a inicio de sesion"}),Object(h.jsx)(g.b,{to:"/register",children:Object(h.jsx)("button",{children:"Registrarme"})}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:i})]})]})]})})})},M=(a(54),a.p+"static/media/profile.5faf09a7.png");a(55);var F=function(e){var t=e.children;return s.a.createPortal(Object(h.jsx)("div",{className:"hiden",id:"menu",children:t}),document.getElementById("modal"))},G=function(){var e=r.a.useContext(A),t=e.user,a=e.auth,n=e.getDataUsers,c=e.setEmail,s=e.setPassword,i=Object(d.f)(),o=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.logoutUsers();case 2:t=e.sent,i.push(t),n(),c(""),s("");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:a?Object(h.jsxs)("header",{className:"main-header",children:[Object(h.jsxs)("section",{className:"main-header-title",children:[Object(h.jsx)("h1",{className:"title-mobile",children:"GP"}),Object(h.jsx)("h1",{className:"title-desk",children:"Gestion de Procesos"})]}),Object(h.jsxs)("section",{className:"main-header-avatar",children:[Object(h.jsxs)("div",{className:"avatar-info",children:[Object(h.jsxs)("p",{children:[t.fields.first.stringValue," ",t.fields.last.stringValue]}),Object(h.jsx)("p",{children:t.fields.cargo.stringValue}),Object(h.jsx)("p",{children:t.fields.code.stringValue})]}),Object(h.jsx)("figure",{className:"avatar",onClick:function(){var e=document.getElementById("menu");e.classList.contains("hiden")?e.classList.replace("hiden","modalBackground"):e.classList.replace("modalBackground","hiden")},children:Object(h.jsx)("img",{id:"photo",src:M,alt:"avatar"})})]}),Object(h.jsxs)(F,{children:[Object(h.jsx)("p",{children:"Mi Perfil"}),Object(h.jsx)("p",{children:"Noticias"}),Object(h.jsx)("p",{onClick:o,children:"Logout"})]})]}):Object(h.jsx)("header",{className:"header",children:Object(h.jsx)("section",{className:"header-title",children:Object(h.jsx)("h1",{children:"Gestion de Procesos"})})})})};var C=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(G,{}),e.children]})};a(56);var W=function(){var e=r.a.useContext(A).getDataUsers;return Object(n.useEffect)((function(){function t(){return(t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"notUser",children:"Not Register User"}),";"]})};var V=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h1",{children:"Hand Books"})})};var T=function(){return Object(h.jsx)(g.a,{children:Object(h.jsx)(O,{children:Object(h.jsx)(C,{children:Object(h.jsx)(A.Consumer,{children:function(e){var t=e.auth,a=e.loader;return t?Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/GestionDeProcesos",render:function(e){return Object(h.jsx)(w,Object(i.a)({},e))}}),Object(h.jsx)(d.a,{exact:!0,path:"/Register",component:S}),Object(h.jsx)(d.a,{exact:!0,path:"/Home",render:function(e){return Object(h.jsx)(P,Object(i.a)({},e))}}),Object(h.jsx)(d.a,{exact:!0,path:"/password/reset",render:function(e){return Object(h.jsx)(B,Object(i.a)({},e))}}),Object(h.jsx)(d.a,{exact:!0,path:"/Manuals",render:function(e){return Object(h.jsx)(V,Object(i.a)({},e))}}),Object(h.jsx)(d.a,{component:N})]}):Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/GestionDeProcesos",render:function(e){return Object(h.jsx)(w,Object(i.a)({},e))}}),Object(h.jsx)(d.a,{exact:!0,path:"/Register",component:S}),a?Object(h.jsx)(d.a,{exact:!0,path:"/Home",render:function(e){return Object(h.jsx)(y,Object(i.a)({},e))}}):Object(h.jsx)(d.a,{exact:!0,path:"/Home",render:function(e){return Object(h.jsx)(W,Object(i.a)({},e))}}),Object(h.jsx)(d.a,{exact:!0,path:"/password/reset",render:function(e){return Object(h.jsx)(B,Object(i.a)({},e))}}),Object(h.jsx)(d.a,{component:N})]})}})})})})},z=document.getElementById("root");s.a.render(Object(h.jsx)(T,{}),z)}},[[57,1,2]]]);
//# sourceMappingURL=main.9e4a4a1e.chunk.js.map