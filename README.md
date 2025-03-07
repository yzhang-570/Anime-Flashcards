# Web Development Project 2 - *Anime Quiz Flashcards*

Submitted by: **Yuwen Zhang**

This web app: **displays screenshots from different anime**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [X] **A single card at a time is displayed, only showing one of the components of the information pair**
- [X] **A list of card pairs is created**
- [X] **Clicking on the card shows the corresponding component of the information pair**
- [X] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [X] Cards contains images in addition to or in place of text
- [X] Cards have different visual styles such as color based on their category
  - [X] The background color varies by how difficult it likely is to guess the name of an anime by the image provided.

The following **additional** features are implemented:

* [ ] None at the moment, but I hope to go back and try to add the flipping animation and more to the background when I have time.

## Video Walkthrough

Here's a walkthrough of implemented required features:

![AnimeQuiz_Flashcards](https://github.com/user-attachments/assets/9cdfdca3-c47e-4c3c-8264-2bf8dd6fb7ef)

GIF created with ScreenToGif

## Notes

When I was trying to implement the functionality for displaying a random card when the next button is pressed, the information on the card often didn't display properly. At first, I thought this was due to not handling conditional rendering properly. However, after some futile attempts to change how I was doing conditional rendering, I realized that my problem was simply that I was missing a comma in the array holding the information for all of the cards. 

## License

    Copyright 2025 Yuwen Zhang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
