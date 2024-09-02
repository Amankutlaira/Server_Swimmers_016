Tech Conference Website
Introduction
The Tech Conference Website project is designed to create a modern and visually appealing website for a major tech conference. The website's primary goal is to enhance the attendee experience, centralize event information, increase online visibility, and attract new users to register. This project uses the latest UI/UX trends like glass-morphism and neu-morphism to offer a unique and engaging experience. The website is fully responsive and optimized for performance and accessibility, ensuring seamless use across all devices.
Project Type
Frontend
Deployed App
Frontend: 
Directory Structure
plaintext


tech-conference-website/
├── css/
│   ├── styles.css            # Main CSS file
│   ├── animations.css        # CSS for animations
│   ├── dark-mode.css         # CSS for dark mode
├── js/
│   ├── script.js             # Main JavaScript file
│   ├── countdown.js          # JavaScript for countdown timer
│   ├── dark-mode-toggle.js   # JavaScript for dark/light mode toggle
├── images/
│   ├── logo.png              # Conference logo
│   ├── banner.jpg            # Banner image
│   ├── speakers/             # Folder containing speaker images
├── index.html                # Main HTML file
├── README.md                 # README file
Video Walkthrough of the Project
Watch the video walkthrough of all features here.
Video Walkthrough of the Codebase
Watch the video walkthrough of the codebase here.
Features
Landing Page with Parallax Scrolling: A dynamic scrolling effect to showcase the event's history and mentor details.
Event Information Centralization: Sections for event details, schedule, speakers, and registration.
Animations and Visual Effects: Smooth animations and visual effects to enhance user engagement.
Social Media Feed Integration: Real-time display of photos and reviews from past events.
Event Benefits Cards: Engaging cards highlighting the benefits of attending the event.
Countdown Timer and Participant Counter: Real-time countdown to the event start and display of registered participants.
Responsive Design: Seamless experience on all devices (desktop, tablet, mobile).
Dark and Light Mode: Toggle switch for dark and light modes to enhance accessibility.
Web Vitals Optimization: Optimized for performance and accessibility using web vitals.
Design Decisions or Assumptions
Glass-morphism and Neu-morphism: Chosen to create a modern, visually appealing aesthetic that aligns with the tech industry's trends.
Mobile-First Design: Prioritized mobile responsiveness to ensure optimal performance on smaller screens.
Dark/Light Mode Toggle: Included to cater to user preferences and improve accessibility in different lighting conditions.
Social Media Integration: To create a sense of community and encourage engagement with real-time updates and interactions.
Installation & Getting Started
To get a local copy up and running, follow these steps:
Clone the repository:
bash


git clone https://github.com/yourusername/tech-conference-website.git
cd tech-conference-website
Open the project folder in your preferred code editor.
Open index.html in your web browser to view the website.
There is no backend for this project, so there is no need to set up a database or backend server.
Usage
To use the website:
Navigate through the different sections using the navigation menu.
Scroll to experience the parallax effect on the landing page.
Check out the speakers and event schedule.
Toggle between dark and light modes using the switch at the top right corner.
Interact with the embedded social media feed to see real-time updates.
Here is an example of the countdown timer in action:
javascript


// Countdown timer example
const countdownDate = new Date("Jan 1, 2025 00:00:00").getTime();
Credentials
This is a public website, so no user credentials are required to access the pages.
APIs Used
Twitter API: To fetch and display real-time tweets related to the conference.
Instagram Graph API: To embed Instagram photos and stories from past events.
API Endpoints
Note: This project is frontend-only, so there are no backend API endpoints.
Technology Stack
HTML: For structuring the content of the website.
CSS: For styling the website, including animations and responsive design.
JavaScript: For adding interactivity, such as the countdown timer and dark/light mode toggle.
External APIs: For integrating social media feeds.
