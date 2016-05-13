# Beam Beats Website
Beam Beats Website

Setup
------------------

The Beam Beats website is built in PHP with a MySQL database.

- Install [PHP](http://php.net/manual/en/install.php) and all dependances
- Install [MySQL](http://dev.mysql.com/downloads/) and all dependances
- Edit [Database Access File](https://github.com/YouMeKim/beam-beats/blob/master/db/access.php)
	- Located in assets/db/access.php
	- HOST, USER, PASSWORD, DATABASE
- Run [Database Creation Script](https://github.com/YouMeKim/beam-beats/blob/master/db/create.sql)
	- Located in assets/db/create.sql

Utilizing Visualization API
------------------

Calls to [visualizations.php](https://github.com/YouMeKim/beam-beats/blob/master/visualizations.php) will return an array of JSON objects.

Each JSON object contains the following attributes:

- id [int]
- name [string]
- imageall [string]
- imagepur [string]
- imagered [string]
- imageyel [string]
- imageblu [string]
- datecreated [string]
- datemodified [string]

** [visualizations.php](https://github.com/YouMeKim/beam-beats/blob/master/visualizations.php) utilizes the [Database Access File](https://github.com/YouMeKim/beam-beats/blob/master/db/access.php). Insure all constants are properly set before attempting to run queries against the database.

Sending Data to Database
------------------

Posting data to [acceptVis.php](https://github.com/YouMeKim/beam-beats/blob/master/acceptVis.php) will insert data into the database. Required parameters are as follows:

- all
- pur
- red
- yel
- blu

All parameters should be base64 encoded images.
