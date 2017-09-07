// 导航配置文件
let sidebar = [
    {
        title: {
            name: '简述',
            icon: 'fa fa-book'
        }
    }, {
        title: {
            name: '项目构建',
            icon: 'fa fa-book'
        },
        item:[
            {
                name:"构建的基本原理",
                icon: 'fa fa-book',
                url:'/goujianyuanli'
            },
            {
                name:"使用的组件",
                icon: 'fa fa-book',
                url:"/123123"
            }
        ],
        item_grop:[
            {
                title: {
                    name: '项目构建111',
                    icon: 'fa fa-book'
                },
                item:[
                    {
                        name:"构建的基本原理2222",
                        icon: 'fa fa-book',
                        url:'/goujianyuanli'
                    },
                    {
                        name:"使用的组件2222",
                        icon: 'fa fa-book',
                        url:"/1213"
                    }
                ],
            }
        ]
    }, {
        title: {
            name: '组件',
            icon: 'fa fa-book'
        }
    },{
        title: {
            name: '图形',
            icon: 'fa fa-book'
        }
    },{
        title: {
            name: '错误页面',
            icon: 'fa fa-book'
        }
    },{
        title: {
            name: '换肤',
            icon: 'fa fa-book'
        }
    }
];


export default sidebar;