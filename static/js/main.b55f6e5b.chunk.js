(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{32:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(33),i=n.n(s),r=(n(47),n(11)),l=(n(48),n(21)),o=n(6),u=(n(49),n(14)),d=n.n(u),j=n(19),m=n(34),h=n.n(m),b=n(36),p=n.n(b),f=n(25),O=n.n(f),v=n(37),x=n.n(v),g=(n(51),n(52),n(3));var N=function(e){var t=e.name,n=e.photoURL,a=e.email,c=e.lastMessage,s=Object(o.f)();return Object(g.jsxs)("div",{className:"user-profile",onClick:function(){var e;(e=a)&&s("/".concat(e))},children:[Object(g.jsx)("div",{className:"user-image",children:Object(g.jsx)("img",{src:n,alt:""})}),Object(g.jsxs)("div",{className:"user-info",children:[Object(g.jsx)("p",{className:"user-name",children:t}),c&&Object(g.jsx)("p",{className:"user-lastmessage",children:c})]})]})},S=n(20),U=S.a.initializeApp({apiKey:"AIzaSyAoaNFl57VViS-OSqJ7-E1SKQsNNIRioms",authDomain:"whatsapp-clone-997dd.firebaseapp.com",projectId:"whatsapp-clone-997dd",storageBucket:"whatsapp-clone-997dd.appspot.com",messagingSenderId:"503579530205",appId:"1:503579530205:web:a6712d7fe1eefb7b19dc34",measurementId:"G-F7JFVK9Q5S"}),w=S.a.auth(),L=U.firestore(),y=new S.a.auth.GoogleAuthProvider,I=L;var R=function(e){var t=e.currentUser,n=e.signOut,c=Object(a.useState)([]),s=Object(r.a)(c,2),i=s[0],l=s[1],o=Object(a.useState)(""),u=Object(r.a)(o,2),m=u[0],b=u[1],f=Object(a.useState)([]),v=Object(r.a)(f,2),S=v[0],U=v[1];Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.collection("users").onSnapshot((function(e){l(e.docs.filter((function(e){return e.data().email!==(null===t||void 0===t?void 0:t.email)})))}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.collection("Friendlist").doc(t.email).collection("list").onSnapshot((function(e){U(e.docs)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),n()}),[]);var w=i.filter((function(e){if(m&&e.data().fullname.toLowerCase().includes(m.toLowerCase()))return e})).map((function(e){return Object(g.jsx)(N,{name:e.data().fullname,photoURL:e.data().photoURL,email:e.data().email},e.id)}));return Object(g.jsxs)("div",{className:"sidebar",children:[Object(g.jsxs)("div",{className:"sidebar-header",children:[Object(g.jsx)("div",{className:"sidebar-header-img",onClick:n,children:Object(g.jsx)("img",{src:null===t||void 0===t?void 0:t.photoURL,alt:""})}),Object(g.jsxs)("div",{className:"sidebar-header-btn",children:[Object(g.jsx)(h.a,{}),Object(g.jsx)(p.a,{}),Object(g.jsx)(O.a,{})]})]}),Object(g.jsx)("div",{className:"sidebar-search",children:Object(g.jsxs)("div",{className:"sidebar-search-input",children:[Object(g.jsx)(x.a,{}),Object(g.jsx)("input",{type:"text",name:"search",placeholder:"Search...",value:m,onChange:function(e){return b(e.target.value)}})]})}),Object(g.jsx)("div",{className:"sidebar-chat-list",children:w.length>0?w:S.map((function(e){return Object(g.jsx)(N,{name:e.data().fullname,photoURL:e.data().photoURL,lastMessage:e.data().lastMessage,email:e.data().email})}))})]})};var k=function(e){var t=e.currentUser,n=e.signOut;return Object(g.jsx)("div",{className:"home",children:Object(g.jsxs)("div",{className:"home-container",children:[Object(g.jsx)(R,{currentUser:t,signOut:n}),Object(g.jsx)("div",{className:"home-bg",children:Object(g.jsx)("img",{src:"./WhatsAppbg.png",alt:""})})]})})},C=(n(32),n(39)),E=n.n(C),F=n(40),D=n.n(F),M=n(41),A=n.n(M);n(63);var J=function(e){var t,n,a=e.message,c=e.time,s=e.sender;return Object(g.jsxs)("div",{className:"chat-message",style:{alignSelf:s===(null===w||void 0===w||null===(t=w.currentUser)||void 0===t?void 0:t.email)?"flex-end":"flex-start",backgroundColor:s==(null===w||void 0===w||null===(n=w.currentUser)||void 0===n?void 0:n.email)?"#dcf8c6":"#fff"},children:[Object(g.jsx)("div",{className:"chat-message-text",children:Object(g.jsx)("p",{children:a})}),Object(g.jsx)("div",{className:"chat-message-date",children:Object(g.jsx)("p",{children:new Date(c.toDate()).toLocaleString()})})]})},T=n(38),B=n.n(T);var P=function(e){var t=e.currentUser,n=Object(a.useState)(""),c=Object(r.a)(n,2),s=c[0],i=c[1],l=Object(a.useState)(!1),u=Object(r.a)(l,2),m=u[0],h=u[1],b=Object(o.g)().emailID,p=Object(a.useState)({}),f=Object(r.a)(p,2),v=f[0],x=f[1],N=Object(a.useRef)(null),U=Object(a.useState)([]),w=Object(r.a)(U,2),L=w[0],y=w[1];Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.collection("users").doc(b).onSnapshot((function(e){x(e.data())}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.collection("chats").doc(b).collection("messages").orderBy("timeStamp","asc").onSnapshot((function(e){var n=e.docs.map((function(e){return e.data()})).filter((function(e){return e.senderEmail===(t.email||b)||e.receiverEmail===(t.email||b)}));y(n)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),n()}),[b]),Object(a.useEffect)((function(){N.current.addEventListener("DOMNodeInserted",(function(e){var t=e.currentTarget;t.scroll({top:t.scrollHeight,behavior:"smooth"})}))}),[L]);var R=function(e){if(e.preventDefault(),b){var n={text:s,senderEmail:t.email,receiverEmail:b,timeStamp:S.a.firestore.Timestamp.now()};I.collection("chats").doc(t.email).collection("messages").add(n),I.collection("chats").doc(b).collection("messages").add(n),I.collection("Friendlist").doc(t.email).collection("list").doc(b).set({email:v.email,fullname:v.fullname,photoURL:v.photoURL,lastMessage:s}),I.collection("Friendlist").doc(b).collection("list").doc(t.email).set({email:t.email,fullname:t.fullname,photoURL:t.photoURL,lastMessage:s}),i("")}};return Object(g.jsxs)("div",{className:"chat-container",children:[Object(g.jsxs)("div",{className:"chat-container-header",children:[Object(g.jsxs)("div",{className:"chat-user-info",children:[Object(g.jsx)("div",{className:"chat-user-img",children:Object(g.jsx)("img",{src:null===v||void 0===v?void 0:v.photoURL,alt:""})}),Object(g.jsx)("p",{children:null===v||void 0===v?void 0:v.fullname})]}),Object(g.jsx)("div",{className:"chat-container-header-btn",children:Object(g.jsx)(O.a,{})})]}),Object(g.jsx)("div",{className:"chat-display-container",ref:N,children:L.map((function(e){return Object(g.jsx)(J,{message:e.text,time:e.timeStamp,sender:e.senderEmail})}))}),Object(g.jsxs)("div",{className:"chat-input",children:[m&&Object(g.jsx)(B.a,{onEmojiClick:function(e,t){return i(s+t.emoji)}}),Object(g.jsxs)("div",{className:"chat-input-btn",children:[Object(g.jsx)(E.a,{onClick:function(){return h(!m)}}),Object(g.jsx)(D.a,{})]}),Object(g.jsx)("form",{onSubmit:R,children:Object(g.jsx)("input",{type:"text",placeholder:"Type a Message",value:s,onChange:function(e){i(e.target.value)}})}),Object(g.jsx)("div",{className:"chat-input-send-btn",onClick:R,children:Object(g.jsx)(A.a,{})})]})]})};n(64);var W=function(e){var t=e.currentUser,n=e.signOut;return Object(g.jsx)("div",{className:"chatpage",children:Object(g.jsxs)("div",{className:"chatpage-container",children:[Object(g.jsx)(R,{currentUser:t,signOut:n}),Object(g.jsx)(P,{currentUser:t})]})})};n(65);var G=function(e){var t=e.setUser,n=Object(o.f)();return Object(g.jsx)("div",{className:"login",children:Object(g.jsxs)("div",{className:"login-container",children:[Object(g.jsx)("img",{className:"login-logo",src:"./whatsapp-logo.png",alt:""}),Object(g.jsx)("p",{className:"login-name",children:"WhatsApp Web"}),Object(g.jsxs)("button",{className:"login-btn",onClick:function(){w.signInWithPopup(y).then((function(e){var a={fullname:e.user.displayName,email:e.user.email,photoURL:e.user.photoURL};n("/"),t(a),localStorage.setItem("user",JSON.stringify(a)),I.collection("users").doc(e.user.email).set(a)})).catch((function(e){return alert(e.message)}))},children:[Object(g.jsx)("img",{src:"./google-logo.png",alt:"login with google"}),"Login with Google"]})]})})};var K=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("user"))),t=Object(r.a)(e,2),n=t[0],c=t[1],s=function(){w.signOut().then((function(){c(null),localStorage.removeItem("user")})).catch((function(e){return alert(e.message)}))};return Object(g.jsx)(l.a,{children:Object(g.jsx)("div",{className:"App",children:n?Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{path:"/:emailID",element:Object(g.jsx)(W,{currentUser:n,signOut:s})}),Object(g.jsx)(o.a,{path:"/",element:Object(g.jsx)(k,{currentUser:n,signOut:s})})]}):Object(g.jsx)(G,{setUser:c})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(K,{})}),document.getElementById("root")),V()}},[[67,1,2]]]);
//# sourceMappingURL=main.b55f6e5b.chunk.js.map