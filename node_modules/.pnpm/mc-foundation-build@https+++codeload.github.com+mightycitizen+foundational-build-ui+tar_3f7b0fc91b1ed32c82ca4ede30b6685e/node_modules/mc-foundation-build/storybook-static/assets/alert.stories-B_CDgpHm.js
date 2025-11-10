import{t as m}from"./alert-C5RvXK0g.js";import"./twig-BXd3Gfe2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./twig-foVUGi9y.js";import"./icon-DbjO9X_E.js";const x={title:"Components/Informational/Alert",argTypes:{label:{control:"text"},link:{control:"text"},closable:{control:"boolean"}}},l=u=>m(u),c={alert_type:{type:"emergency",label:"Emergency Alert",icon:{name:"icon-lightning-fill"},icon_colors:"bg-tertiary-100 text-tertiary-600"},title:"Alert title",text:"[Text goes here]  Lorem ipsum odor amet, consectetuer adipiscing elit. Nec urna commodo aliquam parturient ante curabitur. Accumsan morbi et non facilisi iaculis, tempus curabitur bibendum.",link:{url:"#",target:"new_tab",text:"Alert title goes here lorem ipsum dolor sit amet.]"},closable:!0},e=l.bind({});e.args=c;const t=l.bind({});t.args=Object.assign({...c},{link:"#"});var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;

  return twig(args);
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var o,i,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;

  return twig(args);
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const h=["Default","Link"];export{e as Default,t as Link,h as __namedExportsOrder,x as default};
