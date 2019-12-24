this.yeby = {}


chrome.runtime.onMessage.addListener(( request ) => {
  if (request.action === 'SOSIDURA') this.SOSIDURA(request.phoneNumber);
});

this.SOSIDURA = (phoneNumber) => {
  console.log('GOVNOW', phoneNumber)
}
