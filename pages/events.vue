<script>
export default {
  name: 'events'
}
</script>

<template>
  <main>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="font-bold text-900 text-3xl mb-3 text-center">Beispiel 1</div>
      <div class="text-700 text-center mb-3">Risus feugiat in ante metus. Lacus suspendisse faucibus interdum posuere
        lorem.
      </div>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6 xl:w-3 p-5"><img src="http://placekitten.com/200/200" alt="Image"
                                                   class="w-full">
          <div class="mt-3 mb-2 font-medium text-900 text-xl">Ornare Arcu Odio</div>
          <span class="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span><a
            tabindex="0" class="text-blue-500 font-medium flex align-items-center mt-2"><span>Explore</span><i
            class="pi pi-arrow-right ml-3"></i></a></div>
        <div class="w-full lg:w-6 xl:w-3 p-5"><img src="http://placekitten.com/200/200" alt="Image"
                                                   class="w-full">
          <div class="mt-3 mb-2 font-medium text-900 text-xl">Sem Nulla Pharetra</div>
          <span class="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span><a
            tabindex="0" class="text-blue-500 font-medium flex align-items-center mt-2"><span>Explore</span><i
            class="pi pi-arrow-right ml-3"></i></a></div>
        <div class="w-full lg:w-6 xl:w-3 p-5"><img src="http://placekitten.com/200/200" alt="Image"
                                                   class="w-full">
          <div class="mt-3 mb-2 font-medium text-900 text-xl">Facilisi Etiam Dignissim</div>
          <span class="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span><a
            tabindex="0" class="text-blue-500 font-medium flex align-items-center mt-2"><span>Explore</span><i
            class="pi pi-arrow-right ml-3"></i></a></div>
        <div class="w-full lg:w-6 xl:w-3 p-5"><img src="http://placekitten.com/200/200" alt="Image"
                                                   class="w-full">
          <div class="mt-3 mb-2 font-medium text-900 text-xl">Risus Feugiat In Ante</div>
          <span class="text-700 line-height-3">Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.</span><a
            tabindex="0" class="text-blue-500 font-medium flex align-items-center mt-2"><span>Explore</span><i
            class="pi pi-arrow-right ml-3"></i></a></div>
      </div>
    </div>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="font-bold text-900 text-3xl mb-3 text-center">Beispiel 2</div>
      <div class="surface-ground">
        <div class="grid">
          <div class="col-12 lg:col-4 p-3">
            <div class="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
              <div class="p-4">
                <div class="flex align-items-center"><span
                  class="inline-flex border-circle align-items-center justify-content-center bg-green-100 mr-3"
                  style="width: 38px; height: 38px;"><i class="pi pi-globe text-xl text-green-600"></i></span><span
                  class="text-900 font-medium text-2xl">Title</span></div>
                <div class="text-900 my-3 text-xl font-medium">Quam adipiscing vitae proin sagittis.</div>
                <p class="mt-0 mb-3 text-700 line-height-3">Eget sit amet tellus cras adipiscing enim. At quis risus sed
                  vulputate odio. Proin libero nunc consequat interdum varius sit amet.</p></div>
              <div class="px-4 py-3 surface-100 text-right">
                <button class="p-button p-component p-button-rounded p-button-success" type="button"><!----><span
                  class="pi pi-arrow-right p-button-icon p-button-icon-left"></span><span
                  class="p-button-label">More</span><!----><span class="p-ink"></span></button>
              </div>
            </div>
          </div>
          <div class="col-12 lg:col-4 p-3">
            <div class="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
              <div class="p-4">
                <div class="flex align-items-center"><span
                  class="inline-flex border-circle align-items-center justify-content-center bg-yellow-100 mr-3"
                  style="width: 38px; height: 38px;"><i class="pi pi-globe text-xl text-yellow-600"></i></span><span
                  class="text-900 font-medium text-2xl">Title</span></div>
                <div class="text-900 my-3 text-xl font-medium">Proin libero nunci</div>
                <p class="mt-0 mb-3 text-700 line-height-3">Molestie ac feugiat sed lectus vestibulum mattis
                  ullamcorper. Vulputate odio ut enim blandit volutpat maecenas. Convallis tellus id interdum velit.</p>
              </div>
              <div class="px-4 py-3 surface-100 text-right">
                <button class="p-button p-component p-button-rounded p-button-warning" type="button"><!----><span
                  class="pi pi-arrow-right p-button-icon p-button-icon-left"></span><span
                  class="p-button-label">More</span><!----><span class="p-ink"></span></button>
              </div>
            </div>
          </div>
          <div class="col-12 lg:col-4 p-3">
            <div class="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
              <div class="p-4">
                <div class="flex align-items-center"><span
                  class="inline-flex border-circle align-items-center justify-content-center bg-purple-100 mr-3"
                  style="width: 38px; height: 38px;"><i class="pi pi-globe text-xl text-purple-600"></i></span><span
                  class="text-900 font-medium text-2xl">Title</span></div>
                <div class="text-900 my-3 text-xl font-medium"> At obcaecati quos ipsam laboriosam.</div>
                <p class="mt-0 mb-3 text-700 line-height-3">Rhoncus urna neque viverra justo nec ultrices dui sapien
                  eget. Id neque aliquam vestibulum morbi blandit cursus risus at ipsum.</p></div>
              <div class="px-4 py-3 surface-100 text-right">
                <button class="p-button p-component p-button-rounded p-button-help" type="button"><!----><span
                  class="pi pi-arrow-right p-button-icon p-button-icon-left"></span><span
                  class="p-button-label">More</span><!----><span class="p-ink"></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="font-bold text-3xl text-900 mb-5 text-center">Beispiel 3</div>
      <div class="grid nogutter">
        <div class="col-12 lg:col-4 p-3">
          <div class="shadow-2 border-round h-full surface-card"><img src="http://placekitten.com/200/125" alt="Image"
                                                                      class="block w-full border-round-top">
            <div class="p-4"><span class="block font-medium text-blue-600 mb-3">Crime</span>
              <div class="text-xl text-900 font-medium mb-3 line-height-3">Fugitive flamingo spotted in Florida</div>
              <div class="text-sm line-height-3 mb-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="flex">
                <div class="p-avatar p-component p-avatar-image p-avatar-circle"><img
                  src="images/blocks/avatars/circle/avatar-f-1.png"></div>
                <div class="ml-2">
                  <div class="text-xs font-bold text-900 mb-1">Anna Lane</div>
                  <div class="text-xs flex align-items-center text-700"><i
                    class="pi pi-calendar mr-1 text-xs"></i><span>Apr 5, 2021</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 lg:col-4 p-3">
          <div class="shadow-2 border-round h-full surface-card"><img src="http://placekitten.com/200/125" alt="Image"
                                                                      class="block w-full border-round-top">
            <div class="p-4 flex flex-column"><span class="block font-medium text-blue-600 mb-3">Wildlife</span>
              <div class="text-xl text-900 font-medium mb-3 line-height-3">Journey to the Ends of the Earth</div>
              <div class="text-sm line-height-3 mb-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="flex">
                <div class="p-avatar p-component p-avatar-image p-avatar-circle"><img
                  src="images/blocks/avatars/circle/avatar-f-2.png"></div>
                <div class="ml-2">
                  <div class="text-xs font-bold text-900 mb-1">Arlene McCoy</div>
                  <div class="text-xs flex align-items-center text-700"><i
                    class="pi pi-calendar mr-1 text-xs"></i><span>Apr 6, 2021</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 lg:col-4 p-3">
          <div class="shadow-2 border-round h-full surface-card"><img src="http://placekitten.com/200/125" alt="Image"
                                                                      class="block w-full border-round-top">
            <div class="p-4"><span class="block font-medium text-blue-600 mb-3">Marie</span>
              <div class="text-xl text-900 font-medium mb-3 line-height-3">'Real and imminent' extinction risk</div>
              <div class="text-sm line-height-3 mb-3 text-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="flex">
                <div class="p-avatar p-component p-avatar-image p-avatar-circle"><img
                  src="images/blocks/avatars/circle/avatar-f-3.png"></div>
                <div class="ml-2">
                  <div class="text-xs font-bold text-900 mb-1">Diane Miles</div>
                  <div class="text-xs flex align-items-center text-700"><i
                    class="pi pi-calendar mr-1 text-xs"></i><span>Apr 9, 2021</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
      <div class="font-bold text-900 text-3xl mb-3 text-center">Beispiel 4</div>
      <div class="text-xl line-height-3 text-600 mb-6 text-center">Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div class="flex justify-content-center flex-column lg:flex-row">
        <div class="shadow-2 p-4 mb-5 lg:mb-0 mr-0 lg:mr-5 surface-card"><img
          src="http://placekitten.com/150/190" class="mb-3 w-full">
          <div class="flex justify-content-between align-items-center">
            <div class="pr-3">
              <div class="text-xl text-900 font-medium mb-2">Lorem ipsum</div>
              <div class="text-blue-600">More</div>
            </div>
            <div class="flex flex-nowrap">
              <button
                class="p-button p-component p-button-icon-only p-button-rounded p-button-text p-button-outlined p-button-plain mr-2"
                type="button"><!----><span class="pi pi-twitter p-button-icon"></span><span class="p-button-label">&nbsp;</span>
                <!----><span class="p-ink"></span></button>
              <button
                class="p-button p-component p-button-icon-only p-button-rounded p-button-text p-button-outlined p-button-plain"
                type="button"><!----><span class="pi pi-github p-button-icon"></span><span
                class="p-button-label">&nbsp;</span><!----><span class="p-ink"></span></button>
            </div>
          </div>
        </div>
        <div class="shadow-2 p-4 mb-5 lg:mb-0 mr-0 lg:mr-5 surface-card"><img
          src="http://placekitten.com/150/190" class="mb-3 w-full">
          <div class="flex justify-content-between align-items-center">
            <div class="pr-3">
              <div class="text-xl text-900 font-medium mb-2">Lorem ipsum</div>
              <div class="text-blue-600">More</div>
            </div>
            <div class="flex flex-nowrap">
              <button
                class="p-button p-component p-button-icon-only p-button-rounded p-button-text p-button-outlined p-button-plain mr-2"
                type="button"><!----><span class="pi pi-twitter p-button-icon"></span><span class="p-button-label">&nbsp;</span>
                <!----><span class="p-ink"></span></button>
              <button
                class="p-button p-component p-button-icon-only p-button-rounded p-button-text p-button-outlined p-button-plain"
                type="button"><!----><span class="pi pi-github p-button-icon"></span><span
                class="p-button-label">&nbsp;</span><!----><span class="p-ink"></span></button>
            </div>
          </div>
        </div>
        <div class="shadow-2 p-4 surface-card"><img src="http://placekitten.com/150/190"
                                                    class="mb-3 w-full">
          <div class="flex justify-content-between align-items-center">
            <div class="pr-3">
              <div class="text-xl text-900 font-medium mb-2">Lorem ipsum</div>
              <div class="text-blue-600">More</div>
            </div>
            <div class="flex flex-nowrap">
              <button
                class="p-button p-component p-button-icon-only p-button-rounded p-button-text p-button-outlined p-button-plain mr-2"
                type="button"><!----><span class="pi pi-twitter p-button-icon"></span><span class="p-button-label">&nbsp;</span>
                <!----><span class="p-ink"></span></button>
              <button
                class="p-button p-component p-button-icon-only p-button-rounded p-button-text p-button-outlined p-button-plain"
                type="button"><!----><span class="pi pi-github p-button-icon"></span><span
                class="p-button-label">&nbsp;</span><!----><span class="p-ink"></span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="grid">
        <div class="col-12 lg:col-4 pr-0 lg:pr-4">
          <div class="text-900 text-5xl font-bold mb-3">Beispiel 5</div>
          <p class="text-700 text-lg line-height-3">Enim diam vulputate ut pharetra sit amet aliquam id. Consequat nisl
            vel pretium lectus quam id leo in. Nibh sit amet commodo nulla facilisi nullam vehicula. Nunc eget lorem
            dolor sed viverra ipsum nunc aliquet.</p></div>
        <div class="col-12 lg:col-8">
          <div class="grid">
            <div class="col-12 lg:col-6 p-3"><img src="http://placekitten.com/150/125" class="mb-4 w-full">
              <div class="font-medium text-xl mb-1 text-900">Lorem ipsum</div>
              <p class="line-height-3 mt-3 mb-3">Vulputate ut pharetra sit amet. Netus et malesuada fames ac turpis
                egestas. Elit eget gravida cum sociis natoque penatibus. Urna id volutpat lacus laoreet non curabitur.
                In ante metus dictum at.</p>
            </div>
            <div class="col-12 lg:col-6 p-3"><img src="http://placekitten.com/150/125" class="mb-4 w-full">
              <div class="font-medium text-xl mb-1 text-900">Lorem ipsum</div>
              <p class="line-height-3 mt-3 mb-3">Risus feugiat in ante metus dictum. Et egestas quis ipsum suspendisse
                ultrices. Risus pretium quam vulputate dignissim suspendisse. Justo nec ultrices dui sapien.</p>
            </div>
            <div class="col-12 lg:col-6 p-3"><img src="http://placekitten.com/150/125" class="mb-4 w-full">
              <div class="font-medium text-xl mb-1 text-900">Lorem ipsum</div>
              <p class="line-height-3 mt-3 mb-3">Donec et odio pellentesque diam volutpat commodo sed egestas. Blandit
                massa enim nec dui nunc mattis enim ut tellus. Suspendisse faucibus interdum posuere lorem ipsum.</p>
            </div>
            <div class="col-12 lg:col-6 p-3"><img src="http://placekitten.com/150/125" class="mb-4 w-full">
              <div class="font-medium text-xl mb-1 text-900">Lorem ipsum</div>
              <p class="line-height-3 mt-3 mb-3">Pretium aenean pharetra magna ac placerat vestibulum. Est ullamcorper
                eget nulla facilisi etiam dignissim diam quis enim. Fringilla urna porttitor rhoncus dolor purus non
                enim..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
