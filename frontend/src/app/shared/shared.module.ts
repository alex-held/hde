import { NgModule } from "@angular/core";
import { FlexLayoutModule, FlexModule } from "@angular/flex-layout";
import { GoogleMapsModule } from "@angular/google-maps";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { PrimeModule } from "src/app/shared/modules/prime.module";
import { ContactService } from "./services/contact.service";
import { InfoLabelComponent } from "./components/info-label/info-label.component";

import { PageComponent } from "./components/section/page.component";
import { ServiceCardComponent } from "./components/service-card/service-card.component";
import { ServiceCardGridComponent } from "./components/service-card-grid/service-card-grid.component";
import { BannerComponent } from "./components/banner/banner.component";

@NgModule({
  declarations: [
    InfoLabelComponent,
    PageComponent,
    ServiceCardComponent,
    ServiceCardGridComponent,
    BannerComponent
  ],
  imports: [
    PrimeModule,
    MaterialModule,
    GoogleMapsModule,
    FlexLayoutModule,
    FlexModule
  ],
  exports: [
    PrimeModule,
    MaterialModule,
    InfoLabelComponent,
    PageComponent,
    ServiceCardComponent,
    FlexModule,
    FlexLayoutModule,
    ServiceCardGridComponent,
    BannerComponent
  ],
  providers: [ContactService]
})
export class SharedModule {}
