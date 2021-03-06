import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { OrderService } from "app/order/order.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from "./messages/notification.service";
import { LoginService } from "app/security/login/login.service";

@NgModule({
   declarations: [InputComponent, RadioComponent, SnackbarComponent],
   imports: [CommonModule, FormsModule, ReactiveFormsModule],
   exports: [InputComponent, RadioComponent, CommonModule, FormsModule, ReactiveFormsModule, SnackbarComponent] 
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, 
                        RestaurantsService, 
                        OrderService, 
                        NotificationService,
                        LoginService]
        }
    }
}