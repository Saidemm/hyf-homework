use hyf_lesson2;

#All the tasks assigned to users whose email ends in @spotify.com
SELECT task.*
FROM user 
JOIN user_task ON user_task.user_id=user.id
JOIN task ON user_task.task_id=task.id
WHERE user.email LIKE '%@spotify.com';

#All the tasks for 'Donald Duck' with status 'Not started'
SELECT task.*
FROM user 
JOIN user_task ON user_task.user_id=user.id
JOIN task ON user_task.task_id=task.id
JOIN status ON task.status_id=status.id
WHERE user.name='Donald Duck' 
AND status.name='Not started';

#All the tasks for 'Maryrose Meadows' that were created in september 
SELECT task.*
FROM user 
JOIN user_task ON user_task.user_id=user.id
JOIN task ON user_task.task_id=task.id
WHERE user.name='Maryrose Meadows'
AND MONTH(task.created)=9; 

#Find how many tasks where created in each month, e.g. how many tasks were created in october, 
#how many tasks were created in november, etc. (hint: use group by)
SELECT MONTHNAME(DATE_FORMAT(created, '%Y-%m-%d')) AS month_name, 
COUNT(task.id) AS task_count
FROM task
GROUP BY MONTHNAME(DATE_FORMAT(created, '%Y-%m-%d'));
