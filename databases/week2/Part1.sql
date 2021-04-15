

#Part 1: Working with taskstask

# 1:
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) 
VALUES ('Read a philosophy book', NULL, '2021-04-12 15:17:08', '2021-04-13 17:31:16', null, 1,1);

# 2:
UPDATE task
SET title='Read a biography book'
WHERE title = 'Read a philosophy book';

# 3: 
UPDATE task
SET due_date='2021-10-08 06:14:31'
WHERE title = 'Read a biography book';

select * from task where title = 'Read a biography book';

# 4:
# A:
UPDATE task
SET status_id = (
	SELECT id
	FROM status
	WHERE name='In progress')
WHERE title = 'Read a biography book';

# B:
UPDATE task, status
SET task.status_id = status.id
WHERE task.title = 'Read a biography book'
AND status.name = 'In progress';

# 5:
UPDATE task
SET status_id = (
	SELECT id
	FROM status
	WHERE name='Done')
WHERE title = 'Read a biography book';

# 6:
DELETE FROM task
WHERE title='Wash clothes';




