import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {RouteName} from "@/enums";
import {IconCheckList, IconHouse, IconUserCircle} from "@/assets/icons/outline";
import IconsView from "@/views/IconsView.vue";
import ImprintView from "@/views/ImprintView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ResumeView from "@/views/ResumeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: RouteName.Home,
            component: HomeView,
            meta: {
                navbar: true,
                icon: IconHouse,
            },
        },
        {
            path: '/steckbrief',
            name: RouteName.Profile,
            component: ProfileView,
            meta: {
                navbar: true,
                icon: IconUserCircle,
            },
        },
        {
            path: '/lebenslauf',
            name: RouteName.Resume,
            component: ResumeView,
            meta: {
                navbar: true,
                icon: IconCheckList,
            },
        },
        {
            path: '/icons',
            name: RouteName.Icons,
            component: IconsView,
            meta: {
                footer: true,
            },
        },
        {
            path: '/impressum',
            name: RouteName.Imprint,
            component: ImprintView,
            meta: {
                footer: true,
            },
        },
    ]
})

export default router
