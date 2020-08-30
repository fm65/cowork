INSERT INTO Users (email, password, firstName, lastName, isAdmin)
VALUES ('admin@localhost', '$2y$10$bB4KADD/Vtp3eIwhzRHsUO0g2rPRjibglxf9lC4mwlmpjxik5uEKy', 'Admin', 'System', 1);

INSERT INTO Buildings (id, name, scheduleMonThu, scheduleFri, scheduleWeekend) VALUES
(1, "CO'WORK Bastille", "9-20", "9-20", "11-20"),
(2, "CO'WORK République", "8-21", "9-23", "9-20"),
(3, "CO'WORK Odéon", "9-20", "9-20", "11-20"),
(4, "CO'WORK Place d'Italie", "9-20", "9-20", "11-20"),
(5, "CO'WORK Ternes", "8-21", "9-23", "9-20"),
(6, "CO'WORK Beaubourg", "8-21", "9-23", "9-20");

INSERT INTO Equipment (name, isAvailable, quantity, BuildingId) VALUES
("Wi-Fi très haut débit", 1, NULL, 1),
("Plateaux repas", 1, NULL, 1),
("Boissons à volonté", 1, NULL, 1),
("Salon cozy", 1, 1, 1),
("Imprimantes", 1, 3, 1),
("Ordinateurs portables", 0, NULL, 1);



