(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,i){e.exports={sidebar:"MenuSidebar_sidebar__qKYLM",title:"MenuSidebar_title__3DsD9",close:"MenuSidebar_close__3Wxmm",navigation:"MenuSidebar_navigation__1OYwx",Open:"MenuSidebar_Open__3qx3J",Close:"MenuSidebar_Close__1rpsS"}},,,,,,function(e,t,i){e.exports={DestinationTemplate:"DestinationTemplate_DestinationTemplate__3-AVX",imgContainer:"DestinationTemplate_imgContainer__2T6b1",description:"DestinationTemplate_description__1TE0Y",stats:"DestinationTemplate_stats__1PaRq"}},function(e,t,i){e.exports={Menu:"Menu_Menu__2YR_H",logo:"Menu_logo__3n7pp",toggler:"Menu_toggler__3MuQx",line:"Menu_line__10SQR",nav:"Menu_nav__3KUfJ"}},,function(e,t,i){e.exports={Homepage:"Homepage_Homepage__wRfkG",showcase:"Homepage_showcase__1Z1bT",description:"Homepage_description__3tEcT",explore:"Homepage_explore__1xflK"}},function(e,t,i){e.exports={CrewTemplate:"CrewTemplate_CrewTemplate__257UQ",description:"CrewTemplate_description__1LZv5",coverImg:"CrewTemplate_coverImg__3G9ey"}},function(e,t,i){e.exports={TechTemplate:"TechTemplate_TechTemplate__jcXnJ",description:"TechTemplate_description__3SSkK",imgContainer:"TechTemplate_imgContainer__Niorf"}},,,,function(e,t,i){e.exports={Destination:"Destination_Destination__6v5ti",header:"Destination_header__hED5E"}},function(e,t,i){e.exports={Crew:"Crew_Crew__1m8-7",header:"Crew_header__3wO9i"}},function(e,t,i){e.exports={Technology:"Technology_Technology__3swmn",header:"Technology_header__3QZYZ"}},,,,,,,,,function(e,t,i){},function(e,t,i){},,,,,,,function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),s=i(27),r=i.n(s),c=(i(34),i(35),i(17)),o=i.n(c),l=i(9),d=i(10),h=i(12),u=i(11),j=i(15),m=i.n(j),p=i(0),b=function(){return Object(p.jsx)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsxs)("g",{id:"Group 2",children:[Object(p.jsx)("circle",{id:"Oval",cx:"24",cy:"24",r:"24",fill:"white"}),Object(p.jsx)("path",{id:"Path","fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z",fill:"#0B0D17"})]})})},g=function(){return Object(p.jsx)("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(p.jsxs)("g",{id:"Group",children:[Object(p.jsx)("rect",{id:"Rectangle Copy",x:"2.5752",y:"0.954102",width:"24",height:"3",transform:"rotate(45 2.5752 0.954102)",fill:"#D0D6F9"}),Object(p.jsx)("rect",{id:"Rectangle Copy 3",x:"0.454102",y:"17.9246",width:"24",height:"3",transform:"rotate(-45 0.454102 17.9246)",fill:"#D0D6F9"})]})})},O=i(5),f=i(8),x=i.n(f),v=function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={showMenuSidebar:!1},e.showMenuSidebarToggleHandler=function(){e.setState((function(e){return{showMenuSidebar:!e.showMenuSidebar}}))},e.showMenuSidebarClosedHandler=function(){e.setState({showMenuSidebar:!1})},e}return Object(d.a)(i,[{key:"componentDidUpdate",value:function(){var e=this.props.open;document.body.style.overflow=e?"hidden":"unset"}},{key:"componentWillUnmount",value:function(){document.body.style.overflow="auto"}},{key:"render",value:function(){var e=this.props,t=e.closed,i=e.open,n=[x.a.sidebar,x.a.Close];return i&&(n=[x.a.sidebar,x.a.Open]),Object(p.jsx)(a.a.Fragment,{children:Object(p.jsxs)("div",{className:n.join(" "),children:[Object(p.jsx)("div",{className:x.a.title,children:Object(p.jsx)("div",{className:x.a.close,onClick:t,children:Object(p.jsx)(g,{})})}),Object(p.jsx)("div",{className:x.a.navigation,children:Object(p.jsxs)("ul",{children:[Object(p.jsx)(O.b,{to:"/",onClick:t,className:x.a.link,children:Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"00"})," HOME"]})}),Object(p.jsx)(O.b,{to:"/Destination",onClick:t,className:x.a.link,children:Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"01"})," DESTINATION"]})}),Object(p.jsx)(O.b,{to:"/Crew",className:x.a.link,onClick:t,children:Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"02"})," CREW"]})}),Object(p.jsx)(O.b,{to:"/Technology",className:x.a.link,onClick:t,children:Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"03"})," TECHNOLOGY"]})})]})})]})})}}]),i}(n.Component),y=v,w=function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={showMenuSidebar:!1},e.showMenuSidebarToggleHandler=function(){e.setState((function(e){return{showMenuSidebar:!e.showMenuSidebar}}))},e.showMenuSidebarClosedHandler=function(){e.setState({showMenuSidebar:!1})},e}return Object(d.a)(i,[{key:"render",value:function(){var e=this.props.activeLink;return Object(p.jsxs)(p.Fragment,{children:[" ",Object(p.jsx)(y,{open:this.state.showMenuSidebar,closed:this.showMenuSidebarClosedHandler}),Object(p.jsxs)("div",{className:m.a.Menu,children:[Object(p.jsx)("div",{className:m.a.logo,children:Object(p.jsx)(b,{})}),Object(p.jsxs)("div",{onClick:this.showMenuSidebarToggleHandler,className:m.a.toggler,children:[Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{})]}),Object(p.jsx)("div",{className:m.a.line}),Object(p.jsx)("div",{className:m.a.nav,style:{backgroundImage:"url(".concat(this.props.img,")")},children:Object(p.jsxs)("ul",{children:[Object(p.jsx)(O.b,{to:"/",children:Object(p.jsx)("li",{style:"Home"===e?{borderBottom:"3px solid white"}:null,children:"00 Home"})}),Object(p.jsx)(O.b,{to:"/Destination",children:Object(p.jsx)("li",{style:"Dest"===e?{borderBottom:"3px solid white"}:null,children:"01 destination"})}),Object(p.jsx)(O.b,{to:"/Crew",children:Object(p.jsx)("li",{style:"Crew"===e?{borderBottom:"3px solid white"}:null,children:"02 Crew"})}),Object(p.jsx)(O.b,{to:"/Technology",children:Object(p.jsx)("li",{style:"Tech"===e?{borderBottom:"3px solid white"}:null,children:"03 Technology"})})]})})]})]})}}]),i}(n.Component),_=w,C=i.p+"static/media/Rectangle.67aaea61.png",T=function(){return Object(p.jsxs)("div",{className:o.a.Homepage,children:[Object(p.jsx)(_,{activeLink:"Home",img:C}),Object(p.jsxs)("div",{className:o.a.showcase,children:[Object(p.jsxs)("div",{className:o.a.description,children:[Object(p.jsx)("h3",{children:"so,you want to travel to"}),Object(p.jsx)("h2",{children:"space"}),Object(p.jsx)("p",{children:"Let\u2019s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we\u2019ll give you a truly out of this world experience!"})]}),Object(p.jsx)("div",{className:o.a.explore,children:Object(p.jsx)("div",{children:"explore"})})]})]})},k=i(23),S=i.n(k),N=i(14),M=i.n(N),H=function(e){var t=e.item,i=t.img,n=t.header,a=t.desc,s=t.avgDest,r=t.estTime,c=t.id;return Object(p.jsxs)("div",{className:M.a.DestinationTemplate,children:[Object(p.jsx)("div",{className:M.a.imgContainer,children:Object(p.jsx)("img",{src:i})}),Object(p.jsxs)("div",{className:M.a.description,children:[Object(p.jsx)("ul",{children:e.items.map((function(t){return Object(p.jsx)("li",{style:c===t.id?{color:"white",borderBottom:"2px solid #fff",paddingBottom:"5px"}:null,onClick:function(){return e.setId(t.id)},children:t.header})}))}),Object(p.jsx)("h2",{children:n}),Object(p.jsx)("p",{children:a}),Object(p.jsxs)("div",{className:M.a.stats,children:[Object(p.jsxs)("div",{className:M.a.distance,children:[Object(p.jsx)("p",{children:"AVG. DISTANCE"}),Object(p.jsx)("span",{children:s})]}),Object(p.jsxs)("div",{className:M.a.time,children:[Object(p.jsx)("p",{children:"EST. TRAVEL TIME"}),Object(p.jsx)("span",{children:r})]})]})]})]})},E=i.p+"static/media/Bitmap.ee9d9075.png",A=i.p+"static/media/Bitmap-1.65ffaec9.png",D=i.p+"static/media/Bitmap-2.2d7bd478.png",I=i.p+"static/media/Bitmap-3.de65bcb2.png",L=i.p+"static/media/Rectangle2.1d89caa4.png",R=function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={items:[{id:1,header:"MOON",desc:"See our planet as you\u2019ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you\u2019re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",avgDest:"384,400 km",estTime:"3 days",img:E},{id:2,header:"MARS",desc:"Don\u2019t forget to pack your hiking boots. You\u2019ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It\u2019s two and a half times the size of Everest!",avgDest:"225 MIL. km",estTime:"9 months",img:A},{id:3,header:"EUROPA",desc:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover\u2019s dream. With an icy surface, it\u2019s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",avgDest:"628 MIL. km",estTime:"3 years",img:D},{id:4,header:"TITAN",desc:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",avgDest:"1.6 BIL. km",estTime:"7 years",img:I}],item:{id:1,header:"MOON",desc:"See our planet as you\u2019ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you\u2019re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",avgDest:"384,400 km",estTime:"3 days",img:E}},e.setId=function(t){var i=e.state.items.find((function(e){return e.id==t}));e.setState({item:i})},e}return Object(d.a)(i,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:S.a.Destination,children:[Object(p.jsx)(_,{activeLink:"Dest",img:L}),Object(p.jsx)("div",{className:S.a.header,children:Object(p.jsxs)("h2",{children:[Object(p.jsx)("span",{children:"01"})," Pick your destination"]})}),Object(p.jsx)(H,{item:this.state.item,setId:this.setId,items:this.state.items})]})}}]),i}(n.Component),B=R,G=i(24),P=i.n(G),U=i.p+"static/media/1.4a1390cf.png",Y=i.p+"static/media/2.f7a4389c.png",F=i.p+"static/media/3.cd71cc60.png",W=i.p+"static/media/4.f890bc3e.png",J=i.p+"static/media/Rectangle3.d7b8e461.png",V=i(18),q=i.n(V),K=function(e){var t=e.item,i=t.img,n=t.header,a=t.desc,s=t.subHeader,r=t.id;return Object(p.jsxs)("div",{className:q.a.CrewTemplate,children:[Object(p.jsxs)("div",{className:q.a.description,children:[Object(p.jsx)("h3",{children:s}),Object(p.jsx)("h2",{children:n}),Object(p.jsx)("p",{children:a}),Object(p.jsx)("ul",{children:e.items.map((function(t){return Object(p.jsx)("li",{style:r===t.id?{backgroundColor:"white"}:null,onClick:function(){return e.setId(t.id)}})}))})]}),Object(p.jsx)("div",{className:q.a.coverImg,children:Object(p.jsx)("img",{src:i})})]})},X=function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={items:[{id:1,subHeader:"Commander",header:"Douglas Hurley",desc:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",img:U},{id:2,subHeader:"Mission Specialist ",header:"MARK Henry",desc:"Mark Richard Henry is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",img:Y},{id:3,subHeader:"PILOT",header:"Victor Glover",desc:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",img:F},{id:4,subHeader:"Flight Engineer",header:"Anousheh Ansari",desc:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",img:W}],item:{id:1,subHeader:"Commander",header:"Douglas Hurley",desc:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",img:U}},e.setId=function(t){var i=e.state.items.find((function(e){return e.id==t}));e.setState({item:i})},e}return Object(d.a)(i,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:P.a.Crew,children:[Object(p.jsx)(_,{activeLink:"Crew",img:J}),Object(p.jsx)("div",{className:P.a.header,children:Object(p.jsxs)("h2",{children:[Object(p.jsx)("span",{children:"02"})," MEET YOUR CREW"]})}),Object(p.jsx)(K,{setId:this.setId,items:this.state.items,item:this.state.item})]})}}]),i}(n.Component),Z=X,Q=i(25),z=i.n(Q),$=i.p+"static/media/1.2cdfef64.jpg",ee=i.p+"static/media/2.2e3c8fac.jpg",te=i.p+"static/media/3.04c65bd9.jpg",ie=i.p+"static/media/Rectangle4.3b383f84.png",ne=i(19),ae=i.n(ne),se=function(e){var t=e.item,i=t.img,n=t.header,a=t.desc,s=t.subHeader,r=t.id;return Object(p.jsxs)("div",{className:ae.a.TechTemplate,children:[Object(p.jsx)("ul",{children:e.items.map((function(t){return Object(p.jsx)("li",{style:r===t.id?{backgroundColor:"white",color:"black"}:null,onClick:function(){return e.setId(t.id)},children:t.id})}))}),Object(p.jsxs)("div",{className:ae.a.description,children:[Object(p.jsx)("h3",{children:s}),Object(p.jsx)("h2",{children:n}),Object(p.jsx)("p",{children:a})]}),Object(p.jsx)("div",{className:ae.a.imgContainer,children:Object(p.jsx)("img",{src:i})})]})},re=function(e){Object(h.a)(i,e);var t=Object(u.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={items:[{id:1,subHeader:"THE TERMINOLOGY\u2026",header:"LAUNCH VEHICLE",desc:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",img:$},{id:2,subHeader:"THE TERMINOLOGY\u2026",header:"SPACEPORT",desc:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth\u2019s rotation for launch.",img:ee},{id:3,subHeader:"THE TERMINOLOGY\u2026",header:"SPACE CAPSULE",desc:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",img:te}],item:{id:1,subHeader:"THE TERMINOLOGY\u2026",header:"LAUNCH VEHICLE",desc:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",img:$}},e.setId=function(t){var i=e.state.items.find((function(e){return e.id==t}));e.setState({item:i})},e}return Object(d.a)(i,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:z.a.Technology,children:[Object(p.jsx)(_,{activeLink:"Tech",img:ie}),Object(p.jsx)("div",{className:z.a.header,children:Object(p.jsxs)("h2",{children:[Object(p.jsx)("span",{children:"03"})," SPACE LAUNCH 101"]})}),Object(p.jsx)(se,{setId:this.setId,items:this.state.items,item:this.state.item})]})}}]),i}(n.Component),ce=re,oe=i(2);var le=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(oe.a,{exact:!0,path:"/space-tourism/",component:function(){return Object(p.jsx)(T,{})}}),Object(p.jsx)(oe.a,{path:"/space-tourism/Destination",component:function(){return Object(p.jsx)(B,{})}}),Object(p.jsx)(oe.a,{path:"/space-tourism/Crew",component:function(){return Object(p.jsx)(Z,{})}}),Object(p.jsx)(oe.a,{path:"/space-tourism/Technology",component:function(){return Object(p.jsx)(ce,{})}})]})},de=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,43)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(p.jsxs)(O.a,{children:[Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(le,{})}),"    "]}),document.getElementById("root")),de()}],[[42,1,2]]]);
//# sourceMappingURL=main.b5b1b8d8.chunk.js.map