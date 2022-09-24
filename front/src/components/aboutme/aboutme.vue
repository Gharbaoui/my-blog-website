<template>
    <div>
      <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div class="px-6">
            <div class="flex flex-wrap justify-center">
                <div class="w-full flex justify-center">
                    <div class="relative">
                        <img :src="require(`@/assets/image.jpeg`)" class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"/>
                    </div>
                </div>
                <div class="w-full text-center mt-20">
                  <!-- do not remove this -->
                </div>
            </div>
            <div class="text-center mt-2">
                <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Mohamed El Gharbaoui</h3>
            </div>
            <div class="mt-6 py-6 border-t border-slate-200 text-center">
                <div class="flex flex-wrap justify-center">
                    <div class="w-full px-4">
                        <p class="font-light leading-relaxed text-slate-600 mb-4">
                          I' am a software engineer student at 1337 school (42 Network), I am interested in computer organization,
                          architecture, embedded systems, low level in general, I am motivated to work on projects with others and discover new things, and
                          solve problems
                        </p>
                    </div>
                </div>
            </div>
            <div class="py-6 border-t border-slate-200 text-center">
                <div class="flex flex-wrap justify-around">
                  <a href="https://github.com/gharbaoui" target="_blank" class=" bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6 cursor-pointer">
                    github
                  </a>
                  <a href="https://www.linkedin.com/in/mohamed-el-gharbaoui-964022199/" target="_blank" class=" bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6 cursor-pointer">
                    linkdin
                  </a>
                </div>
            </div>
        </div>
    </div>

    </div>
  </template>
  
  <script lang="ts">
    
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'AboutMeCompo',
    methods:{
  
    }
  });
  </script>
  