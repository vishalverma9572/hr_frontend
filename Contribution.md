
# Contribution Guide

Welcome to the project! We appreciate your interest in contributing. Below is a guide to help you get started.

## Installation Process

To set up the project locally, please follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/vishalverma9572/hr_frontend
   cd hr_frontend
   ```

2. **Install Dependencies:**
   Ensure you have [Node.js](https://nodejs.org/) installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Application:**
   To start the development server, run:
   ```bash
   npm start
   ```

4. **Open in Browser:**
   Open your browser and go to `http://localhost:3000` to see the application in action.

## Project Structure

The project has the following structure:

```
hr_frontend/
│
├── src/
│   ├── components/            # Individual components for each page
│   │   ├── PageName_compo/   # Components related to a specific page
│   │   │   ├── ComponentName.js
│   │   │   └── ComponentName.css
│   │   ├── Sidebar.js         # General use components
│   │   ├── Navbar.js          # General use components
│   │   └── ...                # Other general components
│   ├── pages/                 # Different pages of the application
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── ...                # Other pages
│   ├── assets/                # Images and other assets
│   ├── general/               # General components
│   │   ├── Sidebar.js
│   │   ├── Navbar.js
│   │   └── ...                # Other general components
│   ├── App.js                 # Main application file
│   ├── index.js               # Entry point
│   └── ...                    # Other source files
│
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

### Important Notes

- **CSS File Naming:** For each component located in `components/PageName_compo`, the associated CSS file should have the same name as the component, e.g., `ComponentName.css`.
- **Styling Conventions:** Use the following naming conventions for styling classes in CSS:
  - Parent component div should be styled as `.parent_div_of_component` `.child_div` so that this style don't affect unintended components.
  - Use Tailwind CSS for utility-based styling where applicable.
- **Adding Components:** When creating a new component, ensure that you create a corresponding directory under `components/` named after the component. Include any associated CSS files in the same directory.


