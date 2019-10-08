# CCDA-JS-data-browser
 A browser-based tool to explore and analyse JSON data for cataclysm: Dark days ahead. 
 
#### features:
- Itemgroups analyser: Find out in how many itemgroups an item is, what itemgroups they are and what the spawn chance is. 
- Item existence analyser: Find out in how many itemgroups, recipes this item is in and how many recipes creates this item
- Missing sprites: Select a tileset and item type and get the items that do not have a sprite in that tileset.

Once you followed the install instructions, you can open the itemgroups analyser, select a category and press ok. You will get a list if items and the number of itemgroups next to it. If you click an item you will get to see what itemgroups it belongs to and what the spawn chance is. Note that the spawn chance is currently just what is written in the json but it is actually relative to other items in the itemgroup so it's probably lower then what is shown.
 
This project started with the question: what items spawn where and how much, and what items do not spawn at all? In the same way you can ask many questions that can be answered by analysing the json:
- What items do not have recipes
- What locations do not have monsters/item spawns
- What items or furniture do not have a sprite associated with it
- What items show up in a trader and what items do not
- What monsters spawn where and how much, what monster is rare

The code in this repository can be modified and added to in order to answer above questions.

## Installation 

### windows
- Go to the top-right of this page and click 'clone or download' to download the source code
- Put the browser folder in your cataclysm dda game folder
- Go into the browser folder and run the exec.bat file
- This wil start a lua script that copies the json data in a useful format. You will be asked if you want to translate. Answering y will translate the json to chinese.
- After the script finishes, open eighter the item browser or the itemgroup analyser.

### Linux
 - Download a lua binary from the lua website
 - Write a script that does the same as the windows batch file
 - Run the script
- This wil start a lua script that copies the json data in a useful format. You will be asked if you want to translate. Answering y will translate the json to chinese.
- After the script finishes, open eighter the item browser or the itemgroup analyser.
 



 
The idea (which I took from CDDA-JS-itembrowser (see below) ) is that you drop the browser folder into your CDDA game directory and open the index.html from that folder and let the javascript do the rest. The javascript is not able to go up to the game directory of cdda and then down to data/json. Getting the json from javascript directly is not the way to go.

# Options considered:

## cdda-js-itembrowser-test
https://github.com/chuanyueyouxia/cdda-js-itembrowser-test.git
This is an outdated verstion of:
https://github.com/lispcoc/cdda-js-itembrowser.git
This is the most favorable example of an item browsers since it is in HTML/Javascript with little to no dependencies. The newer version does use some LUA. After investigating it turns out there are lua binaries for most platforms and the can be distributed with the application.

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


## cataclysm_dda_item_finder
https://www.reddit.com/r/cataclysmdda/comments/9uo1up/cataclysm_dda_item_finder/ 
This has no GITHUB repo unfortunately. This item browser is really close to what is desired but the source is nowhere to be found. Messaged the OP of that thread but no reply.

