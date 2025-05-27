## Figmaries
_My Figma code reveries_

Figmaries is a collection of portions of code I created for multiple purposes,
sometimes to test an idea before integrating it into a Figma plugin, sometimes just
to perform a quick programmatic operation right there in the sources tab.

Have fun, use this stuff whenever and wherever you want, and please let me know you did.

Cheers, 

Gabriel

# Figmaries directory

[widest / narrowest characters](https://github.com/gabrieldib/figmaries/src/widest_narrowest_characters.js)
I needed to have info on the largest and smallest width for characters of a given font family / style / size. This was used in the font generator module for _[Figma to Kontakt](https://www.figma.com/community/plugin/1171114784600697919/figma-to-kontakt)_

[flattening template](https://github.com/gabrieldib/figmaries/src/flattening.js)
Flattening is not as obvious as one could expect. So here's a simple template to understand how to use it in a plugin, especially inside a loop. No array literals allowed on figma.flatten() for you! :P