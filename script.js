let app = new Vue({
        el:'#app',
        data:function(){
          return {
            usersList:[
              { num:1,
                firstName:"Mark",
                lastName:"Otto"},
              { num:2,
                firstName:"Jacob",
                lastName:"Thornton"},
              { num:3,
                firstName:"Larry",
                lastName:"Bird"}
            ]
          };
        },
        computed:{
          haveUsers:function(){
            return this.usersList.length > 0;
          }
        }
      });