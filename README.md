## Gilt Sales ##

gilt.js holds an expressjs server that handles GET requests from http://www.domain.com and http://www.domain.com/gilt as well as serving clientside javascript and css files from repo/public
Requests to the root domain return index.html to the user, requests to domain/gilt returns json data of active sales from sales.json as of Tue Sep 27 2016 17:09:07 GMT+0900 (JST). Date is currently hard coded for demonstration purposes
Sales are rendered using angularJS and angular-material.

## UI/UX Improvements ##
Please refer to [/UI_UX_improvements/README.md](https://github.com/elanmajkrzak/gilt/blob/master/UI_UX_improvements/README.md) for access to visual aides and suggestions for this exercise.