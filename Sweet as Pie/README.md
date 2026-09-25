# Sweet as Pie Website Redesign

## Student Information

**Student Name:** Lazola Mntuyedwa  
**Student Number:** ST10523148  
**Module:** Web Development (WEDE5020w)  
**Year:** 2026

## 1. Project Overview

The Sweet as Pie Website Redesign is a web development project for Sweet As Pie, a Cape Town artisanal bakery specialising in handcrafted pies and tarts. Part 1 establishes the website foundation through research, planning, content gathering, file organisation and semantic HTML.

## 2. Website Goals and Objectives

The project aims to create a functional, informative and easy-to-navigate website that supports Sweet As Pie's online presence. Objectives are to present the business and products clearly, provide enquiry and contact options, support an online-ordering concept, use semantic HTML5, maintain consistent navigation, and provide a structured foundation for CSS and JavaScript work in Parts 2 and 3.

## 3. Target Audience

The target audience includes existing and potential Sweet As Pie customers, Cape Town residents and visitors, families, dessert lovers, and customers seeking handcrafted desserts for celebrations, events or special occasions.

## 4. Key Features and Functionality

The project contains six pages: `index.html` (home), `about.html` (history, mission, vision and values), `products.html` (product information), `enquiry.html` (product/catering enquiry form), `contact.html` (contact details, two locations and general contact form), and `checkout.html` (additional order/checkout structure). All pages use a common navigation menu.

## 5. Sitemap

```text
                         SWEET AS PIE
                              |
                            HOME
                         index.html
                              |
        +-------------+-------+-------+-------------+
        |             |               |             |
      ABOUT        PRODUCTS        ENQUIRY       CONTACT
   about.html    products.html    enquiry.html  contact.html
                     |
                 CHECKOUT
               checkout.html
```

## 6. File and Folder Structure

```text
Sweet as Pie/
|-- index.html
|-- about.html
|-- products.html
|-- enquiry.html
|-- contact.html
|-- checkout.html
|-- README.md
|-- css/
|   `-- style.css
|-- js/
|   `-- script.js
`-- images/
    |-- logo.png
    |-- hero-image.jpg
    |-- about-image.jpg
    |-- apple-pie.jpg
    |-- blueberry-pie.jpg
    `-- cherry-pie.jpg
```

File names are lowercase where appropriate, spaces are avoided in web asset names, and assets are separated by type.

## 7. Technologies Used

**HTML5** provides the structure and content. Semantic elements such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` and `<footer>` are used. A basic external stylesheet is included so file paths are valid; detailed CSS and responsive design are reserved for Part 2. A JavaScript file is included as the Part 1 project foundation; interactive behaviour and client-side validation are reserved for Part 3.

## 8. Part 1 Details

Part 1 includes organisation selection and research, target-audience identification, website goals, content planning, a sitemap, an organised project structure, six linked HTML pages, semantic HTML, relevant content, forms, code comments, image assets and testing of local file paths/navigation. The Checkout page is an additional documented page beyond the five-page minimum.

## 9. Timeline and Milestones

| Stage | Activity | Timeline |
|---|---|---|
| 1 | Organisation research and project planning | Week 1 |
| 2 | Content gathering, sitemap and wireframes | Week 2 |
| 3 | HTML structure and page development | Weeks 3–4 |
| 4 | CSS styling and responsive design | Weeks 5–6 |
| 5 | JavaScript functionality | Week 7 |
| 6 | Testing, debugging, SEO and final improvements | Week 8 |

## 10. Testing and Debugging

Part 1 testing checks that all six pages open, navigation links point to existing pages, CSS and JavaScript paths resolve, image assets display, forms contain appropriate HTML elements, and the HTML remains readable and logically structured. Cross-browser and responsive testing will continue in later parts as styling and functionality are added.

## 11. Changelog

### Version 1.0 – Part 1
- Created the six HTML pages and common navigation.
- Added semantic HTML structure, relevant content, forms and comments.
- Added sitemap and Part 1 README documentation.
- Added `css`, `js` and `images` folders with valid linked files.
- Added original coursework image assets so the project contains no broken image paths.
- Added a second contact/collection location to satisfy the PoE requirement for more than one location.
- Corrected the README so it accurately reflects the files contained in the project.

Future changes made for Parts 2 and 3 should be recorded here.

## 12. Content Research and Sourcing

Sweet As Pie's official website was used to verify the business background, products, contact details and collection information. The official site states that the business was founded in 2020 by Zizi Matikiti, operates from Makers Landing in Cape Town, and sells handcrafted pies and tarts. Its FAQ also identifies The Old Biscuit Mill as a collection option.

The image files included in this Part 1 package are simple original coursework graphics created specifically for this project package; they are not copied from the Sweet As Pie website or another third-party image library. They may be replaced later with properly licensed and referenced production images.

## 13. References

Sweet As Pie. 2026. *Sweet As Pie*. Available at: https://www.sweetaspie.co.za/ [Accessed 18 September 2026].

Sweet As Pie. 2026. *Frequently Asked Questions*. Available at: https://www.sweetaspie.co.za/pages/faq [Accessed 18 September 2026].

Sweet As Pie. 2026. *Sharing Pies*. Available at: https://www.sweetaspie.co.za/products/sharing-pies [Accessed 18 September 2026].

Sweet As Pie. 2026. *Catering and Events*. Available at: https://www.sweetaspie.co.za/pages/catering-and-events [Accessed 18 September 2026].

## 14. Repository Information

The project should be maintained in the private GitHub repository supplied through the lecturer. Commit genuine changes regularly using descriptive messages. The existing repository history is preserved; this corrected package adds a new Part 1 alignment commit rather than inventing earlier commits.

## 15. Separate Part 1 Submission Items

The website project folder does **not** replace the other Part 1 submission items required by the PoE. Keep the lecturer-approved Website Project Proposal (from the two proposals prepared for approval), the content research/sourcing submission, and the GitHub repository link with the submission as instructed. Low-fidelity wireframes belong in the proposal/planning documentation and should also be retained with the Part 1 evidence.

## 16. AI Use Reminder

Where AI tools were used in preparing or revising this project, the final academic submission must include the institution-required AI acknowledgement/disclosure, in-text citation/full reference where applicable, and the required evidence/screenshots in accordance with the PoE instructions.

## 17. Part 2 – CSS Styling and Responsive Design

Part 2 develops the visual presentation of the Sweet as Pie website through one external stylesheet linked to all six HTML pages. The stylesheet uses a reset, reusable CSS custom properties, consistent typography, spacing, colour, borders, shadows, Flexbox and CSS Grid. Reusable selectors reduce duplication and support the cascading nature of CSS.

The desktop layout uses a sticky header, flexible navigation, a two-column hero, three-column product layouts, styled forms, cards and consistent calls to action. Interactive states are provided with `:hover`, `:focus-visible`, `:focus` and `:active` pseudo-classes to improve feedback and keyboard accessibility.

Responsive design uses a desktop-first approach with breakpoints at **900px (tablet)** and **600px (mobile)**. At tablet width, major two-column areas become single-column and product cards move to two columns. At mobile width, product cards become single-column, navigation becomes a two-column grid, buttons become full-width and typography/spacing scale down. Relative units (`rem`, `%`, `vw`) and `clamp()` are used throughout. Images use `max-width: 100%`, automatic height, `srcset` and `sizes`, with small and medium image variants included in the `images` folder.

### Part 2 Testing Evidence

Before submission, browser Developer Tools must be used to test the site and screenshots must be added here for evidence. Capture at least:

1. **Desktop:** 1440 × 900 – Home page and Products page.
2. **Tablet:** 768 × 1024 – Home page showing the adjusted hero/navigation and Products page showing two columns.
3. **Mobile:** 390 × 844 – Home page showing stacked content/navigation and Products page showing one product per row.

Place the screenshots in `images/testing/` and replace this checklist with the screenshots or Markdown image links before final submission.

### Part 2 Changelog – Version 2.0

- Replaced the Part 1 foundation CSS with a comprehensive external stylesheet used by all six pages.
- Added a consistent reset and base style system using reusable CSS custom properties.
- Added responsive typography with `clamp()`, relative units, consistent line-height and hierarchy.
- Added desktop Flexbox/Grid layouts for the header, hero, products and location content.
- Added consistent brand colour, borders, rounded cards and shadows.
- Added comprehensive `:hover`, `:focus`, `:focus-visible` and `:active` states for links, navigation, form fields and buttons.
- Added tablet breakpoint at 900px and mobile breakpoint at 600px.
- Added responsive layout, typography and navigation adjustments at both breakpoints.
- Added responsive image rules plus `srcset` and `sizes` attributes and small/medium image variants.
- Added `aria-current="page"` to identify the current navigation item visually and semantically.
- Retained and improved the Part 1 corrections: valid asset folders, working local paths, six linked pages, second contact location and accurate README documentation.

### Part 1 Lecturer Feedback

**Important:** Add the lecturer's actual Part 1 feedback here once received, followed by the exact correction made for each feedback point. Do not invent feedback. The Part 2 rubric allocates marks specifically for comprehensive changes based on Part 1 feedback and a detailed changelog.

## 18. Part 2 References

Mozilla Developer Network (MDN). 2026. *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 23 September 2026].

Mozilla Developer Network (MDN). 2026. *Responsive images*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images [Accessed 23 September 2026].

Mozilla Developer Network (MDN). 2026. *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries [Accessed 23 September 2026].

Sweet As Pie. 2026. *Sweet As Pie*. Available at: https://www.sweetaspie.co.za/ [Accessed 18 September 2026].

### Part 2 consistency and functionality update — 24 September 2026
- Updated the CSS colour palette to match the approved proposal exactly: Soft Pink `#F4C2C2`, Cream `#FFF8E7`, Chocolate Brown `#6B3E26`, White `#FFFFFF`, and Dark Charcoal `#333333`.
- Updated typography to match the proposal: Playfair Display for headings and Poppins for body text, navigation and buttons, with web-safe fallbacks.
- Added functional product-to-checkout behaviour using localStorage. Product buttons now add the selected pie and open the checkout page.
- Added working checkout quantity controls, calculated subtotal/total, collection/delivery behaviour, required-field validation and a prototype confirmation message.
- Added successful prototype responses to the Enquiry and Contact forms while retaining native HTML validation.
- Retained tablet and mobile breakpoints, responsive navigation, responsive product grids and responsive image rules.

### Image sourcing note
Product and brand imagery should be sourced from Sweet as Pie's own website where permission/academic fair-use requirements allow. The official site was consulted for product information and visual references. Any externally sourced images used in the submitted website must be credited in this README and in the project references in accordance with the IIE Harvard Referencing Guide.

### Product pricing and photography update (25 September 2026)
- Product prices were checked against the official Sweet As Pie website. Sharing-size Apple, Blueberry and Cherry pies are presented as flavour options of the Sharing Pies product at **R220**.
- Product cards now use current Sweet As Pie product photography hosted on the organisation's official Shopify CDN instead of placeholder illustrations.
- Checkout product data was updated to use the same verified price and official product images so the Products and Checkout pages remain consistent.
- Image sources: Sweet As Pie official Sharing Pies product page (accessed 25 September 2026).
