const u={title:"Elements/Toast",component:"vui-toast",id:"elements-toast"},t={render:()=>`
    <vui-button id="toastBtn" variant="outline">
      Show Toast</vui-button>
    <vui-toast position="bottom-right" theme="inverted"></vui-toast>
  `,play:async({canvasElement:o})=>{console.log("play",o);let n=1;const e=o.querySelector("#toastBtn");e&&(e.addEventListener("click",()=>{const s=o.querySelector("vui-toast");s&&s.show({title:"Hello, world! lorem ipsum dolor sit amet lorem ipsum dolor sit amet ::"+n++,type:"success"})}),e.click())},parameters:{docs:{story:{inline:!0,autoplay:!0,height:"400px"},source:{code:`
// JavaScript
let counter = 1;
const button = document.querySelector('#toastBtn')
button.addEventListener('click', () => {
  const toast = document.querySelector('vui-toast')
  toast.show({
    title: 'Hello, world! lorem ipsum dolor sit amet lorem ipsum dolor sit amet ::' + counter++,
    type: 'success',
  })
})

// HTML
<vui-button id="toastBtn">Show Toast</vui-button>
<vui-toast position="bottom-right" theme="inverted"></vui-toast>
        `,language:"javascript"}}}};var a,i,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => \`
    <vui-button id="toastBtn" variant="outline">
      Show Toast</vui-button>
    <vui-toast position="bottom-right" theme="inverted"></vui-toast>
  \`,
  play: async ({
    canvasElement
  }) => {
    console.log('play', canvasElement);
    let counter = 1;
    const button = canvasElement.querySelector('#toastBtn') as HTMLElement;
    if (!button) return;

    // Add click handler
    button.addEventListener('click', () => {
      const toast = canvasElement.querySelector('vui-toast') as any;
      if (toast) {
        toast.show({
          title: 'Hello, world! lorem ipsum dolor sit amet lorem ipsum dolor sit amet ::' + counter++,
          type: 'success'
        });
      }
    });

    // Optionally, trigger a click to show initial toast
    button.click();
  },
  parameters: {
    docs: {
      story: {
        inline: true,
        autoplay: true,
        height: '400px'
      },
      source: {
        code: \`
// JavaScript
let counter = 1;
const button = document.querySelector('#toastBtn')
button.addEventListener('click', () => {
  const toast = document.querySelector('vui-toast')
  toast.show({
    title: 'Hello, world! lorem ipsum dolor sit amet lorem ipsum dolor sit amet ::' + counter++,
    type: 'success',
  })
})

// HTML
<vui-button id="toastBtn">Show Toast</vui-button>
<vui-toast position="bottom-right" theme="inverted"></vui-toast>
        \`,
        language: 'javascript'
      }
    }
  }
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const l=["Default"];export{t as Default,l as __namedExportsOrder,u as default};
