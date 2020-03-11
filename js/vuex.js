//
// Vue.component('ListUsers',{
//   template:`
//
//   `
// });






var userTable = new Vue({
  el: '#userTable',
  data: {
    userDatas: [
      { id: 1, name: "Johnson Johnson", phone: '0123456789' },
			{ id: 2, name: "Johnson Johnson2", phone: '0123456789' },
			{ id: 3, name: "Johnson Johnson3", phone: '0123456789'},
    ]
  }
});

//
// var userProcessedTable = new Vue({
//   el: '#userProcessedTable',
//   data: {
//     userDatas: [
//       { id: 1, name: "Johnson Johnson", phone: '0123456789' },
// 			{ id: 2, name: "Johnson Johnson2", phone: '0123456789' },
// 			{ id: 3, name: "Johnson Johnson3", phone: '0123456789'},
//     ]
//   }
// });
//
//
//
//
//
//
//
//
//
var router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: Home },
    //{path: 'notification/', component: ListUsers},
]});

var app= new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
});
