"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=d(n),u=a,m=g["".concat(l,".").concat(u)]||g[u]||c[u]||r;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<r;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(3117),a=(n(7294),n(3905));const r={sidebar_label:"Define Policy Settings",title:""},s="Defining policy settings",o={unversionedId:"writing-policies/go/policy-settings",id:"writing-policies/go/policy-settings",title:"",description:"As a first step we will define the structure that holds the policy settings.",source:"@site/docs/writing-policies/go/03-policy-settings.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/policy-settings",permalink:"/writing-policies/go/policy-settings",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/go/03-policy-settings.md",tags:[],version:"current",lastUpdatedAt:1670249265,formattedLastUpdatedAt:"Dec 5, 2022",sidebarPosition:3,frontMatter:{sidebar_label:"Define Policy Settings",title:""},sidebar:"docs",previous:{title:"Create a New Policy",permalink:"/writing-policies/go/scaffold"},next:{title:"Write the Validation Logic",permalink:"/writing-policies/go/validation"}},l={},d=[{value:"Defining the <code>BasicSettings</code> type",id:"defining-the-basicsettings-type",level:2},{value:"Building <code>Settings</code> instances",id:"building-settings-instances",level:2},{value:"Implementing <code>Settings</code> validation",id:"implementing-settings-validation",level:2},{value:"Testing the settings code",id:"testing-the-settings-code",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"defining-policy-settings"},"Defining policy settings"),(0,a.kt)("p",null,"As a first step we will define the structure that holds the policy settings."),(0,a.kt)("p",null,"We will do that by adding this code inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.go")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    mapset "github.com/deckarep/golang-set"\n    kubewarden "github.com/kubewarden/policy-sdk-go"\n    kubewarden_protocol "github.com/kubewarden/policy-sdk-go/protocol"\n    "github.com/mailru/easyjson"\n\n    "fmt"\n    "regexp"\n)\n\ntype Settings struct {\n    DeniedLabels      mapset.Set\n    ConstrainedLabels map[string]*regexp.Regexp\n}\n')),(0,a.kt)("p",null,"As you can see we're using the ",(0,a.kt)("inlineCode",{parentName:"p"},"regexp")," package to handle regular expression objects and\nwe use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/deckarep/golang-set"},(0,a.kt)("inlineCode",{parentName:"a"},"mapset.Set"))," type to store\nthe list of denied labels."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," struct has no JSON attributes. That's because none of its\nattributes can be deserialized from JSON:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"regexp.Regexp"),": doesn't handle deserialization, not even with the official Go\ncompiler"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mapset.Set"),": given it uses ",(0,a.kt)("inlineCode",{parentName:"li"},"interface"),"s internally, this cannot be handled by\nTinyGo due to its lack of reflection. Even ",(0,a.kt)("inlineCode",{parentName:"li"},"easyjson")," cannot help here.")),(0,a.kt)("p",null,"Due to this, we are going to use a different Go type to deserialize the input\ndata. We will call this Go type: ",(0,a.kt)("inlineCode",{parentName:"p"},"BasicSettings"),"."),(0,a.kt)("h2",{id:"defining-the-basicsettings-type"},"Defining the ",(0,a.kt)("inlineCode",{parentName:"h2"},"BasicSettings")," type"),(0,a.kt)("p",null,"The default policy defines its own ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," type inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"types.go")," file.\nStarting from this file, we then leverage the ",(0,a.kt)("inlineCode",{parentName:"p"},"easyjson")," cli tool to create the\nserialization and deserialization code."),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"types.go")," file, remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," type and define a new ",(0,a.kt)("inlineCode",{parentName:"p"},"BasicSettings"),"\none:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type BasicSettings struct {\n    DeniedLabels      []string          `json:"denied_labels"`\n    ConstrainedLabels map[string]string `json:"constrained_labels"`\n}\n')),(0,a.kt)("p",null,"Next, let's regenerate the ",(0,a.kt)("inlineCode",{parentName:"p"},"types_easyjson.go")," file. Usually there's no need to\ndo that manually because ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," handles that automatically. However, right now\nwe cannot rely on ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," because we're in the process of making invasive changes that have broken\nthe regular build process. Post completion of these changes, we should be able to leverage ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," once again."),(0,a.kt)("p",null,"To regenerate the ",(0,a.kt)("inlineCode",{parentName:"p"},"types_easyjson.go")," file execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make types_easyjson.go\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This requires docker to be running on your machine.")),(0,a.kt)("h2",{id:"building-settings-instances"},"Building ",(0,a.kt)("inlineCode",{parentName:"h2"},"Settings")," instances"),(0,a.kt)("p",null,"A Kubewarden policy exposes two different functions that receive the\npolicy settings as input:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"validate"),": This is the function that is invoked every time some Kubernetes\nobject has to be validated by the policy. The settings are received as part\nof the ",(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/kubewarden/policy-sdk-go@v0.2.1/protocol#ValidationRequest"},(0,a.kt)("inlineCode",{parentName:"a"},"ValidationRequest")),"\nobject"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"validate_settings"),": This function is called only when the policy is first\nloaded by Kubewarden. The function receives the policy settings as input and\nensures their validity.")),(0,a.kt)("p",null,"We will create two helper functions that create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," object starting\nfrom the JSON payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func NewSettingsFromValidationReq(validationReq *kubewarden_protocol.ValidationRequest) (Settings, error) {\n    return newSettings(validationReq.Settings)\n}\n\nfunc newSettings(settingsJson []byte) (Settings, error) {\n    basicSettings := BasicSettings{}\n    err := easyjson.Unmarshal(settingsJson, &basicSettings)\n    if err != nil {\n        return Settings{}, err\n    }\n\n    deniedLabels := mapset.NewThreadUnsafeSet()\n    for _, label := range basicSettings.DeniedLabels {\n        deniedLabels.Add(label)\n    }\n\n    constrainedLabels := make(map[string]*regexp.Regexp)\n    for name, expr := range basicSettings.ConstrainedLabels {\n        reg, err := regexp.Compile(expr)\n        if err != nil {\n            return Settings{}, fmt.Errorf("Cannot compile regexp %s: %v", expr, err)\n        }\n        constrainedLabels[name] = reg\n    }\n\n    return Settings{\n        DeniedLabels:      deniedLabels,\n        ConstrainedLabels: constrainedLabels,\n    }, nil\n}\n')),(0,a.kt)("p",null,"As you can see, the heavy lifting of the setting is done inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"newSettings")," function."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"All the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapset.Set")," objects are deliberately created using\ntheir ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/deckarep/golang-set?utm_source=godoc#NewThreadUnsafeSet"},"thread-unsafe variant"),".\nThe WebAssembly code is executed in single thread, hence there are no\nconcurrency issues."),(0,a.kt)("p",{parentName:"admonition"},"Moreover, the WebAssembly standard doesn't cover\nthreads yet. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/threads"},"the official proposal"),"\nfor more details.")),(0,a.kt)("h2",{id:"implementing-settings-validation"},"Implementing ",(0,a.kt)("inlineCode",{parentName:"h2"},"Settings")," validation"),(0,a.kt)("p",null,"All Kubewarden policies have to implement\n",(0,a.kt)("a",{parentName:"p",href:"/writing-policies/#the-validate_settings-entry-point"},"settings validation"),"."),(0,a.kt)("p",null,"This can be easily done by adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"Valid")," method to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," instances:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (s *Settings) Valid() (bool, error) {\n    constrainedLabels := mapset.NewThreadUnsafeSet()\n\n    for label := range s.ConstrainedLabels {\n        constrainedLabels.Add(label)\n    }\n\n    constrainedAndDenied := constrainedLabels.Intersect(s.DeniedLabels)\n    if constrainedAndDenied.Cardinality() != 0 {\n        return false,\n            fmt.Errorf("These labels cannot be constrained and denied at the same time: %v", constrainedAndDenied)\n    }\n\n    return true, nil\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Valid"),' method ensures no "denied" label is also part of the "constrained" map. The check\nis simplified by the usage of the ',(0,a.kt)("inlineCode",{parentName:"p"},"Intersect")," method provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"mapset.Set"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Valid")," method is invoked against an already instantiated ",(0,a.kt)("inlineCode",{parentName:"p"},"Setting")," object. That means\nthe validation of the regular expression provided by the user already took place\ninside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," constructor.")),(0,a.kt)("p",null,"Finally, we have to ensure the ",(0,a.kt)("inlineCode",{parentName:"p"},"validateSettings")," function that was automatically generated\nis changed to look like that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func validateSettings(payload []byte) ([]byte, error) {\n    settings, err := newSettings(payload)\n    if err != nil {\n        return kubewarden.RejectSettings(\n            kubewarden.Message(fmt.Sprintf("Provided settings are not valid: %v", err)))\n    }\n\n    valid, err := settings.Valid()\n    if valid {\n        return kubewarden.AcceptSettings()\n    }\n\n    return kubewarden.RejectSettings(\n        kubewarden.Message(fmt.Sprintf("Provided settings are not valid: %v", err)))\n}\n')),(0,a.kt)("p",null,"As you can see, the function takes advantage of the helper functions provided\nby ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/policy-sdk-go"},"Kubewarden's SDK"),"."),(0,a.kt)("h2",{id:"testing-the-settings-code"},"Testing the settings code"),(0,a.kt)("p",null,"As always, it's important to have good test coverage of the code we write.\nThe code we generated comes with a series of unit test defined inside of\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"settings_test.go")," file."),(0,a.kt)("p",null,"We will have to change the contents of this file to reflect the new behaviour of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," class."),(0,a.kt)("p",null,"We will start by including the Go packages we will use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    kubewarden_protocol "github.com/kubewarden/policy-sdk-go/protocol"\n    "github.com/mailru/easyjson"\n\n    "testing"\n)\n')),(0,a.kt)("p",null,"We will start by writing a unit test that ensures we can allocate a ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings"),"\ninstance from a ",(0,a.kt)("a",{parentName:"p",href:"/writing-policies/#the-validationrequest-object"},(0,a.kt)("inlineCode",{parentName:"a"},"ValidationRequest")),"\nobject:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestParseValidSettings(t *testing.T) {\n    settingsJSON := []byte(`\n        {\n            "denied_labels": [ "foo", "bar" ],\n            "constrained_labels": {\n                    "cost-center": "cc-\\\\d+"\n            }\n        }`)\n\n    settings, err := newSettings(settingsJSON)\n    if err != nil {\n        t.Errorf("Unexpected error %+v", err)\n    }\n\n    expected_denied_labels := []string{"foo", "bar"}\n    for _, exp := range expected_denied_labels {\n        if !settings.DeniedLabels.Contains(exp) {\n            t.Errorf("Missing value %s", exp)\n        }\n    }\n\n    re, found := settings.ConstrainedLabels["cost-center"]\n    if !found {\n        t.Error("Didn\'t find the expected constrained label")\n    }\n\n    expected_regexp := `cc-\\d+`\n    if re.String() != expected_regexp {\n        t.Errorf("Expected regexp to be %v - got %v instead",\n            expected_regexp, re.String())\n    }\n}\n')),(0,a.kt)("p",null,"Next we will define a test that ensures a ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," instance\ncannot be generated when the user provides a broken regular\nexpression:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestParseSettingsWithInvalidRegexp(t *testing.T) {\n    settingsJSON := []byte(`\n        {\n            "denied_labels": [ "foo", "bar" ],\n            "constrained_labels": {\n                    "cost-center": "cc-[a+"\n            }\n        }`)\n\n    _, err := newSettings(settingsJSON)\n    if err == nil {\n        t.Errorf("Didn\'g get expected error")\n    }\n}\n')),(0,a.kt)("p",null,"Next we will define a test that checks the behaviour\nof the ",(0,a.kt)("a",{parentName:"p",href:"/writing-policies/#the-validate_settings-entry-point"},(0,a.kt)("inlineCode",{parentName:"a"},"validate_settings")),"\nentry-point."),(0,a.kt)("p",null,"In this case we actually look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"SettingsValidationResponse")," object\nreturned by our ",(0,a.kt)("inlineCode",{parentName:"p"},"validateSettings")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestDetectValidSettings(t *testing.T) {\n    settingsJSON := []byte(`\n    {\n        "denied_labels": [ "foo", "bar" ],\n        "constrained_labels": {\n            "cost-center": "cc-\\\\d+"\n        }\n    }`)\n\n    responsePayload, err := validateSettings(settingsJSON)\n    if err != nil {\n        t.Errorf("Unexpected error %+v", err)\n    }\n\n    var response kubewarden_protocol.SettingsValidationResponse\n    if err := easyjson.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if !response.Valid {\n        t.Errorf("Expected settings to be valid: %s", *response.Message)\n    }\n}\n')),(0,a.kt)("p",null,"Finally, we write two more tests to ensure the ",(0,a.kt)("inlineCode",{parentName:"p"},"validateSettings")," function\nrejects invalid settings with the right messages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestDetectNotValidSettingsDueToBrokenRegexp(t *testing.T) {\n    settingsJSON := []byte(`\n    {\n        "denied_labels": [ "foo", "bar" ],\n        "constrained_labels": {\n            "cost-center": "cc-[a+"\n        }\n    }\n    `)\n\n    responsePayload, err := validateSettings(settingsJSON)\n    if err != nil {\n        t.Errorf("Unexpected error %+v", err)\n    }\n\n    var response kubewarden_protocol.SettingsValidationResponse\n    if err := easyjson.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if response.Valid {\n        t.Error("Expected settings to not be valid")\n    }\n\n    if *response.Message != "Provided settings are not valid: Cannot compile regexp cc-[a+: error parsing regexp: missing closing ]: `[a+`" {\n        t.Errorf("Unexpected validation error message: %s", *response.Message)\n    }\n}\n\nfunc TestDetectNotValidSettingsDueToConflictingLabels(t *testing.T) {\n    settingsJSON := []byte(`\n    {\n        "denied_labels": [ "foo", "bar", "cost-center" ],\n        "constrained_labels": {\n            "cost-center": ".*"\n        }\n    }`)\n    responsePayload, err := validateSettings(settingsJSON)\n    if err != nil {\n        t.Errorf("Unexpected error %+v", err)\n    }\n\n    var response kubewarden_protocol.SettingsValidationResponse\n    if err := easyjson.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if response.Valid {\n        t.Error("Expected settings to not be valid")\n    }\n\n    if *response.Message != "Provided settings are not valid: These labels cannot be constrained and denied at the same time: Set{cost-center}" {\n        t.Errorf("Unexpected validation error message: %s", *response.Message)\n    }\n}\n')),(0,a.kt)("p",null,"Now we can run the test by using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"go test -v settings.go types.go types_easyjson.go settings_test.go\n")),(0,a.kt)("p",null,"All the tests will pass with the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\nPASS\nok      command-line-arguments  0.002s\n")),(0,a.kt)("p",null,"We can now move to implement the actual validation code."))}c.isMDXComponent=!0}}]);