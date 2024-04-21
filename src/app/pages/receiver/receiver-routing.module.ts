import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { ReceiverComponent } from './receiver.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ReceiverComponent,
      },
      {
        path: 'configuracoes',
        component: ConfigurationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiverRoutingModule {}
