# My React Developer Portfolio

Welcome to my personal developer portfolio\! This site is built using React and features a modern design, dark mode, multiple pages, and is fully responsive. It achieved a perfect Lighthouse score, ensuring a great user experience.

-----

## Features

  * 🌑 **Dark Mode Toggler**: Easily switch between light and dark themes.
  * 📖 **Multiple Pages**: Navigate through different sections using React Router.
  * 📱 **Fully Responsive**: Optimized for all screen sizes, from mobile to desktop.
  * 🎨 **Modern Design**: Clean and contemporary aesthetics.
  * 💡 **Perfect Lighthouse Score**: Achieved top performance, accessibility, best practices, and SEO scores.

-----

## Getting Started

To get a copy of this project up and running on your local machine, follow these steps.

### Prerequisites

Make sure you have the following installed:

  * **Git**: For cloning the repository.
  * **Node.js**: Includes npm, essential for managing project dependencies.
  * Basic familiarity with your machine's command line.
  * A basic understanding of JSON data structures (arrays of objects).

### How to Use

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    ```
    (Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub details.)
2.  **Navigate to the Project Directory**:
    ```bash
    cd YOUR_REPOSITORY_NAME
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    ```
4.  **Start the Development Server**:
    ```bash
    npm run start
    ```
    This will open your local copy in your browser (usually at `http://localhost:3000`).

-----

## Customization Instructions

Here’s how you can personalize this template with your own content and style.

### 1\. Replace the Images

Open your project in your file explorer and go to `src/img`. You'll find images here that need to be replaced with your own.

#### `self.png`

  * Add a photo of yourself with the background removed and cropped into a square. This template is designed to look best with this style. I recommend using `https://remove.bg` or searching "Remove Background AI" on Google for free alternatives.
  * Rename your image to `self.png` (deleting the old one if it exists) to replace the placeholder.
  * If background removal isn't an option, any square image will automatically be made into a circle. Images without a very tall aspect ratio work best.
      * **Example with background removed**:
      * **Example with background not removed**:

#### Mockups

  * Add up to 5 screenshots of your completed projects to the `img` folder. These can be regular screenshots or styled mockups.
  * To make future steps easier, name these files `mock1.png`, `mock2.png`, etc.
  * You can create mockups similar to the template's default ones using Canva. Instructions for this are provided at the end of this README.
      * **Example Mockup**:

-----

### 2\. Edit `Info.js`

Open your project in a code editor and navigate to `src/info/Info.js`. This file contains the data that populates your portfolio.

#### Color Scheme

Near the top, you'll find:

```javascript
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
```

These colors define the accents throughout the site (e.g., the circle behind your portrait, your name's color, about page labels, navigation underline). Experiment with colors and ensure they look good in both light and dark modes.

#### Your Information

Further down in `Info.js`, replace the default information with your own:

  * **First Name, Last Name, Initials, Position**, etc.
  * **Important**: Read the comments carefully as some values should remain untouched.
  * **Emojis**: For `miniBio` and `hobbies`, use your system's emoji keyboard (Mac: `ctrl+cmd+space`, Windows: `windows+period`) or copy from [Emojipedia](https://emojipedia.org/).
  * **Socials**: Update the links to your actual social media profiles.
  * **Portfolio**:
      * Change project titles as desired.
      * The `live` link should point to the **live demo** of your project.
      * The `source` link should point to the **repository containing the project's code** (e.g., GitHub).
      * If you have more than 5 projects, you can add more objects to the `portfolio` array by copying an existing object's structure (from opening bracket to comma) and pasting it. Feel free to reach out if you need assistance with this.

That's it\! Save `Info.js` and check your live server to see your updated, customized portfolio. You can now commit and push your changes to your repository, and deploy your site\!

-----

## Credit and Support

This portfolio template was originally created by **Payton Pierce**. I extend my sincere gratitude for providing such a well-designed and functional base.

  * **Original Creator's Twitter**: [@paytoncodes](https://twitter.com/paytoncodes)
  * **Original Creator's Email**: `paytontaylor96@gmail.com`
  * You can also post an "issue" on the original template repository for questions.

If you appreciate this template and wish to support Payton's work (creating more templates, video tutorials, articles), consider supporting them on [Ko-Fi](https://ko-fi.com/paytoncodes)\!

I am always open to constructive feedback on how to improve this README or the template itself.
