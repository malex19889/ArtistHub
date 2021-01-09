USE artisthub;

-- User table 
INSERT INTO users(firstName, lastName, userName, email, password, createdAt, updatedAt)
VALUES ("D.B.", "Cooper", "dbcooper71", "dbcooper@gmail.com", "11041971", NOW(), NOW()),
("Tony", "Montana", "theworldisyours", "tony.montana@gmail.com", "87879", NOW(), NOW()),
("Pablo", "Escobar", "money", "paescobar@yahoo.com", "287987987", NOW(), NOW()),
("Joaquin", "Guzman", "ElChapo", "jguzman@hotmail.com", "7879621", NOW(), NOW());



-- TourDate Table
INSERT INTO tourDates(tourName, date, time, location, ticketPrice, notes,  createdAt, updatedAt)
VALUES ("Touring Date", "2021-03-22", "04:30", "San Antonio Tx", "$20-$100", "BYOB", NOW(), NOW()),
("Roady Life", "2021-05-15", "07:00", "Austin Tx", "$30-$75", "bring chairs and BYOB", NOW(), NOW()),
("Living on the Edge","2021-04-10", "08:30", "Austin Tx", "$20-$75", "bring chairs and BYOB", NOW(), NOW()),
("When do we go Home","2021-05-18", "07:40", "San Antonio Tx", "$10-$65", "BYOB", NOW(), NOW());
 
-- bandUser Table
INSERT INTO bandUsers(firstName, lastName, bandName, bandBio, userName, email, genre, youtube, insta, twitter, password, createdAt, updatedAt)
VALUES ("Tony", "D","Coding Badly", "All about the code", "Funcoding", "codingbad@gmail.com", "rock", "youtube.com", "instagram.com", "twitter.com", "676673", NOW(), NOW()),
("Frank","Fish","Bad Music", "tickling the ivory", "pianostrong", "babygrand@gmail.com", "classic", "youtube.com", "instagram.com", "twitter.com", "847473",  NOW(), NOW()),
("David", "G", "Archtop Players", "Struming around", "steelguitars","playingthesteel@gmail.com", "rock", "youtube.com", "instagram.com", "twitter.com", "473",  NOW(), NOW()),
("Michael","W","Players of the Axe", "chopping the wood with the axe", "axeplayers","axe@gmail.com", "classic", "youtube.com", "instagram.com", "twitter.com", "4787623", NOW(), NOW());



-- bandMember Table
INSERT INTO bandMembers(firstName, lastName, contact, bandRole, facebook, insta, twitter,BandUserId, createdAt, updatedAt)
VALUES ("Johnny", "Rocker", "938-938-8766", "drummer", "facebook.com", "instagram.com", "twitter.com",1, NOW(), NOW()),
("Flash", "Dancer", "392-538-8966", "guitar", "facebook.com", "instagram.com", "twitter.com",2, NOW(), NOW()),
("Ivory", "Player", "938-548-9336", "piano", "facebook.com", "instagram.com", "twitter.com",3, NOW(), NOW()),
("Danny", "LaRuso", "215-433-9889", "vocialist","facebook.com", "instagram.com", "twitter.com",4, NOW(), NOW());