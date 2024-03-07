"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7026],{25059:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(85893),i=t(11151);const a={},o="Getting Started",r={id:"Getting-Started",title:"Getting Started",description:"AutoGen is a framework that enables development of LLM applications using multiple agents that can converse with each other to solve tasks. AutoGen agents are customizable, conversable, and seamlessly allow human participation. They can operate in various modes that employ combinations of LLMs, human inputs, and tools.",source:"@site/docs/Getting-Started.md",sourceDirName:".",slug:"/Getting-Started",permalink:"/autogen/docs/Getting-Started",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Getting-Started.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",next:{title:"Installation",permalink:"/autogen/docs/installation/"}},c={},l=[{value:"Main Features",id:"main-features",level:3},{value:"Quickstart",id:"quickstart",level:3},{value:"Multi-Agent Conversation Framework",id:"multi-agent-conversation-framework",level:4},{value:"Enhanced LLM Inferences",id:"enhanced-llm-inferences",level:4},{value:"Where to Go Next ?",id:"where-to-go-next-",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",iframe:"iframe",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.p,{children:"AutoGen is a framework that enables development of LLM applications using multiple agents that can converse with each other to solve tasks. AutoGen agents are customizable, conversable, and seamlessly allow human participation. They can operate in various modes that employ combinations of LLMs, human inputs, and tools."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"AutoGen Overview",src:t(28302).Z+"",width:"1576",height:"756"})}),"\n",(0,s.jsx)(n.h3,{id:"main-features",children:"Main Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["AutoGen enables building next-gen LLM applications based on ",(0,s.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/Use-Cases/agent_chat",children:"multi-agent conversations"})," with minimal effort. It simplifies the orchestration, automation, and optimization of a complex LLM workflow. It maximizes the performance of LLM models and overcomes their weaknesses."]}),"\n",(0,s.jsxs)(n.li,{children:["It supports ",(0,s.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/Use-Cases/agent_chat#supporting-diverse-conversation-patterns",children:"diverse conversation patterns"})," for complex workflows. With customizable and conversable agents, developers can use AutoGen to build a wide range of conversation patterns concerning conversation autonomy,\nthe number of agents, and agent conversation topology."]}),"\n",(0,s.jsxs)(n.li,{children:["It provides a collection of working systems with different complexities. These systems span a ",(0,s.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/Use-Cases/agent_chat#diverse-applications-implemented-with-autogen",children:"wide range of applications"})," from various domains and complexities. This demonstrates how AutoGen can easily support diverse conversation patterns."]}),"\n",(0,s.jsxs)(n.li,{children:["AutoGen provides ",(0,s.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/Use-Cases/enhanced_inference#api-unification",children:"enhanced LLM inference"}),". It offers utilities like API unification and caching, and advanced usage patterns, such as error handling, multi-config inference, context programming, etc."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["AutoGen is powered by collaborative ",(0,s.jsx)(n.a,{href:"/docs/Research",children:"research studies"})," from Microsoft, Penn State University, and University of Washington."]}),"\n",(0,s.jsx)(n.h3,{id:"quickstart",children:"Quickstart"}),"\n",(0,s.jsxs)(n.p,{children:["Install from pip: ",(0,s.jsx)(n.code,{children:"pip install pyautogen"}),". Find more options in ",(0,s.jsx)(n.a,{href:"/docs/installation/",children:"Installation"}),".\nFor ",(0,s.jsx)(n.a,{href:"/docs/FAQ#code-execution",children:"code execution"}),", we strongly recommend installing the python docker package, and using docker."]}),"\n",(0,s.jsx)(n.h4,{id:"multi-agent-conversation-framework",children:"Multi-Agent Conversation Framework"}),"\n",(0,s.jsxs)(n.p,{children:["Autogen enables the next-gen LLM applications with a generic multi-agent conversation framework. It offers customizable and conversable agents which integrate LLMs, tools, and humans.\nBy automating chat among multiple capable agents, one can easily make them collectively perform tasks autonomously or with human feedback, including tasks that require using tools via code. For ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/test/twoagent.py",children:"example"}),","]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from autogen import AssistantAgent, UserProxyAgent, config_list_from_json\n\n# Load LLM inference endpoints from an env variable or a file\n# See https://microsoft.github.io/autogen/docs/FAQ#set-your-api-endpoints\n# and OAI_CONFIG_LIST_sample.json\nconfig_list = config_list_from_json(env_or_file="OAI_CONFIG_LIST")\nassistant = AssistantAgent("assistant", llm_config={"config_list": config_list})\nuser_proxy = UserProxyAgent("user_proxy", code_execution_config={"work_dir": "coding", "use_docker": False}) # IMPORTANT: set to True to run code in docker, recommended\nuser_proxy.initiate_chat(assistant, message="Plot a chart of NVDA and TESLA stock price change YTD.")\n# This initiates an automated chat between the two agents to solve the task\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The figure below shows an example conversation flow with AutoGen.\n",(0,s.jsx)(n.img,{alt:"Agent Chat Example",src:t(62435).Z+"",width:"2188",height:"1200"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/Examples",children:"Code examples"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/Use-Cases/agent_chat",children:"Documentation"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"enhanced-llm-inferences",children:"Enhanced LLM Inferences"}),"\n",(0,s.jsx)(n.p,{children:"Autogen also helps maximize the utility out of the expensive LLMs such as ChatGPT and GPT-4. It offers enhanced LLM inference with powerful functionalities like tuning, caching, error handling, templating. For example, you can optimize generations by LLM with your own tuning data, success metrics and budgets."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# perform tuning for openai<1\nconfig, analysis = autogen.Completion.tune(\n    data=tune_data,\n    metric="success",\n    mode="max",\n    eval_func=eval_func,\n    inference_budget=0.05,\n    optimization_budget=3,\n    num_samples=-1,\n)\n# perform inference for a test instance\nresponse = autogen.Completion.create(context=test_instance, **config)\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/Examples",children:"Code examples"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/Use-Cases/enhanced_inference",children:"Documentation"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"where-to-go-next-",children:"Where to Go Next ?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Understand the use cases for ",(0,s.jsx)(n.a,{href:"/docs/Use-Cases/agent_chat",children:"multi-agent conversation"})," and ",(0,s.jsx)(n.a,{href:"/docs/Use-Cases/enhanced_inference",children:"enhanced LLM inference"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Find ",(0,s.jsx)(n.a,{href:"/docs/Examples",children:"code examples"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Read ",(0,s.jsx)(n.a,{href:"/docs/reference/agentchat/conversable_agent/",children:"SDK"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Learn about ",(0,s.jsx)(n.a,{href:"/docs/Research",children:"research"})," around AutoGen."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/orgs/microsoft/projects/989/views/3",children:"Roadmap"})}),"\n",(0,s.jsxs)(n.li,{children:["Chat on ",(0,s.jsx)(n.a,{href:"https://discord.gg/pAbnFJrkgZ",children:"Discord"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Follow on ",(0,s.jsx)(n.a,{href:"https://twitter.com/pyautogen",children:"Twitter"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you like our project, please give it a ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/stargazers",children:"star"})," on GitHub. If you are interested in contributing, please read ",(0,s.jsx)(n.a,{href:"/docs/Contribute",children:"Contributor's Guide"}),"."]}),"\n",(0,s.jsx)(n.iframe,{src:"https://ghbtns.com/github-btn.html?user=microsoft&repo=autogen&type=star&count=true&size=large",frameBorder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28302:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/autogen_agentchat-250ca64b77b87e70d34766a080bf6ba8.png"},62435:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/chat_example-da70a7420ebc817ef9826fa4b1e80951.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);