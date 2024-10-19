import { Routes } from '@angular/router';
import { ClipboardComponent } from './components/clipboard/clipboard.component';

export const routes: Routes = [
    {
        path : '',
    redirectTo: 'clipboard' ,
    pathMatch : 'full' 
    },

    {
        path: 'clipboard' ,
        component:ClipboardComponent
    }
];
