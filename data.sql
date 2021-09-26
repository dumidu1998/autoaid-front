INSERT INTO `customer` (`customer_id`, `first_name`, `last_name`, `registered_date`, `user_data_id`) VALUES
(2, 'Banuka', 'Kaluaggala', '2021-09-20 21:22:03', 1);

INSERT INTO `section` (`section_id`, `section_name`, `staff_id`) VALUES
(37, 'General Repair', NULL),
(38, 'Wheel Alignment', NULL),
(39, 'Service', NULL),
(40, 'Express Maintainance', NULL),
(41, 'Washing', NULL);

INSERT INTO `slot` (`slotid`, `slot_name`, `status`, `section_id`) VALUES
(57, 'GR-1', 'AVAILABLE', 37),
(58, 'GR-2', 'AVAILABLE', 37),
(59, 'GR-3', 'NOTAVAILABLE', 37),
(60, 'WA-1', 'AVAILABLE', 38),
(61, 'WA-2', 'AVAILABLE', 38),
(62, 'WA-3', 'NOTAVAILABLE', 38),
(63, 'SE-1', 'AVAILABLE', 39),
(64, 'SE-2', 'AVAILABLE', 39),
(65, 'SE-3', 'NOTAVAILABLE', 39),
(66, 'EM-1', 'AVAILABLE', 40),
(67, 'EM-2', 'AVAILABLE', 40),
(68, 'EM-3', 'NOTAVAILABLE', 40),
(69, 'WS-1', 'AVAILABLE', 41),
(70, 'WS-2', 'AVAILABLE', 41),
(71, 'WS-3', 'NOTAVAILABLE', 41);

INSERT INTO `staff` (`staff_id`, `first_name`, `last_name`, `user_data_id`) VALUES
(4, 'Hasantha', 'Pathirana', 3),
(6, 'Dumindu', 'Rajakaruna', 5),
(8, 'Manthila', 'Bandara', 7),
(10, 'Thanula', 'Chandrasekara', 9),
(12, 'Darshana', 'Madushan', 11),
(14, 'Amod', 'Pathirana', 13),
(16, 'Lakith', 'Rathnayake', 15),
(18, 'Chenuka', 'Medawala', 17),
(20, 'Sanoj', 'Silva', 19),
(22, 'Nipuna', 'Shantha', 21),
(24, 'Hashen', 'Rashminda', 23),
(26, 'Sasindu', 'Liyanaarachchi', 25),
(28, 'Isuru', 'Darmasiri', 27),
(30, 'Malitha', 'Perera', 29),
(32, 'Shehan', 'Sandeepa', 31);

INSERT INTO `sub_category` (`sub_cat_id`, `sub_cat_name`, `time`, `section_id`) VALUES
(43, 'Differensal Issue', 30, 37),
(42, 'Oil Leak', 60, 37),
(44, 'Change Clutch', 90, 37),
(45, 'Gasket Issue', 60, 37),
(46, 'Light Vehicle', 30, 38),
(47, 'Heavy Vehicle', 30, 38),
(48, '1000KM', 15, 39),
(49, '5000KM', 30, 39),
(50, '10000KM', 60, 39),
(51, '40000KM', 90, 39),
(52, 'Engine Repair', 90, 40),
(53, 'Suspension Change', 60, 40),
(54, 'Tune Up', 30, 40),
(55, 'Body wash', 30, 41),
(56, 'Interior Wash', 30, 41);


INSERT INTO `user_data` (`id`, `address`, `city`, `contact_no`, `email`, `password`, `user_name`, `user_status`, `user_type`) VALUES
(1, '111,pallewela', 'Veyangoda', '0712408356', 'customer@gmail.com', '$2a$10$M10odShy/tQzOEg4NcPkduBdd2fzLYe8uPixfTxmql1fuHre.HelC', 'Customer', 'ACTIVATED', 'CUSTOMER'),
(3, 'Wataddara', 'Veyangoda', '0778337436', 'admin@gmail.com', '$2a$10$RNAO6j5bt7wa3ehmpe.BSOk8zSI9VxbiBo49vjr457BX/N520f3Ky', 'Admin', 'ACTIVATED', 'ADMIN'),
(5, '313,old town', 'Anuradhapura', '766344989', 'technician@gmail.com', '$2a$10$fyJayeg3JrzU/IknvZ/vIuZ3.7t03xaLhr9ZOFwE6iJHlf8/4uvt2', 'Technician', 'ACTIVATED', 'LEAD_TECHNICIAN'),
(7, '53,newtown', 'Anuradhapura', '764229830', 'manthi@gmail.com', '$2a$10$2mgs23156slY0/my3283zeQe1HWJUID/SEJUQC.0l6x4jI/blaMI6', 'manthila', 'ACTIVATED', 'LEAD_TECHNICIAN'),
(9, '151,kiridiwela', 'Gampaha', '719494502', 'thnula@gmail.com', '$2a$10$tuxjLARORQMnOTzfkDKGXOFWV/5XRisWkpk3mDaL9DsK0PohFAxse', 'thanula', 'ACTIVATED', 'LEAD_TECHNICIAN'),
(11, '35,town', 'moratuwa', '774678712', 'dare@gmail.com', '$2a$10$zezWhmnSO4vlcI/9SDzscOI5Hz/gd5qePVQ234yNtGsZLbUS8q6EC', 'darshana', 'ACTIVATED', 'LEAD_TECHNICIAN'),
(13, '212,walpita', 'Divlapitiya', '772836442', 'amd@gmail.com', '$2a$10$4Scn24tBpegOlBNK3QJuEeZzg/vj5OGufJlXBR8eUH1nazq6nmUY6', 'Amod', 'ACTIVATED', 'LEAD_TECHNICIAN'),
(15, '12,wewaldeniya', 'Mirigama', '767663705', 'lakith@gmail.com', '$2a$10$snWx1GkFvppeseiHdOifC.iEzeNri9oBSQjzqt22AoE1DQ6fV5Sw6', 'lakith', 'ACTIVATED', 'TECHNICIAN'),
(17, '115,pannipitiya', 'maharagama', '779604438', 'che@gmail.com', '$2a$10$ef.RKrPeZQjqKQncfTwfk.4EZUKQD4e5fFRzfejvTceAcqvwR.ZAm', 'chenuka', 'ACTIVATED', 'TECHNICIAN'),
(19, '56,walpola', 'Ragama', '726063810', 'sanoj@gmail.com', '$2a$10$3NuUfDeD3yRMZcQ4CFKXCuOzP2kKwYbRuaJOch6AGwytvryywx4sm', 'sanoj', 'ACTIVATED', 'TECHNICIAN'),
(21, '50,negomboRd', 'Katunayake', '774860582', 'nipuna@gmail.com', '$2a$10$zALiCHP.2AGAIRxSAY4tSeVoUPFkEu5zIn6WraK4dEAHl9mQaswxe', 'nipuna', 'ACTIVATED', 'TECHNICIAN'),
(23, '20,batuwatta', 'Ragama', '783611056', 'hashen@gmail.com', '$2a$10$9ErwcHoU58FWq.05HVz.VeESxnkrk6jCdyWaKeZCBsTenZbv.4aQ.', 'hashen', 'ACTIVATED', 'TECHNICIAN'),
(25, '20,weragampita', 'Mathara', '702324901', 'advisor@gmail.com', '$2a$10$kkWmFfwNV6E6XeFSE8Pcd..Jz/5/FW7ABdeymd6JGGL6ZIM7CSs6G', 'ServiceAdvisor', 'ACTIVATED', 'SERVICE_ADVISOR'),
(27, '36,pinnagolla', 'Nittabuwa', '775668256', 'isuru@gmai.com', '$2a$10$yvMGQX4omk7TPSGp/BfbfOdC9z7FQ3UtBKXK/KTrBew56LXjwqIIK', 'isuru', 'ACTIVATED', 'SERVICE_ADVISOR'),
(29, '15,newtown', 'Anuradhapura', '712007319', 'skeeper@gmail.com', '$2a$10$Y4c.Zvl2EBmidPWfhtYcoe0aLxgESbtP9grJ/fcDiOeawnJxRtXju', 'StockKeeper', 'ACTIVATED', 'STOCK_KEEPER'),
(31, '11,ibbagamuawa', 'Kurunegala', '710157140', 'cashier@gmail.com', '$2a$10$BnVVVqBjZ/RItdkn2o08FuH7I9rQJpfiNcSEgoV3VbWI/uhXHXqW2', 'Cashier', 'ACTIVATED', 'CASHIER');


INSERT INTO `vehicle` (`vehicle_id`, `chassis_no`, `engine_no`, `make`, `model`, `vehicle_number`, `vin`, `customer_customer_id`) VALUES
(33, 'ch1516', 'eng1516', 'Mitsubishi', 'L200', '54-1516', 'VIN-1516', 2);
