<template>
  <div
    class="mx-auto my-8 flex w-full max-w-7xl flex-col
           items-center gap-8 px-5 md:px-20
           lg:flex-row lg:justify-between"
  >
    <figure
      class="order-2 flex h-[400px] min-w-min justify-center
             lg:order-1 lg:h-[538px]"
    >
      <img
        src="/imagines/simpsons/lisa.png"
        alt="Lisa Simpson"
        class="h-full w-auto object-contain"
      />
    </figure>

    <div
      class="order-1 flex flex-col gap-4 text-center lg:text-left"
    >
      <h1 class="mb-5 text-xl font-bold lg:text-5xl">
        About the Simpsons Quote App
      </h1>

      <div class="lg:max-w-3xl">
        <p class="mb-5">
          The Simpsons is a beloved animated television show that has
          been on the air since 1989, and it has a massive following
          of fans who love the show's humor, characters, and memorable
          moments. The show has also become a cultural phenomenon,
          with many of its elements and catchphrases becoming part
          of the popular lexicon.
        </p>

        <p class="mb-5">
          Knowing quotes from The Simpsons can be cool for a few
          reasons. First, it can help you connect with other fans
          of the show and spark conversations about favorite episodes,
          characters, and jokes. Second, many of the show's quotes
          have become iconic and are often referenced in popular
          culture, so knowing them can make you feel more in tune
          with current trends and references.
        </p>

        <p class="mb-5">
          Furthermore, The Simpsons has often tackled social and
          political issues through satire and parody, making its
          quotes more than just funny one-liners. Being familiar
          with the show's commentary on current events and societal
          trends can also make you more aware and engaged with
          the world around you.
        </p>

        <p>
          API and images:
          <a
            href="https://thesimpsonsquoteapi.glitch.me/quotes"
            target="_blank"
            rel="noopener noreferrer"
            class="break-words hover:underline focus:underline"
          >
            https://thesimpsonsquoteapi.glitch.me/quotes
          </a>
        </p>
      </div>
    </div>
  </div>
</template>