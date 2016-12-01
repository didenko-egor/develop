import getHost                         from './getHost';

/**
 * Метод построения url пользовательских документов
 * @param {String} url - значеине c сервера
 */
buildUrlFile(url){
    const fileUrl =  url => {
        const urlCut =  url.split(".").pop();
        const urlFull = urlCut == "docx" ? url : `${url}?type=pdf`;
        return `http://${getHost()}/file/download/${urlFull}`;
    };
    return fileUrl(url);
}