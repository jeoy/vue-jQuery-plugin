<template>
    <div class="grid-stack-item-content222">
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
                widgets: ['图表1', '图表2', '图表3', '图表4', '图表5', '图表6','图表7',]
            };
        },
        props: {
            widget: {
                type: String,
                required: true
            },
            gridstackObj: {
                type: Object
            },
        },
        mounted() {
            this.$nextTick(() => {

                var items = [
                    {x: 0, y: 0, width: Math.floor(Math.random()*(2-1+1)+1), height: Math.floor(Math.random()*(2-1+1)+1)},
                ];

                $('.grid-stack').each(function() {
                    var grid = $(this).data('gridstack');
                    _.each(items, function(node) {
                        grid.addWidget($('<div><div class="grid-stack-item-content" /><div/>'),
                            node.x, node.y, node.width, node.height, true);
                        }, this);
                    });
            });
        }
    };
</script>


<style lang="scss">
    .gridstack-item {
        height: 400px;
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
            // margin-right: 265px;
            background: #f5ebc8;
            min-height: 50px;
        }
        .drop-area {
            min-height: 600px;
            margin-right: 465px;
            margin-left: 400px;
            background: lightgoldenrodyellow;
        }


        .grid-stack-item-content {
            color: #2c3e50;
            text-align: center;
            background-color: #18bc9c;
            line-height: 50px;
        }
        .widget-list {
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

    }
</style>
