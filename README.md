# CCDA-JS-data-browser
 A browser-based tool to explore and analyse JSON data for cataclysm: Dark days ahead. The idea (which I took from CDDA-JS-itembrowser (see below) ) is that you drop the browser folder into your CDDA game directory and open the index.html from that folder and let the javascript do the rest. The javascript should be able to go up to the game directory of cdda and then down to data/json.



# Options considered:

## cdda-js-itembrowser-test
https://github.com/chuanyueyouxia/cdda-js-itembrowser-test.git
This is an outdated verstion of:
https://github.com/lispcoc/cdda-js-itembrowser.git
This is the most favorable example of an item browsers since it is in HTML/Javascript with little to no dependencies. The newer version does use some LUA, that is not desirable.

## cdda-edit
https://github.com/nornagon/cdda-edit.git
When installing the packages using NPM install, an error shows up stating python 2.7 is missing. An undesirable dependency.


## cdda-bousai-guide
https://github.com/qrg/cdda-bousai-guide.git
Cannot get it to work. I get this error when I try 'node index.js' from the windows command prompt:
SyntaxError: Cannot use import statement outside a module

## CDDA-Browser
A browser created in godot. Got it figured out pretty quick and it's fairly portable. Could be considered an alternative should Javascript not work out. The creator is nice and reponded quickly. Still waiting for a reaction.
https://github.com/RabbitB/CDDA-Browser.git


## CDDA-Json-Editor
https://github.com/TRScheel/CDDA-Json-Editor.git
Could start the server and run index.html on localhost, but that's about it. It's missing the /dist folder and I'm not sure how to compile.


## cdda-item-search
https://github.com/zunsthy/cdda-item-search.git
Could get it to work but it was a bit of a hassle. Maybe if there was more documentation it would be easyer. Left an issue on the git repository. No response yet.
