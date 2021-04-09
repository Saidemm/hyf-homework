use	 hyf_lesson1;

#1 
SELECT count(*)
FROM task;

#2
SELECT count(*)
FROM task
WHERE due_date IS NOT NULL;

#3
SELECT task.*
FROM status JOIN task ON task.status_id=status.id
WHERE status.name = "done";

#4
SELECT task.*
FROM status JOIN task ON task.status_id=status.id
WHERE status.name <> "done";

# QUERY 5
SELECT *
FROM task
ORDER BY created DESC;

# QUERY 6
SELECT *
FROM task
ORDER BY created DESC
LIMIT 0, 1;

# QUERY 7
SELECT title, due_date
FROM task
WHERE title LIKE "%database%" OR description LIKE "%database%";

# QUERY 8
SELECT title, status.name status
FROM status JOIN task ON task.status_id=status.id;

# QUERY 9
SELECT status.name, count(task.id) task_count
FROM status JOIN task ON task.status_id=status.id
GROUP BY status.id;

# QUERY 10
SELECT status.name
FROM status JOIN task ON task.status_id=status.id
GROUP BY status.id
ORDER BY count(task.id);
