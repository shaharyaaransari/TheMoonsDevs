# TheMoonsDevs
## Description
  This web application allows users to input a prompt to generate social media posts using OpenAI's API. The generated posts are then saved to a Google Spreadsheet using Google Sheets API. Additionally, users can fetch and display the generated posts from the spreadsheet.

  ## Technologies Used
1. React: Frontend library for building user interfaces.
2. Next.js: React framework for server-side rendering and static site generation.
3. Axios: HTTP client for making API requests.
4. Tailwind CSS: Utility-first CSS framework for styling.
   
## Usage
# Generating Social Media Posts
* Enter a prompt in the input field on the homepage.
* Click on "Generate Posts" to generate social media posts based on the prompt.
* The generated posts will be displayed below the input field.
# Saving Posts to Google Spreadsheet
 * Posts generated using the above step will automatically be saved to a Google Spreadsheet.
 * The spreadsheet will contain columns for Timestamp, Prompt, and Post.
# Bonus: Retrieve and Display Posts
* Posts saved in the Google Spreadsheet can be fetched and displayed below the input field.
* Ensure that the Google Spreadsheet is accessible to the application via the Google Sheets API.
