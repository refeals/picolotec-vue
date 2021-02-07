<template>
  <div>
    <Header title="Update Contact" />
    UpdateContact
  </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  name: "UpdateContact",
  components: {
    Header,
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
