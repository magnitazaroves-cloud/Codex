/**
 * BT-Billing - Детализация заработной платы
 * ТвойМагнит приложение
 */

const userData = {
    rp: {
        name: 'Иван Петров',
        position: 'Продавец',
        store: 'Магазин №42',
        baseSalary: 45000,
        variableSalary: 12500
    },
    ap: {
        name: 'Ольга Сидорова',
        position: 'Товаровед магазина',
        store: 'Магазин №42',
        baseSalary: 55000,
        variableSalary: 18750
    },
    dm: {
        name: 'Сергей Иванов',
        position: 'Директор магазина',
        store: 'Магазин №42',
        baseSalary: 85000,
        variableSalary: 35000
    },
    dg: {
        name: 'Андрей Смирнов',
        position: 'Директор группы',
        store: 'Группа магазинов №4',
        baseSalary: 120000,
        variableSalary: 55000
    },
    hr: {
        name: 'Мария Козлова',
        position: 'HR директор округа',
        store: 'Московский округ',
        baseSalary: 90000,
        variableSalary: 25000
    }
};

const bonusesData = {
    rp: [
        { name: 'Базовая премия', percent: '20%', amount: 9000, status: 'success' },
        { name: 'За выполнение плана', percent: '10%', amount: 4500, status: 'success' },
        { name: 'За NPS', percent: '5%', amount: -1000, status: 'warning' }
    ],
    ap: [
        { name: 'Базовая премия', percent: '25%', amount: 13750, status: 'success' },
        { name: 'За результаты магазина', percent: '15%', amount: 8250, status: 'success' },
        { name: 'За управление товаром', percent: '10%', amount: -3250, status: 'warning' }
    ],
    dm: [
        { name: 'Базовая премия', percent: '30%', amount: 25500, status: 'success' },
        { name: 'За выполнение плана', percent: '20%', amount: 17000, status: 'success' },
        { name: 'За улучшение NPS', percent: '10%', amount: -7500, status: 'warning' }
    ],
    dg: [
        { name: 'Базовая премия', percent: '35%', amount: 42000, status: 'success' },
        { name: 'За результаты группы', percent: '25%', amount: 30000, status: 'success' },
        { name: 'За развитие менеджеров', percent: '10%', amount: -17000, status: 'warning' }
    ],
    hr: [
        { name: 'Базовая премия', percent: '20%', amount: 18000, status: 'success' },
        { name: 'За показатели', percent: '15%', amount: 13500, status: 'success' },
        { name: 'За развитие персонала', percent: '10%', amount: -6500, status: 'warning' }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    // Установка даты
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;
    document.getElementById('generatedDate').textContent = formattedDate;

    // Установка месяца
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const monthDisplay = `${months[today.getMonth()]} ${today.getFullYear()}`;

    // Выбор пользователя
    const userSelect = document.getElementById('userType');
    userSelect.addEventListener('change', function() {
        updateData(this.value);
    });

    // Табы
    const tabBtns = document.querySelectorAll('.tab-item');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            // Удаление active со всех
            document.querySelectorAll('.tab-item').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            // Добавление active
            this.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });

    // Первая загрузка
    updateData('rp');
});

function updateData(userType) {
    const data = userData[userType];
    const bonuses = bonusesData[userType];

    // Профиль
    document.getElementById('employeeName').textContent = data.name;
    document.getElementById('employeePosition').textContent = data.position;
    document.getElementById('employeeStore').textContent = data.store;

    // Месяц
    const today = new Date();
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    document.getElementById('employeeMonth').textContent = `${months[today.getMonth()]} ${today.getFullYear()}`;

    // Зарплата
    const totalSalary = data.baseSalary + data.variableSalary;
    document.getElementById('baseSalary').textContent = formatCurrency(data.baseSalary);
    document.getElementById('variableSalary').textContent = formatCurrency(data.variableSalary);
    document.getElementById('totalSalary').textContent = formatCurrency(totalSalary);

    // Премии таблица
    let tableHTML = ``;
    bonuses.forEach(bonus => {
        const statusText = bonus.status === 'success' ? '✓ Выплачена' : '⚠ Не выплачена';
        const amountText = bonus.amount >= 0 ? `${formatCurrencyShort(bonus.amount)}` : `${formatCurrencyShort(bonus.amount)}`;
        tableHTML += `
            <tr>
                <td>${bonus.name}</td>
                <td>${bonus.percent}</td>
                <td>${amountText}</td>
                <td><span class="badge ${bonus.status}">${statusText}</span></td>
            </tr>
        `;
    });
    document.getElementById('bonusesTable').innerHTML = tableHTML;
}

function formatCurrency(value) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    }).format(value).replace('₽', '₽').trim();
}

function formatCurrencyShort(value) {
    const sign = value >= 0 ? '' : '−';
    return sign + new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 0
    }).format(Math.abs(value)) + ' ₽';
}
