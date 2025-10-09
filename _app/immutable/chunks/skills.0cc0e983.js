import{A as e}from"./UIcon.0ffa8068.js";const d=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function p(n,...o){const i=Object.assign({},n);return Object.keys(i).forEach(s=>{o.includes(s)&&delete i[s]}),i}const t=n=>n,u=[t({name:"Programming Languages",slug:"pro-lang"}),t({name:"Frameworks",slug:"framework"}),t({name:"Libraries",slug:"library"}),t({name:"Langauges",slug:"lang"}),t({name:"Databases",slug:"db"}),t({name:"ORMs",slug:"orm"}),t({name:"DevOps",slug:"devops"}),t({name:"Testing",slug:"test"}),t({name:"Dev Tools",slug:"devtools"}),t({name:"Markup & Style",slug:"markup-style"}),t({name:"Design",slug:"design"}),t({name:"Soft Skills",slug:"soft"})],a=n=>{const o=p(n,"category");return n.category&&(o.category=u.find(i=>i.slug===n.category)),o},c=[a({slug:"js",color:"yellow",description:"JavaScript is a versatile, high-level programming language commonly used for developing web applications, enabling dynamic interactions on websites. It is an essential skill for front-end development and is increasingly used on the back-end with environments like Node.js.",logo:e.JavaScript,name:"JavaScript",category:"pro-lang"}),a({slug:"ts",color:"blue",description:"TypeScript is a superset of JavaScript that adds static types, improving code quality and maintainability by providing early error detection and better tooling. It’s widely used in large-scale applications to enhance JavaScript’s flexibility with strong type checking.",logo:e.TypeScript,name:"TypeScript",category:"pro-lang"}),a({slug:"css",color:"blue",description:"CSS (Cascading Style Sheets) is used to design and style web pages by describing how HTML elements should be displayed. It allows developers to create visually engaging layouts with responsive designs and animations.",logo:e.CSS,name:"CSS",category:"markup-style"}),a({slug:"html",color:"orange",description:"HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure of the content on the web and works hand-in-hand with CSS and JavaScript for designing and building websites.",logo:e.HTML,name:"HTML",category:"markup-style"}),a({slug:"sass",color:"pink",description:"Sass is a CSS preprocessor that adds power and elegance to basic CSS. It allows for variables, nested rules, and functions, making CSS more maintainable and scalable in large projects.",logo:e.Sass,name:"Sass",category:"markup-style"}),a({slug:"reactjs",color:"cyan",description:"React.js is a popular JavaScript library for building user interfaces, especially single-page applications. It allows developers to create reusable UI components, enabling efficient updates and rendering in response to data changes.",logo:e.ReactJs,name:"React.js",category:"library"}),a({slug:"svelte",color:"orange",description:d,logo:e.Svelte,name:"Svelte",category:"library"}),a({slug:"python",color:"#306998",description:"Python is a high-level, interpreted programming language known for its readability and versatility. It is used across various fields including web development, data analysis, artificial intelligence, and scientific computing.",logo:e.Python,name:"Python",category:"pro-lang"}),a({slug:"java",color:"#00758f",description:"Java is a high-level, class-based programming language widely used for building large-scale applications. Its portability and extensive libraries make it a popular choice for server-side development and Android applications.",logo:e.Java,name:"Java",category:"pro-lang"}),a({slug:"cpp",color:"#00599C",description:"C++ is a general-purpose programming language that offers both high-level and low-level capabilities. It’s widely used in system/software development, game development, and performance-critical applications.",logo:e.Cpp,name:"C++",category:"pro-lang"}),a({slug:"csharp",color:"#178600",description:"C# is a modern, object-oriented programming language developed by Microsoft. It is primarily used for developing desktop applications, web services, and games (using the Unity engine).",logo:e.Csharp,name:"C#",category:"pro-lang"}),a({slug:"c",color:"#A8B9CC",description:"C is a powerful, general-purpose programming language that provides low-level access to memory and efficient performance. It’s widely used for system programming, embedded systems, and applications that require direct interaction with hardware.",logo:e.C,name:"C",category:"pro-lang"}),a({slug:"php",color:"#777BB4",description:"PHP is a widely-used open-source scripting language especially suited for web development. It is fast, flexible, and pragmatic, powering everything from blogs to popular websites like WordPress and Facebook.",logo:e.PHP,name:"PHP",category:"pro-lang"}),a({slug:"ruby",color:"#CC342D",description:"Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity. Known for its elegant syntax, it is popular for web development, particularly with the Ruby on Rails framework.",logo:e.Ruby,name:"Ruby",category:"pro-lang"}),a({slug:"lua",color:"#000080",description:"Lua is a lightweight, high-level programming language designed for embedded systems and game development. It is known for its simplicity, flexibility, and fast execution.",logo:e.Lua,name:"Lua",category:"pro-lang"}),a({slug:"luau",color:"#000080",description:"Luau is a derivative of Lua designed to improve type safety and performance. It is widely used in game development, particularly for scripting in Roblox.",logo:e.LuaU,name:"Luau",category:"pro-lang"}),a({slug:"jupyter",color:"#ff8b33",description:"Jupyter is an open-source platform for creating and sharing live code, visualizations, and interactive data science notebooks. It supports languages like Python, R, and Julia, and is widely used in data science and machine learning workflows.",logo:e.Jupyter,name:"Jupyter",category:"pro-lang"})],y="Skills",h=(...n)=>c.filter(o=>n.includes(o.slug)),f=n=>{const o=[],i=[];return c.forEach(s=>{if(n.trim()&&!s.name.toLowerCase().includes(n.trim().toLowerCase()))return;if(!s.category){i.push(s);return}let r=o.find(g=>{var l;return g.category.slug===((l=s.category)==null?void 0:l.slug)});r||(r={items:[],category:s.category},o.push(r)),r.items.push(s)}),i.length!==0&&o.push({category:{name:"Others",slug:"others"},items:i}),o};export{f as a,h as g,c as i,y as t};
