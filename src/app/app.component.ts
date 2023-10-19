import {Component, signal} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UnoComponent} from "./components/uno/uno.component";
import {DuoComponent} from "./components/duo/duo.component";
import {TreComponent} from "./components/tre/tre.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, UnoComponent, DuoComponent, TreComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isCheckedDefer = signal<boolean>(false);
}
