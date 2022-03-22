export class Api {
  static MAIN_ROUTE = "https://kenzie-food-api.herokuapp.com";

  static async getPublicProducts() {
    const response = await fetch(`${this.MAIN_ROUTE}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }

  static async registerApi(newUser) {
    const response = await fetch(`${this.MAIN_ROUTE}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    return data;
  }

  static async loginApi(loginUser) {
    const response = await fetch(`${this.MAIN_ROUTE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    });
    const data = await response.json();
    return data;
  }

  static async createProduct(token, obj) {
    const response = await fetch(`${this.MAIN_ROUTE}/my/products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: `${obj}`,
    });
    const data = await response.json();
    return data;
  }
  static async getMyProducts(token) {
    const response = await fetch(`${this.MAIN_ROUTE}/my/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }
}
