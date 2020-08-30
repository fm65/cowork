INSERT INTO Users (email, password, firstName, lastName, isAdmin)
VALUES ('admin@localhost', '$2y$10$bB4KADD/Vtp3eIwhzRHsUO0g2rPRjibglxf9lC4mwlmpjxik5uEKy', 'Admin', 'System', 1);

INSERT INTO Subscriptions (id, name, firstHourPrice, nextHalfHourPrice, fiveHoursPrice, monthPrice, eightMonthPrice, yearPrice) VALUES
(1, "Sans abonnement", 5, 2.5, 24, NULL, NULL, NULL),
(2, "Abonnement simple", 4, 2, 20, 24, NULL, 20),
(3, "Abonnement Résident", NULL, NULL, NULL, 300, 252, NULL);


INSERT INTO Buildings (id, name, scheduleMonThu, scheduleFri, scheduleWeekend) VALUES
(1, "CO'WORK Bastille", "9-20", "9-20", "11-20"),
(2, "CO'WORK République", "8-21", "9-23", "9-20"),
(3, "CO'WORK Odéon", "9-20", "9-20", "11-20"),
(4, "CO'WORK Place d'Italie", "9-20", "9-20", "11-20"),
(5, "CO'WORK Ternes", "8-21", "9-23", "9-20"),
(6, "CO'WORK Beaubourg", "8-21", "9-23", "9-20");

INSERT INTO Rooms (name, type, BuildingId) VALUES
("Salle 1", "Réunion", 1), ("Salle 2", "Réunion", 1), ("Salle 3", "Appel", 1),
("Salle 4", "Appel", 1), ("Salle 5", "Appel", 1),
("Salle 1", "Réunion", 2), ("Salle 2", "Réunion", 2), ("Salle 3", "Réunion", 2), ("Salle 4", "Réunion", 2), ("Salle 5", "Réunion", 2),
("Salle 6", "Réunion", 2), ("Salle 7", "Réunion", 2),
("Salle 8", "Appel", 2), ("Salle 9", "Appel", 2), ("Salle 10", "Appel", 2), ("Salle 11", "Appel", 2), ("Salle 12", "Appel", 2),
("Salle 1", "Réunion", 3), ("Salle 2", "Réunion", 3), ("Salle 3", "Réunion", 3), ("Salle 4", "Réunion", 3),
("Salle 5", "Appel", 3), ("Salle 6", "Appel", 3),
("Salle 1", "Réunion", 4), ("Salle 2", "Réunion", 4), ("Salle 3", "Réunion", 4), ("Salle 4", "Réunion", 4), ("Salle 5", "Réunion", 4),
("Salle 6", "Appel", 4), ("Salle 7", "Appel", 4), ("Salle 8", "Appel", 4), ("Salle 9", "Appel", 4),
("Salle 1", "Réunion", 5), ("Salle 2", "Réunion", 5), ("Salle 3", "Réunion", 5), ("Salle 4", "Réunion", 5), ("Salle 5", "Réunion", 5),
("Salle 6", "Réunion", 5), ("Salle 7", "Réunion", 5),
("Salle 8", "Appel", 5), ("Salle 9", "Appel", 5), ("Salle 10", "Appel", 5), ("Salle 11", "Appel", 5), ("Salle 12", "Appel", 5),
("Salle 1", "Réunion", 6), ("Salle 2", "Réunion", 6), ("Salle 3", "Appel", 6),
("Salle 4", "Appel", 6), ("Salle 5", "Appel", 6);


INSERT INTO Equipment (name, isAvailable, quantity, BuildingId) VALUES
("Wi-Fi très haut débit", 1, NULL, 1),
("Plateaux repas", 1, NULL, 1),
("Boissons à volonté", 1, NULL, 1),
("Salon cozy", 1, 1, 1),
("Imprimantes", 1, 3, 1),
("Ordinateurs portables", 0, NULL, 1);



