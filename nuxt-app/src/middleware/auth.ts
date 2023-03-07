export default defineNuxtRouteMiddleware((to, from) => {
  console.log(from, to);
  if (to.name == "about") {
    return navigateTo("/login");
  }
});
