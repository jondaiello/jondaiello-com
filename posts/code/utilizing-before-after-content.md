# Extending CSS Content

In a recent Codepen demo, I was playing with the ability of CSS to utilize the `content:` attribute to display `href` of an anchor element in a popup description so a user can know exactly where a link goes:

<p data-height="423" data-theme-id="0" data-slug-hash="gMgbbQ" data-default-tab="result" data-user="jondaiello" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/jondaiello/pen/gMgbbQ/">Pure CSS Link URL Preview</a> by Jon Daiello (<a href="http://codepen.io/jondaiello">@jondaiello</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Sure, this is something that can be done by hovering over a link and waiting 100 years in most modern browsers. But, I wanted to put my own flair on it.

That got me thinking. Could I combine `attr()` with a string in CSS?

```
.c-el {
  content: 'My text ' attr(data-attribute);
}
```
Could this be possible??? 

I fired up Codepen to see if a browser respected it. Firefox bought it. So I headed over to the MDN to [read the docs](https://developer.mozilla.org/en-US/docs/Web/CSS/content) on `content`. To my amazement it's in the spec to combine several items together in the CSS `content` attribute.

SCORE!!

With that in store, I decided to play up the idea a little more. I would combine some preset text in the CSS with a `data-` attribute and pull in the href.

The HTML looked like this:
```
<a data-desc="My favorite code playground" href="http://codepen.io">Go to Codepen!</a>
```

Then, I extended my CSS a bit more:
```
a {
  &::after {
    display: block;
    content: attr(href) ' : ' attr(data-desc) ' GO > ';
  }
}
```

Mind. Blown. I can't wait to find a case where this is legit usage for this.
