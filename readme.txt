Install Node/EJS/NODEMON



Should boot up fine with 'npm run dev'. Dev dependencies added for nodemon.

Service should be accessible with 127.0.0.1:3000

Testing:
Tested by trying to mess about with the urls of the polls page. 127.0.0.1:3000 works for the index/welcome page and you get dropped off in the polls. 
Eventually you'll get dropped onto the 404 page as the polls end, then you can loop back around from there.
The html talks to the database through the server, rather than altering any data directly. You can't access the database without loading the info into a form.

Limitations
It's a basic web app. Ideally you'd want a way to safeguard against unauthorised access of the database. Since nothing is changed locally, and is passed through forms
it's somewhat robust, but you could utilise a Transaction Manager to ensure the data isn't misplaced. As long as the database is secure, nothing significant can be
acquired. No personal details are saved, of course, so no risk of breach of data protection. This version would also require a form for inputting questions into the database.
For flare and design purposes, the code breaks up the question to embolden the last two words. In order for this to make sense, each question should follow this design.

Tech used
EJS,
HTML,
CSS,
Javascript,
Form Data Handling.

