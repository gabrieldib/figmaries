## Figmaries
_My Figma code reveries_

Figmaries is a collection of portions of code I created for multiple purposes,
sometimes to test an idea before integrating it into a Figma plugin, sometimes just
to perform a quick programmatic operation right there in the sources tab.

Have fun, use this stuff whenever and wherever you want, and please let me know you did.

Cheers, 

Gabriel

# Figmaries directory

[widest / narrowest characters](https://github.com/gabrieldib/figmaries/blob/main/src/widest_narrowest_characters.js)
I needed to have info on the largest and smallest width for characters of a given font family / style / size. This was used in the font generator module for _[Figma to Kontakt](https://www.figma.com/community/plugin/1171114784600697919/figma-to-kontakt)_

[flattening template](https://github.com/gabrieldib/figmaries/blob/main/src/flattening.js)
Flattening is not as obvious as one could expect. So here's a simple template to understand how to use it in a plugin, especially inside a loop. No array literals allowed on figma.flatten() for you! :P

[centered rotation](https://github.com/gabrieldib/figmaries/blob/main/src/centered_rotation.js)
Rotating a node or a selection around its center is not as simple as one could expect.
Also when that node or selection already have a rotation in place. This code snippet solves
this problem. You are welcome ;P

[convert rgb to hex](https://github.com/gabrieldib/figmaries/blob/main/src/convert_rgb_to_hex.js)
That simple tool that sooner or later you will need.

[add guides](https://github.com/gabrieldib/figmaries/blob/main/src/add_guides.js)
A simple template to automate adding guidelines when you need a few or a lot of equally spaced guidelines

[create clean frame](https://github.com/gabrieldib/figmaries/blob/main/src/create_clean_frame.js)
In Figma plugin dev, we often need to create frames and they come with a fill, but what if you just
want them with no fills? Worry no more. Use create_clean_frame()