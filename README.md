# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/0d651fdf-d958-462b-a443-5c2687077e28

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0d651fdf-d958-462b-a443-5c2687077e28) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Lovable

Simply open [Lovable](https://lovable.dev/projects/0d651fdf-d958-462b-a443-5c2687077e28) and click on Share -> Publish.

### Option 2: GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions:

1. When you push to the `main` branch, the site will be automatically built and deployed.
2. To manually trigger a deployment, go to the Actions tab in your GitHub repository and run the "Deploy to GitHub Pages" workflow.
3. The site will be available at: `https://[your-github-username].github.io/plugd-ai-landing-craft/`

The deployment workflow includes:
- Building the project with the correct base path for GitHub Pages
- Setting up client-side routing to work on GitHub Pages
- Deploying the built assets to GitHub Pages

### GitHub Pages Configuration

To use GitHub Pages with this repository:
1. Go to your repository's Settings > Pages
2. Under "Source", select "GitHub Actions"
3. Your site will be built and deployed automatically on pushes to main

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

You can also set up a custom domain with GitHub Pages by following [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
