<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Login</div>
      </div>
      <div>
        <form @submit.prevent="login">
          <label for="username" class="block text-900 font-medium mb-2">Benutzername</label>
          <input v-model="username" autocomplete="username" class="p-inputtext p-component w-full mb-3 w-full mb-3" id="username" type="text">
          <label for="password" class="block text-900 font-medium mb-2">Passwort</label>
          <input v-model="password" autocomplete="current-password" class="p-inputtext p-component w-full mb-3 w-full mb-3" id="password" type="password">
          <button class="p-button p-component w-full" type="submit">
            <span class="p-button-label">Login</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    async login () {
      try {
        let response = await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password,
          }
        })
        this.$router.push('/admin')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
