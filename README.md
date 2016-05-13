# Beam Beats Website
Beam Beats Website

Setup & Installation
------------------

The Beam Beats website is built in PHP with a MySQL database.

- Install [PHP](http://php.net/manual/en/install.php) and all dependances
- Install [MySQL](http://dev.mysql.com/downloads/) and all dependances
- Edit [DB Access File](https://github.com/YouMeKim/beam-beats/blob/master/db/access.php)
	- Located in assets/db/access.php
	- HOST, USER, PASSWORD, DATABASE
- Run [DB Creation Script](https://github.com/YouMeKim/beam-beats/blob/master/db/create.sql)
	- Located in assets/db/create.sql

Utilizing Visualization API
------------------

Calls to [visualizations.php](https://github.com/YouMeKim/beam-beats/blob/master/visualizations.php) will return an array of JSON objects.

- id			int
- name			string
- imageall		string
- imagepur		string
- imagered		string
- imageyel		string
- imageblu		string
- datecreated	string
- datemodified	string
