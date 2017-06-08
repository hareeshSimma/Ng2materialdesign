import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes : Routes = [
    { path : '', children : [
        { path : '', component : LoginComponent},
        { path : 'login', component : LoginComponent},
        { path : 'dashboard', component : DashboardComponent}

    ] }

    
]


@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [
        RouterModule
    ]
})

export class AppRoutingModule {}