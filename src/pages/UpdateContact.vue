<template>
  <div>
    <Header title="Update Contact" />
    <form>
      <div class="form-group">
        <label htmlFor="name">Name</label>
        <input v-model="form.name" name="name" />
      </div>

      <div class="form-group">
        <label htmlFor="email">Email</label>
        <input v-model="form.email" name="email" />
      </div>

      <div class="form-group">
        <label htmlFor="phone">Phone</label>
        <input v-model="form.phone" name="phone" />
      </div>

      <div class="form-group">
        <button type="submit" @click.prevent="handleSubmit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  name: "UpdateContact",
  components: {
    Header,
  },
  data: function() {
    return {
      form: { id: -1, name: "", email: "", phone: "" },
    }
  },
  mounted: function() {
    const id = this.$route.params.id
    const contact = this.$store.getters.getContactById(id)

    if (contact) {
      const { id, name, email, phone } = contact
      this.form.id = id
      this.form.name = name
      this.form.email = email
      this.form.phone = phone
    } else {
      this.$router.push("/")
    }
  },
  methods: {
    handleSubmit() {
      const { id, name, email, phone } = this.form
      this.$store.dispatch("updateContact", { id, name, email, phone })
      this.$router.push("/")
    },
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 12px 0;
}
form .form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
form .form-group label {
  font-size: 14px;
  font-weight: 700;
}
form .form-group input {
  padding: 8px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  transition: border-color 0.2s ease;
}
form .form-group input:active,
form .form-group input:focus {
  border-color: rgba(0, 0, 0, 0.45);
}
form .form-group .error {
  margin: 0;
  color: red;
  font-size: 14px;
}
form .form-group button[type="submit"] {
  color: #fff;
  background-color: #4a90e2;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  border: 0;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  outline: none;
  padding: 8px;
  width: 50%;
  margin: auto;
}
</style>
