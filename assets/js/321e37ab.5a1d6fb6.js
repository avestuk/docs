"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[8443],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return r?i.createElement(d,a(a({ref:t},u),{},{components:r})):i.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=r(3117),n=(r(7294),r(3905));const o={sidebar_label:"Using Custom CAs",title:""},a="Configuring PolicyServers",s={unversionedId:"operator-manual/policy-servers/custom-cas",id:"operator-manual/policy-servers/custom-cas",title:"",description:"Custom Certificate Authorities for Policy registries",source:"@site/docs/operator-manual/policy-servers/01-custom-cas.md",sourceDirName:"operator-manual/policy-servers",slug:"/operator-manual/policy-servers/custom-cas",permalink:"/operator-manual/policy-servers/custom-cas",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/operator-manual/policy-servers/01-custom-cas.md",tags:[],version:"current",lastUpdatedAt:1683055171,formattedLastUpdatedAt:"May 2, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Using Custom CAs",title:""},sidebar:"docs",previous:{title:"Operator Manual",permalink:"/operator-manual/intro"},next:{title:"Using private registries",permalink:"/operator-manual/policy-servers/private-registry"}},c={},l=[{value:"Custom Certificate Authorities for Policy registries",id:"custom-certificate-authorities-for-policy-registries",level:2},{value:"Insecure sources",id:"insecure-sources",level:3},{value:"Custom Certificate Authorities",id:"custom-certificate-authorities",level:3}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configuring-policyservers"},"Configuring PolicyServers"),(0,n.kt)("h2",{id:"custom-certificate-authorities-for-policy-registries"},"Custom Certificate Authorities for Policy registries"),(0,n.kt)("p",null,"It is possible to specify and configure the Certificate Authorities that a\nPolicyServer uses when pulling the ClusterAdmissionPolicy artifacts from the\npolicy registry. The following ",(0,n.kt)("inlineCode",{parentName:"p"},"spec")," fields will configure the deployed\n",(0,n.kt)("inlineCode",{parentName:"p"},"policy-server")," executable to that effect."),(0,n.kt)("h3",{id:"insecure-sources"},"Insecure sources"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important"),": the default behavior of ",(0,n.kt)("inlineCode",{parentName:"p"},"kwctl")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"policy-server")," is to\nenforce HTTPS with trusted certificates matching the system CA store. You can\ninteract with registries using untrusted certificates or even without TLS, by\nusing the ",(0,n.kt)("inlineCode",{parentName:"p"},"insecure_sources")," setting. This approach is ",(0,n.kt)("strong",{parentName:"p"},"highly discouraged"),"\nfor environments closer to production.")),(0,n.kt)("p",null,"To configure the PolicyServer to accept insecure connections to specific\nregistries, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"spec.insecureSources")," field of PolicyServer. This field\naccepts a list of URIs to be regarded as insecure. Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  insecureSources:\n    - localhost:5000\n    - host.k3d.internal:5000\n")),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/distributing-policies/custom-certificate-authorities"},"here")," for more\ninformation on how the ",(0,n.kt)("inlineCode",{parentName:"p"},"policy-server")," executable treats them."),(0,n.kt)("h3",{id:"custom-certificate-authorities"},"Custom Certificate Authorities"),(0,n.kt)("p",null,"To configure the PolicyServer with a custom certificate chain of 1 or more\ncertificates for a specific URI, use the field ",(0,n.kt)("inlineCode",{parentName:"p"},"spec.sourceAuthorities"),"."),(0,n.kt)("p",null,"This field is a map of URIs, each with its own list of strings that contain PEM\nencoded certificates. Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  sourceAuthorities:\n    "registry-pre.example.com":\n      - |\n        -----BEGIN CERTIFICATE-----\n        ca-pre1-1 PEM cert\n        -----END CERTIFICATE-----\n      - |\n        -----BEGIN CERTIFICATE-----\n        ca-pre1-2 PEM cert\n        -----END CERTIFICATE-----\n    "registry-pre2.example.com:5500":\n      - |\n        -----BEGIN CERTIFICATE-----\n        ca-pre2 PEM cert\n        -----END CERTIFICATE-----\n')),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/distributing-policies/custom-certificate-authorities"},"here")," for more\ninformation on how the ",(0,n.kt)("inlineCode",{parentName:"p"},"policy-server")," executable treats them."))}p.isMDXComponent=!0}}]);