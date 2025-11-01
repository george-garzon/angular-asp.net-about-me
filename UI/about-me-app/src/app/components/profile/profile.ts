//  UI/about-me-app2/src/app/components/profile/profile.ts
import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name = 'George Garzon';
  title = 'Full Stack Developer · Husband & Father · Creator of Homeport Travel';
  bio = [
    `With nearly a decade of design experience, I’ve worked closely with teams and founders around the world — learning what works, what doesn’t, and how even the smallest design choices can shape user behavior.`,
    `My journey wasn’t linear. I made plenty of mistakes, but each one taught me valuable lessons. I learned by doing, by building products, studying design psychology, reading books, and analyzing real case studies. Over time, this mix of practice and study shaped my approach to creating effective, emotionally intelligent interfaces.`,
    `In the last ten years, I’ve worked on 200+ projects across startups and global companies, achieved Top Rated recognition on Fiverr and Upwork, and was selected for Fiverr Pro for design quality. Beyond client work, I’ve enjoyed teaching and mentoring junior designers locally, helping them grow into confident freelancers and product designers.`,
    `Today, I run Hugeicons, a 40,000+ icon library trusted by 150K+ designers and developers, and Halal Lab, a UX studio where we create clean, effective digital products.`,
    `Now, I’ve officially begun teaching with a simple mission: to empower designers to think deeper, design with purpose, and craft products people truly love.`
  ];
  signature = 'George Garzon';
  lastUpdated = '1 Nov, 2025';

  socials = [
    { label: 'Linkedin', href: 'https://www.linkedin.com/in/georgegarzon/' },
    { label: 'GitHub', href: 'https://github.com/george-garzon' },
    { label: 'X / Twitter', href: 'https://x.com/GeorgeGarzon_' }
  ];
}
