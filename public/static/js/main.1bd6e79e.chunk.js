(this["webpackJsonpcleanvel-front"]=this["webpackJsonpcleanvel-front"]||[]).push([[0],{47:function(e,a,t){e.exports=t(77)},52:function(e,a,t){},54:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(21),c=t.n(l),u=(t(52),t(18)),s=t.n(u),o=(t(53),t(41)),m=t.n(o),i=(t(54),t(2)),d=t(4),E=t(19),p=t(3),f=t(12),k=t.n(f),v="https://cleanvel.herokuapp.com/api";k.a.defaults.withCredentials=!0;var g="cleanvel/user/LOADING",b="cleanvel/user/LOGIN_SUCCESS",N="cleanvel/user/LOGIN_ERROR",h="cleanvel/user/LOGOUT_SUCCESS",O={data:JSON.parse(localStorage.getItem("user")),status:"",error:void 0};var y=function(e){return function(a){return a({type:g}),k.a.post("".concat(v,"/login"),e).then((function(e){var t=e.data.user;localStorage.setItem("user",JSON.stringify(t)),a({type:b,payload:t})})).catch((function(e){return a((t=e.response.data,{type:N,error:t}));var t}))}},S=function(){return function(e){return k.a.post("".concat(v,"/logout")).then((function(){localStorage.removeItem("user"),e({type:h})}))}},_=t(5);function j(){var e=Object(d.a)(["\ncolor:red;\nfont-size: 15px;\n"]);return j=function(){return e},e}var w=_.a.div(j()),x=function(){var e=Object(i.b)(),a=Object(E.a)({mode:"onBlur"}),t=a.register,r=a.handleSubmit,l=a.errors;return n.a.createElement("div",{className:"authform-background"},n.a.createElement("div",{className:"authform"},n.a.createElement("div",{className:"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-width-3xlarge","uk-grid":"true"},n.a.createElement("div",{className:"uk-card-media-left uk-cover-container"},n.a.createElement("img",{src:"/images/cleanvel-login.jpeg",alt:"","uk-cover":"true"})),n.a.createElement("div",{className:"uk-card-body"},n.a.createElement("form",{onSubmit:r((function(a){e(y(a))}))},n.a.createElement("div",null,n.a.createElement("img",{src:"/images/cleanvel-logo.png",alt:""})),n.a.createElement("div",{className:"uk-margin"},n.a.createElement("div",{className:"uk-inline"},n.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: user"}),n.a.createElement("input",{className:"uk-input",name:"username",type:"text",ref:t({required:!0})})),l.username&&n.a.createElement(w,null,"El usuario es requerido")),n.a.createElement("div",{className:"uk-margin"},n.a.createElement("div",{className:"uk-inline"},n.a.createElement("span",{className:"uk-form-icon uk-form-icon-flip","uk-icon":"icon: lock"}),n.a.createElement("input",{className:"uk-input",name:"password",type:"password",ref:t({required:!0})})),l.password&&n.a.createElement(w,null,"La contrase\xf1a es requerida")),n.a.createElement("button",{className:"uk-button uk-button-default"},"Login"))))))},R=t(20),C=t(15),U=t.n(C),A=(t(40),t(22)),L=t.n(A);function I(){var e=Object(d.a)(["\ncolor: rgb(17, 107, 9);\nfont-weight: 500;\n"]);return I=function(){return e},e}function z(){var e=Object(d.a)(["\nalign-items: center;\ntext-align: center;\ncolor: rgb(7, 9, 48);\n"]);return z=function(){return e},e}function D(){var e=Object(d.a)(["\nalign-items: center;\n"]);return D=function(){return e},e}U.a.extend(L.a);var T=_.a.div(D()),G=_.a.div(z()),q=_.a.h3(I()),M=function(){var e=Object(i.c)((function(e){return e.user.data}));return n.a.createElement(T,{className:"uk-card"},n.a.createElement(G,{className:"uk-card-body"},n.a.createElement("img",{className:"uk-border-circle uk-align-center",width:"90",height:"90",src:e.profile_picture?e.profile_picture:"/images/cleanvel-logo-letter.png",alt:e.name}),n.a.createElement(q,{className:"uk-card-title uk-margin-remove"},e.name," ",e.last_name),n.a.createElement("p",{className:"uk-margin-remove"},"Usuario: ",e.username),n.a.createElement("p",{className:"uk-margin-remove"},"Activo desde ",U()(e.createdAt).locale("es").format("MMMM YYYY"))))},Y=function(e){var a=Object(i.b)();return n.a.createElement("nav",{className:"uk-navbar uk-navbar-container","uk-navbar":"true"},n.a.createElement("div",{className:"uk-navbar-left uk-margin-left"},n.a.createElement("div",null,n.a.createElement("a",{className:"uk-navbar-toggle",href:"/"},n.a.createElement("span",{"uk-navbar-toggle-icon":"true"})),n.a.createElement("div",{"uk-dropdown":"mode: click"},n.a.createElement("ul",{className:"uk-nav uk-dropdown-nav"},n.a.createElement("li",{className:"uk-active nav-name-text"},n.a.createElement(R.b,{className:"uk-text-capitalize",to:"/usuarios"},n.a.createElement("span",{className:"uk-margin-small-right","uk-icon":"users"}),n.a.createElement("span",{className:"nav-name-text"},"Usuarios"))),n.a.createElement("li",{className:"uk-active nav-name-text"},n.a.createElement("a",{className:"uk-text-capitalize",href:"/"},n.a.createElement("span",{className:"uk-margin-small-right","uk-icon":"location"}),n.a.createElement("span",{className:"nav-name-text"},"Tiendas"))),n.a.createElement("li",{className:"uk-active nav-name-text"},n.a.createElement("a",{className:"uk-text-capitalize",href:"/"},n.a.createElement("span",{className:"uk-margin-small-right","uk-icon":"list"}),n.a.createElement("span",{className:"nav-name-text"},"Inventario"))),n.a.createElement("li",{className:"uk-active nav-name-text"},n.a.createElement("a",{className:"uk-text-capitalize",href:"/"},n.a.createElement("span",{className:"uk-margin-small-right","uk-icon":"cart"}),n.a.createElement("span",{className:"nav-name-text"},"Ventas"))),n.a.createElement("li",{className:"uk-active nav-name-text"},n.a.createElement("a",{className:"uk-text-capitalize",href:"/"},n.a.createElement("span",{className:"uk-margin-small-right","uk-icon":"folder"}),n.a.createElement("span",{className:"nav-name-text"},"Reportes")))))),n.a.createElement("span",{className:"nav-name-text"},"Menu")),n.a.createElement("div",{className:"uk-navbar-center"},n.a.createElement(R.b,{to:"/"},n.a.createElement("img",{src:"/images/cleanvel-logo.png",width:280,alt:"logo","uk-img":"true"}))),n.a.createElement("div",{className:"uk-navbar-right"},n.a.createElement("ul",{className:"uk-navbar-nav"},n.a.createElement("li",null,n.a.createElement("a",{className:"uk-text-capitalize uk-navbar-toggle",href:"/"},n.a.createElement("span",{className:"nav-name-text"},e.user.name," "),n.a.createElement("span",{className:"uk-margin-small-left","uk-icon":"user"})),n.a.createElement("div",{className:"profile-card uk-margin-remove uk-padding-remove","uk-dropdown":"mode: click"},n.a.createElement(M,null))),n.a.createElement("li",null,n.a.createElement("a",{className:"uk-text-capitalize",href:"/",onClick:function(){a(S())}},n.a.createElement("span",{className:"nav-name-text"},"Salir"),n.a.createElement("span",{className:"uk-margin-small-left","uk-icon":"sign-out"}))))))},V=function(){var e=Object(i.c)((function(e){return e.user.data}));return n.a.createElement("div",{className:"home"},!e&&n.a.createElement(x,null),e&&n.a.createElement(Y,{user:e}))},P=t(1),J=t(6),B="cleanvel/products/GET_USERS_SUCCESS",H="cleanvel/products/GET_USERS_ERROR",F="cleanvel/products/CREATE_USER_ERROR",W="cleanvel/products/EDIT_USER_SUCCESS",X="cleanvel/products/EDIT_USER_ERROR",$="cleanvel/products/DELETE_USER_ERROR",K="cleanvel/products/SEARCH_USER_ERROR",Q={users:{},status:"",error:void 0};var Z=function(e){return{type:"cleanvel/products/DELETE_USER_SUCCESS",payload:e}},ee=function(){return function(e){return e({type:"cleanvel/products/LOADING"}),k.a.get("".concat(v,"/users")).then((function(a){var t=a.data.users.reduce((function(e,a){return Object(p.a)({},e,Object(J.a)({},a._id,a))}),{});e({type:B,payload:t})})).catch((function(a){e({type:H,error:a})}))}},ae=function(e){return function(a){return a({type:"cleanvel/products/LOADING"}),k.a.post("".concat(v,"/users"),e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){a({type:"cleanvel/products/CREATE_USER_SUCCESS",payload:e.data.msg})})).catch((function(e){a({type:F,error:e})}))}},te=function(e){return function(a){return a({type:"cleanvel/products/LOADING"}),console.log("Params:",e.id),k.a.patch("".concat(v,"/users/").concat(e.id),e.data).then((function(e){var t;a((t=e.data.user,{type:W,payload:t}))})).catch((function(e){a({type:X,error:e})}))}},re=function(e){return function(a){return a({type:"cleanvel/products/LOADING"}),k.a.get("".concat(v,"/users/").concat(e)).then((function(e){a({type:"cleanvel/products/SEARCH_USER_SUCCESS",payload:e.data.user})})).catch((function(e){a({type:K,error:e})}))}};function ne(){var e=Object(d.a)(["\ncolor:red;\nfont-size: 15px;\n"]);return ne=function(){return e},e}var le=_.a.div(ne()),ce=function(e){var a=e.register,t=e.errors;return n.a.createElement("form",{className:"uk-form-stacked uk-grid-small","uk-grid":"true"},n.a.createElement("div",{className:"uk-margin uk-width-1-2"},n.a.createElement("label",{className:"uk-form-label"},"Nombre:"),n.a.createElement("div",{className:"uk-form-controls"},n.a.createElement("input",{className:"uk-input",type:"text",name:"name",ref:a({required:!0})})),t.name&&n.a.createElement(le,null,"Agregar nombre del usuario")),n.a.createElement("div",{className:"uk-margin uk-width-1-2"},n.a.createElement("label",{className:"uk-form-label"},"Apellido:"),n.a.createElement("div",{className:"uk-form-controls"},n.a.createElement("input",{className:"uk-input",type:"text",name:"last_name",ref:a({required:!0})})),t.username&&n.a.createElement(le,null,"Agregar apellido")),n.a.createElement("div",{className:"uk-margin uk-width-1-2"},n.a.createElement("label",{className:"uk-form-label"},"Usuario:"),n.a.createElement("div",{className:"uk-form-controls"},n.a.createElement("input",{className:"uk-input",type:"text",name:"username",ref:a({required:!0})})),t.username&&n.a.createElement(le,null,"Asignar un usuario")),n.a.createElement("div",{className:"uk-margin uk-width-1-2"},n.a.createElement("label",{className:"uk-form-label"},"Contrase\xf1a:"),n.a.createElement("div",{className:"uk-form-controls"},n.a.createElement("input",{className:"uk-input",type:"password",name:"password",placeholder:"minimo de 6 caracteres ",ref:a({required:"La contrase\xf1a es requerida",minLength:{value:6,message:"La contrase\xf1a es muy corta"}})})),t.password&&n.a.createElement(le,null,t.password.message)),n.a.createElement("div",{className:"uk-margin uk-width-2-3"},n.a.createElement("label",{className:"uk-form-label"},"Permisos:"),n.a.createElement("div",{className:"uk-form-controls"},n.a.createElement("select",{className:"uk-select",name:"role",ref:a},n.a.createElement("option",null,"Usuario"),n.a.createElement("option",null,"Administrador")))),n.a.createElement("div",{className:"uk-margin uk-width-1-3"},n.a.createElement("label",{className:"uk-form-label"},"Foto de perfil:"),n.a.createElement("div",{className:"uk-form-controls","uk-form-custom":"true"},n.a.createElement("input",{type:"file",name:"profile_picture",ref:a}),n.a.createElement("button",{className:"uk-button uk-button-default",type:"button",tabIndex:"-1"},"Seleccionar..."))))},ue=function(){var e=Object(i.b)(),a=Object(E.a)(),t=a.register,r=a.handleSubmit,l=a.errors;return n.a.createElement("div",null,n.a.createElement("button",{"uk-toggle":"target: #new-user",type:"button",className:"uk-margin-bottom"},"Registrar nuevo usuario"),n.a.createElement("div",{id:"new-user","uk-modal":"true"},n.a.createElement("div",{className:"uk-modal-dialog"},n.a.createElement("button",{className:"uk-modal-close-default",type:"button","uk-close":"true"}),n.a.createElement("div",{className:"uk-modal-header"},n.a.createElement("h2",{className:"uk-modal-title"},"Nuevo usuario")),n.a.createElement("div",{className:"uk-modal-body"},n.a.createElement(ce,{register:t,errors:l})),n.a.createElement("div",{className:"uk-modal-footer uk-text-right"},n.a.createElement("button",{className:"uk-button",type:"button",onClick:r((function(a){var t=new FormData;for(var r in a)"profile_picture"===r?t.append(r,a[r][0]):t.append(r,a[r]);e(ae(t)).then((function(){s.a.modal("#new-user").hide()}))}))},"Guardar")))))},se=function(){return n.a.createElement("div",{className:"uk-card uk-card-default"},n.a.createElement("div",{className:"uk-card-media-top"},n.a.createElement("img",{className:"uk-align-center",src:"https://res.cloudinary.com/karen491/image/upload/v1594178220/cleanvel/App%20pictures/table-image_zitbkx.jpg",alt:"",width:380})),n.a.createElement("div",{className:"body-card"},n.a.createElement(ue,null)))},oe=t(7),me=t.n(oe),ie=t(11);function de(){var e=Object(d.a)(["\ncolor:red;\nfont-size: 15px;\n"]);return de=function(){return e},e}function Ee(){var e=Object(d.a)(["\ncolor:blue;\nfont-size: 15px;\n"]);return Ee=function(){return e},e}var pe=_.a.span(Ee()),fe=_.a.div(de()),ke=function(e){var a=e.register,t=e.data,l=e.errors,c=e.reset;return Object(r.useEffect)((function(){function e(){return(e=Object(ie.a)(me.a.mark((function e(){var a;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./api/formValues.json");case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),n.a.createElement("form",{className:"uk-form-stacked uk-grid-small","uk-grid":"true"},n.a.createElement("div",{className:"uk-margin uk-width-1-2"},n.a.createElement("label",{className:"uk-form-label"},"Nombre:"),n.a.createElement("div",{className:"uk-form-controls"},n.a.createElement("input",{className:"uk-input",defaultValue:t.name,placeholder:t.name,type:"text",name:"name",ref:a({required:!0})})),l.name&&n.a.createElement(fe,null,"Agregar nombre del usuario")),n.a.createElement("div",{className:"uk-margin uk-width-1-2"},n.a.createElement("label",{className:"uk-form-label"},"Apellido:"),n.a.createElement("div",{className:"uk-form-controls"},n.a.createElement("input",{className:"uk-input",defaultValue:t.last_name,placeholder:t.last_name,type:"text",name:"last_name",ref:a({required:!0})})),l.last_name&&n.a.createElement(fe,null,"Agregar apellido")),n.a.createElement("div",{className:"uk-margin uk-width-1-2"},n.a.createElement("label",{className:"uk-form-label"},"Usuario:"),n.a.createElement("div",{className:"uk-form-controls"},n.a.createElement("input",{className:"uk-input",defaultValue:t.username,placeholder:t.username,type:"text",name:"username",ref:a({required:!0})})),l.username&&n.a.createElement(fe,null,"Agregar usuario")),n.a.createElement("div",{className:"uk-margin uk-width-1-2"},n.a.createElement("label",{className:"uk-form-label"},"Permisos: ",n.a.createElement(pe,null,t.role)),n.a.createElement("div",{className:"uk-form-controls"},n.a.createElement("select",{className:"uk-select",name:"role",ref:a,defaultValue:t.role},n.a.createElement("option",null,"Usuario"),n.a.createElement("option",null,"Administrador")))))};function ve(){var e=Object(d.a)(["\nborder: 1px solid rgb(17, 107, 9);\nborder-radius: 5%;\n"]);return ve=function(){return e},e}function ge(){var e=Object(d.a)(["\ncolor: rgb(17, 107, 9);\nfont-weight: 500;\n"]);return ge=function(){return e},e}var be=_.a.h3(ge()),Ne=_.a.img(ve()),he=function(e){var a=e._id,t=Object(i.b)(),r=Object(i.c)((function(e){return e.users.editableUser})),l=Object(E.a)(),c=l.register,u=l.handleSubmit,o=l.errors,m=l.reset;return n.a.createElement("div",null,n.a.createElement("button",{"uk-toggle":"target: #edit-warning",href:"/usuarios",className:"uk-icon-button","uk-icon":"file-edit",type:"button",onClick:function(){t(re(a))}}),n.a.createElement("div",{id:"edit-warning","uk-modal":"true"},r&&n.a.createElement("div",{className:"uk-modal-dialog uk-modal-body"},n.a.createElement(be,{className:"uk-align-center"},r.name," ",r.last_name),n.a.createElement("div",{className:"uk-flex"},n.a.createElement(Ne,{className:"uk-align-center uk-margin-right",width:"120",height:"90",src:r.profile_picture?r.profile_picture:"/images/cleanvel-logo-letter.png",alt:r.name}),n.a.createElement(ke,{data:r,register:c,errors:o,reset:m})),n.a.createElement("hr",null),n.a.createElement("p",{className:"uk-text-right"},n.a.createElement("button",{className:"button-nb uk-modal-close",type:"button"},"Cancelar"),n.a.createElement("button",{className:"button",type:"button",onClick:u((function(e){var a=r._id;t(te({id:a,data:e})).then((function(){s.a.modal("#edit-warning").hide()}))}))},"Guardar")))))},Oe=function(e){var a=e._id,t=Object(i.b)(),r=Object(i.c)((function(e){return e.users.editableUser}));return n.a.createElement("div",null,n.a.createElement("button",{"uk-toggle":"target: #delete-warning",href:"/usuarios",className:"uk-icon-button","uk-icon":"trash",type:"button",onClick:function(){t(re(a))}}),n.a.createElement("div",{id:"delete-warning","uk-modal":"true"},r?n.a.createElement("div",{className:"uk-modal-dialog uk-modal-body"},n.a.createElement("h4",null,n.a.createElement("span",{"uk-icon":"icon: warning; ratio: 3"}),"\xbfEstas seguro que deseas eliminar a ".concat(r.name," ").concat(r.last_name," de la base de datos?")),n.a.createElement("hr",null),n.a.createElement("p",{className:"uk-text-right"},n.a.createElement("button",{className:"button-nb uk-modal-close",type:"button"},"Cancelar"),n.a.createElement("button",{className:"button uk-modal-close",type:"button",onClick:function(e){e=r._id,t(function(e){return function(a){return a({type:"cleanvel/products/LOADING"}),k.a.delete("".concat(v,"/users/").concat(e)).then((function(e){a(Z(e.data.user))})).catch((function(e){a(Z(e))}))}}(e))}},"Eliminar usuario"))):null))};function ye(){var e=Object(d.a)(["\nborder: 1px solid rgb(214, 207, 207);\n"]);return ye=function(){return e},e}function Se(){var e=Object(d.a)(["\ncolor: rgb(15, 82, 9);\nborder: 1px solid rgb(214, 207, 207);\ntext-transform: capitalize;\nfont-size: 18px;\nfont-weight: 500;\n"]);return Se=function(){return e},e}function _e(){var e=Object(d.a)(["\ncolor: rgb(8, 4, 46);\n"]);return _e=function(){return e},e}function je(){var e=Object(d.a)(["\nborder: 2px solid rgb(214, 207, 207); \n"]);return je=function(){return e},e}function we(){var e=Object(d.a)(["\nwidth: 40px;\nheight: 40px;\nborder-radius: 40%;\n"]);return we=function(){return e},e}U.a.extend(L.a);var xe=_.a.img(we()),Re=_.a.table(je()),Ce=_.a.h2(_e()),Ue=_.a.td(Se()),Ae=_.a.td(ye()),Le=function(){var e,a=Object(i.b)(),t=Object(i.c)((function(e){return e.users.users}));return Object(r.useEffect)((function(){a(ee())}),[a]),n.a.createElement("div",{className:"uk-flex-middle uk-margin-top","uk-grid":"true"},n.a.createElement(se,null),n.a.createElement("div",{className:"uk-width-2-3@m uk-height-large","uk-overflow-auto":"true"},n.a.createElement(Re,{className:"uk-table uk-table-divider"},n.a.createElement("caption",{className:"uk-margin-right"},n.a.createElement(Ce,{className:"uk-text-center"},n.a.createElement("span",null,n.a.createElement("img",{className:"uk-margin-small-right",src:"https://res.cloudinary.com/karen491/image/upload/v1594177958/cleanvel/App%20pictures/users-icon_bihpzi.png",alt:"",width:60})),"Usuarios Cleanvel")),n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{className:"uk-text-center"},n.a.createElement("span",{"uk-icon":"grid"})),n.a.createElement(Ue,null,"Nombre"),n.a.createElement(Ue,null,"Usuario"),n.a.createElement(Ue,null,"Permisos"),n.a.createElement(Ue,null,"Activo desde"),n.a.createElement(Ue,null,"Acciones"))),n.a.createElement("tbody",null,(e=t,Object.values(e)).map((function(e,a){return n.a.createElement("tr",{key:a},n.a.createElement(Ae,null,n.a.createElement(xe,{className:"uk-preserve-width",src:e.profile_picture,alt:""})),n.a.createElement(Ae,null,e.name," ",e.last_name),n.a.createElement(Ae,null,e.username),n.a.createElement(Ae,null,e.role),n.a.createElement(Ae,null,U()(e.createdAt).locale("es").format("MMMM YYYY")),n.a.createElement("td",{className:"uk-flex"},n.a.createElement(he,e),n.a.createElement(Oe,e)))}))))))},Ie=function(){return n.a.createElement(P.c,null,n.a.createElement(P.a,{exact:!0,path:"/usuarios",component:Le}))};var ze=function(){return n.a.createElement("div",null,n.a.createElement(V,null),n.a.createElement(Ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De=t(16),Te=t(46),Ge=Object(De.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case g:return Object(p.a)({},e,{status:"pending"});case b:return{status:"success",data:Object(p.a)({},a.payload)};case N:return{status:"error",error:a.error};case h:return O;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"cleanvel/products/LOADING":return Object(p.a)({},e,{status:"pending"});case B:return Object(p.a)({},e,{status:"success",users:Object(p.a)({},a.payload)});case H:return Object(p.a)({},e,{status:"error",error:a.error});case"cleanvel/products/CREATE_USER_SUCCESS":return Object(p.a)({},e,{status:"success",users:Object(p.a)({},e.users,Object(J.a)({},a.payload._id,a.payload))});case F:return Object(p.a)({},e,{status:"error",error:a.error});case W:return Object(p.a)({},e,{status:"success",users:Object(p.a)({},e.users,Object(J.a)({},a.payload._id,a.payload))});case X:return Object(p.a)({},e,{status:"error",error:a.error});case"cleanvel/products/DELETE_USER_SUCCESS":return Object(p.a)({},e,{status:"success"});case $:return Object(p.a)({},e,{status:"error",error:a.error});case"cleanvel/products/SEARCH_USER_SUCCESS":return Object(p.a)({},e,{status:"success",editableUser:Object(p.a)({},a.payload)});case K:return Object(p.a)({},e,{status:"error",error:a.error});default:return e}}}),qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||De.d,Me=Object(De.e)(Ge,qe(Object(De.a)(Te.a)));s.a.use(m.a),c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,{store:Me},n.a.createElement(R.a,null,n.a.createElement(ze,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.1bd6e79e.chunk.js.map