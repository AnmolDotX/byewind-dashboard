# JustPay Dashboard - Static Pixel-Perfect Design Implementation

This project is a static, pixel-perfect implementation of a dashboard application, developed as an assignment for JusPay. The primary goal was to meticulously replicate a provided Figma design using modern web technologies.

## 🌟 Overview

The assignment involved translating a detailed Figma design into a functional, static web dashboard. I've strived for a high degree of pixel-perfection, achieving approximately `95%` accuracy. Minor deviations include the use of alternative icons where exact matches were unavailable and the integration of a different pie chart library due to specific Figma library constraints. Despite these minor adjustments, the overall design fidelity and user experience remain consistent with the original design.

The dashboard features a dynamic layout with interactive elements, including a collapsible left sidebar for navigation, a toggleable right sidebar for activities/notifications, and a theme switcher for light/dark mode. Most of the data displayed is static or generated using dummy data, as per the project requirements.

## ✨ Features

- **Pixel-Perfect Design:** Close replication of the provided Figma design.
- **NOT-Responsive Layout:** As no design was provided for mobile or tablet, so it is made only for laptops or bigger screen.
- **Collapsible Left Sidebar:** Dynamic navigation with nested routes.
- **Fully Collapsible Right Sidebar:** For activities, notifications, or supplementary content.
- **Dynamic Breadcrumbs:** Automatically updates based on the current route in the App Router.
- **Dark/Light Theme Toggle:** Seamless switching between themes with a dedicated button in the header.
- **Static Data:** Content is primarily driven by dummy data, fulfilling the static nature of the assignment.

## 🚀 Technologies Used

- **Next.js 15 (App Router):** The React framework for building fast web applications.
- **TypeScript:** For type-safe development.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Shadcn UI:** Reusable components, including the robust Breadcrumb component.
- **`next-themes`:** For easy and robust dark/light theme management.
- **`lucide-react`:** A collection of beautiful, handcrafted SVG icons.
- **`react-icons`:** For additional icon sets which were not there in lucide-react.

## 🛠️ Local Setup Instructions

To get a local copy of the project up and running on your machine, follow these simple steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/AnmolDotX/byewind-dashboard.git
    cd byewind-dashboard
    ```

2.  **Install dependencies:**
    This project uses `npm` as its package manager.

    ```bash
    npm install --legacy-peer-deps
    ```

    _Note: `--legacy-peer-deps` is used to handle potential peer dependency conflicts with older packages, ensuring a smoother installation on next.js 15 and react 19._

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Visit the application:**
    Open your web browser and navigate to `http://localhost:3000`.

You should now see the dashboard application running locally, showcasing the static pixel-perfect design.

---

### 🗓️ Development Timeline

The project was developed within a 2-day timeframe, as the email was seen 2 days after it was received. Despite this, the assignment's constraints and requirements were fully adhered to, and it was completed before the deadline.
