# Frontend Mentor - E-commerce product page

## Solution preview

<video autoPlay="autoplay" loop="loop" class="object-cover" muted playsinline >
    <source src="./public/design/my-show-case.mp4" type="video/mp4"  />
</video>
            
<!-- <p align="center">
  <img src="images/loopstudios.gif">
</p>
<p align="center"> -->

## The challenge

The challenge is to build out [E-commerce product page](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6) and get it looking as close to the design as possible, and i added my own feature as bonus 😎

- Design reference found in `/design`.
- In `src/page/product` you will find md files for each item easily edit and add product.
- `src/layout/Product.astro` template design for all product using [astro component](https://docs.astro.build/core-concepts/astro-components/) .
- In `src/store` using the amazing [nanostores](https://github.com/nanostores/nanostores) for state managing and to moving logic from components to stores.
- Store your items and price calculation are kept in local store until you delete an item.
- `UseMediaQuery.jsx` hook for component with conditional rendering element based on their device's screen size.
- See hover states for all interactive elements on the page.

## Tools I used

- [Astor Build](https://github.com/snowpackjs/astro)
- Preact
- [Tailwind](https://github.com/tailwindlabs/tailwindcss)
- Gsap 3
- [Nanostores](https://github.com/nanostores/nanostores)
- [Nanostores / persistent](https://github.com/nanostores/persistent)

## Learning outcomes

My focus for this project is to practices using [Astor Build](https://github.com/snowpackjs/astro) as it a still new technology but powerful workflow. I was able to implement:

1. Cart store your items even when site is closed.
2. Layout template for each product just add the md file and astro build the page with the right end-point
3. Gallery scroll and light-box without any fancy library.
4. Dark mode 😎.
5. Styling with tailwind css for mobile and Dak Mode.
6. Mobile nav animations using Gsap 3
7. One file Component everything in on concise file.

## My profile at Frontendmentor

[Artmade](https://www.frontendmentor.io/profile/Artmade-studio)

![Design preview for E-commerce product page coding challenge](./public/design/active-states-basket-empty.jpg)
