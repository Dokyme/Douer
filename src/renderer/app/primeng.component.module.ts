import { MessagesModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        ButtonModule,
        MessagesModule
    ],
    exports: [
        ButtonModule,
        MessagesModule
    ]
})
export class PrimeNgComponentModule {

}