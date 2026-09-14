// Данные различных категорий пользователей
const userData = {
    rp: {
        name: 'Иван Петров',
        position: 'Продавец',
        store: 'Магазин №42 (г. Москва)',
        baseSalary: 45000,
        variableSalary: 12500,
        userType: 'Рядовой персонал (РП)'
    },
    ap: {
        name: 'Ольга Сидорова',
        position: 'Товаровед магазина',
        store: 'Магазин №42 (г. Москва)',
        baseSalary: 55000,
        variableSalary: 18750,
        userType: 'Административный персонал (АП)'
    },
    dm: {
        name: 'Сергей Иванов',
        position: 'Директор магазина',
        store: 'Магазин №42 (г. Москва)',
        baseSalary: 85000,
        variableSalary: 35000,
        userType: 'Директор магазина (ДМ)'
    },
    dg: {
        name: 'Андрей Смирнов',
        position: 'Директор группы',
        store: 'Группа магазинов №4 (г. Москва)',
        baseSalary: 120000,
        variableSalary: 55000,
        userType: 'Директор группы (ДГ)'
    },
    hr: {
        name: 'Мария Козлова',
        position: 'HR директор округа',
        store: 'Московский округ',
        baseSalary: 90000,
        variableSalary: 25000,
        userType: 'HR регионов'
    }
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Установка текущей даты
    const today = new Date();
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;
    document.getElementById('generatedDate').textContent = formattedDate;

    // Установка месяца в текущий
    const currentMonth = months[today.getMonth()];
    const currentYear = today.getFullYear();
    const monthDisplay = `${currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)} ${currentYear}`;
    document.getElementById('employeeMonth').textContent = monthDisplay;

    // Инициализация выбора пользователя
    const userTypeSelect = document.getElementById('userType');
    userTypeSelect.addEventListener('change', function() {
        updateEmployeeData(this.value);
    });

    // Инициализация табов
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.getAttribute('data-tab'));
        });
    });

    // Загрузка начальных данных
    updateEmployeeData('rp');
});

// Функция для обновления данных сотрудника
function updateEmployeeData(userType) {
    const data = userData[userType];

    if (!data) return;

    // Обновление информации о сотруднике
    document.getElementById('employeeName').textContent = data.name;
    document.getElementById('employeePosition').textContent = data.position;
    document.getElementById('employeeStore').textContent = data.store;

    // Обновление зарплаты
    updateSalaryData(data.baseSalary, data.variableSalary);

    // Обновление таблиц
    updateBonusesTable(userType);
}

// Функция для обновления зарплаты
function updateSalaryData(baseSalary, variableSalary) {
    const totalSalary = baseSalary + variableSalary;

    document.getElementById('baseSalary').textContent = formatCurrency(baseSalary);
    document.getElementById('variableSalary').textContent = formatCurrency(variableSalary);
    document.getElementById('totalSalary').textContent = formatCurrency(totalSalary);
}

// Функция для обновления таблицы премий
function updateBonusesTable(userType) {
    // Базовые данные для разных типов пользователей
    const bonusesData = {
        rp: [
            { name: 'Базовая премия', percent: '20%', amount: 9000, status: 'Рассчитана' },
            { name: 'Премия за выполнение плана продаж', percent: '10%', amount: 4500, status: 'Рассчитана' },
            { name: 'Премия за NPS', percent: '5%', amount: -1000, status: 'Не выполнено' }
        ],
        ap: [
            { name: 'Базовая премия', percent: '25%', amount: 13750, status: 'Рассчитана' },
            { name: 'Премия за результаты магазина', percent: '15%', amount: 8250, status: 'Рассчитана' },
            { name: 'Премия за управление товаром', percent: '10%', amount: -3250, status: 'Не выполнено' }
        ],
        dm: [
            { name: 'Базовая премия', percent: '30%', amount: 25500, status: 'Рассчитана' },
            { name: 'Премия за выполнение плана', percent: '20%', amount: 17000, status: 'Рассчитана' },
            { name: 'Премия за улучшение NPS', percent: '10%', amount: -7500, status: 'Не выполнено' }
        ],
        dg: [
            { name: 'Базовая премия', percent: '35%', amount: 42000, status: 'Рассчитана' },
            { name: 'Премия за результаты группы', percent: '25%', amount: 30000, status: 'Рассчитана' },
            { name: 'Премия за развитие менеджеров', percent: '10%', amount: -17000, status: 'Не выполнено' }
        ],
        hr: [
            { name: 'Базовая премия', percent: '20%', amount: 18000, status: 'Рассчитана' },
            { name: 'Премия за показатели управления', percent: '15%', amount: 13500, status: 'Рассчитана' },
            { name: 'Премия за развитие персонала', percent: '10%', amount: -6500, status: 'Не выполнено' }
        ]
    };

    const bonuses = bonusesData[userType];
    let tableHTML = `
        <table class="details-table">
            <thead>
                <tr>
                    <th>Наименование</th>
                    <th>Процент</th>
                    <th>Сумма (₽)</th>
                    <th>Статус</th>
                </tr>
            </thead>
            <tbody>
    `;

    let totalBonus = 0;
    bonuses.forEach(bonus => {
        const statusClass = bonus.status === 'Рассчитана' ? 'success' : 'warning';
        const amountFormatted = bonus.amount >= 0 ? '+' + formatCurrencyShort(bonus.amount) : formatCurrencyShort(bonus.amount);
        
        tableHTML += `
            <tr>
                <td>${bonus.name}</td>
                <td>${bonus.percent}</td>
                <td class="amount">${amountFormatted}</td>
                <td><span class="badge ${statusClass}">${bonus.status}</span></td>
            </tr>
        `;
        totalBonus += bonus.amount;
    });

    tableHTML += `
            <tr class="total-row">
                <td colspan="2"><strong>Итого переменная часть:</strong></td>
                <td class="amount"><strong>${formatCurrency(totalBonus)}</strong></td>
                <td></td>
            </tr>
            </tbody>
        </table>
    `;

    document.getElementById('bonuses').innerHTML = tableHTML;
}

// Функция для переключения табов
function switchTab(tabName) {
    // Скрытие всех табов
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Удаление активного класса со всех кнопок
    const allBtns = document.querySelectorAll('.tab-btn');
    allBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // Активация выбранного таба
    const activeTab = document.getElementById(tabName);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // Активация выбранной кнопки
    const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Функция форматирования валюты
function formatCurrency(value) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value).replace('₽', '₽').trim() + ' ₽';
}

// Функция форматирования валюты (короткая версия)
function formatCurrencyShort(value) {
    const sign = value >= 0 ? '' : '−';
    return sign + new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(Math.abs(value)) + ' ₽';
}
