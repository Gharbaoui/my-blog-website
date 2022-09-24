<template>
  <nav class="rounded font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
    <div class="mb-2 sm:mb-0">
      <div class="font-sans">
        WIU
      </div>
    </div>
    <div>
      <router-link :to="{name : 'aboutme'}" href="/one" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About me</router-link>
      <router-link :to="{name : 'aboutme'}" href="/two" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Blogs</router-link>
    </div>
  </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'ManagerCompo',
    methods:{
  
    }
  });
  </script>
  