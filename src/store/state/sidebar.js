/**
 * 导航配置文件
 *
 * 注意：
 *      1. 在设置导航的时候，如果是父级导航则可以不设置 url这项参数
 *      2. name 参数和 icon 参数是配套出现，当然可以不给图标这组参数(或者 给值为 空)
 */

let sidebar = [
    {
        title: {
            name: '简述',
            icon: 'fa fa-book',
            url: '/index',
        }
    }, {
        title: {
            name: '全局样式',
            icon: 'fa fa-align-right'
        },
        item_groups: [
            {
                title: {
                    name: '字体样式',
                    icon: 'fa fa-font'
                },
                items: [
                    {
                        name: "element字体",
                        url: '/core/font/element'
                    }, {
                        name: "font Awesome",
                        icon: '',
                        url: "/core/font/awesome"
                    },{
                        name: "bootstrap font",
                        icon: 'fa fa-bold',
                        url: "/core/font/bootstrap"
                    }
                ],
            }, {
                title: {
                    name: '全局样式',
                    icon: 'fa fa-image'
                },
                items: [
                    {
                        name: "element 全局样式",
                        url: '/'
                    },
                    {
                        name: "bootstrap 样式",
                        url: "/"
                    }
                ],
            }
        ]
    }, {
        title: {
            name: '自定义组件',
            icon: 'fa fa-align-center',
        },
        items: [
            {
                name: "列表页",
                url: '/component/list'
            },
            {
                name: "详情页",
                url: "/component/detail"
            }
        ],
    }, {
        title: {
            name: '图形',
            icon: 'fa fa-book',
            url: '/graph'
        }
    }, {
        title: {
            name: '错误页面',
            icon: 'fa fa-book',
            url: '/errorpage'
        }
    }, {
        title: {
            name: '换肤',
            icon: 'fa fa-book',
            url: '/skin'
        }
    }
];

console.log(sidebar);

export default sidebar;