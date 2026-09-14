# Примеры использования дизайн-системы ТвойМагнит

## Подключение дизайн-системы

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ваше приложение</title>
    <link rel="stylesheet" href="../design-system/design-system.css">
</head>
<body>
    <!-- Ваш контент -->
</body>
</html>
```

## Примеры компонентов

### Кнопки

```html
<!-- Primary button -->
<button class="btn btn-primary">Отправить</button>

<!-- Secondary button -->
<button class="btn btn-secondary">Отмена</button>

<!-- Success button -->
<button class="btn btn-success">Применить</button>

<!-- Error button -->
<button class="btn btn-error">Удалить</button>

<!-- Disabled button -->
<button class="btn btn-primary" disabled>Недоступна</button>
```

### Карточки

```html
<div class="card">
    <h3>Заголовок карточки</h3>
    <p>Содержимое карточки с использованием дизайн-системы.</p>
    <button class="btn btn-primary">Действие</button>
</div>
```

### Инпуты и Textarea

```html
<div>
    <label for="name">Имя:</label>
    <input type="text" id="name" placeholder="Введите имя">
</div>

<div>
    <label for="message">Сообщение:</label>
    <textarea id="message" placeholder="Введите сообщение"></textarea>
</div>

<div>
    <label for="select">Выберите опцию:</label>
    <select id="select">
        <option>Опция 1</option>
        <option>Опция 2</option>
    </select>
</div>
```

### Бейджи

```html
<span class="badge">Обычный</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>
```

### Таблицы

```html
<table>
    <thead>
        <tr>
            <th>Колонка 1</th>
            <th>Колонка 2</th>
            <th>Колонка 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Данные 1</td>
            <td>Данные 2</td>
            <td>Данные 3</td>
        </tr>
    </tbody>
</table>
```

### Типография

```html
<h1>Заголовок H1 - Display</h1>
<h2>Заголовок H2 - Heading 1</h2>
<h3>Заголовок H3 - Heading 2</h3>
<h4>Заголовок H4 - Heading 3</h4>

<p>Это обычный текст, использующий основной размер шрифта 16px и высоту строки 1.5.</p>
<small>Это маленький текст для вспомогательной информации.</small>
```

## Использование CSS переменных

Ты можешь использовать CSS переменные для создания собственных компонентов:

```css
.my-component {
    color: var(--color-primary);
    background: var(--color-gray-100);
    padding: var(--spacing-md);
    border-radius: var(--radius-lg);
    transition: all var(--transition);
}

.my-component:hover {
    box-shadow: var(--shadow-md);
}
```

## Примеры классов

### Цвета текста

```html
<p style="color: var(--color-primary);">Основной цвет</p>
<p style="color: var(--color-gray-500);">Серый текст</p>
<p style="color: var(--color-success);">Успешный текст</p>
```

### Фоны

```html
<div style="background: var(--color-white); padding: var(--spacing-md);">
    Белый фон
</div>

<div style="background: var(--color-gray-100); padding: var(--spacing-md);">
    Светло-серый фон
</div>

<div style="background: var(--color-primary); color: var(--color-white); padding: var(--spacing-md);">
    Основной фон
</div>
```

### Отступы

```html
<!-- Padding -->
<div style="padding: var(--spacing-md);">
    Элемент с padding
</div>

<!-- Margin -->
<div style="margin-bottom: var(--spacing-lg);">
    Элемент с margin
</div>

<!-- Gap в flexbox -->
<div style="display: flex; gap: var(--spacing-md);">
    <div>Элемент 1</div>
    <div>Элемент 2</div>
</div>
```

## Сетка (Grid)

```html
<div style="
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-lg);
">
    <div class="card">Карточка 1</div>
    <div class="card">Карточка 2</div>
    <div class="card">Карточка 3</div>
</div>
```

## Flexbox

```html
<div style="
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-md);
">
    <button class="btn btn-primary">Кнопка 1</button>
    <button class="btn btn-secondary">Кнопка 2</button>
</div>
```

## Полный пример страницы

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Пример использования дизайн-системы</title>
    <link rel="stylesheet" href="../design-system/design-system.css">
    <style>
        body {
            padding: var(--spacing-lg);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .header {
            text-align: center;
            margin-bottom: var(--spacing-2xl);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: var(--spacing-lg);
            margin-bottom: var(--spacing-2xl);
        }

        .button-group {
            display: flex;
            gap: var(--spacing-md);
            flex-wrap: wrap;
            margin-bottom: var(--spacing-lg);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Пример использования дизайн-системы</h1>
            <p>ТвойМагнит Design System</p>
        </div>

        <div class="button-group">
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-secondary">Secondary</button>
            <button class="btn btn-success">Success</button>
            <button class="btn btn-error">Error</button>
        </div>

        <div class="grid">
            <div class="card">
                <h3>Карточка 1</h3>
                <p>Это пример карточки с использованием дизайн-системы.</p>
                <span class="badge badge-primary">Premium</span>
            </div>

            <div class="card">
                <h3>Карточка 2</h3>
                <p>Еще одна карточка с другим содержимым.</p>
                <span class="badge badge-success">Active</span>
            </div>

            <div class="card">
                <h3>Карточка 3</h3>
                <p>Третья карточка в сетке.</p>
                <span class="badge badge-warning">Pending</span>
            </div>
        </div>

        <div class="card">
            <h2>Форма обратной связи</h2>
            <form>
                <div style="margin-bottom: var(--spacing-md);">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="your@email.com" required>
                </div>

                <div style="margin-bottom: var(--spacing-md);">
                    <label for="message">Сообщение:</label>
                    <textarea id="message" placeholder="Введите ваше сообщение" required></textarea>
                </div>

                <button class="btn btn-primary" type="submit">Отправить</button>
            </form>
        </div>
    </div>
</body>
</html>
```

## Лучшие практики

1. **Используй CSS переменные** — Никогда не пиши цвета/размеры жестко, используй переменные
2. **Следуй spacing** — Используй переменные для отступов
3. **Консистентность** — Все кнопки должны быть из дизайн-системы
4. **Адаптивность** — Используй media queries с breakpoints из системы
5. **Доступность** — Убедись, что контраст цветов достаточен
6. **Анимации** — Используй стандартные transitions из системы

## Источники

- **Figma**: ГО Design System
- **Компоненты**: Tab Bar / for your Magnit
- **Platform**: iOS
- **Версия**: 1.0
- **Дата**: 14.09.2026
