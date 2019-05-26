<template>
  <div
    class="inner-wrap"
    fluid
    fill-height
  >
    <Loginform-component @joinSubmit="joinSubmit" />
  </div>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    'Loginform-component': LoginForm,
  },
  data () {
    return {
    };
  },
  created () {
  },
  methods: {
    joinSubmit (userName) {
      this.$router.push(`/char-room/${userName}`);
    },
  },
};
</script>
