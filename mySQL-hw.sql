# 1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
SELECT * FROM client WHERE LENGTH(FirstName)<6;

# 2. +Вибрати львівські відділення банку
SELECT * FROM department WHERE DepartmentCity='Lviv';

# 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
SELECT * FROM client WHERE Education = 'high'
ORDER BY LastName;

# 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
SELECT * FROM application ORDER BY idApplication desc LIMIT 5;
SELECT * FROM application ORDER BY idApplication desc LIMIT 5 OFFSET 10;

# 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
SELECT * FROM client WHERE LastName LIKE '%iv' OR LastName LIKE '%iva';

# 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
SELECT * FROM client WHERE City = 'Kyiv';

# 7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.
SELECT FirstName, Passport FROM client ORDER BY FirstName;

# 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
SELECT * FROM client
JOIN application a on client.idClient = a.Client_idClient
WHERE CreditState = 'Not returned' AND Sum > '5000' AND Currency = 'Gryvnia';

# 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
SELECT COUNT(idClient) FROM client;
SELECT COUNT(idClient) FROM client WHERE City='Lviv';

# 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
SELECT MAX(Sum) FROM application a
JOIN client c on c.idClient = a.Client_idClient
GROUP BY c.idClient;

# 11. Визначити кількість заявок на крдеит для кожного клієнта.
SELECT COUNT(Client_idClient) FROM application
JOIN client c2 on c2.idClient = application.Client_idClient
GROUP BY c2.idClient;

# 12. Визначити найбільший та найменший кредити.
SELECT MAX(Sum) FROM application;
SELECT MIN(Sum) FROM application;

# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
SELECT COUNT(Client_idClient) AmountOfCredits,Client_idClient ClientId FROM application
JOIN client c on c.idClient = application.Client_idClient
WHERE c.Education = 'high'
GROUP BY c.idClient;

# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
SELECT *, AVG(Sum) AvgSum FROM application
JOIN client c on c.idClient = application.Client_idClient
GROUP BY Client_idClient
ORDER BY AvgSum DESC
LIMIT 1;

# 12. Визначити найбільший та найменший кредити.
SELECT MAX(Sum) FROM application;
SELECT MIN(Sum) FROM application;

# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
SELECT COUNT(Client_idClient) AmountOfCredits,Client_idClient ClientId FROM application
JOIN client c on c.idClient = application.Client_idClient
WHERE c.Education = 'high'
GROUP BY c.idClient;

# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.


# 15. Вивести відділення, яке видало в кредити найбільше грошей
#
#
# 16. Вивести відділення, яке видало найбільший кредит.
#
#
# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
#
# 18. Усіх клієнтів київських відділень пересилити до Києва.
#
#
# 19. Видалити усі кредити, які є повернені.
#
#
#
# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
