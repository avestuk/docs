"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[1522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(3117),i=(n(7294),n(3905));const a={sidebar_label:"Verifying Kubewarden",title:""},o="Verifying Kubewarden",l={unversionedId:"security/verifying-kubewarden",id:"security/verifying-kubewarden",title:"",description:"Kubewarden artifacts are signed using Sigstore,",source:"@site/docs/security/verifying-kubewarden.md",sourceDirName:"security",slug:"/security/verifying-kubewarden",permalink:"/security/verifying-kubewarden",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/security/verifying-kubewarden.md",tags:[],version:"current",lastUpdatedAt:1670249265,formattedLastUpdatedAt:"Dec 5, 2022",frontMatter:{sidebar_label:"Verifying Kubewarden",title:""},sidebar:"docs",previous:{title:"Threat Model",permalink:"/security/threat-model"},next:{title:"Disclosure",permalink:"/security/disclosure"}},s={},c=[{value:"Helm charts",id:"helm-charts",level:2},{value:"Container images",id:"container-images",level:2},{value:"kwctl",id:"kwctl",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"verifying-kubewarden"},"Verifying Kubewarden"),(0,i.kt)("p",null,"Kubewarden artifacts are signed using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.sigstore.dev"},"Sigstore"),",\nwith the keyless workflow. This means that the signing certificate contains the\nfollowing info, where ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," matches any following characters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"issuer: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://token.actions.githubusercontent.com")),(0,i.kt)("li",{parentName:"ul"},"subject: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://github.com/kubewarden/*")),(0,i.kt)("li",{parentName:"ul"},'x509 certificate extension for GHA, "github_workflow_repository": ',(0,i.kt)("inlineCode",{parentName:"li"},"kubewarden/*"))),(0,i.kt)("h2",{id:"helm-charts"},"Helm charts"),(0,i.kt)("p",null,"You can find our Helm charts in our ",(0,i.kt)("inlineCode",{parentName:"p"},"https://")," traditional Helm repository under\n",(0,i.kt)("a",{parentName:"p",href:"https://charts.kubewarden.io"},"https://charts.kubewarden.io"),"."),(0,i.kt)("p",null,"The same Helm charts are signed via Sigstore's keyless signing, and pushed to an\nOCI repository that can hold both the Helm chart and its signature as OCI\nartifacts."),(0,i.kt)("p",null,"Since Helm 3.8.0, Helm has support for OCI registries, but because of\nconstraints in them, they can't be searched via ",(0,i.kt)("inlineCode",{parentName:"p"},"helm"),". You can find the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/orgs/kubewarden/packages?tab=packages&q=charts"},"list of charts in GitHub Container Registry"),"."),(0,i.kt)("p",null,"To verify a Helm chart, you need ",(0,i.kt)("inlineCode",{parentName:"p"},"cosign")," installed. Then execute the following\ncommand, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"COSIGN_EXPERIMENTAL=1 cosign verify ghrc.io/kubewarden/charts/kubewarden-controller:0.4.6 | jq\n\nVerification for ghcr.io/kubewarden/charts/kubewarden-controller:0.4.6 --\nThe following checks were performed on each of these signatures:\n  - The cosign claims were validated\n  - Existence of the claims in the transparency log was verified offline\n  - Any certificates were verified against the Fulcio roots.\n\n  <snipped json>\n")),(0,i.kt)("p",null,"You may either verify manually or with Sigstore tools that the cert in the\nreturned json contains the correct issuer, subject, and\n",(0,i.kt)("inlineCode",{parentName:"p"},"github_workflow_repository")," extensions."),(0,i.kt)("h2",{id:"container-images"},"Container images"),(0,i.kt)("p",null,"Both the production images used in our Helm charts and our development images\n(tagged ",(0,i.kt)("inlineCode",{parentName:"p"},":latest"),") are signed with Sigstore's keyless signing."),(0,i.kt)("p",null,"Kubewarden follows the usual practices with regards to Helm charts. Hence, one\ncan find all the images in the Helm charts with a plugin such as\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cvila84/helm-image"},"helm-image"),", or with the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/usr/bin/env bash\nhelm pull --untar kubewarden/kubewarden-controller && \\\nhelm pull --untar kubewarden/kubewarden-defaults && \\\n{ helm template ./kubewarden-controller; helm template ./kubewarden-defaults } \\\n    | yq '..|.image? | select(.)' \\\n    | sort -u | sed 's/\"//g'\n")),(0,i.kt)("p",null,"which gives us:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ghcr.io/kubewarden/kubewarden-controller:v0.5.5\nghcr.io/kubewarden/policy-server:v0.3.1\nghcr.io/kubewarden/kubectl:v1.21.4\n")),(0,i.kt)("p",null,"Now, for each image in that list you can verify their Sigstore signatures. E.g:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"COSIGN_EXPERIMENTAL=1 cosign verify ghcr.io/kubewarden/policy-server:v0.3.1 | jq\nThe following checks were performed on each of these signatures:\n  - The cosign claims were validated\n  - Existence of the claims in the transparency log was verified offline\n  - Any certificates were verified against the Fulcio roots.\n\n  <snipped json>\n")),(0,i.kt)("p",null,"You can then verify either manually or with Sigstore tools that the cert in the\nreturned json contains the correct issuer, subject, and\n",(0,i.kt)("inlineCode",{parentName:"p"},"github_workflow_repository")," extensions."),(0,i.kt)("h2",{id:"kwctl"},"kwctl"),(0,i.kt)("p",null,"kwctl binaries are signed using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.sigstore.dev/cosign/working_with_blobs/#signing-blobs-as-files"},"Sigstore's blog signing"),". "),(0,i.kt)("p",null,"When you download a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kwctl/releases/"},"kwctl\nrelease")," each zip file contains\ntwo files that can be used for verification: ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl.sig")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kwctl.pem"),"."),(0,i.kt)("p",null,"In order to verify kwctl you need cosign installed, and then execute the\nfollowing command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"COSIGN_EXPERIMENTAL=1 cosign verify-blob  --signature kwctl-linux-x86_64.sig --cert kwctl-linux-x86_64.pem kwctl-linux-x86_64\n")),(0,i.kt)("p",null,"The output should be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tlog entry verified with uuid: 7e5a4fac8f45cdddeafd6901af566b9576be307a06caa3fbc45f91da102214e0 index: 2435066\nVerified OK\n")),(0,i.kt)("p",null,"You can inspect the cert signature yourself to see that indeed was authenticated\nvia GitHub OIDC, and performed in our GitHub Actions workflows."))}d.isMDXComponent=!0}}]);