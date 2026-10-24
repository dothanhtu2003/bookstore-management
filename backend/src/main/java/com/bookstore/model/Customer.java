package com.bookstore.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;

    @Column(unique = true, nullable = false, length = 20)
    private String customerCode;

    @Column(name = "debt_amount", precision = 12, scale = 2)
    private BigDecimal debtAmount = BigDecimal.ZERO;

    // Getters and Setters
    public Integer getCustomerId() { return customerId; }
    public void setCustomerId(Integer customerId) { this.customerId = customerId; }
    public String getCustomerCode() { return customerCode; }
    public void setCustomerCode(String customerCode) { this.customerCode = customerCode; }
    public BigDecimal getDebtAmount() { return debtAmount; }
    public void setDebtAmount(BigDecimal debtAmount) { this.debtAmount = debtAmount; }
}