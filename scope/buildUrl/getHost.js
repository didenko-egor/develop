/**
 * Получает хост для печати документов
 * @returns {string}
 */
export default function getHost() {
    const {hostname} = window.location;
    return hostname === 'portal.dev' ? // локальная разработка
        'draft.jarvis.su' :
        hostname;
}
