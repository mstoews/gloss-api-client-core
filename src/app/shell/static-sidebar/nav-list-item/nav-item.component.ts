import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {NavItem} from './nav-item';
import {Router} from '@angular/router';
import {NavService} from './nav-service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('1000ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class NavItemComponent implements OnInit {
  public expanded!: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;
  private noMenuUpdate = true;

  constructor(public navService: NavService,
              public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      console.log(`Checking '${this.item.route}' against '${url}'`);

      if (this.item.route && this.item.route) {
        const expanded = url.indexOf(`${this.item.route}`);
        if (expanded === 0){
          this.expanded = false;
        }
        else {
          this.expanded = false;
        }
        this.ariaExpanded = this.expanded;

      }
    });
  }

  onItemSelected(item: NavItem) {
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
    else
    {
      this.router.navigate([item.route]);
    }
  }
}
