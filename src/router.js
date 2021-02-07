import Vue from "vue"
import Router from "vue-router"

import ContactList from "@/pages/ContactList"
import CreateContact from "@/pages/CreateContact"
import UpdateContact from "@/pages/UpdateContact"

Vue.use(Router)

const routes = [
  {
    name: "contactList",
    path: "/",
    component: ContactList,
  },
  {
    name: "createContact",
    path: "/create",
    component: CreateContact,
  },
  {
    name: "updateContact",
    path: "/update/:id",
    component: UpdateContact,
  },
]

const router = new Router({ routes, mode: "history" })

export default router
