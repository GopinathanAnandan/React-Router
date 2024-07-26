# React Router Task:

In this task, I created a sample JSON data. json in the assets folder. The page has a navbar that contains All, Full-stack development, Cyber security, Data science, and careers. Using JSON data, I created the cards that show up in the respective pages using the router concept. Here I use some hook concepts, like the useParams and useNavigate concepts.

# Components:

<ul>
  <li>All</li>
  <li>FullStack</li>
  <li>CyberSecurity</li>
  <li>DataScience</li>
  <li>Careers</li>
  <li>Error</li>
  <li>Detail</li>
  <li>CardView</li>
</ul>

# App.jsx:

<ul>
  <li>This React application uses react-router-dom for routing and react-bootstrap for styling. </li>
  <li>Router: Wraps the entire application to enable routing.</li>
  <li>Navbar: A responsive navigation bar from react-bootstrap with links to different routes.</li>
  <ul>
    <li>Navbar.Toggle: Provides a button to toggle the visibility of the navigation bar in mobile view.</li>
    <li>Navbar.Collapse: Contains the links and hides them on smaller screens.</li>
    <li>Nav.Link: Each link is rendered as a NavLink component from react-router-dom, which allows navigation between different routes. The as={NavLink} prop makes Nav.Link behave like NavLink.</li>
  </ul>
  <li>path="/": Renders the All component when the URL is exactly /.</li>
  <li> Renders the Full stack, Cyber security, Data science and Careers component for their respective path.</li>
  <li>path="/details/:title": Renders the Detail component for dynamic routes where :title is a URL parameter.</li>
  <li>path="*": A catch-all route that renders the Error component for any undefined paths.</li>
</ul>

# All.jsx:

<ul>
  <li>The All component serves as a container that fetches and displays a list of items using Bootstrap's. The data array, imported from a JSON file, to dynamically generate the content based on the data.</li>
  <li>Maps over the data array to render a CardView component for each item in the array.</li>
  <li>For each item in the data array:</li>
  <ul>
    <li> A unique key prop helps React identify which items have changed, are added, or are removed. This improves performance and helps in maintaining state.</li>
    <li> Passes the current item as a prop to the CardView component. This allows CardView to render details about each specific item.</li>
  </ul>
</ul>

# CardView.jsx:

<ul>
  <li>This component is designed to display individual items in a card format, with the capability to navigate to a details page when the card is clicked.</li>
  <li>Props{item}: An object passed to the component, containing data for a single card. It is expected to include at least title and img properties.</li>
  <li> Initializes the useNavigate hook, which is used to programmatically navigate to different routes.</li>
  <li>Function to handle the card click event.</li>
  <ul>
    <li>Uses navigate to redirect the user to the details page for the clicked item.</li>
    <li>The URL is constructed using encodeURIComponent(item.title) to ensure that any special characters in the title are properly encoded for use in the URL.</li>
  </ul>
</ul>

# Detail.jsx:

<ul>
  <li>The Detail component is responsible for displaying detailed information about an item using the title from the URL to find the correct data. </li>
  <li> Extracts the title parameter from the URL using the useParams hook. This parameter corresponds to the dynamic part of the route defined in the App component</li>
  <li>Searches the data array for an item whose title matches the decoded title. This retrieves the item to be displayed.</li>
  <li>If no item is found, the component displays a message saying "Item not found". This handles cases where the title parameter does not match any item in the data array.</li>
  <li>Shows the item's description if available; otherwise, displays a default message "No description available."</li>
</ul>

# FullStack.jsx:

<ul>
  <li>This component is responsible for filtering the data to show only items related to Full Stack Development and then rendering them.</li>
  <li>Maps over the fullStackData array and renders a CardView component for each item.</li>
</ul>

# CyberSecurity.jsx:

<ul>
  <li>This component handles filtering the data to include only items related to Cyber Security and then renders them using the CardView component.</li>
  <li>This line filters the data array to include only those items where the type property is equal to 'Cyber Security'. This ensures that only relevant items are selected.</li>
  <li>Maps over the cyberSecurityData array to create a list of CardView components for each item.</li>
</ul>

# DataScience.jsx:

<ul>
  <li>The DataScience component is a React component used to filter and display a subset of data related to Data Science.</li>
  <li>Maps over the dataScienceData array to render each item as a CardView component.</li>
</ul>

# Careers.jsx:

<ul>
  <li>Layout: Uses Bootstrap’s grid system to create a responsive layout with job cards displayed in a grid.</li>
  <li>Styling: Utilizes Bootstrap's built-in styles and custom CSS from Careers.css for additional styling.</li>
  <li>Content: Includes a header section introducing the job opportunities, a section listing current openings with job details, and a footer with application instructions.</li>
  <li>This component effectively presents job openings in a structured, user-friendly manner, allowing potential candidates to view and apply for positions with ease.</li>
</ul>

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
