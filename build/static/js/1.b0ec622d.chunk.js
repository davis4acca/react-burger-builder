webpackJsonp([1],{189:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var u=t(0),c=t.n(u),l=t(60),d=t(190),s=t(198),p=t(64),b=t(61),f=t(14),h=t(10),g=t(7),v=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),m=function(e){function n(){var e,t,o,u;i(this,n);for(var c=arguments.length,l=Array(c),d=0;d<c;d++)l[d]=arguments[d];return t=o=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),o.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},o.inputChangedHandler=function(e,n){var t=Object(f.b)(o.state.controls,r({},n,Object(f.b)(o.state.controls[n],{value:e.target.value,valid:Object(f.a)(e.target.value,o.state.controls[n].validation),touched:!0})));o.setState({controls:t})},o.submitHandler=function(e){e.preventDefault(),o.props.onAuth(o.state.controls.email.value,o.state.controls.password.value,o.state.isSignup)},o.switchAuthModeHandler=function(){o.setState(function(e){return{isSignup:!e.isSignup}})},u=t,a(o,u)}return o(n,e),v(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,n=[];for(var t in this.state.controls)n.push({id:t,config:this.state.controls[t]});var r=n.map(function(n){return c.a.createElement(d.a,{key:n.id,elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,invalid:!n.config.valid,shouldValidate:n.config.validation,touched:n.config.touched,changed:function(t){return e.inputChangedHandler(t,n.id)}})});this.props.loading&&(r=c.a.createElement(b.a,null));var i=null;this.props.error&&(i=c.a.createElement("p",null,this.props.error.message));var a=null;return this.props.isAuthenticated&&(a=c.a.createElement(h.c,{to:this.props.authRedirectPath})),c.a.createElement(s.a,null,a," ",i,c.a.createElement("form",{onSubmit:this.submitHandler},r," ",c.a.createElement(l.a,{success:!0}," Submit ")),c.a.createElement(l.a,{onClick:this.switchAuthModeHandler,danger:!0},this.state.isSignup?"SWITCH TO SIGN IN":"SWITCH TO SIGN UP"))}}]),n}(u.Component),x=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},w=function(e){return{onAuth:function(n,t,r){return e(p.a(n,t,r))},onSetAuthRedirectPath:function(){return e(p.d("/"))}}};n.default=Object(g.b)(x,w)(m)},190:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a=t(191),o=function(e){var n=null,t=!1;switch(e.invalid&&e.shouldValidate&&e.touched&&(t=e.invalid),e.elementType){case"input":n=i.a.createElement(a.a,Object.assign({onChange:e.changed},e.elementConfig,{value:e.value,invalid:t}));break;case"textarea":n=i.a.createElement(a.e,Object.assign({onChange:e.changed},e.elementConfig,{value:e.value,invalid:t}));break;case"select":n=i.a.createElement(a.d,{value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=i.a.createElement(a.a,Object.assign({},e.elementConfig,{value:e.value}))}return i.a.createElement(a.b,null,i.a.createElement(a.c,null,e.label),n)};n.a=o},191:function(e,n,t){"use strict";function r(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"b",function(){return s}),t.d(n,"c",function(){return p}),t.d(n,"a",function(){return b}),t.d(n,"d",function(){return f}),t.d(n,"e",function(){return h});var i=t(1),a=r(["\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n"],["\n  width: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n"]),o=r(["\n  font-weight: bold;\n  display: block;\n  margin-bottom: 8px;\n"],["\n  font-weight: bold;\n  display: block;\n  margin-bottom: 8px;\n"]),u=r(["\n  outline: none;\n  border: 1px solid #ccc;\n  background-color: white;\n  font: inherit;\n  padding: 6px 10px;\n  width: 100%;\n  display: block;\n\n  ","\n\n  &:focus {\n    outline: none;\n    background-color: #ccc;\n  }\n"],["\n  outline: none;\n  border: 1px solid #ccc;\n  background-color: white;\n  font: inherit;\n  padding: 6px 10px;\n  width: 100%;\n  display: block;\n\n  ","\n\n  &:focus {\n    outline: none;\n    background-color: #ccc;\n  }\n"]),c=r(["\n    border: 1px solid red;\n    background-color: #FDA49A;\n  "],["\n    border: 1px solid red;\n    background-color: #FDA49A;\n  "]),l=r(["\nwidth: 100%;\n  ","\n"],["\nwidth: 100%;\n  ","\n"]),d=r(["\n ","\n\n"],["\n ","\n\n"]),s=i.b.div(a),p=i.b.label(o),b=i.b.input(u,function(e){return e.invalid&&Object(i.a)(c)}),f=i.b.select(l,function(e){return e.invalid&&Object(i.a)(c)}),h=i.b.textarea(d,function(e){return e.invalid&&Object(i.a)(c)})},198:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t(1),i=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  margin: 20px auto;\n  width: 80%;\n  text-align: center;\n  box-shadow: 0 2px 3px #ccc;\n  border: 10px;\n  box-sizing: border-box;\n\n  @media (min-width: 600px) {\n    width: 500px;\n  }\n"],["\n  margin: 20px auto;\n  width: 80%;\n  text-align: center;\n  box-shadow: 0 2px 3px #ccc;\n  border: 10px;\n  box-sizing: border-box;\n\n  @media (min-width: 600px) {\n    width: 500px;\n  }\n"]),a=r.b.div(i)}});
//# sourceMappingURL=1.b0ec622d.chunk.js.map