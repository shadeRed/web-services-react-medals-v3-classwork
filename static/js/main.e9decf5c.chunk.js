(this["webpackJsonpgold-medals"]=this["webpackJsonpgold-medals"]||[]).push([[0],{36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(11),o=n.n(a),i=(n(36),n(12)),s=n(13),u=n(17),d=n(16),l=(n(37),n(63)),m=(n(38),n(39),n(30)),j=n.n(m),h=n(24),b=n.n(h),f=n(3),p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"medal-count-outer",children:[Object(f.jsx)(b.a,{onClick:this.props.decrement}),Object(f.jsx)("div",{className:"medal-count-inner",style:{backgroundColor:this.props.color},children:Object(f.jsx)("p",{children:this.props.count})}),Object(f.jsx)(j.a,{onClick:this.props.increment})]})}}]),n}(c.Component),v=n(62),O=["#ffd900","#c5cad9","#d9a36a"],x=function(t){var e=t.name,n=t.count,c=t.increment,r=t.decrement;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{className:"medal-header",children:[e,Object(f.jsx)(v.a,{badgeContent:n.reduce((function(t,e){return t+e}),0),color:"primary"})]}),O.map((function(t,e){return Object(f.jsx)(p,{color:t,count:n[e],increment:function(){return c(e)},decrement:function(){return r(e)}},e)}))]})},y=["United States","China","Russia","Germany","Brazil","Japan"],g=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={countries:y.map((function(t){return{name:t,count:[0,0,0]}}))},t}return Object(s.a)(n,[{key:"addCountry",value:function(t){var e=this.state.countries;e.push({name:t,count:[0,0,0]}),this.setState({countries:e})}},{key:"addMedal",value:function(t,e){var n=this.state.countries;n[t].count[e]+=1,this.setState({countries:n})}},{key:"removeMedal",value:function(t,e){var n=this.state.countries;n[t].count[e]-=1,n[t].count[e]<0&&(n[t].count[e]=0),this.setState({countries:n})}},{key:"render",value:function(){var t=this;return Object(f.jsx)(l.a,{className:"container",maxWidth:"sm",children:this.state.countries.map((function(e,n){return Object(f.jsx)(x,{name:e.name,count:e.count,increment:t.addMedal.bind(t,n),decrement:t.removeMedal.bind(t,n)},n)}))})}}]),n}(c.Component),C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),C()}},[[47,1,2]]]);
//# sourceMappingURL=main.e9decf5c.chunk.js.map