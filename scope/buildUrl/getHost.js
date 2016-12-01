/**
 * Получает хост для печати документов
 * @returns {string}
 */
export default function getHost() {
    const {hostname} = window.location;
    return hostname === 'host.dev' ? // локальная разработка
        'your.dev.host' :
        hostname;
}
