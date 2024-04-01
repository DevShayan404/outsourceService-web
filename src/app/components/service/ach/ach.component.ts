import { Component } from '@angular/core';

@Component({
  selector: 'app-ach',
  templateUrl: './ach.component.html',
  styleUrl: './ach.component.css',
})
export class AchComponent {
  panels = [
    {
      active: true,
      name: 'EZ ACH File Creator (Standard File Types) - Standard',
      content: 'Single license - Windows/PC Workstation',
      price: '$299',
      button: 'Get Started',
      childPanel: [
        {
          name: 'For QuickBooks and Peachtree',
        },
        {
          name: 'Interface with one data company/one bank account.',
        },
        {
          name: 'Currently supports Windows 10 or higher',
        },
        {
          name: ' Compatible with QuickBooks/Peachtree versions 2014 through 2022',
        },
        {
          name: ' Standard file types include: ARC, BOC, CCD, P2P, POP, PPD, RCK, TEL, WEB',
        },
      ],
    },
    {
      active: false,
      name: 'EZ ACH File Creator (Standard File Types) - Unlimited Licenses',
      content: 'Unlimited license - Windows/PC Workstation',
      price: 'Get a Quote',
      button: 'Get Started',
      childPanel: [
        {
          name: 'For QuickBooks and Peachtree',
        },
        {
          name: 'Interface with one data company/one bank account.',
        },
        {
          name: 'Currently supports Windows 10 or higher',
        },
        {
          name: ' Compatible with QuickBooks/Peachtree versions 2014 through 2022',
        },
        {
          name: ' Standard file types include: ARC, BOC, CCD, P2P, POP, PPD, RCK, TEL, WEB',
        },
      ],
    },
    {
      active: false,
      name: 'Add-ons',
      content: 'Easy ACH File Creator® Additional Template',
      content2: 'Easy ACH File Creator® Additional Networked Computer',
      content3: 'Windows File Server/ Terminal/ Citrix Server Install - $400',
      button: 'Contact Us',
      childPanel: [
        {
          name: 'Standard - Additional Template - $199/per',
        },
        {
          name: 'Unlimited - Additional Templates - $299/per',
        },
      ],
      childPanel2: [
        {
          name: 'Standard - Additional Networked Computer - $99/per',
        },
        {
          name: 'Unlimited - Additional Networked Computer - $299/per',
        },
      ],
    },
  ];
}
