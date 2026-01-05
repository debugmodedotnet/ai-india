import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

  tickets : any = [
    {
      id:1,
      title : "ng-India",
      price : "4000",
       features : [
        "Entry to ng-India Conference on 11 April",
        "Access to all ng-India conference sessions and recordings",
        "T-Shirt and goodies bag",
        "Lunch, Breakfast, Tea/Coffee provided"
      ],
      buttonText : "Buy ng-India Ticket",
      buyLink : "https://www.eventbrite.com/e/ng-india-2025-tickets-743632318017?aff=ngindialive",
      isDisabled : false, 
      totalTickets : 500
    },
     {
      id:2,
      title : "AI-India",
      price : "4000",
      features : [
        "Entry to AI-India Conference on 12 April",
        "Access to all AI-India conference sessions and recordings",
        "T-Shirt and goodies bag",
        "Lunch, Breakfast, Tea/Coffee provided"
      ],
      buttonText : "Buy AI-India Ticket",
      buyLink : "https://www.eventbrite.com/e/ng-india-2025-tickets-743632318017?aff=ngindialive",
      isDisabled : false, 
      totalTickets : 300
    },
     {
      id:3,
      title : "ng-India + AI-India",
      price : "7000",
      features : [
        "Entry to both Conferences on 11-12 April",
        "Access to both conferences sessions and recordings",
        "T-Shirt and goodies bag",
        "Lunch, Breakfast, Tea/Coffee provided"
      ],
      buttonText : "Buy ng-India + AI-India Ticket",
      buyLink : "https://www.eventbrite.com/e/ng-india-2025-tickets-743632318017?aff=ngindialive",
      isDisabled : false, 
      totalTickets : 500
    }
  ]
}
