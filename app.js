new Vue({
    el: '#todo',
    data:{
        lists: '',
        todos: [
            {text: 'sleep', done:false, finish:false}
        ],
        plans: [
            {text: 'lie', finish:false},
        {text: 'cough', finish:false}
    ],
        
        
    },
    methods:{
       add: function(){
            newTodo = this.lists;
            this.todos.push({text:newTodo, done:false, finish:false});
       },
      
           
    }
});