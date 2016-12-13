CSSvsCSS3

What's new in CSS3??

  The biggest difference between CSS2 and CSS3 is that CSS3 has been split up into different sections, called modules.
  This process has made it much easier for various pieces of CSS3 to be accepted and implemented
  in the browser by different manufacturers.

New CSS3 Selectors

  CSS3 offers a bunch of new ways you can write CSS rules with new CSS selectors,
  as well as a new combinator, and some new pseudo-elements.

  Three new attribute selectors:

    attribute beginning matches exactly
        element[foo^="bar"]
      The element has an attribute called foo that begins with "bar" e.g. <element foo="barn">

    attribute ending matches exactly
        element[foo$="bar"]
      The element has an attribute called foo that ends with "bar" e.g. <element foo="rebar">

    attribute contains the match
        element[foo*="bar"]
      The element has an attribute called foo that contains the string "bar" e.g. <element foo="rebaring">


    16 new pseudo-classes:

    :root
      The root element of the document. In HTML this is always <html>

    :nth-child(n)
      use this to match exact child elements or use variables to get alternating matches

    :nth-last-child(n)
      match exact child elements counting up from the last one

    :nth-of-type(n)
      match sibling elements with the same name before it in the document tree

    :nth-last-of-type(n)
      match sibling elements with the same name counting up from the bottom

    :last-child
      match the last child element of the parent

    :first-of-type
      match the first sibling element of that type

    :last-of-type
      match the last sibling element of that type

    :only-child
      match the element that is the only child of its parent

    :only-of-type
      match the element that is the only one of its type

    :empty
      match the element that has no children (including text nodes)

    :target
      match an element that is the target of the referring URI

    :enabled
      match the element when it's enabled

    :disabled
      match the element when it's disabled

    :checked
      match the element when it's checked (radio button or checkbox)

    :not(s)
      match when the element does not match the simple selector s


    One new combinator:

      elementA ~ elementB
        match when elementB follows somewhere after elementA, not necessarily immediately

    New Properties

      CSS3 also introduced a number of new CSS properties.
      Many of these properties were to create visual styles that would likely associate more with
      a graphics program like Photoshop.
      Some of these, like border-radius or box-shadow, have been around since the introduction if CSS3.
      Others, like flexbox or even CSS Grid are newer styles that are still often considered CSS3 additions.





