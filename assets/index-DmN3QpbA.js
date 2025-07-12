(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=r(i.map(r=>{if(r=t(r,a),r in n)return;n[r]=!0;let i=r.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let e=s.length-1;e>=0;e--){let t=s[e];if(t.href===r&&(!i||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:e,i||(u.as=`script`),u.crossOrigin=``,u.href=r,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=window.localStorage,a={getCart(){return JSON.parse(i.getItem(`shopping_cart`)||`[]`)},addToCart(e,t=1){let n=this.getCart(),r=n.find(t=>t.productId===e.productId);r?r.quantity+=t:n.push({...e,quantity:t,selected:!1}),i.setItem(`shopping_cart`,JSON.stringify(n)),this.updateCartCount()},removeFromCart(e){let t=this.getCart().filter(t=>t.productId!==e);i.setItem(`shopping_cart`,JSON.stringify(t)),this.updateCartCount()},increaseQuantity(e){let t=this.getCart(),n=t.find(t=>t.productId===e);n.quantity+=1,i.setItem(`shopping_cart`,JSON.stringify(t)),this.updateCartCount()},decreaseQuantity(e){let t=this.getCart(),n=t.find(t=>t.productId===e);n.quantity===1?this.removeFromCart(e):(--n.quantity,i.setItem(`shopping_cart`,JSON.stringify(t)),this.updateCartCount())},getSelectedItems(){let e=this.getCart();return e.filter(e=>e.selected)},toggleSelected(e){let t=this.getCart();if(e){let n=t.find(t=>t.productId===e);n.selected=!n.selected}else{let e=t.every(e=>e.selected);t.forEach(t=>{t.selected=!e})}i.setItem(`shopping_cart`,JSON.stringify(t))},removeSelectedItems(){let e=this.getCart(),t=e.filter(e=>!e.selected);i.setItem(`shopping_cart`,JSON.stringify(t)),this.updateCartCount()},resetCart(){i.removeItem(`shopping_cart`),this.updateCartCount()},updateCartCount(){let e=this.getCart(),t=document.querySelector(`#cart-icon-btn`),n=t.querySelector(`.cart-count-badge`);e.length>0&&t&&(n||(n=document.createElement(`span`),n.className=`absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center cart-count-badge`,t.appendChild(n)),n.textContent=e.length),e.length===0&&n.remove()}};function o(e){return typeof e==`string`&&(e=parseInt(e,10)),e.toLocaleString()+`원`}const s=(e=[])=>`
    <div class="cart-modal">
      <div class="cart-modal-overlay"></div>
      <div class="modal-content">
        <div
          class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden"
          style="pointer-events: auto;">
          <!-- 헤더 -->
          ${c(e)}
          <!-- 컨텐츠 -->
          <div class="flex flex-col max-h-[calc(90vh-120px)]">${l(e)}</div>
          <!-- 하단 액션 -->
          ${e.length>0?d():``}
        </div>
      </div>
    </div>
  `;function c(e){return`
    <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <h2 class="text-lg font-bold text-gray-900 flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
          ></path>
        </svg>
        장바구니
        <span class="text-sm font-normal text-gray-600 ml-1">(${e.length})</span>
      </h2>
      <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `}function l(e){if(e.length===0)return`
      <div class="flex-1 flex items-center justify-center p-8">
        <div class="text-center">
          <div class="text-gray-400 mb-4">
            <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
              ></path>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
          <p class="text-gray-600">원하는 상품을 담아보세요!</p>
        </div>
      </div>
    `;let t=a.getSelectedItems().length===e.length;return`
    <div class="p-4 border-b border-gray-200 bg-gray-50">
      <label class="flex items-center text-sm text-gray-700">
        <input
          type="checkbox"
          id="cart-modal-select-all-checkbox"
          class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
          ${t?`checked`:``}
        />
        전체선택 (${e.length}개)
      </label>
    </div>
    <!-- 아이템 목록 -->
    <div class="flex-1 overflow-y-auto">
      <div class="p-4 space-y-4">
        ${e.map(u).join(``)}
      </div>
    </div>
  `}function u({productId:e,title:t,lprice:n,image:r,quantity:i}){let s=a.getSelectedItems().some(t=>t.productId===e);return`
    <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id=${e}>
      <!-- 선택 체크박스 -->
      <label class="flex items-center mr-3">
        <input
          type="checkbox"
          class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded
                focus:ring-blue-500"
          data-product-id=${e}
          ${s?`checked`:``}
        />
      </label>
      <!-- 상품 이미지 -->
      <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
        <img
          src="${r}"
          alt="${t}"
          class="w-full h-full object-cover cursor-pointer cart-item-image"
          data-product-id=${e}
        />
      </div>
      <!-- 상품 정보 -->
      <div class="flex-1 min-w-0">
        <h4
          class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title"
          data-product-id=${e}
        >
          ${t}
        </h4>
        <p class="text-sm text-gray-600 mt-1">${o(n)}</p>
        <!-- 수량 조절 -->
        <div class="flex items-center mt-2">
          <button
            class="quantity-decrease-btn w-7 h-7 flex items-center justify-center
                 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
            data-product-id=${e}
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
          </button>
          <input
            type="number"
            value=${i}
            min="1"
            class="quantity-input w-12 h-7 text-center text-sm border-t border-b
                border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            disabled=""
            data-product-id=${e}
          />
          <button
            class="quantity-increase-btn w-7 h-7 flex items-center justify-center
                 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
            data-product-id=${e}
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- 가격 및 삭제 -->
      <div class="text-right ml-3">
        <p class="text-sm font-medium text-gray-900">${o(n*i)}</p>
        <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id=${e}>
          삭제
        </button>
      </div>
    </div>
  `}function d(){let e=a.getCart(),t=a.getSelectedItems(),n=t.reduce((e,t)=>e+t.lprice*t.quantity,0),r=e.reduce((e,t)=>e+t.lprice*t.quantity,0);return`
    <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
      <!-- 선택된 아이템 정보 -->
      <div class="flex justify-between items-center mb-3 text-sm">
        <span class="text-gray-600">선택한 상품 (${t.length}개)</span>
        <span class="font-medium">${o(n)}</span>
      </div>
      <!-- 총 금액 -->
      <div class="flex justify-between items-center mb-4">
        <span class="text-lg font-bold text-gray-900">총 금액</span>
        <span class="text-xl font-bold text-blue-600">${o(r)}</span>
      </div>
      <!-- 액션 버튼들 -->
      <div class="space-y-2">
        ${t.length>0?`
        <button
          id="cart-modal-remove-selected-btn"
          class="w-full bg-red-600 text-white py-2 px-4 rounded-md
                        hover:bg-red-700 transition-colors text-sm"
        >
          선택한 상품 삭제 (${t.length}개)
        </button>
        `:``}
        <div class="flex gap-2">
          <button
            id="cart-modal-clear-cart-btn"
            class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm"
          >
            전체 비우기
          </button>
          <button
            id="cart-modal-checkout-btn"
            class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm"
          >
            구매하기
          </button>
        </div>
      </div>
    </div>
  `}const f=({productId:e,image:t,title:n,lprice:r,brand:i})=>`
  <div
    class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
    data-product-id=${e}
  >
    <!-- 상품 이미지 -->
    <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
      <img
        src="${t}"
        alt="${n}"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        loading="lazy"
      />
    </div>
    <!-- 상품 정보 -->
    <div class="p-3">
      <div class="cursor-pointer product-info mb-3">
        <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${n}</h3>
        <p class="text-xs text-gray-500 mb-2">${i||``}</p>
        <p class="text-lg font-bold text-gray-900">${o(r)}</p>
      </div>
      <!-- 장바구니 버튼 -->
      <button
        class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md hover:bg-blue-700 transition-colors add-to-cart-btn"
        data-product-id=${e}
      >
        장바구니 담기
      </button>
    </div>
  </div>
`,p=({id:e,label:t,options:n,value:r})=>`
  <div class="flex items-center gap-2">
    <label class="text-sm text-gray-600" for="${e}">${t}:</label>
    <select
      id="${e}"
      class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
    >
      ${n.map(e=>`<option value="${e.value}"${e.value.toString()===r.toString()?` selected`:``}>${e.label}</option>`).join(``)}
    </select>
  </div>`,m=(e={},t=``,n=``,r=20,i=`price_asc`,a=``)=>{let o=[];o.push(`<button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>`),t&&(o.push(`<span class="text-xs text-gray-500">&gt;</span>`),o.push(`<button data-breadcrumb="category1" data-category1="${t}" class="text-xs hover:text-blue-800 hover:underline">${t}</button>`)),n&&(o.push(`<span class="text-xs text-gray-500">&gt;</span>`),o.push(`<button data-breadcrumb="category2" data-category1="${t}" data-category2="${n}" class="text-xs hover:text-blue-800 hover:underline">${n}</button>`));let s=o.join(``),c=[];if(!t)Object.keys(e).forEach(e=>{c.push(`<button data-category1="${e}" data-level="1" class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50">${e}</button>`)});else if(!n){let n=e[t]||{};Object.keys(n).forEach(e=>{c.push(`<button data-category1="${t}" data-category2="${e}" data-level="2" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50">${e}</button>`)})}let l=c.join(``);return`
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
    <!-- 검색창 -->
    <div class="mb-4">
      <div class="relative">
        <input
          type="text"
          id="search-input"
          placeholder="상품명을 검색해보세요..."
          value="${a}"
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <button id="search-btn" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700">
          검색
        </button>
      </div>
    </div>

    <!-- 필터 옵션 -->
    <div class="space-y-3">
      <!-- 카테고리 필터 -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">카테고리:</label>
          ${s}
        </div>
        <div class="space-y-2">
          <div class="flex flex-wrap gap-2">
            ${l}
          </div>
        </div>
      </div>

      <!-- 페이지당 상품 수 & 정렬 -->
      <div class="flex gap-2 items-center justify-between">
        ${p({id:`limit-select`,label:`개수`,options:[{value:`10`,label:`10개`},{value:`20`,label:`20개`},{value:`50`,label:`50개`},{value:`100`,label:`100개`}],value:r})}
        ${p({id:`sort-select`,label:`정렬`,options:[{value:`price_asc`,label:`가격 낮은순`},{value:`popularity`,label:`인기순`},{value:`price_desc`,label:`가격 높은순`},{value:`name_asc`,label:`이름순`},{value:`name_desc`,label:`이름 역순`}],value:i})}
      </div>
    </div>
  </div>
`},h=({loading:e=!1,categories:t={},category1:n=``,category2:r=``,products:i=[],total:a=0,limit:o=20,sort:s=`price_asc`,search:c=``}={})=>e?g():_(t,n,r,i,a,o,s,c);function g(){return`
  <div class="min-h-screen bg-gray-50">
    ${v()}
    <main class="max-w-md mx-auto px-4 py-4">
      <!-- 검색 및 필터 -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
        <!-- 검색창 -->
        <div class="mb-4">
          <div class="relative">
            <input
              type="text"
              id="search-input"
              placeholder="상품명을 검색해보세요..."
              value=""
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <button id="search-btn" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700">
              검색
            </button>
          </div>
        </div>
        <!-- 필터 옵션 -->
        <div class="space-y-3">
          <!-- 카테고리 필터 -->
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600">카테고리:</label>
              <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
            </div>
            <!-- 1depth 카테고리 -->
            <div class="flex flex-wrap gap-2">
              <div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>
            </div>
            <!-- 2depth 카테고리 -->
          </div>
          <!-- 기존 필터들 -->
          <div class="flex gap-2 items-center justify-between">
            <!-- 페이지당 상품 수 -->
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600">개수:</label>
              <select
                id="limit-select"
                class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="10">10개</option>
                <option value="20" selected="">20개</option>
                <option value="50">50개</option>
                <option value="100">100개</option>
              </select>
            </div>
            <!-- 정렬 -->
            <div class="flex items-center gap-2">
              <label class="text-sm text-gray-600">정렬:</label>
              <select
                id="sort-select"
                class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="price_asc" selected="">가격 낮은순</option>
                <option value="price_desc">가격 높은순</option>
                <option value="name_asc">이름순</option>
                <option value="name_desc">이름 역순</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- 상품 목록 -->
      <div class="mb-6">
        <div>
          <!-- 상품 그리드 -->
          <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            <!-- 로딩 스켈레톤 -->
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          <div class="text-center py-4">
            <div class="inline-flex items-center">
              <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    ${b()}
  </div>`}function _(e,t,n,r,i,a,o,s){return`
  <div class="min-h-screen bg-gray-50">
    ${v()}
    <main class="max-w-md mx-auto px-4 py-4">
      ${m(e,t,n,a,o,s)}
      <!-- 상품 목록 -->
      <div class="mb-6">
        <!-- 상품 개수 정보 -->
        <div class="mb-4 text-sm text-gray-600">
          총 <span class="font-medium text-gray-900">${i}개</span>의 상품</div>
        ${y(r)}
      </div>
    </main>
    ${b()}
  </div>`}function v(){let e=a.getCart();return`
  <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <h1 class="text-xl font-bold text-gray-900">
          <a href="/" data-link="">쇼핑몰</a>
        </h1>
        <div class="flex items-center space-x-2">
          <!-- 장바구니 아이콘 -->
          <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
              ></path>
              ${e.length>0?`<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center cart-count-badge">${e.length}</span>`:``}
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>`}function y(e){return e.length?`
    <div id="products-grid" class="grid grid-cols-2 gap-4 mb-6">
      ${e.map(e=>f(e)).join(``)}
    </div>
  `:`<div class="text-center py-4 text-sm text-gray-500">
              모든 상품을 확인했습니다
            </div>`}const b=()=>`
  <footer class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto py-8 text-center text-gray-500">
      <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
    </div>
  </footer>`;function x(e=[]){let t=document.getElementById(`modal-root`);t||(t=document.createElement(`div`),t.id=`modal-root`,document.body.appendChild(t)),t.innerHTML=`${s(e)}`,window.setupModalEvents&&window.setupModalEvents(t)}window.openCartModal=x,document.addEventListener(`click`,e=>{e.target.closest(`#cart-icon-btn`)&&x(a.getCart())});async function S(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function ee(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function C(){let e=await fetch(`/api/categories`);return await e.json()}const w=e=>{let t={success:{color:`green`,message:`장바구니에 추가되었습니다`,d:`M5 13l4 4L19 7`},error:{color:`red`,message:`오류가 발생했습니다`,d:`M6 18L18 6M6 6l12 12`},info:{color:`blue`,message:`선택된 상품들이 삭제되었습니다`,d:`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`}};return`
  <div class="flex flex-col gap-2 items-center justify-center mx-auto" style="width: fit-content;">
    <div class="bg-${t[e].color}-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
      <div class="flex-shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${t[e].d}"/>
        </svg>
      </div>
      <p class="text-sm font-medium">${t[e].message}</p>
      <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  </div>
  `},T=({product:e,related:t=[],loading:n=!1}={})=>`
    <div class="min-h-screen bg-gray-50">
      ${E()}
      <main class="max-w-md mx-auto px-4 py-4">
        ${D(n,e,t)}
      </main>
      ${j()}
    </div>`;function E(){let e=a.getCart();return`
  <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
        </div>
        <div class="flex items-center space-x-2">
          <!-- 장바구니 아이콘 -->
          <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
              ></path>
              ${e.length>0?`<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center cart-count-badge">${e.length}</span>`:``}
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
  `}function D(e=!1,t,n=[]){if(e)return`
    <div class="py-20 bg-gray-50 flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">상품 정보를 불러오는 중...</p>
      </div>
    </div>`;let r=n.filter(e=>e.productId!==t.productId);return`
    <!-- 브레드크럼 -->
    ${O(t)}
    <!-- 상품 상세 정보 -->
    <div class="bg-white rounded-lg shadow-sm mb-6">
      <!-- 상품 이미지 -->
      <div class="p-4">
        <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img
            src="${t.image}"
            alt="${t.title}"
            class="w-full h-full object-cover product-detail-image"
          />
        </div>
        <!-- 상품 정보 -->
        <div>
          <p class="text-sm text-gray-600 mb-1"></p>
          <h1 class="text-xl font-bold text-gray-900 mb-3">
            ${t.title}
          </h1>
          <!-- 평점 및 리뷰 -->
          ${k(t.rating,t.reviewCount)}
          <!-- 가격 -->
          <div class="mb-4">
            <span class="text-2xl font-bold text-blue-600">${o(t.lprice)}</span>
          </div>
          <!-- 재고 -->
          <div class="text-sm text-gray-600 mb-4">재고 ${t.stock}개</div>
          <!-- 설명 -->
          <div class="text-sm text-gray-700 leading-relaxed mb-6">
            ${t.description}
          </div>
        </div>
      </div>
      <!-- 수량 선택 및 액션 -->
      <div class="border-t border-gray-200 p-4">
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-gray-900">수량</span>
          <div class="flex items-center">
            <button
              id="quantity-decrease"
              class="w-8 h-8 flex items-center justify-center border border-gray-300
                   rounded-l-md bg-gray-50 hover:bg-gray-100"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
              </svg>
            </button>
            <input
              type="number"
              id="quantity-input"
              value="1"
              min="1"
              max="${t.stock}"
              class="w-16 h-8 text-center text-sm border-t border-b border-gray-300
                  focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              id="quantity-increase"
              class="w-8 h-8 flex items-center justify-center border border-gray-300
                   rounded-r-md bg-gray-50 hover:bg-gray-100"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- 액션 버튼 -->
        <button
          id="add-to-cart-btn"
          data-product-id="${t.productId}"
          class="w-full bg-blue-600 text-white py-3 px-4 rounded-md
                 hover:bg-blue-700 transition-colors font-medium"
        >
          장바구니 담기
        </button>
      </div>
    </div>
    <!-- 상품 목록으로 이동 -->
    <div class="mb-6">
      <button
        class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md
          hover:bg-gray-200 transition-colors go-to-product-list"
      >
        상품 목록으로 돌아가기
      </button>
    </div>
    <!-- 관련 상품 -->
    ${r.length>0?`
    <div class="bg-white rounded-lg shadow-sm">
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
        <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-3 responsive-grid">
          ${r.map(e=>A(e)).join(``)}
        </div>
      </div>
    </div>
    `:``}
  `}function O(e){return`
  <nav class="mb-4">
    <div class="flex items-center space-x-2 text-sm text-gray-600">
      <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
      <button class="breadcrumb-link" data-category1=${e.category1}>${e.category1}</button>
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
      <button class="breadcrumb-link" data-category2=${e.category2}>${e.category2}</button>
    </div>
  </nav>`}function k(e,t){let n=t=>t<Math.floor(e)?`text-yellow-400`:`text-gray-300`;return`
  <div class="flex items-center mb-3">
    <div class="flex items-center">
      <svg class="w-4 h-4 ${n(0)}" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        ></path>
      </svg>
      <svg class="w-4 h-4 ${n(1)}" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        ></path>
      </svg>
      <svg class="w-4 h-4 ${n(2)}" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        ></path>
      </svg>
      <svg class="w-4 h-4 ${n(3)}" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        ></path>
      </svg>
      <svg class="w-4 h-4 ${n(4)}" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        ></path>
      </svg>
    </div>
    <span class="ml-2 text-sm text-gray-600">${e.toFixed(1)} (${t}개 리뷰)</span>
  </div>`}function A({productId:e,image:t,title:n,lprice:r}){return`
  <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id=${e}>
    <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
      <img
        src="${t}"
        alt="${n}"
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
      ${n}
    </h3>
    <p class="text-sm font-bold text-blue-600">${o(r)}</p>
  </div>
  `}function j(){return`
  <footer class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto py-8 text-center text-gray-500">
      <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
    </div>
  </footer>
  `}const M=`
  <main class="max-w-md mx-auto px-4 py-4">
    <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
          </filter>
        </defs>

        <!-- 404 Numbers -->
        <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">
          404
        </text>

        <!-- Icon decoration -->
        <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>

        <!-- Message -->
        <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">
          페이지를 찾을 수 없습니다
        </text>

        <!-- Subtle bottom accent -->
        <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
      </svg>

      <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        홈으로
      </a>
    </div>
  </main>
`,N=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-CRjX2EoE.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));let P=0,F=1,I=20,L=`price_asc`,R=!0,z=[],B={},V=``,H=``,U=``,W=!1,G=null;async function K(){document.getElementById(`root`).innerHTML=h({loading:!0,categories:B,category1:V,category2:H,limit:I,sort:L,search:U});try{Object.keys(B).length||(B=await C());let e={page:1,limit:I,sort:L};U&&(e.search=U),V&&(e.category1=V),H&&(e.category2=H);let t=await S(e);F=t.pagination.page,R=t.pagination.hasNext,z=t.products,P=t.pagination.total,document.getElementById(`root`).innerHTML=h({loading:!1,categories:B,category1:V,category2:H,products:z,total:P,limit:I,sort:L,search:U})}catch(e){console.error(`상품을 가져오는 중 에러:`,e),document.getElementById(`root`).innerHTML=`<div class="text-center text-red-500">
        상품을 불러오는 데 실패했습니다.
        <button id="retry-btn" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded">재시도</button>
      </div>`}}async function q(e){Z.innerHTML=T({loading:!0});try{let t=await ee(e);G=t,Z.innerHTML=T({loading:!1,product:t,related:[]});let n=await S({category1:t.category1,category2:t.category2,limit:I}),r=n.products.filter(t=>t.productId!==e);Z.innerHTML=T({loading:!1,product:t,related:r})}catch(e){console.error(`상품 상세 로드 실패:`,e),Z.innerHTML=`<p class="text-center text-red-500">상품 상세를 불러오는 데 실패했습니다.</p>`}}function J(){let e=`/front_6th_chapter1-1`,t=(t=window.location.pathname)=>t.startsWith(e)?t.slice(e.length)||`/`:t,n=t=>e+t,r=t(),i=n(r);if(history.replaceState({},``,i),window.navigator.userAgent.includes(`jsdom`)&&Y(),r===`/`){let e=new URL(window.location).searchParams;return U=e.get(`search`)||``,V=e.get(`category1`)||``,H=e.get(`category2`)||``,L=e.get(`sort`)||`price_asc`,I=Number(e.get(`limit`))||20,F=Number(e.get(`current`))||1,R=!0,z=[],P=0,K()}let a=r.match(/^\/product\/(.+)$/);if(a)return q(a[1]);Z.innerHTML=M}function Y(){U=``,V=``,H=``,L=`price_asc`,I=20,F=1,R=!0,z=[],P=0,G=null,W=!1;let e=document.getElementById(`root`);e&&window.navigator.userAgent.includes(`jsdom`)&&(e.innerHTML=``,setTimeout(()=>{X()},0))}N().then(J),window.addEventListener(`popstate`,J),window.resetGlobalState=Y;function X(){let e=document.getElementById(`limit-select`);e&&!e.hasAttribute(`data-listener-added`)&&(e.setAttribute(`data-listener-added`,`true`),e.addEventListener(`change`,async e=>{I=Number(e.target.value),L=document.getElementById(`sort-select`).value;let t=new URL(window.location),n=t.searchParams;n.set(`limit`,I.toString()),n.set(`sort`,L),n.set(`current`,`1`),history.pushState({},``,`${t.pathname}?${n.toString()}`);let r={page:1,limit:I,sort:L};U&&(r.search=U),V&&(r.category1=V),H&&(r.category2=H);let i=await S(r);F=i.pagination.page,R=i.pagination.hasNext,z=i.products,P=i.pagination.total;let a=document.getElementById(`root`);a.innerHTML=h({loading:!1,categories:B,category1:V,category2:H,products:z,total:P,limit:I,sort:L,search:U})}))}const Z=document.getElementById(`root`);window.addEventListener(`change`,async e=>{if(e.target.id===`limit-select`||e.target.id===`sort-select`){I=Number(document.getElementById(`limit-select`).value),L=document.getElementById(`sort-select`).value;let e=new URL(window.location),t=e.searchParams;t.set(`limit`,I.toString()),t.set(`sort`,L),t.set(`current`,`1`),history.pushState({},``,`${e.pathname}?${t.toString()}`);let n={page:1,limit:I,sort:L};U&&(n.search=U),V&&(n.category1=V),H&&(n.category2=H);let r=await S(n);F=r.pagination.page,R=r.pagination.hasNext,z=r.products,P=r.pagination.total;let i=document.getElementById(`root`);i.innerHTML=h({loading:!1,categories:B,category1:V,category2:H,products:z,total:P,limit:I,sort:L,search:U})}}),Z.addEventListener(`keydown`,async e=>{if(e.target.id!==`search-input`||e.key!==`Enter`)return;let t=e.target.value;U=t;let n=new URL(window.location),r=n.searchParams;r.set(`search`,t),r.set(`current`,`1`),history.pushState({},``,`${n.pathname}?${r.toString()}`),Z.innerHTML=h({loading:!0,categories:B,category1:V,category2:H,limit:I,sort:L,search:U});let i={page:1,limit:I,sort:L,search:U};V&&(i.category1=V),H&&(i.category2=H);let a=await S(i);F=a.pagination.page,R=a.pagination.hasNext,z=a.products,P=a.pagination.total,Z.innerHTML=h({loading:!1,categories:B,category1:V,category2:H,products:z,total:P,limit:I,sort:L,search:U}),X();let o=document.getElementById(`limit-select`);o&&(o.onclick=()=>{setTimeout(()=>{if(o.value!==I.toString()){I=Number(o.value),L=document.getElementById(`sort-select`).value;let e=new URL(window.location),t=e.searchParams;t.set(`limit`,I.toString()),t.set(`sort`,L),t.set(`current`,`1`),history.pushState({},``,`${e.pathname}?${t.toString()}`),window.location.reload()}},100)})}),window.addEventListener(`scroll`,async()=>{if(window.location.pathname!==`/`||!R||W)return;let e=window.navigator.userAgent.includes(`jsdom`);if(!e){let e=window.innerHeight+window.scrollY,t=document.documentElement.scrollHeight-100;if(e<t)return}W=!0,Z.innerHTML=h({loading:!0,categories:B,category1:V,category2:H,limit:I,sort:L,search:U});try{let e=F+1,t={page:e,limit:I,sort:L};U&&(t.search=U),V&&(t.category1=V),H&&(t.category2=H);let n=await S(t);F=n.pagination.page,R=n.pagination.hasNext,z=z.concat(n.products),P=n.pagination.total,Z.innerHTML=h({loading:!1,categories:B,category1:V,category2:H,products:z,total:P,limit:I,sort:L,search:U})}catch(e){console.error(`무한 스크롤 로드 오류:`,e)}finally{W=!1}}),document.addEventListener(`click`,async e=>{let t=e.target.closest(`a[data-link]`);if(t)return e.preventDefault(),history.pushState({},``,t.getAttribute(`href`)),J();if(e.target.matches(`#quantity-increase`)||e.target.closest(`#quantity-increase`)){let e=document.querySelector(`#quantity-input`);if(e){let t=parseInt(e.value)||1,n=parseInt(e.max)||999,r=Math.min(t+1,n);e.value=String(r)}return}if(e.target.matches(`#quantity-decrease`)||e.target.closest(`#quantity-decrease`)){let e=document.querySelector(`#quantity-input`);if(e){let t=parseInt(e.value)||1,n=parseInt(e.min)||1,r=Math.max(t-1,n);e.value=String(r)}return}if(e.target.matches(`#cart-icon-btn`)||e.target.closest(`#cart-icon-btn`)){window.openCartModal(a.getCart());return}if(e.target.matches(`#add-to-cart-btn`)){let t=e.target.dataset.productId,n=G&&G.productId===t?G:z.find(e=>e.productId===t),r=document.querySelector(`#quantity-input`),i=r?parseInt(r.value,10):1;n&&(a.addToCart(n,i),$(`success`));return}if(e.target.classList.contains(`add-to-cart-btn`)){let t=e.target.dataset.productId,n=z.find(e=>e.productId===t);n&&(a.addToCart(n),$(`success`));return}let n=e.target.closest(`.related-product-card`);if(n&&n.dataset.productId)return history.pushState({},``,`/product/${n.dataset.productId}`),J();if(e.target.matches(`.go-to-product-list`))return history.pushState({},``,`/`),J();let r=e.target.closest(`.product-card`);if(r&&r.dataset.productId)return history.pushState({},``,`/product/${r.dataset.productId}`),J();if(e.target.matches(`[data-breadcrumb="reset"]`)){V=``,H=``;let e=new URL(window.location),t=e.searchParams;t.delete(`category1`),t.delete(`category2`),t.delete(`search`),t.set(`current`,`1`),history.pushState({},``,`${e.pathname}?${t.toString()}`),U=``;let n={page:1,limit:I,sort:L};U&&(n.search=U);let r=await S(n);F=r.pagination.page,R=r.pagination.hasNext,z=r.products,P=r.pagination.total;let i=document.getElementById(`root`);i.innerHTML=h({loading:!1,categories:B,category1:V,category2:H,products:z,total:P,limit:I,sort:L,search:U});return}if(e.target.matches(`[data-category1]`)&&!e.target.dataset.category2){V=e.target.dataset.category1;let t=new URL(window.location),n=t.searchParams;n.set(`category1`,V),n.delete(`category2`),n.set(`current`,`1`),history.pushState({},``,`${t.pathname}?${n.toString()}`),H=``;let r={page:1,limit:I,sort:L};U&&(r.search=U),V&&(r.category1=V);let i=await S(r);F=i.pagination.page,R=i.pagination.hasNext,z=i.products,P=i.pagination.total;let a=document.getElementById(`root`);a.innerHTML=h({loading:!1,categories:B,category1:V,category2:H,products:z,total:P,limit:I,sort:L,search:U});return}if(e.target.matches(`[data-category2]`)){H=e.target.dataset.category2;let t=new URL(window.location),n=t.searchParams;n.set(`category2`,H),n.set(`current`,`1`),history.pushState({},``,`${t.pathname}?${n.toString()}`);let r={page:1,limit:I,sort:L};U&&(r.search=U),V&&(r.category1=V),H&&(r.category2=H);let i=await S(r);F=i.pagination.page,R=i.pagination.hasNext,z=i.products,P=i.pagination.total;let a=document.getElementById(`root`);a.innerHTML=h({loading:!1,categories:B,category1:V,category2:H,products:z,total:P,limit:I,sort:L,search:U});return}if(e.target.id===`retry-btn`)return history.pushState({},``,window.location.href),J();if(e.target.id===`search-btn`){let e=document.getElementById(`search-input`).value;U=e;let t=new URL(window.location);t.searchParams.set(`search`,e),t.searchParams.set(`current`,`1`),history.pushState({},``,t);let n={page:1,limit:I,sort:L,search:U};V&&(n.category1=V),H&&(n.category2=H);let r=await S(n);F=r.pagination.page,R=r.pagination.hasNext,z=r.products,P=r.pagination.total;let i=document.getElementById(`root`);i.innerHTML=h({loading:!1,categories:B,category1:V,category2:H,products:z,total:P,limit:I,sort:L,search:U});return}});function Q(e){var t;function n(){e.innerHTML=``,window.removeEventListener(`keydown`,r)}function r(e){e.key===`Escape`&&n()}(t=e.querySelector(`#cart-modal-close-btn`))?.addEventListener(`click`,n),e.addEventListener(`click`,e=>{e.target.classList.contains(`cart-modal-overlay`)&&n()}),window.addEventListener(`keydown`,r);let i=e.querySelector(`[style*="pointer-events: auto"]`);i&&i.addEventListener(`click`,t=>{if(t.target.classList.contains(`quantity-increase-btn`)||t.target.closest(`.quantity-increase-btn`)){let n=t.target.closest(`.quantity-increase-btn`),r=n.dataset.productId;a.increaseQuantity(r);let i=e.querySelector(`.quantity-input[data-product-id="${r}"]`),s=a.getCart().find(e=>e.productId===r);i.value=s.quantity;let c=e.querySelector(`.cart-item[data-product-id="${r}"] p.text-sm.font-medium`);c.textContent=o(s.lprice*s.quantity);let l=e.querySelector(`.sticky.bottom-0 .text-xl.font-bold.text-blue-600`),u=a.getCart().reduce((e,t)=>e+t.lprice*t.quantity,0);l.textContent=o(u);return}if(t.target.classList.contains(`quantity-decrease-btn`)||t.target.closest(`.quantity-decrease-btn`)){let n=t.target.closest(`.quantity-decrease-btn`),r=n.dataset.productId;a.decreaseQuantity(r);let i=a.getCart(),s=i.find(e=>e.productId===r);if(s){let t=e.querySelector(`.quantity-input[data-product-id="${r}"]`);t.value=s.quantity;let n=e.querySelector(`.cart-item[data-product-id="${r}"] p.text-sm.font-medium`);n.textContent=o(s.lprice*s.quantity)}else e.querySelector(`.cart-item[data-product-id="${r}"]`).remove();let c=e.querySelector(`.sticky.bottom-0 .text-xl.font-bold.text-blue-600`),l=i.reduce((e,t)=>e+t.lprice*t.quantity,0);c.textContent=o(l);return}if(t.target.classList.contains(`cart-item-remove-btn`)){let n=t.target.dataset.productId;a.removeFromCart(n),e.innerHTML=s(a.getCart()),Q(e),$(`info`)}if(t.target.id===`cart-modal-select-all-checkbox`&&(a.toggleSelected(),e.innerHTML=s(a.getCart()),Q(e)),t.target.classList.contains(`cart-item-checkbox`)){let n=t.target.dataset.productId;a.toggleSelected(n),e.innerHTML=s(a.getCart()),Q(e)}t.target.id===`cart-modal-remove-selected-btn`&&(a.removeSelectedItems(),e.innerHTML=s(a.getCart()),Q(e),$(`info`)),t.target.id===`cart-modal-clear-cart-btn`&&(a.resetCart(),e.innerHTML=s(a.getCart()),Q(e),$(`info`))})}window.setupModalEvents=Q;function $(e=`success`){var t;document.querySelectorAll(`.fixed.top-4.right-4.z-\\[1000\\]`).forEach(e=>e.remove());let n=document.createElement(`div`);n.className=`fixed top-4 right-4 z-[1000]`,n.innerHTML=w(e),document.body.appendChild(n),(t=n.querySelector(`#toast-close-btn`))?.addEventListener(`click`,()=>{n.remove()}),setTimeout(()=>{n.parentNode&&n.remove()},3e3)}