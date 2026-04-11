const hotDishes = [
  { id: 1, name: "Spicy seasoned seafood noodles", price: 2.29, available: 20, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=200&auto=format&fit=crop" },
  { id: 2, name: "Salted Pasta with mushroom sauce", price: 2.69, available: 11, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=200&auto=format&fit=crop" },
  { id: 3, name: "Beef dumpling in hot and sour soup", price: 2.99, available: 16, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=200&auto=format&fit=crop" },
  { id: 4, name: "Healthy noodle with spinach leaf", price: 3.29, available: 22, image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=200&auto=format&fit=crop" },
  { id: 5, name: "Spicy instant noodle with special omelette", price: 3.59, available: 17, image: "https://images.unsplash.com/photo-1555126634-ae2344793547?q=80&w=200&auto=format&fit=crop" },
  { id: 6, name: "Hot spicy fried rice with omelet", price: 3.49, available: 13, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200&auto=format&fit=crop" },
  { id: 7, name: "Classic Tonkotsu Ramen", price: 4.19, available: 10, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=200&auto=format&fit=crop" },
  { id: 8, name: "Creamy Truffle Pasta", price: 5.69, available: 5, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=200&auto=format&fit=crop" },
  { id: 9, name: "Szechuan Pork Dumplings", price: 3.50, available: 12, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=200&auto=format&fit=crop" },
  { id: 10, name: "Vegetarian Tofu Noodles", price: 2.89, available: 18, image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=200&auto=format&fit=crop" }
];

const coldDishes = [
  { id: 201, name: "Fresh Summer Salad", price: 3.10, available: 10, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop" },
  { id: 202, name: "Cold Wasabi Noodles", price: 4.20, available: 8, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=200&auto=format&fit=crop" },
  { id: 203, name: "Cucumber Dill Salad", price: 2.50, available: 12, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop" },
  { id: 204, name: "Spicy Tuna Tartare", price: 6.50, available: 5, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=200&auto=format&fit=crop" },
  { id: 205, name: "Sesame Ginger Slaw", price: 3.00, available: 15, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop" },
  { id: 206, name: "Cold Soba Noodles", price: 4.00, available: 9, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=200&auto=format&fit=crop" },
  { id: 207, name: "Avocado Citrus Bowl", price: 5.20, available: 7, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop" },
  { id: 208, name: "Chilled Tomato Gazpacho", price: 3.80, available: 11, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=200&auto=format&fit=crop" },
  { id: 209, name: "Mediterranean Chickpea", price: 4.10, available: 6, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop" },
  { id: 210, name: "Mango Chicken Salad", price: 5.50, available: 8, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=200&auto=format&fit=crop" }
];

const grill = [
  { id: 301, name: "Grilled BBQ Ribs", price: 8.50, available: 5, image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=200&auto=format&fit=crop" },
  { id: 302, name: "Charcoal Grilled Steak", price: 12.99, available: 3, image: "https://images.unsplash.com/photo-1544025162-8350616b24d7?q=80&w=200&auto=format&fit=crop" },
  { id: 303, name: "Honey Glazed Salmon", price: 9.99, available: 6, image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=200&auto=format&fit=crop" },
  { id: 304, name: "Spicy Grilled Chicken", price: 7.50, available: 8, image: "https://images.unsplash.com/photo-1544025162-8350616b24d7?q=80&w=200&auto=format&fit=crop" },
  { id: 305, name: "Lamb Skewers", price: 6.50, available: 12, image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=200&auto=format&fit=crop" },
  { id: 306, name: "Grilled Vegetables", price: 4.99, available: 15, image: "https://images.unsplash.com/photo-1544025162-8350616b24d7?q=80&w=200&auto=format&fit=crop" },
  { id: 307, name: "Pork Belly BBQ", price: 8.00, available: 7, image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=200&auto=format&fit=crop" },
  { id: 308, name: "Garlic Butter Shrimp", price: 10.50, available: 4, image: "https://images.unsplash.com/photo-1544025162-8350616b24d7?q=80&w=200&auto=format&fit=crop" },
  { id: 309, name: "Smoked Brisket", price: 14.00, available: 2, image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=200&auto=format&fit=crop" },
  { id: 310, name: "BBQ Pineapple", price: 3.50, available: 10, image: "https://images.unsplash.com/photo-1544025162-8350616b24d7?q=80&w=200&auto=format&fit=crop" }
];

const appetizer = [
  { id: 401, name: "Crispy Spring Rolls", price: 2.50, available: 20, image: "https://images.unsplash.com/photo-1561754020-f43501a4e10b?q=80&w=200&auto=format&fit=crop" },
  { id: 402, name: "Spicy Chicken Wings", price: 4.99, available: 15, image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?q=80&w=200&auto=format&fit=crop" },
  { id: 403, name: "Cheese Sticks", price: 3.50, available: 18, image: "https://images.unsplash.com/photo-1561754020-f43501a4e10b?q=80&w=200&auto=format&fit=crop" },
  { id: 404, name: "Garlic Bread", price: 2.00, available: 25, image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?q=80&w=200&auto=format&fit=crop" },
  { id: 405, name: "Fried Calamari", price: 5.50, available: 8, image: "https://images.unsplash.com/photo-1561754020-f43501a4e10b?q=80&w=200&auto=format&fit=crop" },
  { id: 406, name: "Stuffed Mushrooms", price: 4.00, available: 12, image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?q=80&w=200&auto=format&fit=crop" },
  { id: 407, name: "Onion Rings", price: 3.00, available: 20, image: "https://images.unsplash.com/photo-1561754020-f43501a4e10b?q=80&w=200&auto=format&fit=crop" },
  { id: 408, name: "Nachos Supreme", price: 6.00, available: 6, image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?q=80&w=200&auto=format&fit=crop" },
  { id: 409, name: "Jalapeno Poppers", price: 4.50, available: 14, image: "https://images.unsplash.com/photo-1561754020-f43501a4e10b?q=80&w=200&auto=format&fit=crop" },
  { id: 410, name: "Pita and Hummus", price: 3.50, available: 16, image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?q=80&w=200&auto=format&fit=crop" }
];

const dessert = [
  { id: 501, name: "Matcha Ice Cream", price: 3.00, available: 25, image: "https://images.unsplash.com/photo-1563805042-7684c8e9e533?q=80&w=200&auto=format&fit=crop" },
  { id: 502, name: "Chocolate Lava Cake", price: 4.50, available: 12, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=200&auto=format&fit=crop" },
  { id: 503, name: "Strawberry Cheesecake", price: 5.00, available: 8, image: "https://images.unsplash.com/photo-1563805042-7684c8e9e533?q=80&w=200&auto=format&fit=crop" },
  { id: 504, name: "Tiramisu", price: 4.80, available: 10, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=200&auto=format&fit=crop" },
  { id: 505, name: "Crème Brûlée", price: 5.50, available: 6, image: "https://images.unsplash.com/photo-1563805042-7684c8e9e533?q=80&w=200&auto=format&fit=crop" },
  { id: 506, name: "Vanilla Bean Panna Cotta", price: 4.20, available: 14, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=200&auto=format&fit=crop" },
  { id: 507, name: "Mango Sorbet", price: 3.50, available: 20, image: "https://images.unsplash.com/photo-1563805042-7684c8e9e533?q=80&w=200&auto=format&fit=crop" },
  { id: 508, name: "Brownie Sundae", price: 6.00, available: 5, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=200&auto=format&fit=crop" },
  { id: 509, name: "Apple Pie", price: 4.00, available: 11, image: "https://images.unsplash.com/photo-1563805042-7684c8e9e533?q=80&w=200&auto=format&fit=crop" },
  { id: 510, name: "Macarons Assortment", price: 6.50, available: 7, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=200&auto=format&fit=crop" }
];

const combos = [
  { id: 101, name: "Classic Noodles Combo", price: 25.29, available: 20, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=300&auto=format&fit=crop", desc: "Perfect lunch combo with Noodles and drink<br>Includes:<br>• Spicy Seasoned Seafood Noodles<br>• Soft Drink" },
  { id: 102, name: "Seafood Delight Combo", price: 28.50, available: 15, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=300&auto=format&fit=crop", desc: "Perfect dinner combo with main and side<br>Includes:<br>• Garlic Butter Shrimp<br>• Fresh Summer Salad" },
  { id: 103, name: "BBQ Meat Lover's", price: 32.99, available: 10, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=300&auto=format&fit=crop", desc: "For the ultimate meat lover<br>Includes:<br>• Charcoal Grilled Steak<br>• Cold Beer" },
  { id: 104, name: "Vegan Super Feast", price: 22.00, available: 18, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=300&auto=format&fit=crop", desc: "Healthy and filling vegan option<br>Includes:<br>• Vegetarian Tofu Noodles<br>• Matcha Ice Cream" },
  { id: 105, name: "Spicy Fire Combo", price: 24.50, available: 12, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=300&auto=format&fit=crop", desc: "Only for the brave<br>Includes:<br>• Spicy instant noodle<br>• Spicy Chicken Wings" },
  { id: 106, name: "Italian Classic Combo", price: 27.00, available: 14, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=300&auto=format&fit=crop", desc: "A true classic<br>Includes:<br>• Creamy Truffle Pasta<br>• Tiramisu" },
  { id: 107, name: "Quick Lunch Box", price: 18.99, available: 30, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=300&auto=format&fit=crop", desc: "Fast and easy<br>Includes:<br>• Crispy Spring Rolls<br>• Mango Chicken Salad" },
  { id: 108, name: "Steak & Soup Combo", price: 35.50, available: 5, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=300&auto=format&fit=crop", desc: "A heavy, satisfying meal<br>Includes:<br>• Smoked Brisket<br>• Beef dumpling soup" },
  { id: 109, name: "Sweet Tooth Special", price: 15.00, available: 20, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=300&auto=format&fit=crop", desc: "Sugar rush guaranteed<br>Includes:<br>• Chocolate Lava Cake<br>• Brownie Sundae" },
  { id: 110, name: "Family Share Plate", price: 45.00, available: 8, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=300&auto=format&fit=crop", desc: "Enough for 3-4 people<br>Includes:<br>• 4x Classic Noodles<br>• 4x Spring Rolls" },
  { id: 111, name: "Student Budget Box", price: 12.50, available: 40, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=300&auto=format&fit=crop", desc: "Cheap and filling<br>Includes:<br>• Fried Rice<br>• Soft Drink" },
  { id: 112, name: "Premium Seafood Platter", price: 55.00, available: 4, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=300&auto=format&fit=crop", desc: "The ultimate luxury<br>Includes:<br>• Grilled Salmon<br>• Butter Shrimp" }
];

let cart = [];
let currentOrderType = 'Pick Up';
let orderHistory = [];

// Elements
const dishGrid = document.getElementById('dish-grid');
const cartItemsContainer = document.getElementById('cart-items');
const subtotalEl = document.getElementById('subtotal');
const modalSubtotalEl = document.getElementById('modal-subtotal');
const modalCartItemsContainer = document.getElementById('modal-cart-items');
const paymentModal = document.getElementById('payment-modal');
const sidebar = document.querySelector('.pos-sidebar');
const mobileCartFab = document.getElementById('mobile-cart-fab');
const fabQty = document.getElementById('fab-qty');

// Init
function init() {
  renderCombos();
  renderCart();
  setupEventListeners();
}

function renderStandardCategory(itemsArray) {
  dishGrid.innerHTML = '';
  dishGrid.className = 'dish-grid';
  itemsArray.forEach(dish => {
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}" class="dish-image">
      <div class="dish-info">
        <h3 class="dish-title">${dish.name}</h3>
        <p class="dish-price text-main bold">$ ${dish.price.toFixed(2)}</p>
        <p class="text-muted" style="font-size:14px; margin-top:4px;">${dish.available} Bowls available</p>
      </div>
    `;
    card.addEventListener('click', () => addToCart(dish));
    dishGrid.appendChild(card);
  });
}

function renderCombos() {
  dishGrid.innerHTML = '';
  dishGrid.className = 'dish-grid combos-grid';
  combos.forEach(combo => {
    const card = document.createElement('div');
    card.className = 'combo-card';
    card.innerHTML = `
      <img src="${combo.image}" alt="${combo.name}" class="dish-image">
      <div class="dish-info">
        <h3 class="combo-title">${combo.name}</h3>
        <p class="combo-desc">${combo.desc}</p>
        <p class="combo-price text-main bold">$ ${combo.price.toFixed(2)}</p>
        <p class="text-muted" style="font-size:14px; margin-top:8px;">${combo.available} Bowls available</p>
      </div>
    `;
    card.addEventListener('click', () => addToCart(combo));
    dishGrid.appendChild(card);
  });
}

function truncate(str, n) {
  return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
}

function addToCart(dish) {
  const existing = cart.find(item => item.id === dish.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...dish, qty: 1, note: '' });
  }
  renderCart();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
  }
  renderCart();
}

function deleteItem(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
}

function updateNote(id, note) {
  const item = cart.find(i => i.id === id);
  if (item) item.note = note;
}

function renderCart() {
  if (cart.length === 0) {
    sidebar.classList.add('hidden');
    if (mobileCartFab) mobileCartFab.classList.remove('show');
  } else {
    sidebar.classList.remove('hidden');
    if (mobileCartFab) {
      mobileCartFab.classList.add('show');
      const numItems = cart.reduce((acc, item) => acc + item.qty, 0);
      if (fabQty) fabQty.innerText = numItems;
    }
  }

  let subtotal = 0;
  cartItemsContainer.innerHTML = '';
  modalCartItemsContainer.innerHTML = '';

  cart.forEach(item => {
    const totalItemPrice = item.price * item.qty;
    subtotal += totalItemPrice;

    // Build sidebar cart item
    const cartItemHtml = `
      <div class="cart-item">
        <div class="cart-item-header">
          <div class="cart-item-info">
            <img src="${item.image}" alt="img">
            <div>
              <h4 class="cart-item-title" title="${item.name}">${truncate(item.name, 20)}</h4>
              <p class="cart-item-price text-muted">$ ${item.price.toFixed(2)}</p>
            </div>
          </div>
          <div class="cart-qty-price">
            <div class="qty-input">${item.qty}</div>
            <p class="cart-total-price">$ ${totalItemPrice.toFixed(2)}</p>
          </div>
        </div>
        <div class="cart-item-actions">
          <input type="text" class="order-note-input" placeholder="Order Note..." value="${item.note}" data-id="${item.id}">
          <button class="btn-delete" onclick="deleteItem(${item.id})"><i class="ph ph-trash"></i></button>
        </div>
      </div>
    `;
    cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHtml);
    modalCartItemsContainer.insertAdjacentHTML('beforeend', cartItemHtml); // exact same html structure works for modal
  });

  const totalsText = '$ ' + subtotal.toFixed(2);
  subtotalEl.innerText = totalsText;
  modalSubtotalEl.innerText = totalsText;

  // Re-bind note inputs
  document.querySelectorAll('.order-note-input').forEach(input => {
    input.addEventListener('change', (e) => updateNote(parseInt(e.target.dataset.id), e.target.value));
  });
}

function setupEventListeners() {
  // Tabs toggle logic
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      
      const tabText = e.target.textContent.trim();
      if (tabText === 'Combos') {
        renderCombos();
      } else if (tabText === 'Hot Dishes') {
        renderStandardCategory(hotDishes);
      } else if (tabText === 'Cold Dishes') {
        renderStandardCategory(coldDishes);
      } else if (tabText === 'Grill') {
        renderStandardCategory(grill);
      } else if (tabText === 'Appetizer') {
        renderStandardCategory(appetizer);
      } else if (tabText === 'Dessert') {
        renderStandardCategory(dessert);
      }
    });
  });

  // Dual Panel Modal Elements
  const continueBtn = document.getElementById('continue-payment-btn');
  const closeBtn = document.getElementById('close-modal-btn');
  const cancelBtn = document.getElementById('cancel-payment-btn');
  
  const modalLeft = document.querySelector('.modal-left');
  const modalRight = document.querySelector('.modal-right');
  const mobileContinueToPayBtn = document.getElementById('mobile-continue-to-pay-btn');
  const mobileBackToCartBtn = document.getElementById('mobile-back-to-cart-btn');

  function openPaymentModalWithStep1() {
    paymentModal.classList.add('show');
    // Mobile reset to step 1
    modalLeft.classList.remove('hide-step');
    modalLeft.classList.add('show-step');
    modalRight.classList.remove('show-step');
    modalRight.classList.add('hide-step');
  }

  continueBtn.addEventListener('click', openPaymentModalWithStep1);

  const closeModal = () => {
    paymentModal.classList.remove('show');
    modalLeft.classList.remove('hide-step', 'show-step');
    modalRight.classList.remove('hide-step', 'show-step');
  };
  
  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);

  // Mobile multi-step listeners
  if (mobileContinueToPayBtn) {
    mobileContinueToPayBtn.addEventListener('click', () => {
      modalLeft.classList.remove('show-step');
      modalLeft.classList.add('hide-step');
      modalRight.classList.remove('hide-step');
      modalRight.classList.add('show-step');
    });
  }

  if (mobileBackToCartBtn) {
    mobileBackToCartBtn.addEventListener('click', () => {
      modalRight.classList.remove('show-step');
      modalRight.classList.add('hide-step');
      modalLeft.classList.remove('hide-step');
      modalLeft.classList.add('show-step');
    });
  }

  // Payment Methods Select
  document.querySelectorAll('.payment-card').forEach(card => {
    card.addEventListener('click', function() {
      document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      this.querySelector('input').checked = true;
    });
  });
// Order Type Sync Logic
  const mainOrderTypeBtn = document.getElementById('main-order-type-btn');
  const sidebarPickupBtn = document.getElementById('sidebar-pickup-btn');
  const sidebarDeliveryBtn = document.getElementById('sidebar-delivery-btn');

  function setOrderType(type) {
    currentOrderType = type;
    mainOrderTypeBtn.innerHTML = `<i class="ph ph-caret-down"></i> ${type}`;
    
    if (type === 'Pick Up') {
      sidebarPickupBtn.classList.add('active');
      sidebarDeliveryBtn.classList.remove('active');
    } else {
      sidebarPickupBtn.classList.remove('active');
      sidebarDeliveryBtn.classList.add('active');
    }
    
    renderDynamicFormFields();
  }

  mainOrderTypeBtn.addEventListener('click', () => {
    setOrderType(currentOrderType === 'Pick Up' ? 'Delivery' : 'Pick Up');
  });
  sidebarPickupBtn.addEventListener('click', () => setOrderType('Pick Up'));
  sidebarDeliveryBtn.addEventListener('click', () => setOrderType('Delivery'));

  // Mobile Nav Toggle Logic
  const appMenuBtn = document.getElementById('app-menu-btn');
  const appNavLinks = document.getElementById('app-nav-links');
  if (appMenuBtn) {
    appMenuBtn.addEventListener('click', () => {
      appNavLinks.classList.toggle('show');
    });
  }

  // Mobile FAB Click
  if (mobileCartFab) {
    mobileCartFab.addEventListener('click', () => {
      openPaymentModalWithStep1();
    });
  }

  // Dynamic Payment Form Logic
  const dynamicFormFields = document.getElementById('dynamic-form-fields');
  
  function renderDynamicFormFields() {
    if (currentOrderType === 'Pick Up') {
      dynamicFormFields.innerHTML = `
        <div class="flex gap-4 mb-4" style="margin-bottom: 16px;">
          <div class="input-group flex-1">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" required id="cust-name">
          </div>
          <div class="input-group flex-1">
            <label>Phone Number</label>
            <input type="tel" placeholder="+123 456 7890" required id="cust-phone">
          </div>
        </div>
      `;
    } else {
      dynamicFormFields.innerHTML = `
        <div class="flex gap-4 mb-4" style="margin-bottom: 16px;">
          <div class="input-group flex-1">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" required id="cust-name">
          </div>
          <div class="input-group flex-1">
            <label>Phone Number</label>
            <input type="tel" placeholder="+123 456 7890" required id="cust-phone">
          </div>
        </div>
        <div class="input-group" style="margin-bottom: 16px;">
          <label>Delivery Location</label>
          <input type="text" placeholder="123 Main St, Appt 4B" required id="cust-location">
        </div>
      `;
    }
  }

  // Initial render setup
  setOrderType(currentOrderType);
  
  // History Modal Logic
  const historyModal = document.getElementById('history-modal');
  const historyNavBtn = document.getElementById('history-nav-btn');
  const closeHistoryBtn = document.getElementById('close-history-btn');
  const historyList = document.getElementById('history-list');
  const checkoutForm = document.getElementById('checkout-form');

  historyNavBtn.addEventListener('click', (e) => {
    e.preventDefault();
    renderHistory();
    historyModal.classList.add('show');
  });

  closeHistoryBtn.addEventListener('click', () => {
    historyModal.classList.remove('show');
  });

  function renderHistory() {
    if (orderHistory.length === 0) {
      historyList.innerHTML = `<p class="text-muted text-center" style="margin-top: 40px;">No previous orders found.</p>`;
      return;
    }
    
    let html = '';
    orderHistory.forEach((o, index) => {
      html += `
        <div style="background-color: var(--surface-light); border: 1px solid var(--border); border-radius: 8px; padding: 16px; margin-bottom: 12px;">
          <div class="flex justify-between margin-bottom">
            <h3 style="color: var(--primary);">Order #${o.orderId}</h3>
            <span class="text-muted border-radius" style="background-color: var(--bg); padding: 4px 8px; font-size: 12px;">${o.type}</span>
          </div>
          <p class="text-main" style="margin-bottom: 8px;"><strong>Total:</strong> $${o.total.toFixed(2)}</p>
          <p class="text-muted" style="font-size: 14px;"><strong>Customer:</strong> ${o.customer}</p>
          <div style="margin-top: 12px; font-size: 13px;">
            ${o.items.map(i => `<div>${i.qty}x ${i.name}</div>`).join('')}
          </div>
        </div>
      `;
    });
    historyList.innerHTML = html;
  }

  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    const custName = document.getElementById('cust-name').value;
    
    // Save to history
    const orderSum = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    orderHistory.push({
      orderId: Math.floor(Math.random() * 8999) + 1000,
      type: currentOrderType,
      customer: custName,
      total: orderSum,
      items: [...cart]
    });
    
    // Clear cart and close modal
    cart = [];
    renderCart();
    closeModal();
    alert("Payment Confirmed! Order sent to kitchen.");
  });
}

// Start
init();
