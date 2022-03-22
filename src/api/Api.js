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
}
