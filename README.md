# Paradise Nursery Shopping Application

Paradise Nursery is an online plant shop built with React and Redux Toolkit. It is the final
project for the front-end development course.

## Features

- Landing page with a background image, the company name, an About Us section and a
  "Get Started" button.
- Product listing page with 18 houseplants grouped into three categories (Air Purifying,
  Aromatic Fragrant and Medicinal). Each plant shows a thumbnail, name, description and price.
- "Add to Cart" buttons that add the plant to the cart, disable themselves once the plant is
  in the cart and update the cart icon count.
- Navbar with links to Home, Plants and Cart, shown on both the product and cart pages.
- Shopping cart page with each plant's thumbnail, name, unit price, quantity controls,
  per-plant total, delete button, total cart amount, a Checkout button (Coming Soon) and a
  Continue Shopping button.

## Tech

- React 18 + Vite
- Redux Toolkit / React Redux for the cart state

## Project structure

```
src/
  App.jsx          landing page
  AboutUs.jsx      company details
  ProductList.jsx  plant listing and navbar
  CartItem.jsx     shopping cart page
  CartSlice.jsx    Redux slice for the cart
  store.js         Redux store
```

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.
