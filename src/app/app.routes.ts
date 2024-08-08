import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    {path: '', pathMatch : 'full', redirectTo: 'scrumboard'},

    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'scrumboard'},

    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'scrumboard', loadChildren: () => import('app/modules/scrumboard/scrumboard.routes')},
        ]
    },

];
