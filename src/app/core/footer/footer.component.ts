import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  navBlocks = [
    {
      title: 'ABOUT US',
      items: [
        { title: 'Overview', destination: { name: '' } },
        {
          title: 'Architecture',
          destination: { name: '' }
        }
      ]
    },
    {
      title: 'WHAT WE DO',
      items: [
        { title: 'Overview', destination: { name: '' } },
        {
          title: 'Decision Trees',
          destination: { name: '' }
        }
      ]
    },
    {
      title: 'IMPRINT',
      items: [
        { title: 'Overview', destination: { name: '' } },
        { title: 'Contact', destination: { name: '' } },
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
