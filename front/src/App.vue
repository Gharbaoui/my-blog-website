<template>
  <div class="h-full">

    <div class="py-10 bg-gradient-to-b from-blue-800 to-transparent h-screen">
      <div class="container mx-auto px-4">
        <manager-compo />
      </div>
        

      <div class="py-4">
          <router-view />
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ManagerCompo from './components/manager.vue';
export default defineComponent({
  name: 'AppCompo',
  components: {
    'manager-compo': ManagerCompo
  },
  methods:{

  }
});
</script>
