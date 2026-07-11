# GreenKart test plan

## Application Overview

Comprehensive test plan for GreenKart, covering product browsing, search, cart management, checkout entry, and navigation flows.

## Test Scenarios

### 1. GreenKart functional flows

**Seed:** `tests/seed.spec.ts`

#### 1.1. Browse the product catalog

**File:** `tests/greenkart/catalog-browse.spec.ts`

**Steps:**
  1. Open the GreenKart homepage in a fresh browser session.
    - expect: The homepage loads successfully and the GreenKart header is visible.
  2. Scroll through the product grid and inspect several product cards.
    - expect: Multiple products display with name, price, quantity controls, and an ADD TO CART button.
  3. Select one product card and review the visible product information.
    - expect: The product name and price are clearly visible and the quantity controls are available.

#### 1.2. Search for a product

**File:** `tests/greenkart/search.spec.ts`

**Steps:**
  1. Use the search box to enter a valid product name such as mango.
    - expect: Relevant products appear in the catalog after the search is submitted.
  2. Search for a value that should not match any product such as xyz123.
    - expect: No matching products are shown, or the page shows an empty/appropriate result state.

#### 1.3. Add a product to the cart

**File:** `tests/greenkart/cart-add.spec.ts`

**Steps:**
  1. Click ADD TO CART for one product.
    - expect: The cart count updates and the item is added to the cart.
  2. Open the cart from the header.
    - expect: The selected product appears in the cart with the correct name and price.

#### 1.4. Update quantity in the cart

**File:** `tests/greenkart/cart-quantity.spec.ts`

**Steps:**
  1. Add a product to the cart, then open the cart.
    - expect: The cart shows the added item with an initial quantity of 1.
  2. Increase the quantity using the plus control and then decrease it using the minus control.
    - expect: The quantity updates correctly and the cart total changes accordingly.

#### 1.5. Add multiple items and verify cart summary

**File:** `tests/greenkart/cart-multi-item.spec.ts`

**Steps:**
  1. Add two or more different products to the cart.
    - expect: Each product is added successfully and the cart reflects the correct number of items.
  2. Review the cart summary.
    - expect: All selected products are listed and the subtotal is calculated correctly.

#### 1.6. Verify empty cart behavior

**File:** `tests/greenkart/cart-empty.spec.ts`

**Steps:**
  1. Open the cart without adding any products.
    - expect: The cart shows an empty state and no products are listed.
  2. Try to continue with checkout from the empty cart.
    - expect: The checkout action is disabled or blocked and no invalid checkout proceeds.

#### 1.7. Access checkout entry from the cart

**File:** `tests/greenkart/checkout-entry.spec.ts`

**Steps:**
  1. Add at least one product to the cart and open the cart.
    - expect: The cart contains the selected item and checkout is available.
  2. Initiate the checkout flow.
    - expect: The checkout screen or modal appears with the selected items reflected.

#### 1.8. Navigate to offers and return to the catalog

**File:** `tests/greenkart/offers-navigation.spec.ts`

**Steps:**
  1. Click the Top Deals link from the header.
    - expect: The offers page opens successfully.
  2. Return to the main catalog view.
    - expect: The storefront appears again and shopping can continue.
