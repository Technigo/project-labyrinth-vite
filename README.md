# Labyrinth - Zustand Project

This is a site where the user can walk back and forth through a path. On each location there is a description of the current room and available options.

### The Problem

I got inspiration from the interactive storybook-games I had as a kid in the 90s and wanted my "game" to resemble those. Other inspirations were the gamepads from Playstation etc with four arrows for the player to move around with and the hand-drawn feeling of the images I downloaded for my navigation tool.

I spent a lot of time making sure the navigation buttons are disabled if there is no option in that direction, and ended up with an array in the global state that keeps track of available options.

I also wanted different pictures for each room, so I made a switch that changes the image-path depending on the coordinates in the API.

I wish there was a way to reset the game for a specific player, but there is not, so the "Start over"-button only sends you back to the home-page where you have to write a new user name in order to play again.

### View it live

https://sweet-gingersnap-a21875.netlify.app