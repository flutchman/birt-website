(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),i=(r(0),r(130)),o={id:"t_grids",title:"Grids",sidebar_label:"Grids"},l={unversionedId:"t_grids",id:"t_grids",isDocsHomePage:!1,title:"Grids",description:"Create a Grid",source:"@site/docs/t_grids.md",slug:"/t_grids",permalink:"/birt-website/docs/t_grids",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/t_grids.md",version:"current",sidebar_label:"Grids",sidebar:"someSidebar",previous:{title:"Brief Editor Tour",permalink:"/birt-website/docs/t_brief-editor-tour"},next:{title:"Data Sources",permalink:"/birt-website/docs/t_data-sources"}},c=[{value:"Create a Grid",id:"create-a-grid",children:[]},{value:"Row Properties",id:"row-properties",children:[]},{value:"Column Properties",id:"column-properties",children:[]},{value:"Insert an Image",id:"insert-an-image",children:[]},{value:"Insert a Run Date",id:"insert-a-run-date",children:[]}],p={toc:c};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"create-a-grid"},"Create a Grid"),Object(i.b)("p",null,'Let\'s add a suitable heading to our report. It will use the classic "left/center/right" layout: a logo on the left, the report title in the center, and the run date on the right. Before you do this you may want to remove the current basic heading, which simply says "Report Header". To do this:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Select the Grid item containing the "Report Header" which is located above your table.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Delete it by right-clicking on it and selecting the delete option from the context menu."))),Object(i.b)("p",null,"The easiest way to create such a layout is to use a grid. A grid is like an HTML table, it tells BIRT the desired layout, and BIRT does the work to make it happen. In this case, we want a one-row grid with three columns each 1/3 the width of the page."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Drag a Grid item from the palette into your report above your table. The Insert Grid dialog appears.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Choose 3 columns and 2 rows.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click OK."))),Object(i.b)("h2",{id:"row-properties"},"Row Properties"),Object(i.b)("p",null,"We want the contents of the header to be top-aligned. And we'll use the second row as a spacer between the header proper and the report body:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select the entire first row of the Grid that you just added.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the General page of the Property Editor, set the vertical alignment to Top.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select the second row.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the General page of the Property Editor, set the height to 0.25 in."))),Object(i.b)("h2",{id:"column-properties"},"Column Properties"),Object(i.b)("p",null,"We want each of the three columns to be 1/3 the width of the page, and we want them to be left, center and right aligned:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select the first column header.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Switch to the General tab in the Property Editor. Notice that the width is unset. As in HTML, if the column width is not set, BIRT will size the column to its content.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Set the column widths to 33%. Do this by typing "33" in the width field, then selecting "%" from the adjacent pull-down.s')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select the middle column.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Repeat the step above to set the width to 33%.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the General page of the Property Editor, set the text alignment to Center.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select the rightmost column.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Repeat the step above to set the width to 33%.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the General page of the Property Editor, set the text alignment to Right."))),Object(i.b)("h2",{id:"insert-an-image"},"Insert an Image"),Object(i.b)("p",null,"Let's click the preview tab to see how our report looks after the formatting. Not bad, but we still need the report heading. To do this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Drag an Image item from the palette into the left-most cell of your grid.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The Image Builder dialog appears.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Ensure that the URL radio button is selected.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Enter the following URL: "',Object(i.b)("a",{parentName:"p",href:"http://www.eclipse.org/birt/resources/documentation/tutorial/multichip-4.jpg%22"},'http://www.eclipse.org/birt/resources/documentation/tutorial/multichip-4.jpg"'),". (don't forget to add the quotes.)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click the Preview button to ensure that the URL is correct.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click Insert to add the image to your report."))),Object(i.b)("p",null,"You can also embed an image from your local disk. Embedding the image copies the image into the report design. Using a URL is more efficient."),Object(i.b)("h2",{id:"insert-a-run-date"},"Insert a Run Date"),Object(i.b)("p",null,"Next, let's display the current date in the right-most cell in the heading. To do this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Drag a Data item from the Palette into the right-most cell of your grid.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The New Data Item dialog will be displayed. Change the name to current_date.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set the Data Type column to Date Time. Select the ellipse next to the Expression. The expression builder will appear.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Type "new Date( )" (without the quotes) to display the current date.')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click OK.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set the date format. Select the Format DateTime page within the Property Editor.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Choose the date format that looks like this: May 12, 2005. (The actual date will be today\'s date.) This is the BIRT "Medium Date" date format.'))),Object(i.b)("p",null,"BIRT uses Java formatting for dates, numbers and strings. In addition, BIRT adds a number of specialized, locale-aware date formats described in the ROM Styles Specification."))}b.isMDXComponent=!0},130:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(r),d=a,h=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return r?n.a.createElement(h,l(l({ref:t},p),{},{components:r})):n.a.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);