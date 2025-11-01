import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea-button',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  template: `
    <div class="mt-12 w-full grid gap-3 bg-white grayscale rounded-lg p-6 ">
      <label for="message" class="text-sm font-medium text-gray-700">
        Contact Me
      </label>

      <textarea
        id="message"
        [(ngModel)]="message"
        class="w-full h-36 resize-none rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-800 placeholder-gray-400
               focus:outline-none focus:ring-2 focus:ring-[rgb(168,189,158)] focus:border-transparent transition"
        placeholder="Type your message here..."
      ></textarea>

      <button
        (click)="sendMessage()"
        [disabled]="isLoading"
        class="w-full px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-[rgb(168,189,158)] text-white text-sm font-medium transition ease-in-out duration-300
               focus:outline-none focus:ring-2 focus:ring-[rgb(168,189,158)] focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {{ isLoading ? 'Sending...' : 'Send message' }}
      </button>

      <p *ngIf="responseMessage" class="text-sm mt-2 text-gray-600">
        {{ responseMessage }}
      </p>
    </div>
  `
})
export class TextareaButtonComponent {
  message = '';
  isLoading = false;
  responseMessage = '';

  constructor(private http: HttpClient) {}

  sendMessage() {
    if (!this.message.trim()) {
      this.responseMessage = 'Please type a message before sending.';
      return;
    }

    this.isLoading = true;
    this.responseMessage = '';

    // Example endpoint — replace with your actual API
    const endpoint = 'https://localhost.com/api/contact';

    this.http.post(endpoint, { message: this.message }).subscribe({
      next: () => {
        this.isLoading = false;
        this.responseMessage = 'Message sent successfully!';
        this.message = '';
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
        this.responseMessage = 'Something went wrong. Please try again later.';
      }
    });
  }
}
