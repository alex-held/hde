import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-info-label",
  templateUrl: "./info-label.component.html",
  styleUrls: ["./info-label.component.sass"]
})
export class InfoLabelComponent implements OnInit {
  @Input()
  title: string = "Title";

  @Input()
  icon: string = "home";

  @Input()
  value: string[] = ["Value"];

  @Input()
  href: string | any;

  @Input()
  click: () => void = () => {
    if (this.href) {
      const url = this.href;
      console.log("default click: " + this.title + "\nRouting to url: " + url);
      window.open(url);
    }
    console.log("default click: " + this.title + "\nNop");
  };

  constructor() {}

  ngOnInit(): void {}
}
