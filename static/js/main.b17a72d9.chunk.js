(this.webpackJsonptasks=this.webpackJsonptasks||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),d=n(7),r=n.n(d),c=(n(15),n.p,n(16),n(6)),i=n(8),o=n(4),l=n(10),u=n(9),j=n.n(u),k=n(0),b=function(e){var t=e.addTask,n=e.onKeyDownAdd,a=e.status;return Object(k.jsxs)("div",{className:"input-new-task",children:[Object(k.jsx)("input",{type:"text",onKeyDown:function(e){n(e)},name:"new-task",id:"new-task"}),Object(k.jsx)("input",{id:"add-new-task",type:"submit",onClick:function(e){t(e,a)},value:"Add Task"})]})},O=function(e){var t=e.editTask,n=e.value,a=e.onKeyDownEdit,s=e.deleteTask;e.tasks;return Object(k.jsx)("div",{children:n.task&&Object(k.jsxs)("div",{className:"task",children:[Object(k.jsx)("input",{val:n.id,onKeyDown:function(e){a(e)},defaultValue:n.task,type:"text",disabled:!0}),Object(k.jsx)("button",{val:n.id,onClick:function(e){return t(e)},className:"edit-task warning",children:"Edit"}),Object(k.jsx)("button",{val:n.id,onClick:function(e){s(e)},className:"delete-task danger",children:"Delete"})]})})},f=function(e){var t=e.addTask,n=e.editTask,a=e.onKeyDownAdd,s=e.onKeyDownEdit,d=e.deleteTask,r=e.status,c=e.tasks,i=e.dropTask,o=e.dragTask,l=e.allowDrop;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"head",children:[Object(k.jsx)("h3",{className:"to-do-title",children:"DONE Tasks"}),Object(k.jsx)(b,{addTask:t,onKeyDownAdd:a,status:r})]}),Object(k.jsxs)("div",{className:"tasks",children:[Object(k.jsx)("h4",{children:"Tasks List"}),Object(k.jsx)("ul",{id:"done-tasks",onDrop:function(e){i(e,r)},onDragOver:function(e){return l(e)},children:c.filter((function(e){return"done"==e.status})).map((function(e,t){return Object(k.jsx)("div",{id:e.id,draggable:!0,onDragStart:function(e){return o(e)},className:"border-1 border-black",children:Object(k.jsx)(O,{value:e,editTask:n,onKeyDownEdit:s,deleteTask:d})})}))})]})]})},h=function(e){var t=e.addTask,n=e.editTask,a=e.onKeyDownAdd,s=e.onKeyDownEdit,d=e.deleteTask,r=e.status,c=e.tasks,i=e.dropTask,o=e.dragTask,l=e.allowDrop;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"head",children:[Object(k.jsx)("h3",{className:"to-do-title",children:"IN PROGRESS Tasks"}),Object(k.jsx)(b,{addTask:t,onKeyDownAdd:a,status:r})]}),Object(k.jsxs)("div",{className:"tasks",children:[Object(k.jsx)("h4",{children:"Tasks List"}),Object(k.jsx)("ul",{id:"in-progress-tasks",onDrop:function(e){i(e,r)},onDragOver:function(e){return l(e)},children:c.filter((function(e){return"in_progress"==e.status})).map((function(e){return Object(k.jsx)("div",{id:e.id,draggable:!0,onDragStart:function(e){return o(e)},className:"border-1 border-black",children:Object(k.jsx)(O,{value:e,editTask:n,onKeyDownEdit:s,deleteTask:d})})}))})]})]})},v=function(e){var t=e.addTask,n=e.editTask,a=e.onKeyDownAdd,s=e.onKeyDownEdit,d=e.deleteTask,r=e.status,c=e.tasks,i=e.dropTask,o=e.dragTask,l=e.allowDrop;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"head",children:[Object(k.jsx)("h3",{className:"to-do-title",children:"TO DO Tasks"}),Object(k.jsx)(b,{addTask:t,onKeyDownAdd:a,status:r})]}),Object(k.jsxs)("div",{className:"tasks",children:[Object(k.jsx)("h4",{children:"Tasks List"}),Object(k.jsx)("ul",{id:"to-do-tasks",onDrop:function(e){i(e,r)},onDragOver:function(e){l(e)},children:c.filter((function(e){return"to_do"==e.status})).map((function(e,t){return Object(k.jsx)("div",{id:e.id,draggable:!0,onDragStart:function(e){return o(e)},className:"border-1 border-black",children:Object(k.jsx)(O,{value:e,editTask:n,onKeyDownEdit:s,deleteTask:d})})}))})]})]})},T=(n(20),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],d=function(e,t){console.log(n);var a=e.target.parentElement;if(/\S/.test(a.children[0].value)){var d=Object(o.a)(n);d.push({id:j()(),task:a.children[0].value.trim(),status:t}),s(d),console.log(n),a.children[0].value=""}},r=function(e){var t=e.target,a=t.getAttribute("val"),d=t.parentElement.children[0];if("Edit"==t.innerText)d.disabled=!1,d.focus(),t.innerText="Save";else{if(!/\S/.test(d.value))return;var r,c=Object(o.a)(n),l=Object(i.a)(c);try{for(l.s();!(r=l.n()).done;){var u=r.value;u.id==a&&(u.task=d.value)}}catch(j){l.e(j)}finally{l.f()}s(c),d.disabled=!0,t.innerText="Edit"}},u=function(e){for(var t=e.target.getAttribute("val"),a=Object(o.a)(n),d=0;d<a.length;d++)if(a[d].id==t){a[d].task=null;break}s(a)},b=function(e){(console.log(e.keyCode),13==e.keyCode)&&document.getElementById("add-new-task").click()},O=function(e){(console.log(e.keyCode),13==e.keyCode)&&e.target.parentElement.children[1].click()},T=function(e,t){e.preventDefault();var a=e.dataTransfer.getData("task-id"),d=null;n.forEach((function(e,t){e.id==a&&(d=t)}));var r=Object(o.a)(n);r[d]=Object(c.a)(Object(c.a)({},n[d]),{},{status:t}),s(r),e.target.appendChild(document.getElementById(a))},x=function(e){e.dataTransfer.setData("task-id",e.target.id)},g=function(e){return e.preventDefault()};return Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-4 border-end-0",children:Object(k.jsx)(v,{addTask:d,onKeyDownAdd:b,editTask:r,onKeyDownEdit:O,deleteTask:u,tasks:n,dropTask:T,dragTask:x,allowDrop:g,status:"to_do"})}),Object(k.jsx)("div",{className:"col-4 border-end-0",children:Object(k.jsx)(h,{addTask:d,onKeyDownAdd:b,editTask:r,onKeyDownEdit:O,deleteTask:u,tasks:n,dropTask:T,dragTask:x,allowDrop:g,status:"in_progress"})}),Object(k.jsx)("div",{className:"col-4 border-end-0",children:Object(k.jsx)(f,{addTask:d,onKeyDownAdd:b,editTask:r,onKeyDownEdit:O,deleteTask:u,tasks:n,dropTask:T,dragTask:x,allowDrop:g,status:"done"})})]})});var x=function(){return Object(k.jsx)("div",{className:"App container mt-5",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsx)(T,{})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,d=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),d(e),r(e)}))};r.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(x,{})}),document.getElementById("root")),g()}},[[21,1,2]]]);
//# sourceMappingURL=main.b17a72d9.chunk.js.map