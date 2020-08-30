-- ADMIN CREDENTIAL
INSERT INTO Users (email, password, firstName, lastName, isAdmin)
VALUES ('admin@localhost', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'Admin', 'System', 1);

-- SUBSCRIPTIONS
INSERT INTO Subscriptions (id, name, firstHourPrice, nextHalfHourPrice, fiveHoursPrice, monthPrice, eightMonthPrice, yearPrice) VALUES
(1, "Sans abonnement", 5, 2.5, 24, NULL, NULL, NULL),
(2, "Abonnement simple", 4, 2, 20, 24, NULL, 20),
(3, "Abonnement Résident", NULL, NULL, NULL, 300, 252, NULL);


-- COWORK BUILDINGS
INSERT INTO Buildings (id, name, scheduleMonThu, scheduleFri, scheduleWeekend) VALUES
(1, "CO'WORK Bastille", "9-20", "9-20", "11-20"),
(2, "CO'WORK République", "8-21", "9-23", "9-20"),
(3, "CO'WORK Odéon", "9-20", "9-20", "11-20"),
(4, "CO'WORK Place d'Italie", "9-20", "9-20", "11-20"),
(5, "CO'WORK Ternes", "8-21", "9-23", "9-20"),
(6, "CO'WORK Beaubourg", "8-21", "9-23", "9-20");

-- ROOMS OF EACH BUILDING
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

-- EQUIPMENT COWORK BASTILLE
INSERT INTO Equipment (name, isAvailable, quantity, BuildingId) VALUES
("Wi-Fi très haut débit", 1, NULL, 1), ("Plateaux repas", 1, NULL, 1), ("Boissons à volonté", 1, NULL, 1),
("Salon cozy", 1, 1, 1), ("Imprimantes", 1, 3, 1), ("Ordinateurs portables", 0, NULL, 1);

-- EQUIPMENT COWORK REPUBLIQUE
INSERT INTO Equipment (name, isAvailable, quantity, BuildingId) VALUES
("Wi-Fi très haut débit", 1, NULL, 2), ("Plateaux repas", 0, NULL, 2), ("Boissons à volonté", 1, NULL, 2),
("Salon cozy", 1, 4, 2), ("Imprimantes", 1, 3, 2), ("Ordinateurs portables", 1, 25, 2);

-- EQUIPMENT COWORK ODEON
INSERT INTO Equipment (name, isAvailable, quantity, BuildingId) VALUES
("Wi-Fi très haut débit", 1, NULL, 3), ("Plateaux repas", 1, NULL, 3), ("Boissons à volonté", 1, NULL, 3),
("Salon cozy", 1, 2, 3), ("Imprimantes", 1, 2, 3), ("Ordinateurs portables", 1, 18, 3);

-- EQUIPMENT COWORK PLACE D'ITALIE
INSERT INTO Equipment (name, isAvailable, quantity, BuildingId) VALUES
("Wi-Fi très haut débit", 1, NULL, 4), ("Plateaux repas", 1, NULL, 4), ("Boissons à volonté", 1, NULL, 4),
("Salon cozy", 1, 3, 4), ("Imprimantes", 1, 1, 4), ("Ordinateurs portables", 1, 20, 4);

-- EQUIPMENT COWORK TERNES
INSERT INTO Equipment (name, isAvailable, quantity, BuildingId) VALUES
("Wi-Fi très haut débit", 1, NULL, 5), ("Plateaux repas", 0, NULL, 5), ("Boissons à volonté", 1, NULL, 5),
("Salon cozy", 1, 4, 5), ("Imprimantes", 1, 3, 5), ("Ordinateurs portables", 1, 20, 5);

-- EQUIPMENT COWORK BEAUBOURG
INSERT INTO Equipment (name, isAvailable, quantity, BuildingId) VALUES
("Wi-Fi très haut débit", 1, NULL, 6), ("Plateaux repas", 1, NULL, 6), ("Boissons à volonté", 1, NULL, 6),
("Salon cozy", 1, 1, 6), ("Imprimantes", 1, 1, 6), ("Ordinateurs portables", 1, 20, 6);



