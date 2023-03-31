package gcu.backend.car;

public class Car {
    String brand;
    int price;
    String details;

    public Car(String brand, int price, String details) {
        this.brand = brand;
        this.price = price;
        this.details = details;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    @Override
    public String toString() {
        return "User{" +
                "brand='" + brand + '\'' +
                ", price=" + price +
                ", details='" + details + '\'' +
                '}';
    }
}
