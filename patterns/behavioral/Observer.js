// The Subject (also known as Publisher)
class OrderTracker {
    constructor(orderId) {
        this.orderId = orderId;
        this.status = 'New';
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
        console.log(`➕ Observer added to Order ${this.orderId}`);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
            console.log(`➖ Observer removed from Order ${this.orderId}`);
        }
    }

    notifyObservers() {
        for (const observer of this.observers) {
            observer.update(this.orderId, this.status);
        }
    }

    updateStatus(newStatus) {
        this.status = newStatus;
        console.log(`Order ${this.orderId} status updated to: ${this.status}`);
        this.notifyObservers();
    }
}

// The Observer (also known as Subscriber) interface (conceptual)
class OrderObserver {
    update(orderId, status) {
        throw new Error("This method should be overridden!");
    }
}

// Concrete Observer 1
class EmailNotifier extends OrderObserver {
    update(orderId, status) {
        console.log(`📧 Email: Order ${orderId} is now ${status}.`);
    }
}

// Concrete Observer 2
class DashboardNotifier extends OrderObserver {
    update(orderId, status) {
        console.log(`📊 Dashboard: Order ${orderId} status updated to ${status}.`);
    }
}

export { OrderTracker, EmailNotifier, DashboardNotifier };
