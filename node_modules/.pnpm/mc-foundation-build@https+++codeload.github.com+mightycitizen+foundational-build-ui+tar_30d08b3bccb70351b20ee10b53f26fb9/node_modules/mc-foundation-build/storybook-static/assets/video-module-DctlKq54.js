import{t as i,T as a}from"./twig-BXd3Gfe2.js";import{D as n,a as p}from"./twig-foVUGi9y.js";import"./section-fyku9Cco.js";import"./video-CBBgLTGM.js";p(a);a.cache(!1);i.twig({id:"@components/embed/video/video.twig",data:[{type:"raw",value:`<figure class="mb-0" x-data="{
	    loading: true,
	    playing: false,
	    player: null,
	    firstPlay: true,
	    videoId: '`,position:{start:0,end:128}},{type:"output",position:{start:128,end:142},stack:[{type:"Twig.expression.type.variable",value:"video_id",match:["video_id"],position:{start:128,end:142}}]},{type:"raw",value:`',
	    trigger: '`,position:{start:142,end:160}},{type:"output",position:{start:160,end:192},stack:[{type:"Twig.expression.type.variable",value:"trigger",match:["trigger"],position:{start:160,end:192}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:160,end:192},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:160,end:192}},{type:"Twig.expression.type.string",value:"click",position:{start:160,end:192}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:160,end:192},expression:!1}]}]},{type:"raw",value:`',
	    videoType: '`,position:{start:192,end:212}},{type:"output",position:{start:212,end:249},stack:[{type:"Twig.expression.type.variable",value:"video_type",match:["video_type"],position:{start:212,end:249}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:212,end:249},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:212,end:249}},{type:"Twig.expression.type.string",value:"youtube",position:{start:212,end:249}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:212,end:249},expression:!1}]}]},{type:"raw",value:`',
	
	    init() {
	      if (window.videoPlayers === undefined) {
	        window.videoPlayers = [];
	      }
	      if (window.videoPlayers.includes(this.videoId)) {
	        return;
	      }
	      window.videoPlayers.push(this.videoId);
	
	      this.videoType === 'youtube' ? this.loadYouTubeAPI() : this.setupVimeoPlayer();
	    },
	
	    loadYouTubeAPI() {
	      // load script instead
	      const tag = document.createElement('script');
	      tag.src = 'https://www.youtube.com/iframe_api';
	      document.body.appendChild(tag);
	
	      if (!window.YT) {
	        window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this);
	      } else {
	        this.onYouTubeIframeAPIReady();
	      }
	    },
	
	    onYouTubeIframeAPIReady() {
	      this.player = new YT.Player(this.$refs.player, {
	        videoId: this.videoId,
	        playerVars: {
	          'enablejsapi': 1,
	          'fs': 1,
	          'playlist': this.videoId,
	          'loop': 1,
	          'modestbranding': 1,
	          'autoplay': 0,
	          'controls': 1,
	          'showInfo': 0,
	          'mute': 1,
	          'rel': 0
	        },
	        events: {
	          'onReady': this.onPlayerReady.bind(this),
	          'onStateChange': this.onPlayerStateChange.bind(this)
	        }
	      });
	    },
	
	    setupVimeoPlayer() {
	      const tag = document.createElement('script');
	      tag.src = 'https://player.vimeo.com/api/player.js';
	      tag.onload = this.onVimeoAPIReady.bind(this);
	      document.body.appendChild(tag);
	    },
	
	    onVimeoAPIReady() {
	      const vid = this.$refs.player;
	      const playerId = 'vimeo_' + this.videoId;
	      vid.setAttribute('id', playerId);
	
	      const player = new Vimeo.Player(playerId, { id: this.videoId });
	
	      player.ready().then(() => {
	        this.loading = false;
	        this.setVideoSize();
	        this.player = {
	          play: () => player.play(),
	          pause: () => player.pause()
	        };
	        const iframe = player.element;
	        // set tabindex to -1
	        iframe.setAttribute('tabindex', '-1');
	        `,position:{start:249,end:2367}},{type:"raw",value:`
	
	
	      }).catch(error => {
	        console.error('Error with Vimeo player:', error);
	      });
	
	      player.on('play', () => { this.playing = true; });
	      player.on('pause', () => { this.playing = false; });
	    },
	
	    handleClick() {
	      if (!this.player) return;
	
	      if (this.playing) {
	        this.player.pause();
	      } else {
	        this.player.play();
	      }
	
	      this.playing = !this.playing; // Toggle playing state
	    },
	
	    onPlayerReady() {
	      this.loading = false;
	      this.setVideoSize();
	      if (this.firstPlay && this.trigger !== 'background') {
	        setTimeout(() => { this.player.pauseVideo(); }, 5);
	      }
	
	      this.firstPlay = false;
	      const iframe = this.player.g;
	      // set tabindex to -1
	      iframe.setAttribute('tabindex', '-1');
	
	      this.player.play = () => { this.player.playVideo(); };
	      this.player.pause = () => { this.player.pauseVideo(); };
	    },
	
	    onPlayerStateChange(event) {
	      clearTimeout(this.timeout);
            if (this.firstPlay){
              if (this.trigger !== 'background'){
                setTimeout(() => {
                  this.player.pauseVideo();
                }, 5);
              }

            }            
            switch (event.data){
              case 2:
                this.timeout = setTimeout(() => {
                  switch (event.data){
                    case 2:
                      
                      this.playing = false;                      
                      break;
                    case 1:
                      this.playing = true;                      
                      break;
                  }
                }, 300);
                break;
              case 1:
                if (!this.firstPlay) this.player.unMute();
                this.playing = true;
                break;
            }


            this.firstPlay = false;
	    },
	
	    setVideoSize() {
	      const width = this.$el.clientWidth;
	      const height = this.$el.clientHeight;
	      if (this.videoType === 'youtube') {
	        this.player.setSize(width, (width / 16) * 9);
	      } else {
	        const iframe = this.$refs.player.querySelector('iframe');
	        iframe.style.width = \`\${width}px\`;
	        iframe.style.height = \`\${height}px\`;
	      }
	    }
	  }" x-init="init">
	`,position:{start:2427,end:4793}},{type:"logic",token:{type:"Twig.logic.type.set",key:"overlay_class",expression:[{type:"Twig.expression.type.string",value:"bg-opacity-30 bg-black"}],position:{start:4793,end:4843}},position:{start:4793,end:4843}},{type:"raw",value:'	<div class="video_wrapper relative" data-video-trigger="',position:{start:4844,end:4901}},{type:"output",position:{start:4901,end:4933},stack:[{type:"Twig.expression.type.variable",value:"trigger",match:["trigger"],position:{start:4901,end:4933}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:4901,end:4933},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:4901,end:4933}},{type:"Twig.expression.type.string",value:"click",position:{start:4901,end:4933}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:4901,end:4933},expression:!1}]}]},{type:"raw",value:'" data-video-type="',position:{start:4933,end:4952}},{type:"output",position:{start:4952,end:4968},stack:[{type:"Twig.expression.type.variable",value:"video_type",match:["video_type"],position:{start:4952,end:4968}}]},{type:"raw",value:`">
		<button @click="handleClick" x-show="!loading && !playing" class="absolute left-0 top-0 z-20 w-full h-full cursor-pointer `,position:{start:4968,end:5095}},{type:"output",position:{start:5095,end:5114},stack:[{type:"Twig.expression.type.variable",value:"overlay_class",match:["overlay_class"],position:{start:5095,end:5114}}]},{type:"raw",value:`">
			<span class="icon-play text-white text-8xl"></span>
			<span class="sr-only">Pause/Play Video</span>
		</button>
		<div class="video_loader absolute z-20 flex justify-center items-center h-full w-full `,position:{start:5114,end:5321}},{type:"output",position:{start:5321,end:5340},stack:[{type:"Twig.expression.type.variable",value:"overlay_class",match:["overlay_class"],position:{start:5321,end:5340}}]},{type:"raw",value:`" x-show="loading">
			`,position:{start:5340,end:5363}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/utils/loader/loader.twig"}],position:{start:5363,end:5415}},position:{start:5363,end:5415}},{type:"raw",value:`		</div>
		`,position:{start:5416,end:5427}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]}],position:{start:5427,end:5441},output:[{type:"raw",value:`			<div class="video_image_wrapper image-size--landscapeCropped z-10" x-show="!playing">
				<img src="`,position:{start:5442,end:5545}},{type:"output",position:{start:5545,end:5560},stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"],position:{start:5545,end:5560}},{type:"Twig.expression.type.key.period",position:{start:5545,end:5560},key:"src"}]},{type:"raw",value:'" alt="',position:{start:5560,end:5567}},{type:"output",position:{start:5567,end:5582},stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"],position:{start:5567,end:5582}},{type:"Twig.expression.type.key.period",position:{start:5567,end:5582},key:"alt"}]},{type:"raw",value:`" class="w-full aspect-video object-cover" loading="lazy">
			</div>
		`,position:{start:5582,end:5653}}]},position:{open:{start:5427,end:5441},close:{start:5653,end:5664}}},{type:"raw",value:`
		<div class="video_container " :class="playing ? 'z-10' : 'z-0 opacity-0 absolute top-0 left-0'">
			<div class="video_player_wrapper">
				<div class="video_player aspect-video" x-ref="player" x-trap="playing" data-video-id="`,position:{start:5665,end:5893}},{type:"output",position:{start:5893,end:5907},stack:[{type:"Twig.expression.type.variable",value:"video_id",match:["video_id"],position:{start:5893,end:5907}}]},{type:"raw",value:`"></div>
			</div>
		</div>
	</div>
	`,position:{start:5907,end:5944}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"caption",match:["caption"]}],position:{start:5944,end:5960},output:[{type:"raw",value:'		<figcaption class="video_caption">',position:{start:5961,end:5997}},{type:"output",position:{start:5997,end:6010},stack:[{type:"Twig.expression.type.variable",value:"caption",match:["caption"],position:{start:5997,end:6010}}]},{type:"raw",value:`</figcaption>
	`,position:{start:6010,end:6025}}]},position:{open:{start:5944,end:5960},close:{start:6025,end:6036}}},{type:"raw",value:`</figure>
`,position:{start:6037,end:6037}}],precompiled:!0});i.twig({id:"@components/sections/section.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:""}],position:{start:0,end:26}},position:{start:0,end:26}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:27,end:72},output:[{type:"raw",value:"  ",position:{start:73,end:75}},{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:"lg:max-w-screen-lg"}],position:{start:75,end:119}},position:{start:75,end:119}}]},position:{open:{start:27,end:72},close:{start:120,end:168}}},{type:"logic",token:{type:"Twig.logic.type.elseif",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"narrow"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:120,end:168},output:[{type:"raw",value:"  ",position:{start:169,end:171}},{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:"lg:max-w-screen-xl"}],position:{start:171,end:215}},position:{start:171,end:215}}]},position:{open:{start:120,end:168},close:{start:216,end:227}}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:228,end:263},output:[{type:"raw",value:"  ",position:{start:264,end:266}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"background_style",match:["background_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"gradient"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:266,end:315},output:[{type:"raw",value:"    ",position:{start:316,end:320}},{type:"logic",token:{type:"Twig.logic.type.set",key:"background_color",expression:[{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.string",value:"-200"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"}],position:{start:320,end:374}},position:{start:320,end:374}},{type:"raw",value:"    ",position:{start:375,end:379}},{type:"logic",token:{type:"Twig.logic.type.set",key:"section_class",expression:[{type:"Twig.expression.type.string",value:"bg-gradient-to-b lg:bg-gradient-to-r from-"},{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:" to-white"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"}],position:{start:379,end:482}},position:{start:379,end:482}},{type:"raw",value:"  ",position:{start:483,end:485}}]},position:{open:{start:266,end:315},close:{start:485,end:495}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:485,end:495},output:[{type:"raw",value:"    ",position:{start:496,end:500}},{type:"logic",token:{type:"Twig.logic.type.set",key:"background_color",expression:[{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.string",value:"primary"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.string",value:"-100"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.string",value:"-200"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}],position:{start:500,end:614}},position:{start:500,end:614}},{type:"raw",value:"    ",position:{start:615,end:619}},{type:"logic",token:{type:"Twig.logic.type.set",key:"section_class",expression:[{type:"Twig.expression.type.string",value:"bg-"},{type:"Twig.expression.type.variable",value:"background_color",match:["background_color"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"}],position:{start:619,end:669}},position:{start:619,end:669}},{type:"raw",value:"  ",position:{start:670,end:672}}]},position:{open:{start:485,end:495},close:{start:672,end:683}}}]},position:{open:{start:228,end:263},close:{start:684,end:695}}},{type:"raw",value:`
`,position:{start:696,end:697}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"intro",match:["intro"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:697,end:720},output:[{type:"raw",value:"  ",position:{start:721,end:723}},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"intro",position:{start:723,end:738},output:[{type:"raw",value:"    ",position:{start:739,end:743}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/sections/intro/section_intro.twig"}],position:{start:743,end:804}},position:{start:743,end:804}},{type:"raw",value:"  ",position:{start:805,end:807}}]},position:{open:{start:723,end:738},close:{start:807,end:819}}}]},position:{open:{start:697,end:720},close:{start:820,end:831}}},{type:"raw",value:`
`,position:{start:832,end:833}},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"content",position:{start:833,end:850},output:[{type:"raw",value:"  ",position:{start:851,end:853}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type._function",fn:"block",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"section_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["| trim","trim"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:853,end:905},output:[{type:"raw",value:`    <div class="section_content" >
      `,position:{start:906,end:947}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",position:{start:947,end:974},output:[{type:"raw",value:"      ",position:{start:975,end:981}}]},position:{open:{start:947,end:974},close:{start:981,end:995}}},{type:"raw",value:`    </div>
  `,position:{start:996,end:1009}}]},position:{open:{start:853,end:905},close:{start:1009,end:1020}}}]},position:{open:{start:833,end:850},close:{start:1021,end:1033}}},{type:"raw",value:"<section ",position:{start:1034,end:1043}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_id",match:["section_id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1043,end:1072},output:[{type:"raw",value:'id="',position:{start:1072,end:1076}},{type:"output",position:{start:1076,end:1092},stack:[{type:"Twig.expression.type.variable",value:"section_id",match:["section_id"],position:{start:1076,end:1092}}]},{type:"raw",value:'"',position:{start:1092,end:1093}}]},position:{open:{start:1043,end:1072},close:{start:1093,end:1104}}},{type:"raw",value:`  class="relative section
  `,position:{start:1105,end:1133}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"padding",match:["padding"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:1133,end:1170},output:[{type:"raw",value:`    py-5 lg:py-10
  `,position:{start:1171,end:1191}}]},position:{open:{start:1133,end:1170},close:{start:1191,end:1229}}},{type:"logic",token:{type:"Twig.logic.type.elseif",stack:[{type:"Twig.expression.type.variable",value:"section_padding",match:["section_padding"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1191,end:1229},output:[{type:"raw",value:"    ",position:{start:1230,end:1234}},{type:"output",position:{start:1234,end:1255},stack:[{type:"Twig.expression.type.variable",value:"section_padding",match:["section_padding"],position:{start:1234,end:1255}}]},{type:"raw",value:`
  `,position:{start:1255,end:1258}}]},position:{open:{start:1191,end:1229},close:{start:1258,end:1268}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:1258,end:1268},output:[{type:"raw",value:`    py-10 lg:py-16
  `,position:{start:1269,end:1290}}]},position:{open:{start:1258,end:1268},close:{start:1290,end:1301}}},{type:"raw",value:`
  `,position:{start:1302,end:1305}},{type:"output",position:{start:1305,end:1334},stack:[{type:"Twig.expression.type.variable",value:"section_class",match:["section_class"],position:{start:1305,end:1334}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:1305,end:1334}}]},{type:"raw",value:`
  transition-opacity duration-1000 ease-in-out
  `,position:{start:1334,end:1384}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"collapse",match:["collapse"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1384,end:1411},output:[{type:"raw",value:" section--collapse",position:{start:1411,end:1429}}]},position:{open:{start:1384,end:1411},close:{start:1429,end:1440}}},{type:"raw",value:`"
    :class="show ? 'opacity-100' : 'opacity-0'"
    x-data="`,position:{start:1440,end:1502}},{type:"output",position:{start:1502,end:1509},stack:[{type:"Twig.expression.type.string",value:"{",position:{start:1502,end:1509}}]},{type:"raw",value:" show: false ",position:{start:1509,end:1522}},{type:"output",position:{start:1522,end:1529},stack:[{type:"Twig.expression.type.string",value:"}",position:{start:1522,end:1529}}]},{type:"raw",value:`"  x-intersect="show = true" >
  `,position:{start:1529,end:1562}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1562,end:1599},output:[{type:"raw",value:`    <div class="position-unset">
      `,position:{start:1600,end:1639}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1639,end:1676},output:[{type:"raw",value:'<img class=" section_background absolute object-cover left-0 h-full w-full top-0 opacity-30" src="',position:{start:1676,end:1774}},{type:"output",position:{start:1774,end:1802},stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"],position:{start:1774,end:1802}},{type:"Twig.expression.type.key.period",position:{start:1774,end:1802},key:"src"}]},{type:"raw",value:'" alt="" loading="lazy"/>',position:{start:1802,end:1827}}]},position:{open:{start:1639,end:1676},close:{start:1827,end:1838}}},{type:"raw",value:"      ",position:{start:1839,end:1845}},{type:"raw",value:`
    </div>
  `,position:{start:1996,end:2010}}]},position:{open:{start:1562,end:1599},close:{start:2010,end:2021}}},{type:"raw",value:'  <div class="',position:{start:2022,end:2036}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"exclude_container",match:["exclude_container"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:2036,end:2072},output:[{type:"raw",value:"max-w-full lg:px-0",position:{start:2072,end:2090}}]},position:{open:{start:2036,end:2072},close:{start:2090,end:2101}}},{type:"raw",value:" ",position:{start:2101,end:2102}},{type:"output",position:{start:2102,end:2129},stack:[{type:"Twig.expression.type.variable",value:"width_class",match:["width_class"],position:{start:2102,end:2129}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:2102,end:2129}}]},{type:"raw",value:" container ",position:{start:2129,end:2140}},{type:"output",position:{start:2140,end:2166},stack:[{type:"Twig.expression.type.variable",value:"grid_class",match:["grid_class"],position:{start:2140,end:2166}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:2140,end:2166}}]},{type:"raw",value:` relative z-10" >
    `,position:{start:2166,end:2188}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.string",value:"side"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}]},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],position:{start:2188,end:2250},output:[{type:"raw",value:'      <div class="grid grid-cols-12 items-center justify-center gap-y-8',position:{start:2251,end:2322}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.string",value:"side"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:2322,end:2354},output:[{type:"raw",value:" gap-x-10",position:{start:2354,end:2363}}]},position:{open:{start:2322,end:2354},close:{start:2363,end:2374}}},{type:"raw",value:`">
        <div class="col-span-12 lg:col-span-8">
          `,position:{start:2374,end:2435}},{type:"output",position:{start:2435,end:2446},stack:[{type:"Twig.expression.type.variable",value:"intro",match:["intro"],position:{start:2435,end:2446}}]},{type:"raw",value:`
        </div>
        <div class="col-span-12 lg:col-span-4">
          `,position:{start:2446,end:2520}},{type:"output",position:{start:2520,end:2533},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:2520,end:2533}}]},{type:"raw",value:`
        </div>
      </div>
    `,position:{start:2533,end:2566}}]},position:{open:{start:2188,end:2250},close:{start:2566,end:2576}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:2566,end:2576},output:[{type:"raw",value:`      <div class="flex flex-col gap-y-8">
        `,position:{start:2577,end:2627}},{type:"output",position:{start:2627,end:2638},stack:[{type:"Twig.expression.type.variable",value:"intro",match:["intro"],position:{start:2627,end:2638}}]},{type:"raw",value:`
        `,position:{start:2638,end:2647}},{type:"output",position:{start:2647,end:2660},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:2647,end:2660}}]},{type:"raw",value:`
      </div>


    `,position:{start:2660,end:2680}}]},position:{open:{start:2566,end:2576},close:{start:2680,end:2691}}},{type:"raw",value:`
  </div>
</section>
`,position:{start:2692,end:2692}}],precompiled:!0});const o=e=>e,c=(e={})=>{const s=i.twig({id:"/Users/jabelmunoz/Documents/projects/foundational-build-drupal/web/themes/custom/mc_theme/storybook/src/stories/components/modules/video/video-module.twig",data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_heading"},{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"padding"},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_style"},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:0,end:158},output:[{type:"raw",value:"  ",position:{start:159,end:161}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",position:{start:161,end:188},output:[{type:"raw",value:"      ",position:{start:189,end:195}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/embed/video/video.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"trigger"},{type:"Twig.expression.type.string",value:"click"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:195,end:284}},position:{start:195,end:284}},{type:"raw",value:"  ",position:{start:285,end:287}}]},position:{open:{start:161,end:188},close:{start:287,end:301}}}]},position:{open:{start:0,end:158},close:{start:302,end:316}}}],precompiled:!0});s.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),o(s.render({attributes:new n(t),...e}))}catch(t){return o("An error occurred whilst rendering /Users/jabelmunoz/Documents/projects/foundational-build-drupal/web/themes/custom/mc_theme/storybook/src/stories/components/modules/video/video-module.twig: "+t.toString())}};export{c as t};
