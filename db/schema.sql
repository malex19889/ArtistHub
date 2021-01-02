-- Drops the ArtistHub if it exists currently --
DROP DATABASE IF EXISTS ArtistHub;
-- Creates the "ArtistHub" database --
CREATE DATABASE ArtistHub;


INSERT INTO Users(id, firstName, lastName, userName, email, password, createAt, updateAt)
VALUES (1, "D.B.", "Cooper", "dbcooper71", "dbcooper@gmail.com", "11041971", NOW(), NOW()),
(2, "Tony", "Montana", "theworldisyours", "tony.montana@gmail.com", "87879", NOW(), NOW()),
(3, "Pablo", "Escobar", "money", "paescobar@yahoo.com", "287987987", NOW(), NOW()),
(4, "Joaquin", "Guzman", "ElChapo", "jguzman@hotmail.com", "7879621", NOW(), NOW());

