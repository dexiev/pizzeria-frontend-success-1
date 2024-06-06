const initialState = {
  posts: {
    list: [],
  },
  user: {
    user_name: "",
    email: "",
    token: "",
    token_expires_at: "",
  },
  items: {
    list: [],
  },
  carts: {
    list: [],
    subtotal: 0,
  },
  order: {
    total_price: 0,
    full_name: "",
    phone: "",
    address: "",
    pin: "",
    apt: "",
    city: "",
    state: "",
  },
};

export default initialState;
