import { NgModule } from '@angular/core';
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatCommonModule, MatLineModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@NgModule({
	imports: [
		MatCommonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatBadgeModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule,
		MatLineModule,
		MatDividerModule
	],
	exports: [
		MatCommonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatBadgeModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule,
		MatLineModule,
		MatDividerModule
	],
	providers: [],
})
export class MaterialModule {}
