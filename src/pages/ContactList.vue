<template>
  <div>
    <Header title="Contact List" />
    <section class="contact-list">
      <div v-for="contact in contacts" :key="contact.id" class="contact-item">
        <div class="item-img">
          <img src="https://placekitten.com/100/100" :alt="contact.name" />
        </div>
        <div class="item-data">
          <p class="contact-name">{{ contact.name }}</p>
          <p class="contact-email">{{ contact.email }}</p>
          <p class="contact-phone">{{ contact.phone }}</p>
        </div>
        <div class="item-buttons">
          <button class="update-contact">
            Update
          </button>
          <button class="delete-contact">
            Delete
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  name: "ContactList",
  components: {
    Header,
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    },
  },
  mounted() {
    this.$store.dispatch("getContacts")
  },
}
</script>

<style scoped>
.contact-list {
  display: flex;
  flex-direction: column;
}
.contact-list .contact-item {
  border-bottom: 1px solid rgba(44, 38, 5, 0.05);
  display: flex;
  padding: 12px;
}
.contact-list .contact-item .item-img {
  max-width: 22%;
  display: flex;
}
.contact-list .contact-item .item-img img {
  border-radius: 50%;
  width: 100%;
}
.contact-list .contact-item .item-data {
  flex: 1;
  margin: 0 8px;
}
.contact-list .contact-item .item-data p {
  margin: 0;
  padding: 2px 0;
  font-size: 14px;
}
.contact-list .contact-item .item-data p.contact-name {
  font-size: 18px;
  font-weight: 700;
}
.contact-list .contact-item .item-buttons {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.contact-list .contact-item .item-buttons button {
  border: 0;
  outline: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.contact-list .contact-item .item-buttons button.update-contact {
  background-color: #4a90e2;
}
.contact-list .contact-item .item-buttons button.update-contact:hover {
  background-color: #2275d7;
}
.contact-list .contact-item .item-buttons button.delete-contact {
  background-color: #dc4b5d;
}
.contact-list .contact-item .item-buttons button.delete-contact:hover {
  background-color: #cc283c;
}
.contact-list .contact-item .item-buttons button svg {
  color: #fff;
  font-size: 16px;
}
</style>
