import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { MenuService } from '../services/menu.service';
import { onMainContentChange } from './animations';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [onMainContentChange],
})
export class ShellComponent implements AfterViewInit {
  loading = false;
  public onSideNavChange: boolean;

  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  bSideNavMenu!: boolean;
  divClicked = false;
  isClicked =  false;
  doAnimation = false;
  envConnected: string = localStorage.getItem('env');
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  doAnimate() {
    if (this.doAnimation === true) {
      this.doAnimation = false;
    }
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private afAuth: AuthService,
    private sidenavService: MenuService
  ) {
    this.sidenavService.sideNavState$.subscribe((res) => {
      console.log(res);
      this.onSideNavChange = res;
    });
  }

  ngAfterViewInit(): void {}

  onToggleMenu() {
    if (this.isClicked === false) {
      this.isClicked = true;
    }
    else {
      this.isClicked = false;
    }
    this.drawer.toggle();
  }

  logout() {
    this.loading = true;
    this.afAuth.logout();
    this.loading = false;
  }
}
