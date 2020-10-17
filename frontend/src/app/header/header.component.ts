import { Component, Input, OnInit } from "@angular/core";
import { CanColor, ThemePalette } from "@angular/material/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

interface Section {
  sectionHref: string;
  title: string;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      "logo",
      sanitizer.bypassSecurityTrustResourceUrl("assets/svg/logo.svg")
    );
  }

  //defaultColor: ThemePalette | undefined = "primary";

  //@Input()
  //color: ThemePalette = "primary";

  @Input()
  title: string = "Held der Elektrik";

  @Input()
  sections: Section[] = [
    {
      sectionHref: "#",
      title: "Home"
    },
    {
      sectionHref: "#services",
      title: "Services"
    },
    {
      sectionHref: "#about-us",
      title: "About Us"
    },
    {
      sectionHref: "#contact",
      title: "Contact"
    }
  ];
}
