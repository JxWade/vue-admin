import componentList from '@/views/component/list'
import componentDetail from '@/views/component/detail'

export default [
    {
        path: 'component/list',
        name: 'component-list',
        component: componentList
    },{
        path: 'component/detail',
        name: 'component-detail',
        component: componentDetail
    },
]