(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a(62)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),o=a(1),l=a(2),i=a(4),u=a(3),m=(a(31),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.onSearch=function(t){e.setState({value:t.target.value}),e.props.changeSearchValue(t.target.value)},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"main-user"},r.a.createElement("img",{id:"main-user",alt:"Main User",src:"https://agapova.kh.ua/wp-content/uploads/2018/11/user.png"}),r.a.createElement("i",{id:"i2",className:"far fa-check-circle"}),r.a.createElement("h2",null,"Oleksandr Ponomarenko")),r.a.createElement("div",{className:"search clearfix"},r.a.createElement("button",{className:"search__photo"},r.a.createElement("i",{class:"fas fa-search"})),r.a.createElement("input",{type:"search",placeholder:"Search",value:this.state.value,onChange:this.onSearch})))}}]),a}(n.Component)),p=(a(32),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.avatar,n=e.content,s=e.id,c=e.switchUser,o=e.currUser,l=function(){c(s)},i="contact";return s===o&&(i+=" selected"),n.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i,onClick:l},r.a.createElement("img",{alt:"",src:a}),r.a.createElement("i",{id:"i1",className:"far fa-check-circle"}),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",width:"250px"}},r.a.createElement("h3",null,t),r.a.createElement("span",{className:"message-date"}," ",n[n.length-1].date.toLocaleString()," ")),r.a.createElement("p",{className:"last-message"}," ",n[n.length-1].message.length<25?n[n.length-1].message:n[n.length-1].message.substr(0,24)+"..."," ")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i,onClick:l},r.a.createElement("img",{alt:"",src:a}),r.a.createElement("i",{id:"i1",className:"far fa-check-circle"}),r.a.createElement("div",{style:{display:"flex",width:"250px"}},r.a.createElement("h3",null,t))))}}]),a}(n.Component)),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={selected:e.props.currUser},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.users,a=e.search,n=e.switchUser,s=e.currUser,c=[],o=0;return c=""===a?t.map((function(e){return o++,r.a.createElement(p,Object.assign({key:o,id:o},e,{switchUser:n,currUser:s}))})):t.map((function(e){if(o++,-1!==e.name.toUpperCase().search(a.toUpperCase()))return r.a.createElement(p,Object.assign({key:o,id:o},e,{switchUser:n,currUser:s}))})),r.a.createElement("div",null,r.a.createElement("h2",{style:{marginLeft:"17px"}}," Chats "),c)}}]),a}(n.Component),h=(a(33),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"users"},r.a.createElement(m,this.props),r.a.createElement(d,Object.assign({},this.props,{currUser:this.props.selectedUser})))}}]),a}(n.Component)),f=(a(34),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.avatar,a=e.name;return r.a.createElement("div",{className:"header-content"},r.a.createElement("div",{className:"chat-header"},r.a.createElement("img",{alt:"",src:t,id:"s1"}),r.a.createElement("i",{id:"i2",className:"far fa-check-circle"}),r.a.createElement("h4",null,a)))}}]),a}(n.Component)),g=(a(35),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).scrollToBottom=function(){var t=c.a.findDOMNode(e.messagesContainer);t.scrollTop=t.scrollHeight},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this,t=this.props,a=t.content,n=t.avatar,s=a.map((function(e){return"to_me"===e.id?r.a.createElement("div",{className:"message"},r.a.createElement("img",{id:"avatar",src:n,alt:""}),r.a.createElement("div",{className:"left"},r.a.createElement("span",null," ",e.message," ")),r.a.createElement("span",{className:"date"}," ",e.date.toLocaleString()," ")):r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"right"},r.a.createElement("span",null," ",e.message," ")),r.a.createElement("span",{className:"date"}," ",e.date.toLocaleString()," "))}));return r.a.createElement("div",{className:"chat-history",ref:function(t){e.messagesContainer=t}},s)}}]),a}(n.Component)),v=(a(36),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.changeValue=function(t){e.setState({value:t.target.value})},e.sendMessage=function(){if(""!==e.state.value){var t=new Date;e.props.sendMessage({num:e.props.selectedUser,id:"from_me",date:t.toLocaleString(),message:e.state.value}),e.setState({value:""}),e.props.sendMessageToMe(e.props.selectedUser)}else alert("Input a message!")},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"input"},r.a.createElement("input",{value:this.state.value,onChange:this.changeValue,placeholder:"Type your message"}),r.a.createElement("button",{onClick:this.sendMessage},r.a.createElement("i",{class:"fas fa-paper-plane"})))}}]),a}(n.Component)),E=(a(37),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.users,a=e.selectedUser;return r.a.createElement("div",{className:"chat"},r.a.createElement(f,t[a-1]),r.a.createElement(g,t[a-1]),r.a.createElement(v,Object.assign({},t[a-1],this.props)))}}]),a}(n.Component)),b=a(7),j=a(9),y=a(44),O=function(e){return{type:"CHANGE_SEARCH_VALUE",payload:e}},S=function(e){return{type:"SWITCH_USER",payload:e}},w=function(e){return{type:"SEND_MESSAGE",payload:e}},k=function(e){return function(t){var a=new Date;y.get("https://api.chucknorris.io/jokes/random").then((function(n){console.log(n.data);var r={num:e,id:"to_me",message:n.data.value,date:a.toLocaleString()};setTimeout((function(){return t({type:"SEND_MESSAGE_TO_ME_SUCCESS",payload:r})}),1e3)}))}};var C=Object(j.b)((function(e){var t=[];return e.users.forEach((function(e){return t.push(e)})),{users:t,search:e.searchValue,selectedUser:e.selectedUser}}),(function(e){return{changeSearchValue:Object(b.bindActionCreators)(O,e),switchUser:Object(b.bindActionCreators)(S,e),sendMessage:Object(b.bindActionCreators)(w,e),sendMessageToMe:Object(b.bindActionCreators)(k,e)}}))((function(e){return r.a.createElement("div",{className:"container"},r.a.createElement(h,e),r.a.createElement(E,e))})),N=a(13),_=a(6),U={searchValue:"",users:[{name:"Igor Main",avatar:"https://tutkatamka.com.ua/wp-content/uploads/2018/02/1-74.jpg",content:[{id:"to_me",message:"Quickly come to the meeting room 1B, we have a big server issue",date:new Date(2020,5,4,17,49,23)},{id:"from_me",message:"I am having breakfest right now, can't you wait for 10 minutes?",date:new Date(2020,5,4,17,53,17)},{id:"to_me",message:"We are losing money! Quick!",date:new Date(2020,5,4,17,54,52)}]},{name:"Best Friend",avatar:"https://tutkatamka.com.ua/wp-content/uploads/2018/02/3-70.jpg",content:[{id:"to_me",message:"Hello!",date:new Date(2020,5,2,11,59,3)},{id:"from_me",message:"Hi , how are you?",date:new Date(2020,5,2,14,53,17)},{id:"to_me",message:"Fine! And you?",date:new Date(2020,5,2,20,4,12)}]},{name:"Alice Duda",avatar:"https://4tololo.ru/files/images/20151308202252.jpg",content:[{id:"to_me",message:"You so beautiful :)",date:new Date(2020,2,7,14,1,23)},{id:"from_me",message:"Hi , Thank you!",date:new Date(2020,2,7,14,22,17)},{id:"from_me",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",date:new Date(2020,2,7,20,4,12)}]},{name:"Jorginho",avatar:"https://www.comnews.ru/sites/default/files2019/styles/large/public/articles/2019-10/%D0%A0%D1%83%D0%B4%D0%BE%D0%B2_%D0%BA%D0%B2.jpg?itok=Wu2t8z1r",content:[]},{name:"Alex",avatar:"https://st.depositphotos.com/1008939/1880/i/450/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg",content:[]}],selectedUser:1},D=a(24),A=a(25),M=Object(b.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH_VALUE":return Object(_.a)(Object(_.a)({},e),{},{searchValue:t.payload});case"SWITCH_USER":return Object(_.a)(Object(_.a)({},e),{},{selectedUser:t.payload});case"SEND_MESSAGE":var a=e.users.map((function(e,a){return a+1===t.payload.num?Object(_.a)(Object(_.a)({},e),{},{content:[].concat(Object(N.a)(e.content),[{id:t.payload.id,message:t.payload.message,date:t.payload.date}])}):e}));return Object(_.a)(Object(_.a)({},e),{},{users:a});case"SEND_MESSAGE_TO_ME_SUCCESS":var n=e.users.map((function(e,a){return a+1===t.payload.num?Object(_.a)(Object(_.a)({},e),{},{content:[].concat(Object(N.a)(e.content),[{id:t.payload.id,message:t.payload.message,date:t.payload.date}])}):e}));return Object(_.a)(Object(_.a)({},e),{},{users:n});default:return e}}),Object(D.composeWithDevTools)(Object(b.applyMiddleware)(A.a)));c.a.render(r.a.createElement(j.a,{store:M},r.a.createElement(C,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.7b24b531.chunk.js.map