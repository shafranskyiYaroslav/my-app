(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(43)},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);n(29);var a,r=n(0),c=n.n(r),i=n(11),u=n.n(i),o=n(9),l=(n(39),n(10)),s=n.n(l),p=n(13),m=n(20),A=n(21),f=n(26),d=n(22),E=n(27);!function(e){e.ADD_IMAGE="ADD_IMAGE",e.ADD_NEW_TASK="ADD_NEW_TASK",e.CHANGE_INPUT_VALUE="CHANGE_INPUT_VALUE",e.CHANGE_TASK_STATUS="CHANGE_TASK_STATUS",e.CLEAR_TASK="CLEAR_TASK",e.CLEAR_ALL_TASKS="CLEAR_ALL_TASKS",e.CHANGE_ACTUAL_LIST="CHANGE_ACTUAL_LIST"}(a||(a={}));var h="COMPLETED",L="IN_PROGRESS",g=[{title:"All",type:"ALL"},{title:"Finished",type:h},{title:"Active",type:L}],v=a.ADD_IMAGE,T=a.CHANGE_INPUT_VALUE,_=a.ADD_NEW_TASK,y=a.CHANGE_TASK_STATUS,S=a.CLEAR_TASK,b=a.CLEAR_ALL_TASKS,C=a.CHANGE_ACTUAL_LIST;function N(e){return function(t){return{payload:t,type:e}}}var k=N(_),O=N(y),w=N(S),j=N(C),D=N(v),U=N(T),I=N(b),V=function(){var e=Object(p.a)(s.a.mark(function e(){var t,n,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.imgflip.com/get_memes"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a=n.data.memes,r=Math.floor(Math.random()*a.length),e.abrupt("return",a[r].url||" ");case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),G=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:t=e.sent,(n=this.props.showImages)&&n(t);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.imageURL;return r.createElement("div",{className:"image-div"},r.createElement("h3",{className:"image-title"},"It's time to do something useful!"),r.createElement("img",{src:e,alt:"mem"}))}}]),t}(r.Component),K=Object(o.b)(function(e){return{imageURL:e.imageURL}},{showImages:D})(G),R=n(44),P=function(e){var t=e.type,n=e.title,a=e.onClick;return r.createElement("div",{className:"col-xs-4"},r.createElement(R.a,{block:!0,color:"secondary",size:"sm",toggle:!0,onClick:function(){a({type:t})}},n)," ")},H=function(e){var t=e.inputValue,n=e.onChangeValue,a=e.onSubmitValue;return r.createElement("input",{className:"input",type:"text",value:t,placeholder:"Type new task",onChange:function(e){return n(e.target.value)},onKeyUp:function(e){var r=t.trim();13===e.keyCode&&r.length>0&&(a(r),n(""))}})},x=n(46),M=n(45),W=h,J=L,z=function(e){var t=e.item,n=e.onChangeStatus,a=e.clearTask,c=t.id,i=t.name,u=t.status===W;return r.createElement(M.a,{className:"justify-content-between py-0",color:u?"success":"warning"},r.createElement("label",{className:"todoItem"},r.createElement("input",{type:"checkbox",checked:u,onChange:function(){return n({id:c,name:i,status:u?J:W})}}),i,r.createElement("button",{onClick:function(){return a({id:c})}},"X"),r.createElement("br",null)))},B=(n(41),function(e){var t=e.list,n=e.onChangeStatus,a=e.clearTask;return r.createElement("div",{className:"container"},r.createElement(x.a,null,t.length>0&&t.map(function(e,t){return r.createElement(z,{key:t,item:e,onChangeStatus:n,clearTask:a})})))}),F=L,X=Object(o.b)(function(e){return{inputValue:e.inputValue,todoList:e.todoList,actualList:e.actualList}},{addNewTask:k,changeInputValue:U,changeList:j,changeTaskStatus:O,clearAllTasks:I,clearTask:w})(function(e){var t=e.changeInputValue,n=e.inputValue,a=e.addNewTask,c=e.todoList,i=e.changeTaskStatus,u=e.clearTask,o=e.clearAllTasks,l=e.changeList,s=e.actualList,p=c.length;return r.createElement("div",{className:"todo-visualiser"},r.createElement(H,{inputValue:n,onChangeValue:t,onSubmitValue:function(e){a({id:p,name:e,status:F})}}),r.createElement("h3",null,"Todo list"),r.createElement("h5",null,s,":"),r.createElement(B,{list:"ALL"===s?c:c.filter(function(e){return e.status===s}),onChangeStatus:i,clearTask:u}),r.createElement("div",{className:"container"},r.createElement("div",{className:"row justify-content-center"},g.map(function(e){var t=e.type,n=e.title;return r.createElement(P,{type:t,title:n,onClick:l,key:n})}))),r.createElement("br",null),r.createElement("button",{onClick:function(){return o(null)}},"Clear All"))}),q=function(){return c.a.createElement("div",{className:"App container-fluid"},c.a.createElement(K,null),c.a.createElement(X,null))},Q=(n(42),n(7)),Y=n(23),Z=a.ADD_IMAGE,$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case Z:return n}return e},ee=a.CHANGE_ACTUAL_LIST,te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ALL",t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case ee:return n.type}return e},ne=a.CHANGE_INPUT_VALUE,ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case ne:return n}return e},re=n(24),ce=n(25);function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var ue=a.ADD_NEW_TASK,oe=a.CHANGE_TASK_STATUS,le=a.CLEAR_TASK,se=a.CLEAR_ALL_TASKS,pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case ue:return[].concat(Object(ce.a)(e),[n]);case oe:return e.map(function(e){return e.id===n.id?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach(function(t){Object(re.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n):e});case le:return e.filter(function(e){return e.id!==n.id});case se:return[];default:return e}},me={actualList:"ALL",imageURL:"",inputValue:"",todoList:[]},Ae=Object(Q.createStore)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;return{actualList:te(e.actualList,t),imageURL:$(e.imageURL,t),inputValue:ae(e.inputValue,t),todoList:pe(e.todoList,t)}},Object(Y.composeWithDevTools)(Object(Q.applyMiddleware)()));u.a.render(c.a.createElement(o.a,{store:Ae},c.a.createElement(q,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3aa0e112.chunk.js.map