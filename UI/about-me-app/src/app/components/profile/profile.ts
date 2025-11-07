//  UI/about-me-app2/src/app/components/profile/profile.ts
import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextareaButtonComponent} from '../spartan/textarea-button';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, TextareaButtonComponent],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name = 'George Garzon';
  title = 'Full Stack Developer · Husband & Father · Creator of Homeport Travel';
  bio = [
    `With over half a decade of development experience, I specialize in frontend and backend web applications. Have worked on small-large-scale API integrations. Designed beautiful data tables. Managed team members conducted code reviews, self-hosted with docker. I’ve worked closely with teams and departments collaborating to gain a better perspective and deliver a more efficient product.`,
    `My journey wasn’t linear. I made plenty of mistakes, but each one taught me valuable lessons. I learned by doing, by building products, teaching others, reading software engineering books, and taking Udemy/YouTube classes to further my skillset. Over time, this mix of practice and study shaped my approach to shipping features that are visually appealing and bug free.`,
    `In the last six years, I’ve worked various projects across startups and nationwide companies, known as the ‘Swiss-Army Knife’, and was selected as Employee of The Month. Beyond work, I enjoy Football, Concerts, Cruising, Binging a Thriller TV Series, and spending time with my beloved family. `,
    `Today, I am a father & husband, continuing my craft at Olympia Pharmaceuticals, The science behind a healthy lifestyle, & Homeport Travel a travel agency showcasing the best deals to travel by sea.`,
    ``
  ];
  signature = 'George Garzon';
  lastUpdated = '1 Nov, 2025';

  socials = [
    { label: 'Linkedin', href: 'https://www.linkedin.com/in/georgegarzon/' },
    { label: 'GitHub', href: 'https://github.com/george-garzon' },
    { label: 'X / Twitter', href: 'https://x.com/GeorgeGarzon_' }
  ];
}
