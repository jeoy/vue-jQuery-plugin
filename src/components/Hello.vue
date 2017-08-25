<template>
    <div class="hello">
        <!-- <div class="grid-stack">
            <div class="grid-stack-item"
                data-gs-x="0" data-gs-y="0"
                data-gs-width="4" data-gs-height="2">
                    <div class="grid-stack-item-content"></div>
            </div>
            <div class="grid-stack-item"
                data-gs-x="4" data-gs-y="0"
                data-gs-width="4" data-gs-height="4">
                    <div class="grid-stack-item-content"></div>
            </div>
        </div> -->
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <a @click="print" >1234</a>

        <div>
             <a class="btn btn-default" id="add-new-widget" href="#">Add Widget</a>
         </div>

         <br/>

         <div class="grid-stack">
             <div class="grid-stack-item-content">
             </div>
         </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App!',
        };
    },
    mounted() {
        $('h1').draggable();
        const options = {
            float: false,
        };
        console.log($('h1')[0].innerText);
        $('.grid-stack').gridstack(options);

        this.grid = $('.grid-stack').data('gridstack');
        new function() {
            this.items = [
                { x: 0, y: 0, width: 2, height: 2 },
                { x: 3, y: 1, width: 1, height: 2 },
                { x: 4, y: 1, width: 1, height: 1 },
                { x: 2, y: 3, width: 3, height: 1 },
//                    {x: 1, y: 4, width: 1, height: 1},
//                    {x: 1, y: 3, width: 1, height: 1},
//                    {x: 2, y: 4, width: 1, height: 1},
                {x: 2, y: 5, width: 1, height: 1}
            ];
            this.grid = $('.grid-stack').data('gridstack');
            this.addNewWidget = function () {
                var node = this.items.pop() || {
                            x: 12 * Math.random(),
                            y: 5 * Math.random(),
                            width: 1 + 3 * Math.random(),
                            height: 1 + 3 * Math.random()
                        };
                this.grid.addWidget($('<div><div class="grid-stack-item-content" /><div/>'),
                    node.x, node.y, node.width, node.height);
                return false;
            }.bind(this);
            $('#add-new-widget').click(this.addNewWidget);
        }
    },
    methods: {
        print() {
            console.log($('#app'));
            console.log($('#app')[0].innerText);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1, h2 {
  font-weight: normal;
}

.grid-stack {
     background: lightgoldenrodyellow;
 }
.grid-stack-item-content {
     color: #2c3e50;
     text-align: center;
     background-color: #18bc9c;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
