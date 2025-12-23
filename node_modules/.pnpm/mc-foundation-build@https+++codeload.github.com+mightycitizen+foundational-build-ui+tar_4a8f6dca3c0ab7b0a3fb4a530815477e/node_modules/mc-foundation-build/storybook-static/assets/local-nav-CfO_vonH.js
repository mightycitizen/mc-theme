import{t as n,T as s}from"./twig-BXd3Gfe2.js";import{D as a,a as p}from"./twig-foVUGi9y.js";p(s);s.cache(!1);const o=e=>e,y=(e={})=>{const i=n.twig({id:"/Users/jabelmunoz/Documents/projects/foundational-build-drupal/web/themes/custom/mc_theme/storybook/src/stories/components/navigation/local-nav/local-nav.twig",data:[{type:"raw",value:`<div class="local-nav lg:hidden" x-data="{ open: false }">
  <button x-on:click="open = ! open" class="bg-neutrals-50 border border-neutrals-200 border-l-[6px] border-l-primary-500 w-full flex items-center py-3 px-3">
    <span class="icon-list text-primary-500 text-3xl pr-5"></span>
    <span class="font-bold text-lg text-left">In this section</span>
    <span class="icon-plus text-2xl text-primary-500 ml-auto" :class="{ 'icon-minus': open, 'icon-plus' : !open }"></span>
  </button>
  <div class="lg:shadow px-6 py-5" x-show="open" >
    <p class="text-primary-900 font-bold text-2xl mb-5"><a href="#">Parent Page Link</a></p>
    <ul class="list-none font-semibold space-y-2">
      `,position:{start:0,end:690}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"local_nav",match:["local_nav"]}],position:{start:690,end:717},output:[{type:"raw",value:`        <li>
          `,position:{start:718,end:741}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:741,end:758},output:[{type:"raw",value:'<a class="font-medium text-neutrals-800" href="',position:{start:758,end:805}},{type:"output",position:{start:805,end:819},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:805,end:819}},{type:"Twig.expression.type.key.period",position:{start:805,end:819},key:"url"}]},{type:"raw",value:'">',position:{start:819,end:821}}]},position:{open:{start:741,end:758},close:{start:821,end:832}}},{type:"raw",value:"            ",position:{start:833,end:845}},{type:"output",position:{start:845,end:860},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:845,end:860}},{type:"Twig.expression.type.key.period",position:{start:845,end:860},key:"text"}]},{type:"raw",value:`
          `,position:{start:860,end:871}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:871,end:888},output:[{type:"raw",value:"</a>",position:{start:888,end:892}}]},position:{open:{start:871,end:888},close:{start:892,end:903}}},{type:"raw",value:`        </li>
      `,position:{start:904,end:924}}]},position:{open:{start:690,end:717},close:{start:924,end:936}}},{type:"raw",value:`    </ul>
  </div>
</div>
<div class="lg:shadow px-6 py-5 hidden lg:block">
  <p class="text-primary-900 font-bold text-2xl mb-5"><a href="#">Parent Page Link</a></p>
  <div x-data="{ showAll: false }">
    <div>
      <ul class="list-none font-semibold space-y-2">
        `,position:{start:937,end:1211}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"local_nav",match:["local_nav"]}],position:{start:1211,end:1238},output:[{type:"raw",value:'          <li x-show="',position:{start:1239,end:1261}},{type:"output",position:{start:1261,end:1277},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:1261,end:1277}},{type:"Twig.expression.type.key.period",position:{start:1261,end:1277},key:"index"}]},{type:"raw",value:` <= 10 || showAll">
            `,position:{start:1277,end:1309}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:1309,end:1326},output:[{type:"raw",value:'<a class="font-medium text-neutrals-800" href="',position:{start:1326,end:1373}},{type:"output",position:{start:1373,end:1387},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:1373,end:1387}},{type:"Twig.expression.type.key.period",position:{start:1373,end:1387},key:"url"}]},{type:"raw",value:'">',position:{start:1387,end:1389}}]},position:{open:{start:1309,end:1326},close:{start:1389,end:1400}}},{type:"raw",value:"              ",position:{start:1401,end:1415}},{type:"output",position:{start:1415,end:1430},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:1415,end:1430}},{type:"Twig.expression.type.key.period",position:{start:1415,end:1430},key:"text"}]},{type:"raw",value:`
              `,position:{start:1430,end:1445}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"url"}],position:{start:1445,end:1462},output:[{type:"raw",value:"</a>",position:{start:1462,end:1466}}]},position:{open:{start:1445,end:1462},close:{start:1466,end:1477}}},{type:"raw",value:`          </li>
        `,position:{start:1478,end:1502}}]},position:{open:{start:1211,end:1238},close:{start:1502,end:1514}}},{type:"raw",value:`      </ul>
    </div>
    `,position:{start:1515,end:1542}},{type:"logic",token:{type:"Twig.logic.type.set",key:"nav_count",expression:[{type:"Twig.expression.type.variable",value:"local_nav",match:["local_nav"]},{type:"Twig.expression.type.filter",value:"length",match:["|length","length"]}],position:{start:1542,end:1581}},position:{start:1542,end:1581}},{type:"raw",value:"    ",position:{start:1582,end:1586}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"nav_count",match:["nav_count"]},{type:"Twig.expression.type.string",value:"10"},{type:"Twig.expression.type.operator.binary",value:">",precidence:8,associativity:"leftToRight",operator:">"}],position:{start:1586,end:1611},output:[{type:"raw",value:`      <div class="flex items-center text-no-underline hover:text-underline text-primary pt-6 cursor-pointer" x-on:click="showAll = !showAll">
      <span class="text-large" x-text="showAll ? 'Show Less' : 'Show More'">
      </span>
        <span class="icon-plus text-xl text-primary-500 ml-4" :class="{ 'icon-minus': showAll, 'icon-plus' : !showAll }"></span>
      </div>
    `,position:{start:1612,end:1991}}]},position:{open:{start:1586,end:1611},close:{start:1991,end:2002}}},{type:"raw",value:`  </div>
</div>



`,position:{start:2003,end:2003}}],precompiled:!0});i.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),o(i.render({attributes:new a(t),...e}))}catch(t){return o("An error occurred whilst rendering /Users/jabelmunoz/Documents/projects/foundational-build-drupal/web/themes/custom/mc_theme/storybook/src/stories/components/navigation/local-nav/local-nav.twig: "+t.toString())}};export{y as t};
