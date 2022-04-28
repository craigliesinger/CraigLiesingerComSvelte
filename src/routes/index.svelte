<script>
    import { blur } from 'svelte/transition'
    
</script>

<div class="p-10 pb-2">
    <div class="min-w-full lg:flex">      
      <div class="min-w-full border border-gray-200 bg-gray-100 rounded shadow-md p-4 flex flex-col md:flex-row items-start leading-normal" in:blur="{{amount: 1}}">
        <div class="flex mb-2 items-center">
            <div class="content-center overflow-hidden shadow-md mr-4 max-h-full hidden md:block">
                <img class="object-contain" src="/craig.jpg" alt="Craig Liesinger" title="Craig Liesinger"/>
            </div>
            <!-- <h1 class="text-6xl font-thin text-blue-700 ml-2">Craig Liesinger</h1> -->
        </div>
        <dl class="shadow-sm">
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Full name
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Jonathan Craig Liesinger
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                craig.liesinger@gmail.com
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  Nationality
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  American 🇺🇸
                </dd>
              </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                  Current Residency
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Austria 🇦🇹 
                </dd>
              </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Visa Status
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Familienangehöriger (open access to labor market)
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                About
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p class="mb-2">Experienced Project Manager with very diverse industry experience and strong interests in software development, innovation and process improvement. <br/><br/> See details on my experience:</p>
                <div class="flex items-start flex-wrap">
                  <a class="bg-blue-500 mr-2 mt-2 hover:bg-blue-700 hover:shadow-md text-white py-2 px-4 rounded-full font-medium" href="/work">Work</a>
                  <a class="bg-blue-500 mr-2 mt-2 hover:bg-blue-700 hover:shadow-md text-white py-2 px-4 rounded-full font-medium" href="/education">Education</a>
                  <a class="bg-blue-500 mr-2 mt-2 min-w-max hover:bg-blue-700 hover:shadow-md text-white py-2 px-4 rounded-full font-medium" href="/projects">Personal Projects</a>
                </div>
              </dd>
            </div>
        </dl>

      </div>
    </div>
  </div>

