# Beam Beats Website
Beam Beats Website

The Beam Beats website is built in HTML and JavaScript with support from a PHP, MySQL backend.

Using Beam Beats
------------------

- Welcome page
	- Click anywhere on the screen to continue to the instructions page
	- Loads all visualizations from the database
- Instructions page
	- Click 'Start' to navigate to the list page
- List page
	-
- Edit page
	- Change colors of the visualization
	- Change logo that is displayed
	- Change orientation of the page
	- Click 'Next' to email image
	- Image will be saved as canvas
- Email page
	- Input email and click 'Send'
	- Canvas will be converted to a PNG and saved on the server
	- New entries will be entered into creation and history tables
	- Send email to user
- Confirmation page
	- Click finish to restart your experience

Setup
------------------

The Beam Beats website is built in PHP with a MySQL database.

- Install [PHP](http://php.net/manual/en/install.php) and all dependances
- Install [MySQL](http://dev.mysql.com/downloads/) and all dependances
- Edit [Database Access File](https://github.com/YouMeKim/beam-beats/blob/master/db/access.php)
	- Located in `assets/db/access.php`
	- HOST, USER, PASSWORD, DATABASE
- Run [Database Creation Script](https://github.com/YouMeKim/beam-beats/blob/master/db/create.sql)
	- Located in `assets/db/create.sql`
- Change [Email Configuration](https://github.com/YouMeKim/beam-beats/blob/master/email.php) such as sender
	- Located in `email.php`

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

*[visualizations.php](https://github.com/YouMeKim/beam-beats/blob/master/visualizations.php) utilizes the [Database Access File](https://github.com/YouMeKim/beam-beats/blob/master/db/access.php). Insure all constants are properly set before attempting to run queries against the database.*

Sending Data to Database
------------------

Posting data to [acceptVis.php](https://github.com/YouMeKim/beam-beats/blob/master/acceptVis.php) will insert data into the database. Required parameters are as follows:

- all
- pur
- red
- yel
- blu

All parameters should be base64 encoded images represented as strings.
