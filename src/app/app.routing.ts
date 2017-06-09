import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const appRoutes : Routes = [
    { path : '', children : [
        { path : '', component : LoginComponent},
        { path : 'login', component : LoginComponent},
        { path : 'home', component : HomeComponent},        
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