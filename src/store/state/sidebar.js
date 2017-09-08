// 导航配置文件
let sidebar = [
    {
        title: {
            name: '简述',
            icon: 'fa fa-book',
            url: '/'
        }
    }, {
        title: {
            name: '项目构建',
            icon: 'fa fa-book'
        },
        item_groups: [
            {
                title: {
                    name: '项目构建111',
                    icon: 'fa fa-book'
                },
                items: [
                    {
                        name: "构建的基本原理111",
                        icon: 'fa fa-book',
                        url: '/'
                    },
                    {
                        name: "使用的组件1`111",
                        icon: 'fa fa-book',
                        url: "/"
                    }
                ],
            }, {
                title: {
                    name: '项目构建222',
                    icon: 'fa fa-book'
                },
                items: [
                    {
                        name: "构建的基本原理2222",
                        icon: 'fa fa-book',
                        url: '/'
                    },
                    {
                        name: "使用的组件2222",
                        icon: 'fa fa-book',
                        url: "/"
                    }
                ],
            }
        ]
    }, {
        title: {
            name: '组件',
            icon: 'fa fa-book',
            url: '/'
        },
        items: [
            {
                name: "构建的基本原理2222",
                icon: 'fa fa-book',
                url: '/'
            },
            {
                name: "使用的组件2222",
                icon: 'fa fa-book',
                url: "/"
            }
        ],
    }, {
        title: {
            name: '图形',
            icon: 'fa fa-book',
            url: '/'
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


export default sidebar;