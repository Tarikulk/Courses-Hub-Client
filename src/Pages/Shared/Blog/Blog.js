import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div className="mt-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Question 1. What is cors</Accordion.Header>
          <Accordion.Body>
            CORS is a part of HTTP that lets servers specify any other hosts
            from which a browser should permit loading of content. How to block
            cross-origin access To prevent cross-origin writes, check an
            unguessable token in the request — known as a Cross-Site Request
            Forgery (CSRF) token. prevent cross-origin reads of pages that
            require this token. To prevent cross-origin reads of a resource,
            ensure that it is not embeddable. prevent embedding because
            embedding a resource always leaks some information about it. To
            prevent cross-origin embeds, ensure that your resource cannot be
            interpreted Browsers may not respect the Content-Type header. For
            example, if you point a tag at an HTML document, the browser will
            try to parse the HTML as JavaScript. When your resource is not an
            entry point to your site, you can also use a CSRF token to prevent
            embedding.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Question 2. Why i use firebase ? What other options i have to
            implement ?
          </Accordion.Header>
          <Accordion.Body>
            1. Firebase provides tools to grow your app and business, for
            startups & global enterprises. Get your app up and running quickly &
            securely with fully managed backend infrastructure. Backed by
            Google. Release Apps Confidently. Monitor App Performance. <br></br>
            2. I am absolute beginner so now am not about to thinking other
            option's because i started with firebase.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Question 3. How does the private route work ?
          </Accordion.Header>
          <Accordion.Body>
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Question 4. What is node ? How does node word ?
          </Accordion.Header>
          <Accordion.Body>
            1. Node.js is an open-source, cross-platform, back-end JavaScript
            runtime environment that runs on the V8 engine and executes
            JavaScript code outside a web browser.
            <br></br>
            2. Javascript was always a client side language until node.js.
            Common server side languages include PHP, Python, Perl, Ruby and
            several more. Node enables you to use Javascript server side. This
            now means you can have a consistent language both ends which could
            not be done prior to Node.
            <br></br>
            3. It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
