import { Component, OnInit, ViewChild } from '@angular/core';
import { NavItem } from '../static-sidebar/nav-list-item/nav-item';
import { NavService } from '../static-sidebar/nav-list-item//nav-service';
import { animation, style, transition, trigger, state, animate, keyframes, group } from '@angular/animations';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-static-sidebar',
  templateUrl: './static-sidebar.component.html',
  styleUrls: ['./static-sidebar.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        width: 200,
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'gray',
        width: 300,
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(350)),
    ])
  ]
})

export class StaticSidebarComponent implements OnInit {
  state = 'normal';
  highlighted = 'highlighted';
  constructor(public navService: NavService) { }

  navItems: NavItem[] = [
    {
      displayName: 'HOME',
      iconName: 'heroicons_outline:home',
      route: '/introduction',
      children: [],
    },
    {
      displayName: 'GLOSS',
      iconName: 'mat_outline:payment',
      route: '/comp',
      children: [
        {
          displayName: 'COMPANY',
          iconName: 'heroicons_outline:library',
          route: '/static/comp',
        },
        {
          displayName: 'SEGREGATION',
          iconName: 'heroicons_outline:external-link',
          route: '/static/segp',

        },
        {
          displayName: 'SWIFT',
          iconName: 'mat_outline:currency_exchange',
          route: '/static/swift',
        },

        {
          displayName: 'CLASS ASSOC',
          iconName: 'heroicons_outline:view-boards',
          route: '/static/classassoc',
        },
        {
          displayName: 'NETTING',
          iconName: 'mat_outline:filter_list',
          route: '/static/netting',
        },

        {
          displayName: 'SCHEDULE',
          iconName: 'mat_outline:schedule',
          route: '/static/glossscheduler',
        },
        {
          displayName: 'DACC',
          iconName: 'mat_solid:payment',
          route: '/static/dacc',
        },
        {
          displayName: 'DEPOT',
          iconName: 'heroicons_outline:credit-card',
          route: '/static/depot',
        },
        {
          displayName: 'TRADING BOOK',
          iconName: 'mat_outline:trending_up',
          route: '/static/book',
        },
        {
          displayName: 'COUNTERPARTY',
          iconName: 'mat_outline:switch_account',
          route: '/static/counterparty',
        },
      ],
    },
    {
      displayName: 'JASDEC PS',
      iconName: 'heroicons_outline:view-boards',
      route: 'jasdec',
      children: [
        {
          displayName: 'COMPANY',
          iconName: 'heroicons_outline:library',
          route: '/static/jasdeccomp',
        },
        {
          displayName: 'FILES',
          iconName: 'heroicons_outline:document',
          route: '/static/jasdecfiles',
        },
        {
          displayName: 'DATABASE',
          iconName: 'heroicons_outline:database',
          route: '/static/jasdecdatabases',
        },
        {
          displayName: 'SCHEDULER',
          iconName: 'heroicons_solid:calendar',
          route: '/static/jasdecscheduler',
        },
        {
          displayName: 'CONFIG',
          iconName: 'heroicons_solid:star',
          route: '/static/jasdecconfig',
        },
      ],
    },
    {
      displayName: 'BOJ PS',
      iconName: 'heroicons_outline:library',
      route: 'bojps',
      children: [
        {
          displayName: 'COMPANY',
          iconName: 'heroicons_outline:library',
          route: '/static/bojcomp',
        },
        {
          displayName: 'FILES',
          iconName: 'heroicons_outline:document',
          route: '/static/bojfiles',
        },
        {
          displayName: 'DATABASE',
          iconName: 'heroicons_outline:database',
          route: '/static/bojdatabases',
        },
        {
          displayName: 'SCHEDULER',
          iconName: 'heroicons_solid:calendar',
          route: '/static/bojscheduler',
        },
        {
          displayName: 'CONFIG',
          iconName: 'heroicons_solid:star',
          route: '/static/bojconfig',
        },
      ],
    },
    {
      displayName: 'TE',
      iconName: 'heroicons_outline:star',
      route: '/static/tetemplate',
      children: [],
    },
  ];

  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;

  onToggleMenu() {
    console.log('Toggle Menu Side Navigation ');
    this.drawer.toggle();
  }

  animationStarted(event) {
    console.log(event);
  }

  onAnimate() {
    console.log('OnAnimate');
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }


  animationEnded(event) {
    console.log(event);
  }

  ngOnInit(): void { }
}
