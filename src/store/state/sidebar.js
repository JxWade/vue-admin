// 导航配置文件
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
                        url: '/'
                    }, {
                        name: "font Awesome",
                        icon: '',
                        url: "/"
                    },{
                        name: "bootstrap font",
                        icon: 'fa fa-bold',
                        url: "/"
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
            url: '/'
        },
        items: [
            {
                name: "列表页",
                url: '/'
            },
            {
                name: "详情页",
                url: "/"
            }
        ],
    }, {
        title: {
            name: '图形',
            icon: 'fa fa-book',
            url: ''
        }
    }, {
        title: {
            name: '错误页面',
            icon: 'fa fa-book',
            url: 'errorpage'
        }
    }, {
        title: {
            name: '换肤',
            icon: 'fa fa-book',
            url: 'skin'
        }
    }
];


export default sidebar;