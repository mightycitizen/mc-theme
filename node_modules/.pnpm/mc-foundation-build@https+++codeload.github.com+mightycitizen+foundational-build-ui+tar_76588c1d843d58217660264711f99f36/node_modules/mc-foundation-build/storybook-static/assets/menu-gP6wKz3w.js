import{T as i,t as n}from"./twig-BXd3Gfe2.js";import{a as s,D as a}from"./twig-foVUGi9y.js";import"./icon-DbjO9X_E.js";s(i);i.cache(!1);s(i);i.cache(!1);n.twig({id:"@components/inline-text/icon/icon.twig",data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]},{type:"Twig.expression.type.key.period",key:"background"}],position:{start:0,end:24},output:[{type:"raw",value:"  ",position:{start:25,end:27}},{type:"logic",token:{type:"Twig.logic.type.set",key:"background_classes",expression:[{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]},{type:"Twig.expression.type.key.period",key:"background"},{type:"Twig.expression.type.string",value:"light"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}]},{type:"Twig.expression.type.string",value:"text-primary bg-primary-50"},{type:"Twig.expression.type.string",value:"text-white bg-primary"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:27,end:143}},position:{start:27,end:143}}]},position:{open:{start:0,end:24},close:{start:144,end:155}}},{type:"raw",value:'<span class="text-2xl leading-[0]',position:{start:156,end:189}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]},{type:"Twig.expression.type.key.period",key:"background"}],position:{start:189,end:213},output:[{type:"raw",value:" inline-flex items-center justify-center rounded-full py-4 px-4 ",position:{start:213,end:277}},{type:"output",position:{start:277,end:301},stack:[{type:"Twig.expression.type.variable",value:"background_classes",match:["background_classes"],position:{start:277,end:301}}]}]},position:{open:{start:189,end:213},close:{start:301,end:312}}},{type:"raw",value:" ",position:{start:312,end:313}},{type:"output",position:{start:313,end:328},stack:[{type:"Twig.expression.type.variable",value:"modifiers",match:["modifiers"],position:{start:313,end:328}}]},{type:"raw",value:`">
  <span class="`,position:{start:328,end:346}},{type:"output",position:{start:346,end:361},stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"],position:{start:346,end:361}},{type:"Twig.expression.type.key.period",position:{start:346,end:361},key:"name"}]},{type:"raw",value:`"></span>
</span>
`,position:{start:361,end:361}}],precompiled:!0});n.twig({id:"@components/forms/simple-form/simple-form.twig",data:[{type:"raw",value:'<form action="',position:{start:0,end:14}},{type:"output",position:{start:14,end:47},stack:[{type:"Twig.expression.type.variable",value:"action",match:["action"],position:{start:14,end:47}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:14,end:47},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:14,end:47}},{type:"Twig.expression.type.string",value:"/search",position:{start:14,end:47}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:14,end:47},expression:!1}]}]},{type:"raw",value:`">
  <div class="relative">
    <label for="`,position:{start:47,end:91}},{type:"output",position:{start:91,end:127},stack:[{type:"Twig.expression.type.variable",value:"input_id",match:["input_id"],position:{start:91,end:127}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:91,end:127},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:91,end:127}},{type:"Twig.expression.type.string",value:"keywords",position:{start:91,end:127}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:91,end:127},expression:!1}]}]},{type:"raw",value:`" class="text-2xl mb-5">Site Search</label>
    <input class="w-full pr-6 shadow rounded" placeholder="Enter your search term" type="search" id="`,position:{start:127,end:272}},{type:"output",position:{start:272,end:308},stack:[{type:"Twig.expression.type.variable",value:"input_id",match:["input_id"],position:{start:272,end:308}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:272,end:308},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:272,end:308}},{type:"Twig.expression.type.string",value:"keywords",position:{start:272,end:308}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:272,end:308},expression:!1}]}]},{type:"raw",value:'" name="',position:{start:308,end:316}},{type:"output",position:{start:316,end:341},stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"],position:{start:316,end:341}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:316,end:341},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:316,end:341}},{type:"Twig.expression.type.string",value:"q",position:{start:316,end:341}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:316,end:341},expression:!1}]}]},{type:"raw",value:`">
    <div class="absolute right-0 bottom-0 flex items-center pl-3">
      <button class="button m-0" type="submit"  value="Submit">
        <span class="">`,position:{start:341,end:498}},{type:"output",position:{start:498,end:535},stack:[{type:"Twig.expression.type.variable",value:"button_text",match:["button_text"],position:{start:498,end:535}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:498,end:535},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:498,end:535}},{type:"Twig.expression.type.string",value:"Search",position:{start:498,end:535}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:498,end:535},expression:!1}]}]},{type:"raw",value:`</span>
      </button>
    </div>
  </div>
</form>
`,position:{start:535,end:535}}],precompiled:!0});const p=e=>e,y=(e={})=>{const o=n.twig({id:"/Users/jabelmunoz/Documents/projects/foundational-build-drupal/web/themes/custom/mc_theme/storybook/src/stories/components/navigation/menu/menu.twig",data:[{type:"raw",value:`
<div id="main-menu" x-data="{
	    breakpoint: 1024,
	    dropdownOpen: { sm: null, lg: null },
      align: 'left',
      timeout: null,
	    toggleDropdown(index) {
	      if (window.innerWidth <= this.breakpoint) {
	        this.dropdownOpen.sm = this.dropdownOpen.sm === index ? null : index;
	      }else{
          this.dropdownOpen.lg = this.dropdownOpen.lg === index ? null : index;
          setTimeout(() => {
            this.checkDropdownPosition();
          }, 10);
        }
	    },
      checkDropdownPosition() {
        if (window.innerWidth > this.breakpoint) {
          const dropdown = document.querySelector('.dropdown:not(.hidden)');

          if (!dropdown) {
            console.warn('Dropdown reference not found');
            return;
          }

          const dropdownWidth = dropdown.offsetWidth; // Get the width of the dropdown
          const dropdownPosition = dropdown.getBoundingClientRect().left; // Get the left position of the dropdown
          const windowWidth = window.innerWidth; // Get the full width of the viewport
          const windowRight = windowWidth - dropdownPosition - dropdownWidth; // Calculate space on the right side of the dropdown

          // Determine alignment based on available space
          if (windowRight < 0) {
            this.align = 'right'; // Not enough space on the right
          } else {
            this.align = 'left'; // Enough space, align left
          }


        }
      },
	    handleMouseEnter(index) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.align = 'left';
          if (window.innerWidth > this.breakpoint) this.dropdownOpen['lg'] = index;
          setTimeout(() => {
            this.checkDropdownPosition();
          }, 10);
        }, 100);


	    },
	    handleMouseLeave() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
	        if (window.innerWidth > this.breakpoint) this.dropdownOpen['lg'] = null;
        }, 100);
	    },
      handleDirection(direction){
        if (direction === 'left') {
          if (this.dropdownOpen.lg > 0) {
            this.dropdownOpen.lg--;
          }else{
            this.dropdownOpen.lg = $refs.topbar.children.length - 1;
          }
        } else {
          if (this.dropdownOpen.lg < $refs.topbar.children.length - 1) {
            this.dropdownOpen.lg++;
          }else{
            this.dropdownOpen.lg = 0;
          }
        }
        $refs.topbar.children[this.dropdownOpen.lg].querySelector('a').focus();
      }
	  }" class="absolute z-20 bg-primary-900 w-full py-4 lg:mt-4 lg:relative lg:block shadow-md lg:shadow-none lg:py-0" :class="(mainMenu ? '' : 'hidden')">
	<div class="container">
		<ul role="menubar"
      x-ref="topbar"
      @keydown.left="handleDirection('left')"
      @keydown.right="handleDirection('right')"
      class="flex flex-col justify-between gap-x-3 list-none lg:-mx-6 lg:flex-row" >
			`,position:{start:0,end:2961}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"link",expression:[{type:"Twig.expression.type.variable",value:"menu",match:["menu"]}],position:{start:2961,end:2983},output:[{type:"raw",value:`				<li
          @focusin="if (window.innerWidth > this.breakpoint) dropdownOpen.lg = `,position:{start:2984,end:3071}},{type:"output",position:{start:3071,end:3088},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3071,end:3088}},{type:"Twig.expression.type.key.period",position:{start:3071,end:3088},key:"index0"}]},{type:"raw",value:`"
          role="presentation" class="relative lg:border-0 `,position:{start:3088,end:3148}},{type:"output",position:{start:3148,end:3206},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3148,end:3206}},{type:"Twig.expression.type.key.period",position:{start:3148,end:3206},key:"last"},{type:"Twig.expression.type.bool",value:!1,position:{start:3148,end:3206}},{type:"Twig.expression.type.operator.binary",value:"==",position:{start:3148,end:3206},precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.string",value:"border-b border-gray-200",position:{start:3148,end:3206}},{type:"Twig.expression.type.string",value:"",position:{start:3148,end:3206}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:3148,end:3206},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`"
          `,position:{start:3206,end:3218}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:3218,end:3240},output:[{type:"raw",value:'            @mouseenter="handleMouseEnter(',position:{start:3241,end:3283}},{type:"output",position:{start:3283,end:3300},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3283,end:3300}},{type:"Twig.expression.type.key.period",position:{start:3283,end:3300},key:"index0"}]},{type:"raw",value:`)"
            @mouseleave="handleMouseLeave()"
          `,position:{start:3300,end:3358}}]},position:{open:{start:3218,end:3240},close:{start:3358,end:3369}}},{type:"raw",value:`          >

					`,position:{start:3370,end:3388}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"length",match:["| length","length"]}],position:{start:3388,end:3419},output:[{type:"raw",value:`						<button
              @click="toggleDropdown(`,position:{start:3420,end:3471}},{type:"output",position:{start:3471,end:3488},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3471,end:3488}},{type:"Twig.expression.type.key.period",position:{start:3471,end:3488},key:"index0"}]},{type:"raw",value:`)"
              class="py-3 text-white no-underline w-full font-bold flex items-center gap-2 justify-between leading-5 lg:hidden " `,position:{start:3488,end:3620}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:3620,end:3654},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:3654,end:3686}}]},position:{open:{start:3620,end:3654},close:{start:3686,end:3697}}},{type:"raw",value:` role="menuitem">
							`,position:{start:3697,end:3722}},{type:"output",position:{start:3722,end:3798},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3722,end:3798}},{type:"Twig.expression.type.key.period",position:{start:3722,end:3798},key:"parent_text"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3722,end:3798}},{type:"Twig.expression.type.test",position:{start:3722,end:3798},filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3722,end:3798}},{type:"Twig.expression.type.key.period",position:{start:3722,end:3798},key:"parent_text"},{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:3722,end:3798}},{type:"Twig.expression.type.key.period",position:{start:3722,end:3798},key:"text"},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:3722,end:3798},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`
							<span :class="(dropdownOpen.sm === `,position:{start:3798,end:3841}},{type:"output",position:{start:3841,end:3858},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3841,end:3858}},{type:"Twig.expression.type.key.period",position:{start:3841,end:3858},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:3858,end:3909}},{type:"output",position:{start:3909,end:3926},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:3909,end:3926}},{type:"Twig.expression.type.key.period",position:{start:3909,end:3926},key:"index0"}]},{type:"raw",value:` ? 'lg:text-white' : 'lg:text-white')" class="icon-caret-down text-xs text-primary"></span>
						</button>
					`,position:{start:3926,end:4039}}]},position:{open:{start:3388,end:3419},close:{start:4039,end:4050}}},{type:"raw",value:`
					<a @keydown.enter="toggleDropdown(`,position:{start:4051,end:4091}},{type:"output",position:{start:4091,end:4108},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4091,end:4108}},{type:"Twig.expression.type.key.period",position:{start:4091,end:4108},key:"index0"}]},{type:"raw",value:')"  role="menuitem" :class="dropdownOpen.lg === ',position:{start:4108,end:4156}},{type:"output",position:{start:4156,end:4173},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4156,end:4173}},{type:"Twig.expression.type.key.period",position:{start:4156,end:4173},key:"index0"}]},{type:"raw",value:` ? 'bg-primary text-white' : ''" class="`,position:{start:4173,end:4213}},{type:"output",position:{start:4213,end:4274},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4213,end:4274}},{type:"Twig.expression.type.key.period",position:{start:4213,end:4274},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:inline-flex",position:{start:4213,end:4274}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:4213,end:4274}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:4213,end:4274},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" text-white font-bold px-6 py-3 gap-2 leading-5 items-center lg:inline-flex no-underline ",position:{start:4274,end:4363}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.test",filter:"empty"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],position:{start:4363,end:4407},output:[{type:"raw",value:"hover:underline",position:{start:4407,end:4422}}]},position:{open:{start:4363,end:4407},close:{start:4422,end:4433}}},{type:"raw",value:'" ',position:{start:4433,end:4435}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:4435,end:4452},output:[{type:"raw",value:' href="',position:{start:4452,end:4459}},{type:"output",position:{start:4459,end:4473},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4459,end:4473}},{type:"Twig.expression.type.key.period",position:{start:4459,end:4473},key:"url"}]},{type:"raw",value:'"',position:{start:4473,end:4474}}]},position:{open:{start:4435,end:4452},close:{start:4474,end:4485}}},{type:"raw",value:`>
            `,position:{start:4485,end:4499}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"icon"}],position:{start:4499,end:4517},output:[{type:"raw",value:"              ",position:{start:4518,end:4532}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/inline-text/icon/icon.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"icon"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"icon"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:4532,end:4611}},position:{start:4532,end:4611}},{type:"raw",value:"              ",position:{start:4612,end:4626}},{type:"output",position:{start:4626,end:4641},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4626,end:4641}},{type:"Twig.expression.type.key.period",position:{start:4626,end:4641},key:"text"}]},{type:"raw",value:`
            `,position:{start:4641,end:4654}}]},position:{open:{start:4499,end:4517},close:{start:4654,end:4664}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:4654,end:4664},output:[{type:"raw",value:'              <span class="my-px">',position:{start:4665,end:4699}},{type:"output",position:{start:4699,end:4714},stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"],position:{start:4699,end:4714}},{type:"Twig.expression.type.key.period",position:{start:4699,end:4714},key:"text"}]},{type:"raw",value:`</span>
            `,position:{start:4714,end:4734}}]},position:{open:{start:4654,end:4664},close:{start:4734,end:4745}}},{type:"raw",value:"            ",position:{start:4746,end:4758}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:4758,end:4780},output:[{type:"raw",value:'						  <span :class="(dropdownOpen.sm === ',position:{start:4781,end:4824}},{type:"output",position:{start:4824,end:4841},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4824,end:4841}},{type:"Twig.expression.type.key.period",position:{start:4824,end:4841},key:"index0"}]},{type:"raw",value:" ? 'rotate-180' : '') + ' ' + (dropdownOpen.lg === ",position:{start:4841,end:4892}},{type:"output",position:{start:4892,end:4909},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:4892,end:4909}},{type:"Twig.expression.type.key.period",position:{start:4892,end:4909},key:"index0"}]},{type:"raw",value:` ? 'lg:text-white' : 'lg:text-white')" class="icon-caret-down text-xs text-white"></span>
            `,position:{start:4909,end:5011}}]},position:{open:{start:4758,end:4780},close:{start:5011,end:5022}}},{type:"raw",value:`					</a>

					`,position:{start:5023,end:5039}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:5039,end:5071},output:[{type:"raw",value:'						<ul role="presentation" class="list-none lg:absolute lg:bg-white lg:py-3 w-full lg:w-80 lg:shadow-md dropdown" :class="(dropdownOpen.sm === ',position:{start:5072,end:5218}},{type:"output",position:{start:5218,end:5235},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:5218,end:5235}},{type:"Twig.expression.type.key.period",position:{start:5218,end:5235},key:"index0"}]},{type:"raw",value:" || dropdownOpen.lg === ",position:{start:5235,end:5259}},{type:"output",position:{start:5259,end:5276},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:5259,end:5276}},{type:"Twig.expression.type.key.period",position:{start:5259,end:5276},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (align + '-0')" x-data=" {
								    breakpoint: 1024,
								    childOpen: { sm: null, lg: null },
                    childAlign: 'left',
								    toggleChildDropdown(index) {
								      if (window.innerWidth <= this.breakpoint) {
                        this.childOpen.sm = this.childOpen.sm === index ? null : index;
                      }else{
                        this.childOpen.lg = this.childOpen.lg === index ? null : index;
                        setTimeout(() => {
                          this.checkDropdownPosition();
                        }, 25);
                      }

								    },
                    checkDropdownPosition() {
                      if (window.innerWidth > this.breakpoint) {
                        const dropdown = $el.querySelector('.dropdown:not(.hidden)');

                        if (!dropdown) {
                          console.warn('Dropdown reference not found');
                          return;
                        }

                        const dropdownWidth = dropdown.offsetWidth; // Get the width of the dropdown
                        const dropdownPosition = dropdown.getBoundingClientRect().left; // Get the left position of the dropdown
                        const windowWidth = window.innerWidth; // Get the full width of the viewport
                        const windowRight = windowWidth - dropdownPosition - dropdownWidth; // Calculate space on the right side of the dropdown

                        // Determine alignment based on available space
                        if (windowRight < 0) {
                          this.childAlign = 'right'; // Not enough space on the right
                        } else {
                          this.childAlign = 'left'; // Enough space, align left
                        }
                      }
                    },
								    handleChildMouseEnter(index) {
                      this.timeout = setTimeout(() => {
                        this.childAlign = 'left';
                        if (window.innerWidth > this.breakpoint) this.childOpen.lg = index;
                        setTimeout(() => {
                          this.checkDropdownPosition();
                        }, 25);
                      }, 100);
								    },
								    handleChildMouseLeave() {
                      this.timeout = setTimeout(() => {
								        if (window.innerWidth > this.breakpoint) this.childOpen.lg = null;
                      }, 100);
								    }
								  }">
`,position:{start:5276,end:7815}},{type:"raw",value:`
							`,position:{start:8078,end:8086}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"child",expression:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:8086,end:8118},output:[{type:"raw",value:`								<li
                  @focusin="if (window.innerWidth > this.breakpoint) childOpen.lg = `,position:{start:8119,end:8215}},{type:"output",position:{start:8215,end:8232},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8215,end:8232}},{type:"Twig.expression.type.key.period",position:{start:8215,end:8232},key:"index0"}]},{type:"raw",value:`"
                  class="py-1 lg:px-6"
                  `,position:{start:8232,end:8291}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:8291,end:8314},output:[{type:"raw",value:'                    :class="childOpen.lg === ',position:{start:8315,end:8360}},{type:"output",position:{start:8360,end:8377},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8360,end:8377}},{type:"Twig.expression.type.key.period",position:{start:8360,end:8377},key:"index0"}]},{type:"raw",value:` ? 'lg:bg-primary-100' : ''"
                    @mouseenter="handleChildMouseEnter(`,position:{start:8377,end:8461}},{type:"output",position:{start:8461,end:8478},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8461,end:8478}},{type:"Twig.expression.type.key.period",position:{start:8461,end:8478},key:"index0"}]},{type:"raw",value:`)"
                    @mouseleave="handleChildMouseLeave()"
                  `,position:{start:8478,end:8557}}]},position:{open:{start:8291,end:8314},close:{start:8557,end:8568}}},{type:"raw",value:`>
									`,position:{start:8568,end:8579}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:8579,end:8612},output:[{type:"raw",value:'										<button @click="toggleChildDropdown(',position:{start:8613,end:8659}},{type:"output",position:{start:8659,end:8676},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8659,end:8676}},{type:"Twig.expression.type.key.period",position:{start:8659,end:8676},key:"index0"}]},{type:"raw",value:')" role="menuitem" href="',position:{start:8676,end:8701}},{type:"output",position:{start:8701,end:8716},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:8701,end:8716}},{type:"Twig.expression.type.key.period",position:{start:8701,end:8716},key:"url"}]},{type:"raw",value:`" class="flex items-center gap-2 justify-between w-full lg:hidden text-primary">
                      <span class="underline hover:no-underline flex w-full">
											  `,position:{start:8716,end:8888}},{type:"output",position:{start:8888,end:8904},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:8888,end:8904}},{type:"Twig.expression.type.key.period",position:{start:8888,end:8904},key:"text"}]},{type:"raw",value:`
                      </span>

                      <span :class="childOpen.sm === `,position:{start:8904,end:8989}},{type:"output",position:{start:8989,end:9006},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:8989,end:9006}},{type:"Twig.expression.type.key.period",position:{start:8989,end:9006},key:"index0"}]},{type:"raw",value:` ? 'rotate-180' : ''" class="icon-caret-down lg:hidden text-primary text-xs no-underline"></span>
                      <span class="icon-caret-right hidden lg:block text-primary text-xs no-underline"></span>

										</button>
									`,position:{start:9006,end:9245}}]},position:{open:{start:8579,end:8612},close:{start:9245,end:9256}}},{type:"raw",value:'									<a @keydown.enter="toggleChildDropdown(',position:{start:9257,end:9305}},{type:"output",position:{start:9305,end:9322},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:9305,end:9322}},{type:"Twig.expression.type.key.period",position:{start:9305,end:9322},key:"index0"}]},{type:"raw",value:')" role="menuitem" class="no-underline ',position:{start:9322,end:9361}},{type:"output",position:{start:9361,end:9458},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9361,end:9458}},{type:"Twig.expression.type.key.period",position:{start:9361,end:9458},key:"children"},{type:"Twig.expression.type.string",value:"hidden lg:flex justify-between gap-2 items-center w-full",position:{start:9361,end:9458}},{type:"Twig.expression.type.string",value:"inline-flex",position:{start:9361,end:9458}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:9361,end:9458},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'" href="',position:{start:9458,end:9466}},{type:"output",position:{start:9466,end:9481},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9466,end:9481}},{type:"Twig.expression.type.key.period",position:{start:9466,end:9481},key:"url"}]},{type:"raw",value:`">
                    <span class="underline flex w-full hover:no-underline">
                      `,position:{start:9481,end:9582}},{type:"output",position:{start:9582,end:9598},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:9582,end:9598}},{type:"Twig.expression.type.key.period",position:{start:9582,end:9598},key:"text"}]},{type:"raw",value:`
                    </span>
                    `,position:{start:9598,end:9647}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:9647,end:9680},output:[{type:"raw",value:`                      <span class="icon-caret-right hidden lg:block text-primary text-xs no-underline"></span>
                    `,position:{start:9681,end:9812}}]},position:{open:{start:9647,end:9680},close:{start:9812,end:9823}}},{type:"raw",value:`                  </a>

									`,position:{start:9824,end:9857}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:9857,end:9890},output:[{type:"raw",value:'										<ul role="presentation" class="list-none dropdown lg:absolute my-3 lg:my-0 top-0 bg-primary-100 w-full lg:w-80 p-3 md:px-6 flex flex-col space-y-2 lg:shadow-md" :class="(childOpen.sm === ',position:{start:9891,end:10088}},{type:"output",position:{start:10088,end:10105},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:10088,end:10105}},{type:"Twig.expression.type.key.period",position:{start:10088,end:10105},key:"index0"}]},{type:"raw",value:" || childOpen.lg === ",position:{start:10105,end:10126}},{type:"output",position:{start:10126,end:10143},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:10126,end:10143}},{type:"Twig.expression.type.key.period",position:{start:10126,end:10143},key:"index0"}]},{type:"raw",value:` ? '' : 'hidden') + ' ' + (childAlign === 'right' ? 'lg:right-full' : 'lg:left-full')">
											<li role="presentation" class="font-bold">
												<a `,position:{start:10143,end:10300}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"new_window"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:10300,end:10335},output:[{type:"raw",value:' target="_blank" rel="noopener" ',position:{start:10335,end:10367}}]},position:{open:{start:10300,end:10335},close:{start:10367,end:10378}}},{type:"raw",value:' href="',position:{start:10378,end:10385}},{type:"output",position:{start:10385,end:10400},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10385,end:10400}},{type:"Twig.expression.type.key.period",position:{start:10385,end:10400},key:"url"}]},{type:"raw",value:'">',position:{start:10400,end:10402}},{type:"output",position:{start:10402,end:10418},stack:[{type:"Twig.expression.type.variable",value:"child",match:["child"],position:{start:10402,end:10418}},{type:"Twig.expression.type.key.period",position:{start:10402,end:10418},key:"text"}]},{type:"raw",value:`
													Overview</a>
											</li>
											`,position:{start:10418,end:10473}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"grandchild",expression:[{type:"Twig.expression.type.variable",value:"child",match:["child"]},{type:"Twig.expression.type.key.period",key:"children"}],position:{start:10473,end:10511},output:[{type:"raw",value:`												<li role="presentation">
													<a role="menuitem" href="`,position:{start:10512,end:10587}},{type:"output",position:{start:10587,end:10607},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10587,end:10607}},{type:"Twig.expression.type.key.period",position:{start:10587,end:10607},key:"url"}]},{type:"raw",value:'">',position:{start:10607,end:10609}},{type:"output",position:{start:10609,end:10630},stack:[{type:"Twig.expression.type.variable",value:"grandchild",match:["grandchild"],position:{start:10609,end:10630}},{type:"Twig.expression.type.key.period",position:{start:10609,end:10630},key:"text"}]},{type:"raw",value:`</a>
												</li>
											`,position:{start:10630,end:10664}}]},position:{open:{start:10473,end:10511},close:{start:10664,end:10676}}},{type:"raw",value:`										</ul>
									`,position:{start:10677,end:10702}}]},position:{open:{start:9857,end:9890},close:{start:10702,end:10713}}},{type:"raw",value:`								</li>
							`,position:{start:10714,end:10735}}]},position:{open:{start:8086,end:8118},close:{start:10735,end:10747}}},{type:"raw",value:`						</ul>
					`,position:{start:10748,end:10765}}]},position:{open:{start:5039,end:5071},close:{start:10765,end:10776}}},{type:"raw",value:`				</li>
			`,position:{start:10777,end:10790}}]},position:{open:{start:2961,end:2983},close:{start:10790,end:10802}}},{type:"raw",value:`		</ul>
		<div class="lg:hidden search-wrapper mt-4">
			`,position:{start:10803,end:10860}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/simple-form/simple-form.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"input_id"},{type:"Twig.expression.type.string",value:"keywords_mobile"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:10860,end:10959}},position:{start:10860,end:10959}},{type:"raw",value:`		</div>
	</div>
</div>
`,position:{start:10960,end:10960}}],precompiled:!0});o.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),p(o.render({attributes:new a(t),...e}))}catch(t){return p("An error occurred whilst rendering /Users/jabelmunoz/Documents/projects/foundational-build-drupal/web/themes/custom/mc_theme/storybook/src/stories/components/navigation/menu/menu.twig: "+t.toString())}};export{y as t};
