import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NavItem } from './nav-item';
import { Router } from '@angular/router';
import { NavService } from './nav-service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-item.component.html'
})
export class NavItemComponent implements OnInit {
  public expanded!: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;
  private noMenuUpdate = true;

  constructor(public navService: NavService, public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      console.log(`Checking '${this.item.route}' against '${url}'`);
      if (this.item.route) {
        this.ariaExpanded = this.expanded;
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    } else {
      this.router.navigate([item.route]);
    }
  }
}
