# Tax Calculator Project

This project aims to create a tax calculator application that calculates the overall income tax based on gross annual income, extra income from other sources, deductions, and the age group of the individual.

## Project Structure

- **index.html**: Contains the HTML structure of the web application.
- **index.css**: Defines the styles for the HTML elements.
- **index.js**: Implements the logic for calculating taxes and handling user interactions.

## How to Run

To run the tax calculator application:

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.

## Usage

1. Enter the gross annual income, extra income from other sources, age group, and total applicable deductions in the respective input fields.
2. Click the "Submit" button to calculate the overall income tax.
3. The calculated tax amount will be displayed on the screen.

## References & Requirements

- The tax calculation works based on this formula:
    - Overall income (after deductions) under 8 Lakhs is not taxed.
    - Income over 8 Lakhs, the amount over 8 Lakhs is taxed at:
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60

## Answers to Additional Questions

Q. **What was the most challenging part of the assignment?**
   - Understanding the tax calculation formula and implementing it accurately in code.
   - Handling edge cases and ensuring the calculations are correct for different scenarios.
   - Integrating the frontend and backend seamlessly to provide a user-friendly experience.

Q. **If you were to change anything about the assignment, what would it be?**
   - Provide clearer instructions or examples for understanding the tax calculation formula.
   - Include more detailed feedback or guidance on common mistakes or pitfalls encountered during the assignment.
   - Allow for more flexibility in choosing programming languages or frameworks for implementation to accommodate different skill levels and preferences.
