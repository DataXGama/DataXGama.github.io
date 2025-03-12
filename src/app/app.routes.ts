import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SideProjectComponent } from './components/side-project/side-project.component';
import { MobcoinProjectComponent } from './components/mobcoin-project/mobcoin-project.component';
import { IotProjectComponent } from './components/iot-project/iot-project.component';
import { GaussianProjectComponent } from './components/gaussian-project/gaussian-project.component';

export const routes: Routes = [
    { path: '**', redirectTo: '', pathMatch: 'full' },
    {
        path: "",
        component: MainComponent
    },
    {
        path: "mobcoin",
        component: MobcoinProjectComponent,
    },
    {
        path: "iot",
        component: IotProjectComponent
    },
    {
        path: "gaussian",
        component: GaussianProjectComponent
    },
];
