const getFromUnnamedList = (nodeList, number) => {
    try {
    let curEl = null;
    nodeList.forEach((elem) => {
    if (elem.innerText.indexOf(number) === 0) curEl = elem;
    });
    return curEl
    ? (curEl.nextElementSibling && curEl.nextElementSibling.innerText)
    || curEl.nextSibling.textContent
    : null;
    } catch (e) {
    console.log(e);
    }
    return null;
    }
const numberList = document.querySelectorAll('.label.fl_l')
const phoneNumber = getFromUnnamedList(numberList, 'Экстренная связь:')
chrome.runtime.sendMessage({ action: 'SOSIDURA', phoneNumber });
