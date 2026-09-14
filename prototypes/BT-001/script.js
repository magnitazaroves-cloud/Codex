document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('vacationForm');
    const successMessage = document.getElementById('successMessage');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    // Установка минимальной даты на сегодня
    const today = new Date().toISOString().split('T')[0];
    startDateInput.min = today;
    endDateInput.min = today;

    // Обработчик отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Получение значений полей
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const comment = document.getElementById('comment').value;

        // Валидация дат
        if (!startDate || !endDate) {
            alert('Пожалуйста, заполните оба поля с датами');
            return;
        }

        if (new Date(startDate) > new Date(endDate)) {
            alert('Дата начала отпуска не может быть позже даты окончания');
            return;
        }

        // Имитация отправки данных (в реальном приложении здесь был бы запрос на сервер)
        console.log('Заявка на отпуск отправлена:', {
            startDate: startDate,
            endDate: endDate,
            comment: comment,
            timestamp: new Date().toISOString()
        });

        // Отключение кнопки во время "отправки"
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Отправка...';

        // Имитация задержки отправки
        setTimeout(function() {
            // Показ сообщения об успехе
            successMessage.classList.remove('hidden');

            // Скрытие сообщения через 2.5 секунды
            setTimeout(function() {
                successMessage.classList.add('hidden');

                // Очистка формы
                form.reset();

                // Восстановление кнопки
                submitButton.disabled = false;
                submitButton.textContent = 'Отправить';
            }, 2500);
        }, 800);
    });

    // Обновление минимальной даты окончания при выборе даты начала
    startDateInput.addEventListener('change', function() {
        if (this.value) {
            endDateInput.min = this.value;
            // Если дата окончания раньше даты начала, очищаем её
            if (endDateInput.value && new Date(endDateInput.value) < new Date(this.value)) {
                endDateInput.value = '';
            }
        }
    });
});
