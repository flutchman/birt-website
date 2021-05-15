(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),l=(a(0),a(130)),i={id:"t_tables",title:"Tables",sidebar_label:"Tables"},o={unversionedId:"t_tables",id:"t_tables",isDocsHomePage:!1,title:"Tables",description:"Layout",source:"@site/docs/t_tables.md",slug:"/t_tables",permalink:"/birt-website/docs/t_tables",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/t_tables.md",version:"current",sidebar_label:"Tables",sidebar:"someSidebar",previous:{title:"Styles",permalink:"/birt-website/docs/t_styles"},next:{title:"Testing Reports",permalink:"/birt-website/docs/t_testing-reports"}},b=[{value:"Layout",id:"layout",children:[]},{value:"Create the Table Detail",id:"create-the-table-detail",children:[]},{value:"Create the State Group",id:"create-the-state-group",children:[]},{value:"Creating Groups on your Own",id:"creating-groups-on-your-own",children:[]},{value:"Add a Table Column",id:"add-a-table-column",children:[]},{value:"Create Column Headings",id:"create-column-headings",children:[]}],c={toc:b};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"layout"},"Layout"),Object(l.b)("p",null,"Our customer listing report will display customer information in the form of a table: just like an HTML table, with the added ability to iterate over report data. The Grouped Listing template we chose earlier created the table for us, we just need to fill in the details. Before we do, let's introduce the various BIRT report items.\nReport Items (Elements)"),Object(l.b)("p",null,"BIRT provides a variety of report items or Elements for use when creating your report. Report items appear in the Palette view. Report items include:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'Label - Displays a simple piece of text such as "Customer Name".')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'Text - Text that can include HTML formatting and computed values. Used to create headings, form letters, "mail-merge" effects, etc.')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Dynamic Text - Displays a database column that can contain HTML formatted (CLOB) data. Allows for advanced CLOB data manipulation through expressions.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Data - Displays a database column or a computed value. Provides formatting.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Image - Any kind of image supported by a web browser. Images can be embedded in the report, referenced through a URI, read from the resource folder or retrieved from a BLOB field in a data set.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Grid - Provides a tabular arrangement of report items, much like an HTML table. This element doesnt iterate over data sets like a List or a Table.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"List - Presents data from a data set in any kind of format. Used when the layout for each row is more sophisticated than a simple table row. This Element will iterate over a bound Data Set.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Table - Presents data from a data set in the form of a table. Can contain grouping levels. Like an HTML table that has a table row for each data set row. This Element, like a list will iterate over a bound Data Set.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Chart - Displays a business chart such as a pie chart, line chart, etc."))),Object(l.b)("p",null,"This tutorial will use all the elements except for List, Chart and Dynamic Text."),Object(l.b)("h2",{id:"create-the-table-detail"},"Create the Table Detail"),Object(l.b)("p",null,"The New Report dialog created a starter report that contains a table item with one level of grouping. If we'd chosen a blank report, we could create the table simply by dragging it from the palette."),Object(l.b)("p",null,"The next step is to add content to the table. We'll start with the detail band which repeats to display each row from our data set. Here's how:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Display the Data Explorer if it's not already visible.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Expand the Data Sets node of the tree.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Expand the entry for the Customers data set that we created. This will display the columns available from the data set.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Select the CUSTOMERNAME column.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'Locate the detail band within the table. (It is has a gray "Detail Row" label.)')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Drag the CUSTOMERNAME column into the detail band cell second from the left. This operation adds a Data Element and a Label Element to the Table Element. The Binding Editor maps the Data Element to the Data Set row column CUSTOMERNAME. The Binding Editor is available by selecting the Binding tab in the Property Editor for the Table. You can change this value by selecting the ellipse next to the expression within the Binding Editor. You will now see that the Table Element contains the new Label Element and the new Data Element.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Drag the PHONE column into the rightmost cell of the detail band."))),Object(l.b)("h2",{id:"create-the-state-group"},"Create the State Group"),Object(l.b)("p",null,"We want our customer listing to be grouped by state, then city. Using a group causes all rows within the same state to appear together. Let's create the group header for states:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'Locate the group header row in your table. It has a light gray "Group Header Row" label.')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Drag the STATE column into the leftmost cell within the Group Header row."))),Object(l.b)("h2",{id:"creating-groups-on-your-own"},"Creating Groups on your Own"),Object(l.b)("p",null,"We are using the group created for us by the New Report dialog. If we'd started by dragging the table from the palette, we'd create this first group as we'll explain in the next section."),Object(l.b)("p",null,"You must bind (associate) the table to a data set before you can create a group. The binding happened automatically when we dropped the first data set column into the table. However, if you build a table on your own, you can use the Binding tab in the Property Editor to bind the table to a data set.\nCreate the City Group"),Object(l.b)("p",null,"Next, we'll create a city group within the state. This groups customers first by state, then by city."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Hover the cursor over the table and a Table tab will be displayed.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Click on the Table tab to display the table scaffolding.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Select the Property Editor->Binding Tab. You will see that the Table is bound to the Customers Data Set. Under Data Column Binding you will notice the three Table columns that have already been created.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Select Add. Then Data Binding dialog will be displayed.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Enter City in the Name field and select ellipse next to Expression. The BIRT Expression Builder will be displayed.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Select Available Data Sets under Category, Customers under Sub-Category and then double-click on the CITY column.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Select OK and change the Binding name from New Binding to CITY. The Data Set Row column CITY is now available to be used within the Table.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Right-click on the row header for the state group header and a context menu will be displayed.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"From the context menu choose Insert Group->Below. The Group Details dialog appears.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Chose the CITY column in the Group On field and type City in the Name field.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Click OK."))),Object(l.b)("p",null,"Notice that BIRT automatically inserted a Data element for the city group."),Object(l.b)("h2",{id:"add-a-table-column"},"Add a Table Column"),Object(l.b)("p",null,"We need another table column to display our group heading:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Ensure the table scaffolding appears. Right-click on the shaded column header for the first column.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Choose Insert->Column to the Right from the context menu. A new column appears.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Move the CITY Data Element (the Element in the first column of the second group header) to the second column of the second group header by dragging it."))),Object(l.b)("h2",{id:"create-column-headings"},"Create Column Headings"),Object(l.b)("p",null,"We're almost done with the basic setup of our table. We just need to refine our column headings. BIRT added headings for us for each column we added to the table."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'Double-click on the first column header text to change it. Type "State" and press Enter.')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'Drag a label from the palette into the second column heading, type "City" and press Enter.')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'Change the third column header to "Name".')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'Change the last column header to "Phone".'))))}s.isMDXComponent=!0},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return a?n.a.createElement(h,o(o({ref:t},c),{},{components:a})):n.a.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);