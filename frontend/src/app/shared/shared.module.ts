import { NgModule } from "@angular/core";
import { FlexLayoutModule, FlexModule } from "@angular/flex-layout";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { PrimeModule } from "src/app/shared/modules/prime.module";
import { ServiceCardService } from "src/app/shared/services/service-card.service.js";
import { ContactService } from "./services/contact.service";
import { InfoLabelComponent } from "./components/info-label/info-label.component";

import { PageComponent } from "./components/section/page.component";
import { ServiceCardComponent } from "./components/service-card/service-card.component";
import { ServiceCardGridComponent } from "./components/service-card-grid/service-card-grid.component";
import { BannerComponent } from "../banner/banner.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { EmployeeListCardComponent } from "./components/employee-list-card/employee-list-card.component";

@NgModule({
  declarations: [
    InfoLabelComponent,
    PageComponent,
    ServiceCardComponent,
    ServiceCardGridComponent,
    BannerComponent,
    BannerComponent,
    EmployeeListComponent,
    EmployeeListCardComponent
  ],
  imports: [
    PrimeModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule,
    CarouselModule
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
    BannerComponent,
    BannerComponent,
    EmployeeListComponent
  ],
  providers: [ContactService, ServiceCardService]
})
export class SharedModule {}
