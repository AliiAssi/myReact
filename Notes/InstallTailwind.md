
---

## Install Tailwind CSS

To install and configure Tailwind CSS for your project, follow these steps:

1. **Install Tailwind CSS and its peer dependencies:**

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Generate the Tailwind configuration file:**

   ```bash
   npx tailwindcss init
   ```

   This will create a `tailwind.config.js` file in your project directory.

3. **Update the Tailwind configuration file:**

   Open `tailwind.config.js` and configure it to include the paths to your template files:

   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {},
   },
   plugins: [],
   }
   ```

   This configuration ensures Tailwind CSS purges unused styles based on the files in the specified paths.

4. **Add Tailwind directives to your CSS file:**

   In your `index.css` (or equivalent), include the following lines:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

   These directives will include Tailwind’s base styles, components, and utility classes.

---