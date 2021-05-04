-- Meal
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
values ('Homemade Pasta', 'Gnocchi with pesto, ragu or mushroom sauce', 'Valby', '2021-10-14',10, 10.5, now()),
       ('Homemade Gnocchi','Gnocchi with pesto, ragu or mushroom sauce', 'Amager', '2021-04-12 15:17:08',10, 200, '2021-04-13 17:31:16'),
	   ('Homemade spagetti', 'Gnocchi with pesto, ragu or mushroom sauce', 'Valby', '2021-10-14',10, 10.5, now()),
	   ('Authentic Tortellini', 'This simple soup with cheese tortellini, Italian sausage, and chopped fresh spinach is quick-and-easy to prepare.', 'Valby', '2021-10-14',10, 100, now());

#1 Get all meals       
SELECT *
FROM meal;

# Add a new meal
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
values ('Authentic Tortellini Soup', 'This simple soup with cheese tortellini, Italian sausage, and chopped fresh spinach is quick-and-easy to prepare.', 'Valby', '2021-10-14',10, 100, now());

# Get a meal with any id, fx 1
SELECT *
FROM meal
WHERE title='Homemade Pasta';

# Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET description = 'This is a light and garlicky spaghetti sauce.', location= 'Milan', price=125
WHERE title LIKE '%spagetti%';

# Delete a meal with any id, fx 1
DELETE FROM meal
WHERE price = 100;

-- Reservation
# Get all reservations
SELECT *
FROM reservation;

# Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
SELECT 2, id, now(), 71708085, 'Aarika Ellingworth', 'aellingworth0@harvard.edu' 
FROM meal
WHERE title = 'Homemade Pasta';

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
SELECT 3, id, now(), 71706024, 'John Dark', 'john.dark@gmail.com' 
FROM meal
WHERE title = 'Homemade Pasta';

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
SELECT 5, id, now(), 71708085, 'Aarika Ellingworth', 'aellingworth0@harvard.edu' 
FROM meal
WHERE title = 'Homemade spagetti';

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
SELECT 5, id, now(), 71706024, 'John Dark', 'john.dark@gmail.com' 
FROM meal
WHERE title = 'Homemade spagetti';

# Alternatively if inserting with a static id
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) 
VALUES  (2, 16, now(), 71708085, 'Aarika Ellingworth', 'aellingworth0@harvard.edu'),
		(3, 17, now(), 71706024, 'John Dark', 'john.dark@gmail.com' ),
		(5, 18, now(), 71708085, 'Aarika Ellingworth', 'aellingworth0@harvard.edu'),
		(5, 19, now(), 71706024, 'John Dark', 'john.dark@gmail.com' );

# Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id = 1;

# Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = 5, contact_name = 'Angelia Jully'
WHERE id = 1;

#Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 1;

-- Review
INSERT INTO review (title, description,meal_id, stars, created_date)
SELECT 'deleicious', 'pesto was super fresh', id, 4, now()
FROM meal
WHERE title = 'Homemade Pasta';

INSERT INTO review (title, description,meal_id, stars, created_date)
SELECT 'Good', 'Thegarlic sauce was the best', id, 4, now()
FROM meal
WHERE title='Homemade spagetti';

INSERT INTO review (title, description,meal_id, stars, created_date)
SELECT 'Simply wow', 'Gnocchi with pesto, ragu or mushroom sauce was unique.', id, 5, now()
FROM meal
WHERE title='Homemade Gnocchi';

# Alternatively if inserting with a static id
INSERT INTO review (title, description,meal_id, stars, created_date)
VALUES ('deleicious', 'pesto was super fresh', 16, 4, now()),
		('Good', 'Thegarlic sauce was the best', 17, 4, now()),
        ('Simply wow', 'Gnocchi with pesto, ragu or mushroom sauce was unique.', 18, 5, now());

# Get all reviews
SELECT *
FROM review;

# Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
SELECT 'Best soup ever', 'The taste of soup was rich.', id, 5, now()
FROM meal
WHERE title='Authentic Tortellini Soup';

# Alternatively inserting with a static id
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Best soup ever', 'The taste of soup was rich.', 16, 5, now());

# Get a review with any id, fx 1
SELECT review.*
FROM review
WHERE id = 17;

# Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = 'updated review', description = 'The light and garlicky spaghetti sauce was lovely.'
WHERE id = 17;

# Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 15;

-- Additional queries
# Get meals that has a price smaller than a specific price fx 90
SELECT meal.title, meal.price
FROM meal
WHERE PRICE < 150;

# Get meals that still has available reservations
SELECT meal.title, (meal.max_reservations - COALESCE(SUM(reservation.number_of_guests), 0)) AS available_reservations
FROM meal
LEFT JOIN reservation
ON meal.id = reservation.meal_id
GROUP BY meal.id
HAVING available_reservations > 0
ORDER BY available_reservations;

# Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT meal.title
FROM meal
WHERE title LIKE '%Homemade%';

# Get meals that has been created between two dates
SELECT *
FROM meal 
WHERE (created_date BETWEEN '2021-01-12 15:17:08' AND  now());

# Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal
LIMIT 0,5;

# Get the meals that have good reviews
SELECT meal.*
FROM meal 
JOIN review ON meal.id = review.meal_id
WHERE stars >= 4;
 
# Get reservations for a specific meal sorted by created_date
SELECT reservation.*
FROM reservation
JOIN meal ON meal.id = reservation.meal_id
WHERE meal.title='Homemade spagetti'
ORDER BY reservation.created_date;

# Sort all meals by average number of stars in the reviews
SELECT meal.title, avg(review.stars)
FROM meal 
JOIN review ON meal.id=review.meal_id
GROUP BY meal.id
ORDER BY avg(review.stars);
