# My Angular App

This project is a simple Angular application.

## Project Structure

Here is an overview of the most important files and directories:

- **`angular.json`**: This is the main configuration file for the Angular CLI. It defines how the application is built, tested, and served.

- **`package.json`**: This file lists all the third-party libraries (dependencies) your project needs to run. It also defines custom scripts for building, testing, etc.

- **`src/`**: This is where all your application's source code lives.
    - **`index.html`**: The main HTML file of the app. The Angular application is loaded into this page.
    - **`main.ts`**: This is the starting point of the application. It bootstraps (starts) the main `AppComponent`.
    - **`styles.css`**: Use this file for global CSS styles that apply to the entire application.
    - **`app/`**: This folder contains the core of your application.
        - **`app.routes.ts`**: This file defines the navigation paths (routes) for your application. For example, which component to show for `/home` or `/about`.
        - **`app.ts`** (often `app.component.ts`): This is the main component of the application, also called the "root component". It acts as a container for all other components.
        - **`app.html`**: The HTML structure for the `AppComponent`. It usually contains the main layout and a `<router-outlet>` tag where other components are displayed based on the current route.
        - **`components/`**: This directory holds all the reusable UI building blocks of your application.
            - **`quiz/`**: A sample component for a quiz. It has its own logic (`quiz.ts`), template (`quiz.html`), and styles (`quiz.css`).

## How it works

1.  When you run the application, the `main.ts` file is executed first.
2.  `main.ts` bootstraps the Angular application, loading the main component (`AppComponent` from `app.ts`).
3.  `AppComponent`'s template (`app.html`) is rendered inside the `index.html` file.
4.  The `app.routes.ts` file tells the `AppComponent` which component to display inside the `<router-outlet>` based on the URL you are visiting.
5.  Each component, like the `QuizComponent`, manages its own little piece of the user interface.