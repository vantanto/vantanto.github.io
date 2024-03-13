<script setup>
import Skills from '@/components/Skills.vue'

const calculateAge = birthday => Math.abs(new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970)
const age = calculateAge(new Date(1999, 7 - 1, 20))
</script>

<template>
  <section class="container mx-auto mt-[3%]">
    <div class="grid grid-cols-12 md:gap-10">
      <div class="col-span-12 mb-5 justify-self-center md:col-span-5 md:justify-self-end">
        <img
          src="/assets/image/me.jpg"
          class="transform rounded-md transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div class="col-span-12 justify-self-center md:col-span-6 md:w-full md:justify-self-start">
        <table class="mb-5 w-full table-auto text-left">
          <tbody>
            <tr>
              <th>Name</th>
              <td>: Kristanto Margojoyo</td>
            </tr>
            <tr>
              <th>Degree</th>
              <td>: Bachelor of information System</td>
            </tr>
            <tr>
              <th>City</th>
              <td>: Jember, East Java</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>: {{ age }}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>
                :
                <a
                  href="https://wa.me/6282139056230"
                  class="text-blue-600 hover:underline"
                  >+62 8213 9056 230</a
                >
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                :
                <a
                  href="mailto: kristanto.margojoyo99@gmail.com"
                  class="text-blue-600 hover:underline"
                  >kristanto.margojoyo99@gmail.com</a
                >
              </td>
            </tr>
          </tbody>
        </table>
        <p class="mb-5 text-center md:text-left">
          I am a person who wants to work hard to achieve targets. In doing assignments, I have the motivation not to
          procrastinate on doing assignments, so that assignments can be completed on time.
        </p>
        <Skills />
      </div>
    </div>
  </section>
</template>
