# Дипломная работа по направлению "Frontend-разработчик"

**Техническое задание (ТЗ) для проекта SneakMax**

**Описание проекта:**
SneakMax - это веб-приложение для любителей кроссовок, где пользователи могут просматривать, искать и покупать различные модели кроссовок. Приложение будет включать главную страницу с несколькими секциями, страницу корзины для оформления заказа и страницу карточки товара с подробной информацией о продукте.

**Основной функционал:**

**1. Главная страница:**

- Главная секция: Простой блок с небольшой информацией о сайте.
- Каталог: Список товаров с возможностью фильтрации по полу, размеру и цене от и до. Товары выводятся по 6 штук, с кнопкой для подгрузки еще 6 товаров.
- Пара слов о нас: Блок с текстом о компании.
- Мы подберем идеальную пару для вас: Блок с формой для подбора кроссовок (в данном задании вам нужно сверстать блок, сделать чтобы все корректно работало на клиенте, отправка запроса на сервер для подбора кроссовок в данное тз не входит).
- Наша команда: Блок с карточками команды, данные загружаются через get запрос.
- Часто задаваемые вопросы: Блок с аккордеоном для отображения вопросов и ответов.
- Контакты: Контактная информация и карта с расположением.
- Есть вопросы?: Форма для отправки имени и номера телефона для связи.

**2. Страница корзины:**

- Список добавленных в корзину товаров.
- Форма для ввода имени, телефона и почты для оформления заказа через post запрос.
- Удаление всех товаров из корзины после успешной отправки заказа.

**3. Страница карточки товара:**

- Подробная информация о товаре.
- Кнопка для добавления товара в корзину.

API и бэкенд:

- Использование mokky.dev для управления данными о продуктах и заказах.
- RESTful API для взаимодействия фронтенда с бэкендом.

**Технологии:**

1. Фронтенд:

- React
- Redux Toolkit для управления состоянием
- React Router для маршрутизации
- TypeScript
- Nouislider для фильтрации по цене
- Axios для HTTP-запросов к API
- Для стилизации можете использовать любой удобный для вас инструмент (например styled-components или scss)

2. Бэкенд:

- mokky.dev для управления данными о продуктах и заказах
- RESTful API для взаимодействия с фронтендом

**Этапы разработки:**

**1. Подготовка:**

- Установка и настройка окружения для разработки (можете воспользоваться командой npm create vite@latest для быстрого развертывания приложения)
- Установить все необходимые зависимости: redux-toolkit, react-router, styled-components, axios, nouislider

**2. Верстка**

- Сверстать все страница по макету https://www.figma.com/design/0RBRWjTyZd9rFk7eiGaO5e/SneakMax?node-id=43-389&t=3nitituIpdcKxnrv-1
- Не обязательно верстать pixel perfect но все должно смотреться красиво и аккуратно
- Верстка не должно ломаться на экранах с разрешением от 375px
- Разделите ваш проект на компоненты, подумайте над тем какие элементы можно сделать переиспользуемыми
- Следуйте принципам DRY, KISS. Старайтесь не повторяться и делать код проще

**3. Интеграция с API и работа со стейт менеджером:**

- Добавьте данные по кроссовкам и команде в ваш mokky.dev
- Создайте слайсы redux toolkit для работы с данными по кроссовкам и команде
- На клиенте для создания асинхронных запросов вам нужно будет использовать createAsyncThunk в ваших слайсах

Полезные ссылки:
https://redux-toolkit.js.org/tutorials/quick-start

https://redux-toolkit.js.org/api/createAsyncThunk

- После получения данных с сервера вам нужно распаковать массивы с информацией в соответствующих секциях (sneakers в каталог, team в наша команда)
- Для корзины вам нужно создать отдельный ресурс, для сохранения на ней информации о составе вашей корзины

**4. Роутинг**

- Каждый элемент навигации должен вести клиента к нужной секции (Например при клике «О нас» клиента должно перебросить на соответствующую секцию)
- При клике на корзину должно открыться модальное окно с добавленными в корзину карточками. В этом блоке есть кнопка перейти в корзину, при клике на нее должно перебросить на страницу корзины, где клиент может купить все добавленные товары.
- При нажатии на кнопку оформить заказ корзина должна очиститься полностью, если клиент ввел все необходимые данные (Имя, номер, почту – для реализации проверок можете использовать библиотеку reac-hook-form). Так как это пет проект, вы можете просто очистить корзину без отправки данных на сервер с помощью patch запроса на очистку всего ресурса: https://mokky.gitbook.io/welcome/obrashenie-k-resursam/vstuplenie
- В header на кнопке корзины есть счетчик, там должно отображать количество элементов в корзине
- На карточках товаров есть две кнопке, которые должны появляться при наведении на карточку. Левая кнопка это ссылка на страницу товара, правая – добавление товара в корзину
- При переходе на страницу товара, туда должны подтягиваться данные по товару. Это можно сделать используя useParams из react-router: https://reactrouter.com/en/main/hooks/use-params
  Полезные ссылки:
  https://reactrouter.com/en/main/start/overview

**5. Фильтрация кроссовок:**

- Вам нужно реализовать фильтрацию кроссовок на стороне сервера. Это можно сделать с помощью изменения запроса под наши фильтры, то есть при нажатии на кнопку применить в форме должен сработать запрос на получение данных с учетом фильтров
  Как делать фильтрацию на mokky.dev очень просто и понятно описано на документации к API: https://mokky.gitbook.io/welcome/obrashenie-k-resursam/filtraciya/po-neskolkim-parametram
- В данном блоке есть фильтрация по цене ползунком. Для реализации ползунка вы можете воспользоваться готовой библиотекой nouislider-react https://www.npmjs.com/package/nouislider-react (если реализовать данный функционал для вас окажется слишком сложным, можете просто оставить ввод цены в ручную, но реализованный слайдер будет большим плюсом)
- Также вам нужно на клиенте реализовать функцию ограничения добавления кроссовок на страницу. Сначала у вас должны появиться 6 кроссовок, при нажатии на показать еще +6 кроссовок. При изменении фильтров снова должно отображаться 6 карточек.

**6. Дополнительно**

- Для реализации блока аккордион в секции Часто задаваемые вопросы можете воспользоваться библиотеками, либо реализовать все самому
- Для формы Есть вопросы? Можете написать post запрос с отправкой на сервер имени и номера клиента (для этого в mokky нужно создать отдельный ресурс)
- Можно добавить в проект различных анимаций на свое усмотрение

**Заключение:**
Это техническое задание описывает создание веб-приложения SneakMax с использованием React, Redux Toolkit, React Router и API на базе mokky.dev. Основные функциональные и нефункциональные требования направлены на создание удобного и привлекательного интерфейса для пользователей.
