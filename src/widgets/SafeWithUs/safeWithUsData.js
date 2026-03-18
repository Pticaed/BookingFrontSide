// Тестовые данные - заменить на реальные перед пушем
// SVG иконки как data URLs
const icons = {
    home: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FF6B6B"%3E%3Cpath d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/%3E%3C/svg%3E',
    check: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234ECDC4"%3E%3Cpath d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/%3E%3C/svg%3E',
    lock: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2345B7D1"%3E%3Cpath d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/%3E%3C/svg%3E',
    chat: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FFA502"%3E%3Cpath d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/%3E%3C/svg%3E',
    star: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23A569BD"%3E%3Cpath d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z"/%3E%3C/svg%3E'
};

export const safeWithUsItems = [
    {
        id: 1,
        logo: icons.home,
        text: 'Безопасное бронирование с гарантией'
    },
    {
        id: 2,
        logo: icons.check,
        text: 'Проверенные хозяева и гости'
    },
    {
        id: 3,
        logo: icons.lock,
        text: 'Защита данных и конфиденциальность'
    },
    {
        id: 4,
        logo: icons.chat,
        text: 'Круглосуточная поддержка'
    },
    {
        id: 5,
        logo: icons.star,
        text: 'Рейтинговая система отзывов'
    }
];
