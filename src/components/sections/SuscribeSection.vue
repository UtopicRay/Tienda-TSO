<script setup lang="ts">
import SimpleForm from '@/components/forms/SimpleForm.vue'
import { useSectionObserver } from '@/hooks/useSectionObserver'

const { element } = useSectionObserver()
</script>

<template>
  <section ref="element" class="relative w-full py-20 h-full overflow-hidden section-observer">
    <div class="absolute -z-50 h-full top-0 bottom-0 animate-float">
      <svg
        class="w-[100vw] h-full"
        viewBox="0 0 1920 435"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.19" filter="url(#filter0_f_342_6255)">
          <path
            d="M1100.46 5.91522C608.64 39.3436 613.654 613.247 929.132 729.062C1136.51 805.191 1284.97 764.106 1353.95 558.032C1410.3 389.699 1531.46 451.482 1626.29 403.823C1793.1 319.986 1747.71 199.317 1964.51 50.1437C2181.32 -99.03 2031.89 -356 1864.41 -457.565C1696.93 -559.13 1481.32 -480.313 1406.1 -356.067C1258.72 -112.629 1434.05 -16.7589 1100.46 5.91522Z"
            fill="#F5AF05"
          />
        </g>
        <g opacity="0.4" filter="url(#filter1_f_342_6255)">
          <path
            d="M-43.5412 486.915C-535.36 520.343 -530.346 1094.25 -214.868 1210.06C-7.49434 1286.19 140.97 1245.11 209.951 1039.03C266.299 870.699 387.458 932.482 482.287 884.822C649.099 800.985 603.709 680.317 820.514 531.143C1037.32 381.969 887.888 125 720.408 23.4346C552.928 -78.1306 337.317 0.686368 262.097 124.933C114.717 368.37 290.055 464.241 -43.5412 486.915Z"
            fill="#607EA7"
          />
        </g>
        <g opacity="0.3" filter="url(#filter2_f_342_6255)">
          <path
            d="M1699.46 1014.92C1207.64 1048.34 1212.65 1622.25 1528.13 1738.06C1735.51 1814.19 1883.97 1773.11 1952.95 1567.03C2009.3 1398.7 2130.46 1460.48 2225.29 1412.82C2392.1 1328.99 2346.71 1208.32 2563.51 1059.14C2780.32 909.97 2630.89 653 2463.41 551.435C2295.93 449.87 2080.32 528.687 2005.1 652.933C1857.72 896.371 2033.05 992.241 1699.46 1014.92Z"
            fill="#F5AF05"
          />
        </g>
        <g opacity="0.8" filter="url(#filter3_f_342_6255)">
          <path
            d="M168.459 1094.91C-323.36 1128.34 -318.346 1702.25 -2.86758 1818.06C204.506 1894.19 352.97 1853.11 421.951 1647.03C478.299 1478.7 599.457 1540.48 694.287 1492.82C861.099 1408.99 815.709 1288.32 1032.51 1139.14C1249.32 989.969 1099.89 733 932.408 631.435C764.928 529.869 549.317 608.686 474.097 732.933C326.717 976.371 502.055 1072.24 168.459 1094.91Z"
            fill="#607EA7"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_342_6255"
            x="273.542"
            y="-939.355"
            width="2234.26"
            height="2139.29"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="217.64" result="effect1_foregroundBlur_342_6255" />
          </filter>
          <filter
            id="filter1_f_342_6255"
            x="-870.458"
            y="-458.356"
            width="2234.26"
            height="2139.29"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="217.64" result="effect1_foregroundBlur_342_6255" />
          </filter>
          <filter
            id="filter2_f_342_6255"
            x="872.542"
            y="69.6446"
            width="2234.26"
            height="2139.29"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="217.64" result="effect1_foregroundBlur_342_6255" />
          </filter>
          <filter
            id="filter3_f_342_6255"
            x="-658.458"
            y="149.644"
            width="2234.26"
            height="2139.29"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="217.64" result="effect1_foregroundBlur_342_6255" />
          </filter>
        </defs>
      </svg>
    </div>
    <div class="flex justify-center items-center w-full px-4">
      <div
        class="flex flex-col lg:p-12 py-6 px-4 gap-13 card border border-gray-200 rounded-sm card animate-fade-in-up"
      >
        <div class="text-center animate-slide-in">
          <h3 class="text-[#D09504] font-bold text-xl lg:text-4xl">Suscríbete a nuestro boletín</h3>
          <p class="text-neutral-1 text-sm lg:text-md">
            Mantente al tanto de todas las novedades ofertas y descuentos. ¡Suscríbete!
          </p>
        </div>
        <SimpleForm
          placeholder="Correo electrónico"
          type="email"
          action="Suscribirse"
          color="bg-[#4F6A8E]"
          class="animate-fade-in"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  background-color: #ffffffb2;
  backdrop-filter: blur(4px);
  box-shadow: 0px 0px 32px 0px #0000000d;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.section-observer {
  opacity: 0;
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
  transform: translateY(30px);
}

.section-observer.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
