import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: HomePage,
        children: [
            {
                path: 'ukm-home',
                children: [
                    {
                        path: '',
                        loadChildren: './ukm-home/ukm-home.module#UkmHomePageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: './profile/profile.module#ProfilePageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/ukm-home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}