CREATE DATABASE IF NOT EXISTS restaurant;
Use  restaurant;
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');


SELECT restaurant;

--add data for demo presentation

INSERT INTO `restaurant`.`reservation` (`description`, `quantity`, `customer_name`, `email_customer`, `BookedDate`, `BookedTime`) VALUES ('nothing', '10', 'duong', 'daiduong040700@gmail.com', '2020-09-19', '10:30:00');
INSERT INTO `restaurant`.`reservation` (`description`, `quantity`, `customer_name`, `email_customer`, `BookedDate`, `BookedTime`) VALUES ('abcdef', '5', 'Tri', 'daiduong040700@gmail.com', '2020-09-19', '10:30:00');
INSERT INTO `restaurant`.`reservation` (`description`, `quantity`, `customer_name`, `email_customer`, `BookedDate`, `BookedTime`) VALUES ('hello doki doki', '3', 'Bao', 'daiduong040700@gmail.com', '2020-09-19', '10:30:00');
INSERT INTO `restaurant`.`reservation` (`description`, `quantity`, `customer_name`, `email_customer`, `BookedDate`, `BookedTime`) VALUES ('mlem mlem', '2', 'Vi', 'daiduong040700@gmail.com', '2020-09-19', '9:30:00');
INSERT INTO `restaurant`.`reservation` (`description`, `quantity`, `customer_name`, `email_customer`, `BookedDate`, `BookedTime`) VALUES ('nothing abcd', '1', 'anonymous', 'daiduong040700@gmail.com', '2020-09-19', '9:30:00');


-- Add role of admin to 1st user
INSERT INTO `restaurant`.`user_roles` (`user_id`, `role_id`) VALUES ('1', '3');