export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (to.params.slug[0] !== ('woman' || 'man')) {
    return navigateTo('/error')
  }
})
