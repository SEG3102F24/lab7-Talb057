import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '../books/service/books.service';
import { Author } from '../books/model/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})

export class AuthorsComponent {
  authorId!: number;
  author: Author | null = null;
  errorMessage: string | null = null;

  constructor(private booksService: BooksService) {}

  findAuthor() {
    this.booksService.getAuthorById(this.authorId).subscribe({
      next: (data) => {
        this.author = data;
        this.errorMessage = null;
      },
      error: () => {
        this.author = null;
        this.errorMessage = 'Author not found';
      }
    });
  }
}