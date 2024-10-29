SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `usuarios` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(1, 'tute', 'tute@gmail.com', '12345678', '2024-10-14 17:02:05'),
(4, 'luca', 'luca@gmail.com', 'contraseña123', '2024-10-14 17:54:27'),
(5, 'Mateo', 'mateo@correo.com', 'HolaMundo', '2024-10-14 18:05:43'),
(6, 'AccesoApp', 'AccesoApp@correo.com', '12345678', '2024-10-14 18:10:34');


ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);


ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;
