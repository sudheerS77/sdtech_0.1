// import createDOMPurify from 'dompurify'
// import { JSDOM } from 'jsdom'
import lsv from './lessonview.module.css';

const LessonView = () => {
    // const window = (new JSDOM('')).window
    // const DOMPurify = createDOMPurify(window)
    const rawHTML = `<h1 class="ql-align-justify">Learn JavaScript Tutorial</h1>
    <p class="ql-align-justify">
    <span style="color: rgb(51, 51, 51); font-family: inter-regular, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);">
        <img src="https://static.javatpoint.com/images/javascript/javascript_logo.png" alt="JavaScript Tutorial" height="200" width="200">
    </span>
</p>
<h2 class="ql-align-justify">Learn JavaScript Tutorial</h2>
<h3 class="ql-align-justify">Learn JavaScript Tutorial</h3>
<h4 class="ql-align-justify">Learn JavaScript Tutorial</h4>
<h5 class="ql-align-justify">Learn JavaScript Tutorial</h5>
<h6 class="ql-align-justify">Learn JavaScript Tutorial</h6>
<p class="ql-align-justify">
    <span style="color: rgb(51, 51, 51); font-family: inter-regular, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);">
        <span class="ql-cursor">﻿</span>
    </span>Our&nbsp;
        <span style="font-family: inter-bold, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">JavaScript Tutorial</span>&nbsp;is designed for beginners and professionals both. JavaScript is used to create client-side dynamic pages.</p>
    <p class="ql-align-justify">JavaScript is&nbsp;
        <em>an object-based scripting language</em>&nbsp;which is lightweight and cross-platform.</p>
    <p class="ql-align-justify">JavaScript is not a compiled language, but it is a translated language. The JavaScript Translator (embedded in the browser) is responsible for translating the JavaScript code for the web browser.</p>
    <p class="ql-align-justify">
        <br>
    </p>
    <h2 class="ql-align-justify">What is JavaScript</h2>
    <p class="ql-align-justify">JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to
        an HTML document. It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser. Since then, it has been adopted by all other graphical web browsers. With JavaScript, users can build modern web applications
        to interact directly without reloading the page every time. The traditional website uses js to provide several forms of interactivity and simplicity.</p>
    <p class="ql-align-justify">
        <br>
    </p>
    <p class="ql-align-justify">
        <br>
    </p>
    <p class="ql-align-justify">Although, JavaScript has no connectivity with Java programming language. The name was suggested and provided in the times when Java was gaining popularity in the market. In addition to web browsers, databases such as CouchDB and MongoDB uses JavaScript
        as their scripting and query language.</p>
    <p class="ql-align-justify">
        <br>
    </p>
    <h2 class="ql-align-justify">Features of JavaScript</h2>
    <p class="ql-align-justify">There are following features of JavaScript:</p>
    <p class="ql-align-justify">
        <br>
    </p>
    <ol>
        <li class="ql-align-justify">All popular web browsers support JavaScript as they provide built-in execution environments.</li>
        <li class="ql-align-justify">JavaScript follows the syntax and structure of the C programming language. Thus, it is a structured programming language.</li>
        <li class="ql-align-justify">JavaScript is a weakly typed language, where certain types are implicitly cast (depending on the operation).</li>
        <li class="ql-align-justify">JavaScript is an object-oriented programming language that uses prototypes rather than using classes for inheritance.</li>
        <li class="ql-align-justify">It is a light-weighted and interpreted language.</li>
        <li class="ql-align-justify">It is a case-sensitive language.</li>
        <li class="ql-align-justify">JavaScript is supportable in several operating systems including, Windows, macOS, etc.</li>
        <li class="ql-align-justify">It provides good control to the users over the web browsers.</li>
    </ol>
    <h2 class="ql-align-justify">History of JavaScript</h2>
    <p class="ql-align-justify">In 1993,&nbsp;
        <span style="font-family: inter-bold, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">Mosaic</span>, the first popular web browser, came into existence. In the&nbsp;
        <span style="font-family: inter-bold, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">year 1994</span>,&nbsp;
        <span style="font-family: inter-bold, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">Netscape</span>&nbsp;was founded by&nbsp;
        <span style="font-family: inter-bold, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">Marc Andreessen</span>. He realized that the web needed to become more dynamic. Thus, a 'glue language' was believed to be provided to HTML to make web designing easy for designers and part-time programmers. Consequently, in 1995, the company recruited&nbsp;
        <span
        style="font-family: inter-bold, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">Brendan Eich</span>&nbsp;intending to implement and embed Scheme programming language to the browser. But, before Brendan could start, the company merged with&nbsp;
            <span style="font-family: inter-bold, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">Sun Microsystems</span>&nbsp;for adding Java into its Navigator so that it could compete with Microsoft over the web technologies and platforms. Now, two languages were there: Java and the scripting language. Further, Netscape decided to give
            a similar name to the scripting language as Java's. It led to 'Javascript'. Finally, in May 1995, Marc Andreessen coined the first code of Javascript named '
            <span style="font-family: inter-bold, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">Mocha</span>'. Later, the marketing team replaced the name with '
            <span style="font-family: inter-bold, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">LiveScript</span>'. But, due to trademark reasons and certain other reasons, in December 1995, the language was finally renamed to 'JavaScript'. From then, JavaScript came into existence.</p>
    <p class="ql-align-justify">
        <br>
    </p>
    <h2 class="ql-align-justify">Application of JavaScript</h2>
    <p class="ql-align-justify">JavaScript is used to create interactive websites. It is mainly used for:</p>
    <p class="ql-align-justify">
        <br>
    </p>
    <ul>
        <li class="ql-align-justify">Client-side validation,</li>
        <li class="ql-align-justify">Dynamic drop-down menus,</li>
        <li class="ql-align-justify">Displaying date and time,</li>
        <li class="ql-align-justify">Displaying pop-up windows and dialog boxes (like an alert dialog box, confirm dialog box and prompt dialog box),</li>
        <li class="ql-align-justify">Displaying clocks etc.</li>
        <li class="ql-align-justify">
            <br>
        </li>
    </ul>
    <h3 class="ql-align-justify">JavaScript Example</h3>
    <p class="ql-align-justify">
        <br>
    </p>
    <pre spellcheck="false" class="ql-align-justify">
        &lt;script&gt;&nbsp;&nbsp; document.write("Hello&nbsp;JavaScript&nbsp;by&nbsp;JavaScript");&nbsp;&nbsp; &lt;/script&gt;&nbsp;&nbsp;
    </pre>
    <p class="ql-align-justify">
        <br>
    </p>
    <pre spellcheck="false" class="ql-align-justify">&lt;!DOCTYPE&nbsp;html&gt;&nbsp;&nbsp; &lt;html&gt;&nbsp;&nbsp; &lt;body&gt;&nbsp;&nbsp; &lt;p&gt;&nbsp;This&nbsp;is&nbsp;an&nbsp;example&nbsp;of&nbsp;adding&nbsp;multiple&nbsp;events&nbsp;of&nbsp;different&nbsp;type&nbsp;to&nbsp;the&nbsp;same&nbsp;element.&nbsp;&lt;/p&gt;&nbsp;&nbsp;
    &lt;p&gt;&nbsp;Click&nbsp;the&nbsp;following&nbsp;button&nbsp;to&nbsp;see&nbsp;the&nbsp;effect.&nbsp;&lt;/p&gt;&nbsp;&nbsp; &lt;button&nbsp;id&nbsp;=&nbsp;"btn"&gt;&nbsp;Click&nbsp;me&nbsp;&lt;/button&gt;&nbsp;&nbsp; &lt;p&nbsp;id&nbsp;=&nbsp;"para"&gt;&lt;/p&gt;&nbsp;&nbsp;
    &lt;script&gt;&nbsp;&nbsp; function&nbsp;fun()&nbsp;{&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;btn.style.width&nbsp;=&nbsp;"50px";&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;btn.style.height&nbsp;=&nbsp;"50px";&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;btn.style.background&nbsp;=&nbsp;"yellow";&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;btn.style.color&nbsp;=&nbsp;"blue";&nbsp;&nbsp; }&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; function&nbsp;fun1()&nbsp;{&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;document.getElementById("para").innerHTML&nbsp;=&nbsp;&nbsp;"This&nbsp;is&nbsp;second&nbsp;function";&nbsp;&nbsp;
    &nbsp;&nbsp; }&nbsp;&nbsp; function&nbsp;fun2()&nbsp;{&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;btn.style.width&nbsp;=&nbsp;"";&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;btn.style.height&nbsp;=&nbsp;"";&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;btn.style.background&nbsp;=&nbsp;"";&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;btn.style.color&nbsp;=&nbsp;"";&nbsp;&nbsp; }&nbsp;&nbsp; var&nbsp;mybtn&nbsp;=&nbsp;document.getElementById("btn");&nbsp;&nbsp; mybtn.addEventListener("mouseover",&nbsp;fun);&nbsp;&nbsp; mybtn.addEventListener("click",&nbsp;fun1);&nbsp;&nbsp;
    mybtn.addEventListener("mouseout",&nbsp;fun2);&nbsp;&nbsp; &lt;/script&gt;&nbsp;&nbsp; &lt;/body&gt;&nbsp;&nbsp; &lt;/html&gt;&nbsp;&nbsp;
</pre>
    <p>
        <span style="font-size: 18px;">Quill Rich Text Editor</span>
    </p>
    <p>
        <br>
    </p>
    <p>Quill is a free,
        <a href="https://github.com/quilljs/quill/" target="_blank">open source</a>WYSIWYG editor built for the modern web. With its
        <a href="http://quilljs.com/docs/modules/" target="_blank">extensible architecture</a>and a
        <a href="http://quilljs.com/docs/api/" target="_blank">expressive API</a>you can completely customize it to fulfill your needs. Some built in features include:</p>
    <p>
        <br>
    </p>
    <ul>
        <li>Fast and lightweight</li>
        <li>Semantic markup</li>
        <li>Standardized HTML between browsers</li>
        <li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
    </ul>
    <p>
        <br>
    </p>
    <p>
        <span style="font-size: 18px;">Downloads</span>
    </p>
    <p>
        <br>
    </p>
    <ul>
        <li>
            <a href="https://quilljs.com" target="_blank">Quill.js</a>, the free, open source WYSIWYG editor</li>
        <li>
            <a href="https://zenoamaro.github.io/react-quill" target="_blank">React-quill</a>, a React component that wraps Quill.js</li>
    </ul>
    `
    return (
        <>
            <div className={lsv.lsv_container}>
                {<div dangerouslySetInnerHTML={{ __html: rawHTML }} />}
            </div>
        </>
    )
}

export default LessonView;
// h1              { font-size: 2em; margin: .67em 0 }
// h2              { font-size: 1.5em; margin: .75em 0 }
// h3              { font-size: 1.17em; margin: .83em 0 }
// h5              { font-size: .83em; margin: 1.5em 0 }
// h6              { font-size: .75em; margin: 1.67em 0 }
// h1, h2, h3, h4,
// h5, h6          { font-weight: bolder }