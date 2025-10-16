import{t as o,T as i}from"./twig-BXd3Gfe2.js";import{D as a,a as r}from"./twig-foVUGi9y.js";import"./input-Bm6R5C2j.js";r(i);i.cache(!1);o.twig({id:"@components/forms/input/input.twig",data:[{type:"raw",value:'<div class="block ',position:{start:0,end:18}},{type:"output",position:{start:18,end:53},stack:[{type:"Twig.expression.type.variable",value:"input_class",match:["input_class"],position:{start:18,end:53}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:18,end:53},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:18,end:53}},{type:"Twig.expression.type.string",value:"my-4",position:{start:18,end:53}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:18,end:53},expression:!1}]}]},{type:"raw",value:`">

  <label for="`,position:{start:53,end:71}},{type:"output",position:{start:71,end:89},stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"],position:{start:71,end:89}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:71,end:89}}]},{type:"raw",value:'">',position:{start:89,end:91}},{type:"output",position:{start:91,end:102},stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"],position:{start:91,end:102}}]},{type:"raw",value:" ",position:{start:102,end:103}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"required",match:["required"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:103,end:130},output:[{type:"raw",value:'<span class="form-required">*</span>',position:{start:130,end:166}}]},position:{open:{start:103,end:130},close:{start:166,end:177}}},{type:"raw",value:`</label>

  `,position:{start:177,end:189}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"field",position:{start:189,end:206},output:[{type:"raw",value:"  ",position:{start:207,end:209}}]},position:{open:{start:189,end:206},close:{start:209,end:223}}},{type:"raw",value:"  ",position:{start:224,end:226}},{type:"raw",value:`

</div>
`,position:{start:339,end:339}}],precompiled:!0});const s=t=>t,c=(t={})=>{const n=o.twig({id:"/Users/jabelmunoz/Documents/projects/foundational-build-drupal/web/themes/custom/mc_theme/storybook/src/stories/components/forms/select/filterable.twig",data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/input/input.twig"}],position:{start:0,end:48},output:[{type:"raw",value:"  ",position:{start:49,end:51}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"field",position:{start:51,end:68},output:[{type:"raw",value:`        <div   x-data="{
                  open: false,
                  search: '',
                  selectedString: '',
                  selected: [],
                  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
                  get filteredOptions() {
                      const searchLower = this.search.toLowerCase();
                      return this.options.filter(option => 
                          option.toLowerCase().includes(searchLower) && !this.selected.includes(option)
                      );
                  },
                  toggle() {                    
                    this.open = !this.open;
                  },
                  close() {
                      this.open = false;
                  },
                  keydown(event) {
                    console.log(event.key);
                    if (event.key === 'Escape') {
                      this.open = false;
                    }else if (event.key === 'Delete') {
                        this.selected = [];
                        this.selectedString = '';
                    }else if (event.key === 'Backspace') {
                        this.selected.pop();
                        this.selectedString = this.selected.join(', ');
                    }
                  },
                  toggleOption(option) {
                    
                      if (this.selected.includes(option)) {
                          this.selected = this.selected.filter(item => item !== option);
                      } else {
                          this.selected.push(option);
                      }
                      this.selectedString = this.selected.join(', ');
                      this.search = ''; // Clear search input after selecting
                      // focus on first element in dropdown
                      const firstChild = this.$refs.dropdown.children[0];                      
                      if (firstChild) {
                        firstChild.focus();
                      }else{
                        this.$refs.searchInput.focus();
                      }


                  }
              }" class="relative w-64" >
          <button @keydown="keydown($event)"  @click="toggle"      class="border rounded p-2 bg-white cursor-pointer w-full text-left">
              <span x-text="selected.length ? selected.join(', ') : 'Select options'"></span>
          </button>

          <input type="hidden" name="`,position:{start:69,end:2534}},{type:"output",position:{start:2534,end:2544},stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"],position:{start:2534,end:2544}}]},{type:"raw",value:`" x-model="selectedString">
          <div @keydown="keydown($event)"  x-show="open" @click.away="close" class="absolute z-10 mt-1 w-full bg-white border rounded shadow-lg">
              <input x-ref="searchInput" type="text" placeholder="Add or select..." x-model="search" class="w-full p-2 border-b" />
              <div class="max-h-48 overflow-y-auto flex flex-col" >
                  <template x-for="option in filteredOptions" :key="option" x-ref="dropdown">
                      <button @click="toggleOption(option)" class="p-2 hover:bg-gray-200 cursor-pointer w-full text-left">
                          <span x-text="option"></span>
                      </button>
                  </template>
              </div>
          </div>
      </div>

    `,position:{start:2544,end:3309}}]},position:{open:{start:51,end:68},close:{start:3309,end:3323}}}]},position:{open:{start:0,end:48},close:{start:3324,end:3338}}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),s(n.render({attributes:new a(e),...t}))}catch(e){return s("An error occurred whilst rendering /Users/jabelmunoz/Documents/projects/foundational-build-drupal/web/themes/custom/mc_theme/storybook/src/stories/components/forms/select/filterable.twig: "+e.toString())}};export{c as f};
