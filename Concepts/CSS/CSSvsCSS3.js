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

    Multiple Background images

      Using the background-image, background-position, and background-repeat styles
      you can specify multiple background images to be layered on top of one another in the box.
      The first image is the layer closest to the user, with the following ones painted behind.

      If there is a background color, it is painted below all the image layers.

    New Background Style Properties


  There are also some new background properties in CSS3.

    background-clip
      This property defines how the background image should be clipped.
      The default is the border box, but it can be changed to the padding box or the content box.

    background-origin
      This property determines whether the background should be places in the padding box, the border box, or the content box.

    background-size
      This property allows you to indicate the size of the background image.
      It allows you to stretch smaller images to fit the page.


  Changes to Existing Background Style Properties

    And there are a few changes to exixting background style properties:

    background-repeat
      There are two new values for this property: space and round.
      Space spaces the tiled image evenly within the box without being clipped.
      Round rescales the background image so that it will tile a whole number of times in the box.

    background-attachment
      A new value "local" is added so that the background will scroll with the element's content
      when that element has a scroll bar.

    background
      The background shorthand property adds in the size and origin properties.

  CSS3 Border Properties

    In CSS3 borders can be the styles we're used to (solid, double, dashed, etc.) or they can be an image.
    Plus, CSS3 brings in the ability to create rounded corners. Border images are interesting because you create an image of all four borders and then tell the CSS how to apply that image to your borders.

    New Border Style Properties

    There are some new border properties in CSS3:

    border-radius
      border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, border-top-left-radius
      These properties allow you to create rounded corners on your borders.

    border-image-source
      Specifies the image source file to be used instead of border styles already defined.

    border-image-slice
      Represents the inward offsets from the border image edges

    border-image-width
      Defines the value of the width for your border image

    border-image-outset
      Specifies the amount that the border image area extends beyond the border box

    border-image-stretch
      Defines how the sides and middle parts of the border image should be tiled or scaled

    border-image
      The shorthand property for all the border image properties



