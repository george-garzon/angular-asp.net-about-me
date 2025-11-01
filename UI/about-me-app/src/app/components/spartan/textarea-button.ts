import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea-button',
  standalone: true,
  template: `
    <div class="w-full max-w-md grid gap-3 p-6 bg-white rounded-xl shadow-sm">
      <label for="message" class="text-sm font-medium text-gray-700 dark:text-gray-300">
        Your Message
      </label>

      <textarea
        id="message"
        class="w-full h-32 resize-none rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
        placeholder="Type your message here..."
      ></textarea>

      <button
        class="w-fit px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium transition ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
      >
        Send message
      </button>
    </div>
  `
})
export class TextareaButtonComponent {}
