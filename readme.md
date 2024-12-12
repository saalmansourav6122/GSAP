# GSAP Animation Demo

This repository showcases a simple webpage with animations using [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/). The project demonstrates how to animate text and elements on the page with smooth transitions and effects.

## Features

- **Smooth text animations**: Animations for the main heading and navigation items that appear from the top with fading effects.
- **Responsive design**: The layout adjusts to various screen sizes, with a hero section that stays centered on the screen.
- **GSAP integration**: Used GSAP to create animations for the `h1` tag, `li` elements, and `.hero` div.

## Technologies Used

- **HTML5**: Markup for structuring the content of the page.
- **CSS3**: Styles for page layout and design.
- **GSAP**: JavaScript library for high-performance animations.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/saalmansourav6122/GSAP.git
   ```

# GSAP Timeline Project 🎨

Welcome to the **GSAP Timeline Project**! This repository demonstrates how to use the **GreenSock Animation Platform (GSAP)** to create smooth and dynamic animations using the `gsap.timeline()` feature. The project showcases a simple webpage with stunning animations for text and elements, creating an engaging user experience.

---

## 🚀 Introduction

The **GSAP Timeline** feature is one of the most powerful tools in GSAP, allowing you to create complex, sequenced animations with ease. It enables you to:

- **Chain Animations**: Link multiple animations together in a sequence, making them follow one another smoothly.
- **Stagger Animations**: Delay animations and apply stagger effects for an appealing rhythm.
- **Control Animations**: Pause, play, and reverse the animations in a timeline, providing full control over the animation flow.

This project is a great starting point to explore GSAP’s powerful timeline feature and understand how you can animate HTML elements with ease.

---

## ✨ Features

- **Dynamic Animations**: Includes smooth transitions for the header, navigation items, and hero section.
- **Responsive Layout**: The design adapts to different screen sizes, providing a seamless experience on both desktop and mobile.
- **GSAP Integration**: Utilizes GSAP's `timeline()` to animate page elements with easy-to-manage sequences.

---

## 🛠️ Technologies Used

- **HTML5**: For structuring the page content.
- **CSS3**: For styling the layout and page design.
- **JavaScript**: For the GSAP animation logic.
- **GSAP**: For creating smooth, performance-optimized animations.

---

## 🌟 Getting Started

### ## Prerequisites

- A modern browser (Google Chrome, Firefox, Safari, etc.)
- Basic understanding of HTML, CSS, and JavaScript.
- The GSAP library is already included in this project.

### ## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/gsap.git
   ```

# GSAP ScrollTrigger Demo 🚀

Welcome to the **GSAP ScrollTrigger** demo! This project demonstrates the power of [GSAP's ScrollTrigger plugin](https://greensock.com/scrolltrigger/) to create engaging scroll-based animations for modern web designs.

## 📖 About

**ScrollTrigger** is a plugin for GSAP that lets you create scroll-driven animations with ease. Whether you want to pin elements, animate them as they enter the viewport, or create parallax effects, ScrollTrigger is your go-to tool. This demo features:

- Smooth scrolling animations.
- Pinning elements during scroll.
- Triggering animations at specific scroll positions.

## 🎯 Features

- **Dynamic Animations**: Interactive effects based on user scrolling.
- **Pinning Elements**: Keep elements in place during scroll actions.
- **Customizable Triggers**: Control animations with specific start and end points.
- **Marker Debugging**: Visual markers to aid in development.

## 🛠 Technologies Used

- **HTML5**: Structure for the web page.
- **CSS3**: Styling for layout and design.
- **GSAP**: JavaScript library for animations.
- **ScrollTrigger**: GSAP plugin for scroll-based effects.

## 💻 Code Example

Here’s a quick look at how `ScrollTrigger` is implemented:

````javascript
gsap.to(".box", {
  x: 500,
  duration: 2,
  scrollTrigger: {
    trigger: ".box",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: true,
    pin: true,
  },
});
```

# Slick SVG Animations 🎨

This project demonstrates how to create interactive SVG animations using **GSAP (GreenSock Animation Platform)**. The animation dynamically morphs an SVG path based on user interactions, such as mouse movements and mouse leave events.

## 🌟 Features

- **Interactive Path Animation**: The SVG path morphs in response to mouse movement, creating a fluid and engaging visual effect.
- **Smooth Transitions**: Animations leverage GSAP's powerful easing functions for seamless transitions.
- **Responsive Design**: The animation adapts to different screen sizes for a consistent experience.

## 🚀 Live Demo
Check out the live demo [here](#) (Replace `#` with your live demo URL).

## 🛠️ Technologies Used

- **HTML5**: Markup structure for the page.
- **CSS3**: Styles for layout and appearance.
- **SVG**: Scalable vector graphics for interactive animations.
- **GSAP**: JavaScript animation library for smooth and performant animations.

## 📂 Project Structure

```plaintext
📁 slick-svg-animations
├── index.html      # HTML file containing the SVG and structure
├── style.css       # CSS for styling the page
├── index.js        # JavaScript file with GSAP animations
└── README.md       # Documentation for the project
````
