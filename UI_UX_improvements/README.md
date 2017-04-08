## Navigation and Filtering Updates ##

Currently, the filtering options for each store front are disconnected and not very intuitive. Once selecting a category in the "women" dropdown menu, it is possible to further refine your results, but the options are in 3 different areas. [Here](https://www.gilt.jp/looks?product.tags.key=women%20AND%20tops) is the current live page I am referencing.
This solution brings all of these filtering options into a single place on the page and also allows for easy addition of new categories or search options in the future. A wireframe for my design can be found at this [link](https://app.moqups.com/elanmajkrzak/xIWbSrsI6r/view)
Note that this design is currently only targeting desktop resolutions (1920x1080), and another option would likely need to be used for mobile as there is not as much empty screen real estate on the sides.

## Text contrast and Readability ##
On the live site, future sales are listed with grey text on a white background.

![Live sales](http://imgur.com/fTP99qV.png "Live future sales")

Following the [Web Content Accessibility Guidlines (WCAG)](https://www.w3.org/WAI/intro/wcag) text of medium to large size should have a color contrast of 3:1, and text of small size should be a color contrast of 4.5:1. Currently the text for "Future Sales" and the dates that are unselected do not meet these guidelines, as shown in the contrast analysis in the image below (the text should be readable in white). I would suggest either introducing a darker background for the text, or keep the current backgrounds and use a darker font.

![Color contrast analysis](http://imgur.com/ksLPZZx.png "4.5:1 Level AA WCAG color contrast analysis")