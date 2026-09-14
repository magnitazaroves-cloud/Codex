# Дизайн-система ТвойМагнит

Документация дизайн-системы для приложения ТвойМагнит, основанная на Figma файле.

## Палитра цветов

### Основные цвета

| Название | Hex | RGB | Использование |
|----------|-----|-----|----------------|
| Primary | #9747FF | 151, 71, 255 | Кнопки, ссылки, активные элементы |
| Secondary | #ECECEC | 236, 236, 236 | Фон, неактивные элементы |
| White | #FFFFFF | 255, 255, 255 | Фон основной |
| Black | #000000 | 0, 0, 0 | Текст, границы |

### Дополнительные цвета

| Название | Hex | RGB | Использование |
|----------|-----|-----|----------------|
| Success | #4CAF50 | 76, 175, 80 | Успешные операции |
| Warning | #FFC107 | 255, 193, 7 | Предупреждения |
| Error | #F44336 | 244, 67, 54 | Ошибки |
| Info | #2196F3 | 33, 150, 243 | Информация |

### Нейтральные цвета

| Название | Hex | Использование |
|----------|-----|----------------|
| Gray-100 | #F5F5F5 | Легкий фон |
| Gray-200 | #E0E0E0 | Граница, разделитель |
| Gray-500 | #9E9E9E | Текст, подсказки |
| Gray-900 | #212121 | Основной текст |

## Типография

### Шрифты

- **Primary font**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
- **Monospace**: 'Monaco', 'Courier New', monospace

### Размеры шрифтов

| Название | Размер | Вес | Использование |
|----------|--------|-----|----------------|
| Display | 32px | 600 | Заголовки страниц |
| Heading 1 | 28px | 600 | Основные заголовки |
| Heading 2 | 20px | 600 | Подзаголовки |
| Heading 3 | 16px | 600 | Небольшие заголовки |
| Body Large | 16px | 400 | Основной текст |
| Body | 14px | 400 | Обычный текст |
| Body Small | 12px | 400 | Вспомогательный текст |
| Label | 12px | 600 | Метки, подписи |

## Spacing (Отступы)

Базовая единица: 4px

| Значение | Пиксели | Использование |
|----------|---------|----------------|
| xs | 4px | Маленькие отступы |
| sm | 8px | Отступы внутри элементов |
| md | 16px | Стандартные отступы (Padding) |
| lg | 24px | Большие отступы |
| xl | 32px | Очень большие отступы |
| 2xl | 40px | Расстояния между секциями |

## Border Radius

| Значение | Использование |
|----------|----------------|
| 2px | Минимальные скругления |
| 5px | Компоненты, кнопки |
| 6px | Карточки, инпуты |
| 8px | Модали, попапы |
| 12px | Крупные элементы |

## Компоненты

### Tab Bar (для ТвойМагнит)

**Размеры:**
- Ширина: Hug (407px)
- Высота: Hug (516px)
- Padding: 16px
- Gap: 16px
- Border Radius: 5px

**Стиль:**
- Background: #ECECEC
- Border: Dashed, #9747FF
- Border Dashes: 10, 5

**Platform:** Home indicator / iOS

**Flow:** Vertical

### Кнопки

#### Primary Button
- Background: #9747FF
- Color: #FFFFFF
- Padding: 14px 24px
- Border Radius: 6px
- Font Weight: 600
- Font Size: 16px

#### Secondary Button
- Background: #ECECEC
- Color: #212121
- Padding: 14px 24px
- Border Radius: 6px
- Font Weight: 600
- Font Size: 16px

### Inpuрты и Textarea

- Border: 2px solid #E0E0E0
- Border Radius: 6px
- Padding: 12px
- Font Size: 14px
- Focus: Border #9747FF, Box shadow 0 0 0 3px rgba(151, 71, 255, 0.1)

### Карточки

- Background: #FFFFFF
- Border Radius: 8px
- Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
- Padding: 16px

## Тени (Shadows)

| Название | CSS |
|----------|-----|
| sm | 0 2px 8px rgba(0, 0, 0, 0.1) |
| md | 0 8px 20px rgba(102, 126, 234, 0.15) |
| lg | 0 10px 40px rgba(0, 0, 0, 0.15) |

## Переходы (Transitions)

- **Стандартная**: 0.3s ease
- **Быстрая**: 0.2s ease
- **Медленная**: 0.5s ease

## Анимации

### Fade In
```css
animation: fadeIn 0.3s ease;

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

### Slide Up
```css
animation: slideUp 0.4s ease;

@keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}
```

### Scale In
```css
animation: scaleIn 0.5s ease;

@keyframes scaleIn {
    from { transform: scale(0); }
    to { transform: scale(1); }
}
```

## Сетка и Layout

### Grid
- Основной layout: CSS Grid
- Responsive: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`
- Gap между элементами: 20px

### Breakpoints (Адаптивность)

| Размер | Пиксели | Использование |
|--------|---------|----------------|
| Mobile | 480px | Мобильные устройства |
| Tablet | 768px | Планшеты |
| Desktop | 1024px | Десктопы |
| Wide | 1200px | Широкие экраны |

## CSS переменные

```css
:root {
    /* Colors */
    --primary: #9747FF;
    --secondary: #ECECEC;
    --white: #FFFFFF;
    --black: #000000;
    
    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-2xl: 40px;
    
    /* Border Radius */
    --radius-sm: 2px;
    --radius-md: 5px;
    --radius-lg: 6px;
    --radius-xl: 8px;
    --radius-2xl: 12px;
    
    /* Transitions */
    --transition: 0.3s ease;
    --transition-fast: 0.2s ease;
    --transition-slow: 0.5s ease;
    
    /* Shadows */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 8px 20px rgba(102, 126, 234, 0.15);
    --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.15);
}
```

## Источник

- **Figma File**: ГО (https://www.figma.com/design/utaZorvXiYGta0ztyaCPkz/ГО)
- **Компонент**: Tab Bar / for your Magnit
- **Platform**: iOS
- **Дата создания**: 14.09.2026

## Примечания

- Дизайн-система постоянно развивается
- Все цвета доступны в CSS переменных
- Используй в проектах для согласованности
- При вопросах обращайся к Figma файлу
