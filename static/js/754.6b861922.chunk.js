"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[754],{7754:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(9434),a=t(1087),i=t(4942),s=t(1413),o=t(9439),l=t(2791),d=t(39),m=t(5851),c={orderList:"OrderList_orderList__N9INH",orderListItem:"OrderList_orderListItem__K62c9"},u=t(3329);function p(e){var r=e.order;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:c.orderList,children:r.map((function(e){return(0,u.jsx)("li",{className:c.orderListItem,children:(0,u.jsx)(m.Z,{item:e})},"cart-"+e.id)}))})})}var h={clientData:"OrderForm_clientData__jTFpt",contentBlock:"OrderForm_contentBlock__9XoRg",summarizing:"OrderForm_summarizing__TLVZF",total:"OrderForm_total__sPJ+j",btnSubmit:"OrderForm_btnSubmit__VzuwD"};function _(e){var r=e.order,t=(0,l.useState)({name:"",mail:"",phone:"",address:""}),a=(0,o.Z)(t,2),m=a[0],c=a[1],_=(0,n.I0)(),j=0;r.forEach((function(e){return j+=Number.parseFloat(e.price)*e.quantity}));var x=function(e){var r=e.target,t=r.name,n=r.value;c((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,i.Z)({},t,n))}))};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{className:h.orderForm,onSubmit:function(e){e.preventDefault();var t=(0,s.Z)((0,s.Z)({},m),{},{order:r});e.target.reset(),c({name:"",mail:"",phone:"",address:""});var n=(0,d.H8)();_(n),alert("Your order has been sent for processing! Wait for the courier!"),console.log(t)},id:"myForm",children:[(0,u.jsxs)("div",{className:h.contentBlock,children:[(0,u.jsxs)("div",{className:h.clientData,children:[(0,u.jsxs)("label",{children:["Name:",(0,u.jsx)("input",{type:"text",name:"name",id:"name",required:!0,value:m.name,onChange:x})]}),(0,u.jsxs)("label",{children:["Email:",(0,u.jsx)("input",{type:"email",name:"mail",id:"mail",required:!0,value:m.mail,onChange:x})]}),(0,u.jsxs)("label",{children:["Phone:",(0,u.jsx)("input",{type:"tel",name:"phone",id:"phone",required:!0,value:m.phone,onChange:x})]}),(0,u.jsxs)("label",{children:["Address:",(0,u.jsx)("input",{type:"text",name:"address",id:"address",required:!0,value:m.address,onChange:x})]})]}),(0,u.jsx)(p,{order:r})]}),(0,u.jsxs)("div",{className:h.summarizing,children:[(0,u.jsxs)("p",{className:h.total,children:["Total: ",(new Intl.NumberFormat).format(j),"$"]}),(0,u.jsx)("button",{type:"submit",className:h.btnSubmit,children:"Submit"})]})]})})}var j={wrapper:"ShoppingCart_wrapper__+c2DY",empty:"ShoppingCart_empty__uiczU",linkToShop:"ShoppingCart_linkToShop__p-hAI"};function x(){var e=(0,n.v9)((function(e){return e.order.items}));return(0,u.jsx)("div",{className:j.wrapper,children:e.length>0?(0,u.jsx)(_,{order:e}):(0,u.jsxs)("div",{className:j.empty,children:[(0,u.jsx)("h2",{children:"Cart is empty"}),(0,u.jsx)(a.rU,{to:"/",className:j.linkToShop,children:"Back to product selection"})]})})}}}]);
//# sourceMappingURL=754.6b861922.chunk.js.map