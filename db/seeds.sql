-- User table 
INSERT INTO users(id, firstName, lastName, userName, email, password, createAt, updateAt)
VALUES (1, "D.B.", "Cooper", "dbcooper71", "dbcooper@gmail.com", "11041971", NOW(), NOW()),
(2, "Tony", "Montana", "theworldisyours", "tony.montana@gmail.com", "87879", NOW(), NOW()),
(3, "Pablo", "Escobar", "money", "paescobar@yahoo.com", "287987987", NOW(), NOW()),
(4, "Joaquin", "Guzman", "ElChapo", "jguzman@hotmail.com", "7879621", NOW(), NOW());



-- TourDate Table
INSERT INTO tourDates(id, date, time, location, ticketPrice, note, FOREIGNKEY, createAt, updateAt)
VALUES (1, "2021-03-22", "04:30", "San Antonio Tx", "$20-$100", "BYOB", "23", NOW(), NOW()),
(2, "2021-05-15", "07:00", "Austin Tx", "$30-$75", "bring chairs and BYOB", "24", NOW(), NOW()),
(3, "2021-04-10", "08:30", "Austin Tx", "$20-$75", "bring chairs and BYOB", "25", NOW(), NOW()),
(4, "2021-05-18", "07:40", "San Antonio Tx", "$10-$65", "BYOB", "26", NOW(), NOW());

-- bandUser Table
INSERT INTO bandUsers(id, bandName, bandBio, userName, email, genre, contact, youtube, facebook, insta, twitter, password, FOREIGNKEY, createAt, updateAt)
VALUES (1, "Coding Badly", "All about the code", "Funcoding", "codingbad@gmail.com", "rock", "youtube.com", "instagram.com", "twitter.com", "676673","23", NOW(), NOW()),
(2, "Bad Music", "tickling the ivory", "pianostrong", "babygrand@gmail.com", "classic", "youtube.com", "instagram.com", "twitter.com", "847473", "24", NOW(), NOW()),
(3, "Archtop Players", "Struming around", "steelguitars","playingthesteel@gmail.com", "rock", "youtube.com", "instagram.com", "twitter.com", "473", "25", NOW(), NOW()),
(4, "Players of the Axe", "chopping the wood with the axe", "axeplayers","axe@gmail.com", "classic", "youtube.com", "instagram.com", "twitter.com", "4787623", "26", NOW(), NOW());



-- bandMember Table
INSERT INTO bandMembers(id, firstName, lastName, contact, bandRole, facebook, insta, twitter, createAt, updateAt)
VALUES (1, "Johnny", "Rocker", "938-938-8766", "drummer", "facebook.com", "instagram.com", "twitter.com", NOW(), NOW()),
(2, "Flash", "Dancer", "392-538-8966", "guitar", "facebook.com", "instagram.com", "twitter.com", NOW(), NOW()),
(3, "Ivory", "Player", "938-548-9336", "piano", "facebook.com", "instagram.com", "twitter.com", NOW(), NOW()),
(4, "Danny", "LaRuso", "215-433-9889", "vocialist","facebook.com", "instagram.com", "twitter.com", NOW(), NOW());
