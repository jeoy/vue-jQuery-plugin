<template>
    <div class="mobile-config">
         Hello Mobile Config!
         <el-button type="primary" v-on:click="goShow()" >保存</el-button>

        <div  class="widget-list">
            <div class="sidebar">
                <div class="grid-stack-item" v-for="widget in widgets">
                    <div class="grid-stack-item-content"> {{widget}}</div>
                </div>
            </div>
        </div>

          <div class="grid-stack grid-stack-6" id="grid1"></div>
    </div>
</template>


<script>


    // import controller from '../main/widgetArea.js';
    import draggable from 'vuedraggable';
    // import layoutTemplate from './layoutTemplate';


    import Vue from 'vue';

    export default {
        components: {
            draggable
            // layoutTemplate
        },
        data() {
            return {
                widgets: [1, 2, 3, 4, 5]
            };
        },
        mounted() {
            this.$nextTick(() => {
                var options = {
                    width: 12,
                    height: 8,
                    float: true,
                    removable: '.trash',
                    removeTimeout: 100,
                    acceptWidgets: '.grid-stack-item'
                };
                $('#grid1').gridstack(options);

                var items = [
                    {x: 0, y: 0, width: 2, height: 2},
                    {x: 3, y: 1, width: 1, height: 2},
                    {x: 4, y: 1, width: 1, height: 1},
                    {x: 2, y: 3, width: 3, height: 1},
                    {x: 2, y: 5, width: 1, height: 1}
                ];
                $('.grid-stack').each(function() {
                    var grid = $(this).data('gridstack');
                    _.each(items, function(node) {
                        grid.addWidget($('<div><div class="grid-stack-item-content" /><div/>'),
                            node.x, node.y, node.width, node.height);
                    }, this);
                });
                $('.sidebar .grid-stack-item').draggable({
                    revert: 'invalid',
                    handle: '.grid-stack-item-content',
                    scroll: false,
                    appendTo: 'body'
                });
            });
        }
    };
</script>


<style lang="scss">
    .mobile-config {
        .widget-top {
            border-left: 4px solid #6be0cf;
        }

        .menu-btn-wrap {
            display: inline-block;
            vertical-align: top;
            margin-top: 20px;
            margin-left: -10px;
            max-width: calc(100% - 400px - 545px);
            .el-button{
                margin-bottom: 10px;
                margin-left: 10px;
            }
        }

        #grid1 {
            // margin-left: 265px;
            background: lightgoldenrodyellow;
        }


        .grid-stack-item-content {
            color: #2c3e50;
            text-align: center;
            background-color: #18bc9c;
        }
        .sidebar {
            float: right;

            .grid-stack-item {
                width: 150px;
                height: 50px;
                border: 2px dashed green;
                text-align: center;
                line-height: 15px;
                z-index: 10;
                background: rgba(0, 255, 0, 0.1);
                cursor: default;
                display: block;
            }
        }
    }
</style>
