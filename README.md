# Pinterest Clone

This project is a simplified clone of Pinterest, built using HTML, CSS, and JavaScript. It features a responsive layout with a navigation bar, a search functionality, and a dynamic grid of image cards.

**Live Demo:** [https://webwithsufi.github.io/Pinterest/](https://webwithsufi.github.io/Pinterest/)

## Features

-   **Responsive Layout:** The layout adapts to different screen sizes.
-   **Navigation Bar:** Includes a logo, search bar, and login/signup buttons.
-   **Search Functionality:** Allows users to search for image categories.
-   **Dynamic Image Grid:** Displays images in a Pinterest-like grid layout.
-   **Search Suggestions:** Displays search suggestions below the search bar.

## Technologies Used

-   HTML5
-   CSS3
-   JavaScript

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [repository URL]
    ```

2.  **Open `index.html` in your browser.**

## Project Structure

Markdown

# Pinterest Clone

This project is a simplified clone of Pinterest, built using HTML, CSS, and JavaScript. It features a responsive layout with a navigation bar, a search functionality, and a dynamic grid of image cards.

**Live Demo:** [https://webwithsufi.github.io/Pinterest/](https://webwithsufi.github.io/Pinterest/)

## Features

-   **Responsive Layout:** The layout adapts to different screen sizes.
-   **Navigation Bar:** Includes a logo, search bar, and login/signup buttons.
-   **Search Functionality:** Allows users to search for image categories.
-   **Dynamic Image Grid:** Displays images in a Pinterest-like grid layout.
-   **Search Suggestions:** Displays search suggestions below the search bar.

## Technologies Used

-   HTML5
-   CSS3
-   JavaScript

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [repository URL]
    ```

2.  **Open `index.html` in your browser.**

## Project Structure

Project_10/
├── index.html
├── style.css
├── script.js
├── pinterest.png
└── README.md

-   `index.html`: The main HTML file.
-   `style.css`: The CSS file for styling.
-   `script.js`: The JavaScript file for functionality.
-   `pinterest.png`: The Pinterest logo image.
-   `README.md`: This file.

## JavaScript Functionality

-   **`showCards()`:** Populates the image grid with cards from the `array` of image data.
-   **`searchRes()`:** Filters and displays image cards based on the search input.
-   **`option()`:** Displays search suggestions below the search bar as the user types.

## Image Data

The image data is stored in the `array` variable in `script.js`. Each object in the array contains the image `src` and the image `name`.

```javascript
let array = [
    {
        name: "fashion",
        src: "[https://images.unsplash.com/photo-1727731481816-bf055858e20f?w=500&auto=format&fit=crop&q=60](https://images.unsplash.com/photo-1727731481816-bf055858e20f?w=500&auto=format&fit=crop&q=60)",
    },
    // ... more image data
];
