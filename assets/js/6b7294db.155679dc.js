"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5595],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4135:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],s={sidebar_label:"Custom Certificate Authorities",title:""},l="Custom Certificate Authorities",c={unversionedId:"distributing-policies/custom-certificate-authorities",id:"distributing-policies/custom-certificate-authorities",title:"",description:"Both kwctl and policy-server allow you to pull policies from OCI registries and HTTP servers, as well as pushing to OCI registries. In this process, by default, HTTPS is enforced with host TLS verification.",source:"@site/docs/distributing-policies/custom-certificate-authorities.md",sourceDirName:"distributing-policies",slug:"/distributing-policies/custom-certificate-authorities",permalink:"/distributing-policies/custom-certificate-authorities",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/distributing-policies/custom-certificate-authorities.md",tags:[],version:"current",lastUpdatedAt:1658406093,formattedLastUpdatedAt:"7/21/2022",frontMatter:{sidebar_label:"Custom Certificate Authorities",title:""},sidebar:"docs",previous:{title:"Publish to Artifact Hub",permalink:"/distributing-policies/publish-policy-to-artifact-hub"},next:{title:"Secure Supply Chain",permalink:"/distributing-policies/secure-supply-chain"}},p={},u=[{value:"The <code>sources.yaml</code> file",id:"the-sourcesyaml-file",level:2},{value:"Insecure sources",id:"insecure-sources",level:3},{value:"Source authorities",id:"source-authorities",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-certificate-authorities"},"Custom Certificate Authorities"),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"policy-server")," allow you to pull policies from OCI registries and HTTP servers, as well as pushing to OCI registries. In this process, by default, HTTPS is enforced with host TLS verification."),(0,a.kt)("p",null,"The system CA store is used to validate the trusted chain of certificates presented by the OCI registry. In a regular Kubewarden installation, the ",(0,a.kt)("inlineCode",{parentName:"p"},"policy-server")," will use the CA store shipped with its Linux container. In the client side, ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl")," will use your operating system CA store."),(0,a.kt)("p",null,"If you are using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/kubewarden-controller"},"Kubewarden Controller"),",\nyou can configure the PolicyServer via their ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," fields, as documented\n",(0,a.kt)("a",{parentName:"p",href:"/operator-manual/policy-servers/custom-cas"},"here"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important"),": the default behavior of ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"policy-server")," is to enforce HTTPS with trusted certificates matching the system CA store. You can interact with registries using untrusted certificates or even without TLS, by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"insecure_sources")," setting. This approach is ",(0,a.kt)("strong",{parentName:"p"},"highly discouraged")," in environments closer to production.")),(0,a.kt)("h2",{id:"the-sourcesyaml-file"},"The ",(0,a.kt)("inlineCode",{parentName:"h2"},"sources.yaml")," file"),(0,a.kt)("p",null,"The pull and push behavior of ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"policy-server")," can be tuned via the ",(0,a.kt)("inlineCode",{parentName:"p"},"sources.yaml")," file."),(0,a.kt)("p",null,"This file can be provided both to ",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"policy-server")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"--sources-path")," argument.\n",(0,a.kt)("inlineCode",{parentName:"p"},"kwctl")," will try to load the ",(0,a.kt)("inlineCode",{parentName:"p"},"sources.yaml")," file from the following folders if the ",(0,a.kt)("inlineCode",{parentName:"p"},"--sources-path")," argument is not provided:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.config/kubewarden/sources.yaml")," "),(0,a.kt)("li",{parentName:"ul"},"Mac ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/Library/Application Support/io.kubewarden.kubewarden/sources.yaml")),(0,a.kt)("li",{parentName:"ul"},"Windows ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME\\AppData\\Roaming\\kubewarden\\config\\sources.yaml"))),(0,a.kt)("p",null,"Its structure is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'insecure_sources:\n  - "registry-dev.example.com"\n  - "registry-dev2.example.com:5500"\nsource_authorities:\n  "registry-pre.example.com":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-1.pem\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-2.der\n  "registry-pre2.example.com:5500":\n    - type: Data\n      data: |\n            -----BEGIN CERTIFICATE-----\n            ca-pre2 PEM cert\n            -----END CERTIFICATE-----\n')),(0,a.kt)("p",null,"This file can be provided in YAML or JSON format. All keys are optional, so the following are also valid ",(0,a.kt)("inlineCode",{parentName:"p"},"sources.yaml")," files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'insecure_sources: ["dev.registry.example.com"]\n')),(0,a.kt)("p",null,"As well as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "source_authorities": {\n        "host.k3d.internal:5000": [\n            {"type": "Data","data":"pem cert 1"},\n            {"type": "Data","data":"pem cert 2"}\n        ]\n    }\n}\n')),(0,a.kt)("h3",{id:"insecure-sources"},"Insecure sources"),(0,a.kt)("p",null,"Hosts listed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"insecure_sources")," configuration behave in a different way than hosts that are not listed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Unlisted hosts (default)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Try to connect using HTPS, verifying the server identity. If the connection fails, operation is aborted."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Listed hosts"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Try to connect using HTTPS verifying the server identity. If the connection fails,"),(0,a.kt)("li",{parentName:"ul"},"Try to connect using HTTPS, skipping host verification. If the connection fails,"),(0,a.kt)("li",{parentName:"ul"},"Try to connect using HTTP. If the connection fails, operation is aborted.")))),(0,a.kt)("p",null,"It is generally fine to use ",(0,a.kt)("inlineCode",{parentName:"p"},"insecure_sources")," when using local registries or\nHTTP servers when developing locally, to avoid the certificate burden. However,\nthis setting is ",(0,a.kt)("strong",{parentName:"p"},"completely discouraged")," for environments closer to\nproduction."),(0,a.kt)("h3",{id:"source-authorities"},"Source authorities"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"source_authorities")," is a map that contains URIs and a list of CA\ncertificates that form a certificate chain for that URI, used to verify the\nidentity of OCI registries and HTTPs servers."),(0,a.kt)("p",null,"These certificates can be encoded in PEM or DER format. Certificates in binary\nDER format can be provided as a path to a file containing the certificate,\nmeanwhile certificates in PEM format can either by a path to the certificate\nfile, or a string with the certificate contents. Both possibilities are\nspecified via a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'source_authorities:\n  "registry-pre.example.com":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-1.pem\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-2.der\n    - type: Data\n      data: |\n            -----BEGIN CERTIFICATE-----\n            ca-pre1-3 PEM cert\n            -----END CERTIFICATE-----\n  "registry-pre2.example.com:5500":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre2-1.der\n')))}m.isMDXComponent=!0}}]);