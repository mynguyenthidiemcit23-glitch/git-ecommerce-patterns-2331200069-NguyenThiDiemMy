import { InventoryService } from "../../services/InventoryService.js";
import { PaymentService } from "../../services/PaymentService.js";
import { ShippingService } from "../../services/ShippingService.js";

class CheckoutFacade {
  constructor() {
    this.inventoryService = new InventoryService();
    this.paymentService = new PaymentService();
    this.shippingService = new ShippingService();
  }

  placeOrder(orderDetails) {
    // TODO: Implement the Facade method.
    // This method should orchestrate the calls to the subsystem services
    // in the correct order to simplify the checkout process.
    // 1. Check if all products are in stock using `inventoryService.checkStock()`.
    // 2. If they are, process the payment using `paymentService.processPayment()`.
    // 3. If payment is successful, arrange shipping using `shippingService.arrangeShipping()`.
    // 4. Log the result of each step. If a step fails, log it and stop.

    console.log("Starting checkout process...");

    // Step 1: Check if all products are in stock
    console.log("Checking inventory...");
    const inStock = this.inventoryService.checkStock(orderDetails.productIds);

    if (!inStock) {
      console.log("❌ Checkout failed: Products are out of stock.");
      return false;
    }
    console.log("✅ All products are in stock.");

    // Step 2: Process payment
    console.log("Processing payment...");
    const paymentSuccess = this.paymentService.processPayment(
      orderDetails.userId,
      orderDetails.productIds,
    );

    if (!paymentSuccess) {
      console.log("❌ Checkout failed: Payment processing failed.");
      return false;
    }
    console.log("✅ Payment processed successfully.");

    // Step 3: Arrange shipping
    console.log("Arranging shipping...");
    const shippingSuccess = this.shippingService.arrangeShipping(
      orderDetails.shippingInfo,
    );

    if (!shippingSuccess) {
      console.log("❌ Checkout failed: Shipping arrangement failed.");
      return false;
    }
    console.log("✅ Shipping arranged successfully.");

    console.log("🎉 Order placed successfully!");
    return true;
  }
}

export { CheckoutFacade };
