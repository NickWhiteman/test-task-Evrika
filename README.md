Тестовое задание от Еврика.
Задача состоит в реализации небольшого интерфейса с таблицей, которая имеет 3 поведения:
  -Добавления пользователя
  -Редактирование пользователя
  -Удаление пользователя

Ссылка на Figma:
  https://www.figma.com/file/BHCrl2hU6Vb4Um2PAOU15V/Test?node-id=11%3A271

Стэк: 
  TypeScript
  React
  Redux-toolkit

Реализация: 
  Собрал Dashboard
  Сформировал поведения сборки таблицы
  Собираю универсальное поведения для сборки модального окона с возможностью расширения
  под разные режимы mode = 'createUser' | 'updateUser' | 'deleteUser'.
  Реализовал функциональность добавления, удаления и изменения пользователей.

Не успел реализовать бэк, поэтому пришлось поиздеваться над обьектом данных. Не стал делать middleware. просто топорно кинул файл с обьектом.
Там же реализовал поведения работы с этим обьектом обычными функциями. Данные обновляются и таблица перерисовывается, так как я сделал страшное - кинул обьект данных в зависимости useEffect в Dashboard.tsx


Файл будет изменяться. Начало выполнения 17.09.2021
