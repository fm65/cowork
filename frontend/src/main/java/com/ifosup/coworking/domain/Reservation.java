package com.ifosup.coworking.domain;

import javax.persistence.*;
import javax.validation.constraints.Min;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Entity
public class Reservation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "order_date")
    private Timestamp orderDate;

    @Column(name = "start_date")
    private Timestamp startDate;

    @Column(name = "end_date")
    private Timestamp endDate;

    @Column(name = "people_number")
    @Min(1)
    private Integer peopleNumber;

    @Column(name = "space_price_per_day")
    private Float spacePricePerDay;

    @Column(name = "grand_total_price")
    private Float grandTotalPrice;

    @Column(name = "confirmed")
    private Boolean confirmed = false;

    @ManyToOne(optional = false)
    private Space space;

    @ManyToOne(optional = false)
    private User user;

    @OneToMany(mappedBy = "reservation", cascade = CascadeType.ALL)
    private Set<EquipmentOrder> equipmentOrders = new HashSet<>();

    @OneToMany(mappedBy = "reservation", cascade = CascadeType.ALL)
    private Set<ServiceOrder> serviceOrders = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Timestamp getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Timestamp orderDate) {
        this.orderDate = orderDate;
    }

    public Timestamp getStartDate() {
        return startDate;
    }

    public void setStartDate(Timestamp startDate) {
        this.startDate = startDate;
    }

    public Timestamp getEndDate() {
        return endDate;
    }

    public void setEndDate(Timestamp endDate) {
        this.endDate = endDate;
    }

    public Integer getPeopleNumber() {
        return peopleNumber;
    }

    public void setPeopleNumber(Integer peopleNumber) {
        this.peopleNumber = peopleNumber;
    }

    public Space getSpace() {
        return space;
    }

    public void setSpace(Space space) {
        this.space = space;
    }

    public Set<EquipmentOrder> getEquipmentOrders() {
        return equipmentOrders;
    }

    public void setEquipmentOrders(Set<EquipmentOrder> equipmentOrders) {
        this.equipmentOrders = equipmentOrders;
    }

    public Reservation addEquipmentOrder(EquipmentOrder equipmentOrder) {
        this.equipmentOrders.add(equipmentOrder);
        equipmentOrder.setReservation(this);
        return this;
    }

    public Set<ServiceOrder> getServiceOrders() {
        return serviceOrders;
    }

    public void setServiceOrders(Set<ServiceOrder> serviceOrders) {
        this.serviceOrders = serviceOrders;
    }

    public Reservation addServiceOrder(ServiceOrder serviceOrder) {
        this.serviceOrders.add(serviceOrder);
        serviceOrder.setReservation(this);
        return this;
    }

    public Float getSpacePricePerDay() {
        return spacePricePerDay;
    }

    public void setSpacePricePerDay(Float spacePricePerDay) {
        this.spacePricePerDay = spacePricePerDay;
    }

    public Float getGrandTotalPrice() {
        return grandTotalPrice;
    }

    public void setGrandTotalPrice(Float grandTotalPrice) {
        this.grandTotalPrice = grandTotalPrice;
    }

    public Boolean getConfirmed() {
        return confirmed;
    }

    public void setConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Reservation reservation = (Reservation) o;
        if (reservation.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), reservation.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return super.toString();
    }
}
