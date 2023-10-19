# Flatdango Movie Ticket Booking App

Welcome to Flatdango, the ultimate solution for booking movie tickets at the Flatiron Movie Theater. This repository contains all the information you need to get started with this project.

## Introduction

Flatdango is a JavaScript-based application that allows users to purchase movie tickets at the Flatiron Movie Theater. The app fetches movie data from a local server running a JSON DB server and provides a user-friendly interface for selecting and buying tickets.

Before you start coding, it's important to plan your app thoroughly. This README will guide you through the setup and implementation of Flatdango.

## Requirements

For this project, you must meet the following requirements:

- Have a well-written README file.
- Fetch data from a local server running a JSON DB server.

## Pre-requisite Data

You can use this JSON file for your server DB: [db.json](db.json).

## Project Setup

Follow these steps to set up your project:

1. Create a new project folder.
2. Create a new private GitHub repository for your project. Ensure it's private to protect your code.
3. Add your instructor/TA as a contributor to the project (for grading purposes).
4. Regularly commit your code to the repository.

## Project Guidelines

Your project should conform to the following set of guidelines:

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dmmuchoki7/
   ```

2. Change to the project directory:

   ```bash
   cd user-input-json-database

### Core Deliverables

As a user, you must be able to:

1. See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** when the page loads. The number of available tickets will be derived by subtracting the number of `tickets_sold` from the theater's `capacity`. You will need to make a GET request to the following endpoint to retrieve the film data:

### GET /films/1

2. See a menu of all movies on the left side of the page in the `ul#films` element when the page loads. (_Optional_: you can style each film in the list by adding the classes `film item` to each `li` element.) You will need to make a GET request to the following endpoint to retrieve the film data:

### GET /films

3. Buy a ticket for a movie. After clicking the "Buy Ticket" button, you should see the number of available tickets decreasing on the frontend. You should not be able to buy a ticket if the showing is sold out (if there are 0 tickets available). **No persistence is needed for this feature**.

### Bonus Deliverables

These bonus deliverables are here if you want an extra challenge:

1. Click on a movie in the menu to replace the currently displayed movie's details with the new movie's details. Note that you may have to make an additional GET request to access the movie's details.

2. When a movie is sold out (when there are no available tickets remaining), indicate that the movie is sold out by changing the button text to "Sold Out." Also update the film item in the `ul#films` menu by adding a class of `sold-out` to the film.

### Extra Bonus

These extra bonus deliverables involve using `fetch` to update data on the `json-server` backend by using `POST`, `PATCH`, and `DELETE` requests. These are meant for an extra challenge and won't affect your grade.

1. When a ticket is purchased, persist the updated number of `tickets_sold` on the server. The frontend shows the number of available tickets based on the `tickets_sold` and the `capacity`, so only the `tickets_sold` should be updated on the backend when a ticket is purchased. You will need to make a request that follows this structure:

2. Delete a film from the server. Add a delete button next to each film in the `ul#films` menu. When the button is clicked, remove the film from the list and also delete the film on the server.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
David Munuhe Muchoki

