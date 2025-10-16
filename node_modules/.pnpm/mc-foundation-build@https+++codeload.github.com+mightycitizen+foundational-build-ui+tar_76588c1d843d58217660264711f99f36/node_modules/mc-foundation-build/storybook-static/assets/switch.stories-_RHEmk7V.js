import{t as l,T as c}from"./twig-BXd3Gfe2.js";import{D as d,a as u}from"./twig-foVUGi9y.js";import"./_commonjsHelpers-BosuxZz1.js";u(c);c.cache(!1);const a=e=>e,m=(e={})=>{const r=l.twig({id:"/Users/jabelmunoz/Documents/projects/foundational-build-drupal/web/themes/custom/mc_theme/storybook/src/stories/components/forms/switch/switch.twig",data:[{type:"raw",value:`   <div x-data="{ isChecked: false }" class="flex items-center">
        <label for="toggle" class="relative inline-flex items-center cursor-pointer mb-0">
            <input type="checkbox" id="toggle" x-model="isChecked" class="sr-only" />
            <div :class="isChecked ? 'bg-primary' : 'bg-gray'" class="w-11 h-6 rounded-full shadow-inner"></div>
            <div :class="isChecked ? 'translate-x-5' : 'translate-x-1'" class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
        </label>
        <span class="ml-3 text-gray-700" x-text="isChecked ? 'On' : 'Off'"></span>
    </div>`,position:{start:0,end:0}}],precompiled:!0});r.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),a(r.render({attributes:new d(t),...e}))}catch(t){return a("An error occurred whilst rendering /Users/jabelmunoz/Documents/projects/foundational-build-drupal/web/themes/custom/mc_theme/storybook/src/stories/components/forms/switch/switch.twig: "+t.toString())}},f={title:"Components/Forms/Switch",argTypes:{required:{control:{type:"boolean"}}}},p=e=>m(e),s=p.bind({});s.args={label:"Switch",id:"switch",name:"switch"};var o,n,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const g=["Switch"];export{s as Switch,g as __namedExportsOrder,f as default};
