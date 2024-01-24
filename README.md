# Readme

In the end, these files constitute the website, the output:
- `*.html` 
- `./css/*.css` 
- `./js/*.js` 
- `./img/*`

## Development Process:

1. Install all dependencies:
    ```bash
    npm install
    ```

2. Files are compiled from:
    ```
    ./src/*
    ```

3. Using Gulp:

   - Install Gulp globally:
     ```bash
     npm install -g gulp
     ```

   - `gulpfile.mjs` - Describe Gulp commands and their functionality.

   - To compile:
     ```bash
     gulp build
     ```

   - To compile automatically on changes:
     ```bash
     gulp watch
     ```
     Or simply:
     ```bash
     gulp
     ```
     (because it is the default task)

4. Bootstrap is also used.

5. Gulp-include-file is used as a template engine.
