/* import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'themeStyles';
}
 */
import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './components/home/form-modal/form-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'theme-labo';
  darkMode$: Observable<boolean>;

  constructor(
    private themeService: ThemeService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.darkMode$ = this.themeService.darkMode$;
  }

  setDarkMode({ checked }: MatSlideToggleChange) {
    this.themeService.setDarkMode(checked);
  }
  openFormModal() {
    const modalRef = this.modalService.open(FormModalComponent);
    modalRef.componentInstance.id = 10; // should be the id
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}