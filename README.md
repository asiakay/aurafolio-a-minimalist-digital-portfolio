# AuraFolio: A Minimalist Digital Portfolio

AuraFolio is a visually stunning, minimalist single-page web application designed for creatives to showcase their work. It functions as a digital portfolio or exhibition space, prioritizing clean aesthetics, generous white space, and elegant typography to ensure the focus remains on the content. The application features a captivating hero section with a subtle gradient background, a responsive grid-based gallery for projects, a concise 'About' section, and a minimalist contact footer. Every element is crafted with meticulous attention to detail, featuring smooth animations, subtle micro-interactions, and a sophisticated color palette, creating a professional and immersive user experience.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/asiakay/aurafolio-a-minimalist-digital-portfolio)

## Key Features

-   **Minimalist & Elegant Design:** A clean, uncluttered, and content-focused UI that puts your work front and center.
-   **Single-Page Experience:** A smooth, seamless journey for users as they scroll through the hero, work, about, and contact sections.
-   **Responsive Grid Gallery:** A beautiful, responsive layout that perfectly showcases your projects on any device, from mobile to desktop.
-   **Stunning Visuals:** A sophisticated monochrome color palette with a single gold accent, combined with elegant typography.
-   **Interactive Polish:** Delightful micro-interactions, including subtle hover effects and smooth page animations powered by Framer Motion.
-   **Built for Performance:** A lightweight and fast-loading portfolio built with modern web technologies.

## Technology Stack

-   **Framework:** [React](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) (v1.0.0 or higher)
-   [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/aurafolio.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd aurafolio
    ```
3.  **Install dependencies:**
    ```sh
    bun install
    ```

## Development

To start the local development server, run the following command:

```sh
bun dev
```

The application will be available at `http://localhost:3000`. The server will automatically reload when you make changes to the code.

## Building for Production

To create a production-ready build of the application, run:

```sh
bun build
```

This command will compile the application and output the static files to the `dist` directory.

## Deployment

This project is configured for easy deployment to Cloudflare Pages.

### Deploy with a single click

You can deploy your own version of this project to Cloudflare with the button below.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/asiakay/aurafolio-a-minimalist-digital-portfolio)

### Manual Deployment with Wrangler

1.  **Log in to Wrangler:**
    If you haven't already, you'll need to authenticate Wrangler with your Cloudflare account.
    ```sh
    wrangler login
    ```

2.  **Deploy the application:**
    Run the deploy script, which will build the project and deploy it to your Cloudflare account.
    ```sh
    bun deploy
    ```

Wrangler will handle the build process and deploy your application, providing you with a live URL upon completion.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.