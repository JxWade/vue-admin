import fontAwesome from '@/views/core/font_awesome'
import fontBootrap from '@/views/core/font_bootstrap'
import fontElement from '@/views/core/font_element'
import coreElement from '@/views/core/core_element'
import coreBootstrap from '@/views/core/core_bootstrap'

export default [
    {
        path: '/core/font/awesome',
        name: 'core-font-awesome',
        component: fontAwesome
    }, {
        path: '/core/font/bootstrap',
        name: 'core-font-bootstrap',
        component: fontBootrap
    }, {
        path: '/core/font/element',
        name: 'core-font-element',
        component: fontElement
    },{
        path: '/core/core/element',
        name: 'core-core-element',
        component: coreElement
    },{
        path: '/core/core/bootstrap',
        name: 'core-core-bootstrap',
        component: coreBootstrap
    },
]