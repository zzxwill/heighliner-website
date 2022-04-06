"use strict";(self.webpackChunkheighliner_website=self.webpackChunkheighliner_website||[]).push([[2808],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9199:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={title:"Overview",sidebar_position:1},c=void 0,s={unversionedId:"cli/hln/overview",id:"cli/hln/overview",title:"Overview",description:"What Is hln?",source:"@site/docs/07-cli/hln/overview.md",sourceDirName:"07-cli/hln",slug:"/cli/hln/overview",permalink:"/docs/cli/hln/overview",editUrl:"https://github.com/h8r-dev/heighliner-website/docs/07-cli/hln/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Backstage Integration",permalink:"/docs/integrations/backstage"},next:{title:"hln",permalink:"/docs/cli/hln/commands/hln"}},p={},u=[{value:"What Is <code>hln</code>?",id:"what-is-hln",level:2},{value:"How Does <code>hln</code> Work?",id:"how-does-hln-work",level:2},{value:"Available Commands",id:"available-commands",level:2}],h={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-hln"},"What Is ",(0,a.kt)("inlineCode",{parentName:"h2"},"hln"),"?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hln")," is a Command-line interface (CLI) that you can use to generate your application from a particular ",(0,a.kt)("a",{parentName:"p",href:"https://heighliner.cloud/docs/core_features/stacks/overview"},"stack"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hln")," CLI has the ability of searching and downloading stacks from ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview/arch#heighliner-stackhub"},"stackhub"),", creating project with particular satck and executing the project you just created."),(0,a.kt)("h2",{id:"how-does-hln-work"},"How Does ",(0,a.kt)("inlineCode",{parentName:"h2"},"hln")," Work?"),(0,a.kt)("p",null,"With the help of ",(0,a.kt)("inlineCode",{parentName:"p"},"hln")," CLI, what you need to do is choose the stack you want to use and prepare some extra items such as your application name, the kubeconfig of your cluster, etc. Then you can spin up your application with a single command ",(0,a.kt)("inlineCode",{parentName:"p"},"hln up -i")," and provide the input values interactively. Wait several minutes and everything will be done by ",(0,a.kt)("inlineCode",{parentName:"p"},"hln"),". "),(0,a.kt)("p",null,"Under the hood, ",(0,a.kt)("inlineCode",{parentName:"p"},"hln")," relies on two core concepts, ",(0,a.kt)("a",{parentName:"p",href:"https://heighliner.cloud/docs/core_features/stacks/overview"},"stack")," and ",(0,a.kt)("a",{parentName:"p",href:"https://dagger.io/"},"dagger"),". Stack is the sketch of your application, which describes what does your application look like. Dagger is the executing engine of our stack. It read the stack firstly, fill your customize input values in it and generate your real application."),(0,a.kt)("h2",{id:"available-commands"},"Available Commands"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/cli/hln/commands/hln"},"Avaliable Commands")))}d.isMDXComponent=!0}}]);