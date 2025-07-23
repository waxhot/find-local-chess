# Find Local Chess

A community-driven website for discovering local chess events, tournaments, and meetups in your area. Built with Astro and deployed via GitHub Pages.

## 🚀 Features

- **Static Site Generation**: Fast, SEO-friendly pages built with Astro
- **Community Contributions**: Add events via GitHub pull requests
- **Markdown Content**: Events stored as markdown files for easy editing
- **Responsive Design**: Works great on desktop and mobile
- **GitHub Pages Deployment**: Automatically deployed via GitHub Actions

## 📁 Project Structure

```text
/
├── public/                 # Static assets
├── src/
│   ├── content/
│   │   ├── events/        # Event markdown files
│   │   └── config.ts      # Content collection schema
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro    # Homepage
│       ├── contribute.astro
│       └── events/
│           ├── index.astro     # Events listing
│           └── [...slug].astro # Individual event pages
├── .github/workflows/     # GitHub Actions
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `pnpm install`    | Installs dependencies                         |
| `pnpm dev`        | Starts local dev server at localhost:4321    |
| `pnpm build`      | Build your production site to `./dist/`      |
| `pnpm preview`    | Preview your build locally, before deploying |

## 🎯 Adding Events

### For Contributors

1. Fork this repository
2. Create a new markdown file in `src/content/events/`
3. Use the template from `/contribute` page
4. Submit a pull request

### Event Template

```markdown
---
title: "Your Event Title"
date: 2025-02-15
time: "7:00 PM"
location: "Venue Name"
address: "123 Street Name, City, State 12345"
description: "Brief description of your event"
link: "https://example.com/more-info"
organizer: "Organization or Person Name"
contact: "email@example.com"
entryFee: "$10"
timeControl: "90+30 (90 minutes + 30 second increment)"
rounds: 5
tags: ["tournament", "classical", "weekend"]
---

Detailed event description in Markdown...
```

## 🚀 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The GitHub Actions workflow:

1. Builds the Astro site
2. Uploads the static files
3. Deploys to GitHub Pages

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Update `astro.config.mjs` with your repository details:

```js
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/your-repo-name',
});
```

## 🤝 Contributing

We welcome contributions! Please see the `/contribute` page on the website for detailed instructions on how to add events.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
