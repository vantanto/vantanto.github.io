<script setup lang="ts">
useHead({
  title: 'Portfolio',
  meta: [
    {
      name: 'description',
      content:
        "Explore Kristanto Margojoyo's impressive projects and achievements as a software engineer based in Indonesia. Discover a diverse range of innovative solutions and technologies showcased in his portfolio.",
    },
  ],
})
</script>

<template>
  <section class="container mx-auto mt-[3%]">
    <div class="mb-5 grid grid-cols-12 gap-5 md:mb-10 md:gap-10">
      <div class="col-span-12">
        <div class="grid grid-cols-12 gap-0 md:gap-10">
          <div class="col-span-12 lg:col-span-5">
            <a
              href="/assets/image/portfolio/mbkm.jpg"
              target="_blank"
              title="mbkm"
            >
              <img
                src="/assets/image/portfolio/mbkm.jpg"
                class="mb-3 transform rounded-md transition-transform duration-500 hover:scale-105"
                alt="mbkm"
              />
            </a>
          </div>
          <div class="col-span-12 lg:col-span-7">
            <h3 class="text-lg font-semibold text-gray-900">Multi-Tenancy E-Learning Platform (SaaS)</h3>
            <div class="mt-3 text-base font-normal">
              <ul class="ms-7 list-disc">
                <li>
                  Create a multi-tenant e-learning platform for universities, which allows each university to have its
                  own e-learning
                </li>
                <li>
                  Create a customized database, which allows each university to have its own customized entities and
                  attributes
                </li>
                <li>Create a cross-university course registration system</li>
                <li>Create real-time course-specific chats and private chat</li>
              </ul>
            </div>
            <div class="mt-5 flex gap-2">
              <BaseIcon
                name="youtube"
                href="https://youtube.com/playlist?list=PLBWpRM4Xv0TLxFJRkQcTf4fmvhxPpR3k-"
                target="_blank"
                title="YouTube"
              />
              <div class="ms-auto"></div>
              <span class="text-sm text-gray-500">Laravel</span>
              <span class="text-sm text-gray-500">Vue.js</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <BaseCard
          title="vterminal"
          src="/assets/image/portfolio/vterminal.jpg"
          text="Interactive terminal to display profile, portfolio, social links and additional info."
        >
          <div class="mt-5 flex gap-2">
            <BaseIcon
              name="github"
              href="https://github.com/vantanto/vterminal"
              target="_blank"
              title="GitHub"
            />
            <BaseIcon
              name="open-in-new"
              href="https://vantanto.my.id/"
              target="_blank"
              title="Website"
            />
            <div class="ms-auto"></div>
            <span class="text-sm text-gray-500">JavaScript</span>
          </div>
        </BaseCard>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <BaseCard
          title="vpos_lite"
          src="/assets/image/portfolio/vpos_lite.jpg"
          text="Point of Sales to manage order and purchase transactions with stock system."
        >
          <div class="mt-5 flex gap-2">
            <BaseIcon
              name="github"
              href="https://github.com/vantanto/vpos_lite"
              target="_blank"
              title="GitHub"
            />
            <!-- <Icon
              name="file-document"
              href="https://vantanto.github.io/pages/documentation/vpos_lite.html"
              target="_blank"
            /> -->
            <div class="ms-auto"></div>
            <span class="text-sm text-gray-500">Laravel</span>
            <span class="text-sm text-gray-500">Vue.js</span>
          </div>
        </BaseCard>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <BaseCard
          title="vwallet"
          src="/assets/image/portfolio/vwallet.jpg"
          text="Wallet to record incoming or outgoing transactions based on transaction's categories."
        >
          <div class="mt-5 flex gap-2">
            <BaseIcon
              name="github"
              href="https://github.com/vantanto/vwallet"
              target="_blank"
              title="GitHub"
            />
            <!-- <Icon
              name="file-document"
              href="https://vantanto.github.io/pages/documentation/vwallet.html"
              target="_blank"
            /> -->
            <div class="ms-auto"></div>
            <span class="text-sm text-gray-500">Laravel</span>
          </div>
        </BaseCard>
      </div>
    </div>
    <div class="mb-5 md:mb-10">
      <a
        href="https://github.com/vantanto"
        class="flex justify-center gap-2 text-blue-600 hover:underline"
        title="GitHub"
      >
        <BaseIcon name="github" />
        <span> View more in my GitHub </span>
      </a>
    </div>
  </section>
</template>
