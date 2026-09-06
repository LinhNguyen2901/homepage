# Assignment 0: Build Your Own Website

## Student

Linh Nguyen

## Project Overview

For Assignment 0, I created and published a personal portfolio website. The site introduces my background as a senior computer science student, summarizes my experience and strengths, presents my interests, and provides links to my resume, LinkedIn profile, and email.

## Implementation

The website was built with React and TypeScript. I used Sass for responsive styling and CSS Grid and Flexbox for the layout. The application uses reusable React components for the header and experience list. React Router with `HashRouter` provides navigation to the About, Experience, Interests, Chart, and Connect sections while remaining compatible with GitHub Pages.

I also added a D3 bar chart based on the course Lab 1 example. The chart displays annual revenue data from 2019 through 2024, includes labeled axes, and provides hover interaction with a tooltip showing the year and revenue value.

## Features

- Responsive personal portfolio layout
- About, Experience, Interests, Chart, and Connect sections
- Resume, LinkedIn, and email links
- Reusable React components
- Sass variables and nested styling
- Interactive D3 bar chart with hover tooltip
- GitHub Pages deployment through GitHub Actions

## Testing

I verified the application with the React test suite:

```bash
npm test -- --watchAll=false
```

I also created a production build successfully:

```bash
npm run build
```

## Links

- Website: https://LinhNguyen2901.github.io/homepage/
- Repository: https://github.com/LinhNguyen2901/homepage

## Conclusion

This assignment gave me practice creating a complete personal website, organizing a React project, styling a responsive interface, using Git and GitHub, and publishing a working site with GitHub Pages.
