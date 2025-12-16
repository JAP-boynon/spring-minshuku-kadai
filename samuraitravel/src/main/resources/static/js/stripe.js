const stripe = Stripe("pk_test_51SduOGLMUsOz07kDxK3BQMsfaGNjbjHFaQ05T3bEar0fOt99uX18hEOGyLpH5ZbvVZK3v86JuuzwVIWQyxCCmRqQ00YrsmZExb");
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});