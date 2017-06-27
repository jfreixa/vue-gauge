webpackJsonp([1],{32:function(e,t,a){function s(e){a(53)}var n=a(29)(a(37),a(82),s,null,null);e.exports=n.exports},35:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(34),n=a(33),r=a.n(n),i=a(0),c=(a.n(i),a(3)),o=(a.n(c),a(31)),p=(a.n(o),a(32)),l=a.n(p);s.a.use(r.a,{Observable:i.Observable,Subscription:c.Subscription,Subject:o.Subject}),s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:l.a}})},36:function(e,t,a){"use strict";var s=a(39),n=a.n(s),r=a(40),i=a.n(r),c=a(0),o=(a.n(c),a(58)),p=(a.n(o),a(63)),l=(a.n(p),function(){function e(){n()(this,e)}return i()(e,null,[{key:"week",value:function(){return c.Observable.from([{id:1,completedSteps:1,totalSteps:29,name:"Prospectie"},{id:2,completedSteps:0,totalSteps:18,name:"Appointment"},{id:3,completedSteps:0,totalSteps:12,name:"Offer"},{id:4,completedSteps:0,totalSteps:4,name:"Signature"}]).toArray()}},{key:"month",value:function(){return c.Observable.from([{id:1,completedSteps:1,totalSteps:123,name:"Prospectie"},{id:2,completedSteps:0,totalSteps:75,name:"Appointment"},{id:3,completedSteps:0,totalSteps:51,name:"Offer"},{id:4,completedSteps:0,totalSteps:19,name:"Signature"}]).toArray()}},{key:"quarter",value:function(){return c.Observable.from([{id:1,completedSteps:28,totalSteps:373,name:"Prospectie"},{id:2,completedSteps:16,totalSteps:228,name:"Appointment"},{id:3,completedSteps:16,totalSteps:153,name:"Offer"},{id:4,completedSteps:6,totalSteps:57,name:"Signature"}]).toArray()}},{key:"year",value:function(){return c.Observable.from([{id:1,completedSteps:307,totalSteps:1500,name:"Prospectie"},{id:2,completedSteps:101,totalSteps:1080,name:"Appointment"},{id:3,completedSteps:113,totalSteps:617,name:"Offer"},{id:4,completedSteps:75,totalSteps:230,name:"Signature"}]).toArray()}}]),e}());t.a=l},37:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(81),n=a.n(s),r=a(36),i=a(0),c=(a.n(i),a(61)),o=(a.n(c),a(62)),p=(a.n(o),a(60)),l=(a.n(p),a(59));a.n(l);t.default={name:"app",domStreams:["week$","month$","quarter$","year$"],data:function(){return{active:"week"}},subscriptions:function(){return{gauges:this.getGauges$()}},components:{Gauge:n.a},methods:{getGauges$:function(){var e=this.createObservable(this.week$,"week"),t=this.createObservable(this.month$,"month"),a=this.createObservable(this.quarter$,"quarter"),s=this.createObservable(this.year$,"year");return i.Observable.merge(e,t,a,s)},createObservable:function(e,t){var a=this,s=this.isActive(t)?e.startWith(""):e;return s=s.flatMap(r.a[t]),s.subscribe(function(){a.active=t}),s},isActive:function(e){return this.active===e}}}},38:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(41),n=a.n(s);t.default={props:["completedSteps","totalSteps","name"],computed:{percentage:function(){return(this.completedSteps/this.totalSteps*100).toFixed(2)},percentageClass:function(){var e;return e={},n()(e,"p"+Math.round(this.percentage),!0),n()(e,"over50",this.percentage>50),e}}}},53:function(e,t){},54:function(e,t){},81:function(e,t,a){function s(e){a(54)}var n=a(29)(a(38),a(83),s,"data-v-7b584232",null);e.exports=n.exports},82:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"buttons"},[a("button",{directives:[{name:"stream",rawName:"v-stream:click",value:e.week$,expression:"week$",arg:"click"}],staticClass:"btn",class:{active:e.isActive("week")}},[e._v("Week")]),e._v(" "),a("button",{directives:[{name:"stream",rawName:"v-stream:click",value:e.month$,expression:"month$",arg:"click"}],staticClass:"btn",class:{active:e.isActive("month")}},[e._v("Month")]),e._v(" "),a("button",{directives:[{name:"stream",rawName:"v-stream:click",value:e.quarter$,expression:"quarter$",arg:"click"}],staticClass:"btn",class:{active:e.isActive("quarter")}},[e._v("Quarter")]),e._v(" "),a("button",{directives:[{name:"stream",rawName:"v-stream:click",value:e.year$,expression:"year$",arg:"click"}],staticClass:"btn",class:{active:e.isActive("year")}},[e._v("Year")])]),e._v(" "),a("div",{staticClass:"gauges"},e._l(e.gauges,function(e){return a("Gauge",{key:e.id,attrs:{completedSteps:e.completedSteps,totalSteps:e.totalSteps,name:e.name}})}))])},staticRenderFns:[]}},83:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"gauge"},[a("div",{staticClass:"progress-circle",class:e.percentageClass},[a("div",{staticClass:"text"},[a("p",[e._v(e._s(e.percentage)+"%")]),e._v(" "),a("p",[e._v(e._s(e.completedSteps)+" / "+e._s(e.totalSteps))])]),e._v(" "),e._m(0)]),e._v(" "),a("p",{staticClass:"name"},[e._v(e._s(e.name))])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left-half-clipper"},[a("div",{staticClass:"first50-bar"}),e._v(" "),a("div",{staticClass:"value-bar"})])}]}}},[35]);
//# sourceMappingURL=app.92d0a03e7c5f66c4438d.js.map