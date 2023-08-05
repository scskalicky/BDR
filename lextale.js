/* 

#########
LexTale  LexTale
#########
*/

var jsPsych = initJsPsych();

const lextale_words = [
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>platery</i><br><br></p>', data: {type: 'nw', lx_trial: '0', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>denial</i><br><br></p>', data: {type: 'w', lx_trial: '0', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>generic</i><br><br></p>', data: {type: 'w', lx_trial: '0', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>mensible</i><br><br></p>', data: {type: 'nw', lx_trial: '1', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>scornful</i><br><br></p>', data: {type: 'w', lx_trial: '2', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>stoutly</i><br><br></p>', data: {type: 'w', lx_trial: '3', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>ablaze</i><br><br></p>', data: {type: 'w', lx_trial: '4', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>kermshaw</i><br><br></p>', data: {type: 'nw', lx_trial: '5', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>moonlit</i><br><br></p>', data: {type: 'w', lx_trial: '6', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>lofty</i><br><br></p>', data: {type: 'w', lx_trial: '7', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>hurricane</i><br><br></p>', data: {type: 'w', lx_trial: '8', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>flaw</i><br><br></p>', data: {type: 'w', lx_trial: '9', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>alberation</i><br><br></p>', data: {type: 'nw', lx_trial: '10', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>unkempt</i><br><br></p>', data: {type: 'w', lx_trial: '11', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>breeding</i><br><br></p>', data: {type: 'w', lx_trial: '12', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>festivity</i><br><br></p>', data: {type: 'w', lx_trial: '13', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>screech</i><br><br></p>', data: {type: 'w', lx_trial: '14', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>savoury</i><br><br></p>', data: {type: 'w', lx_trial: '15', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>plaudate</i><br><br></p>', data: {type: 'nw', lx_trial: '16', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>shin</i><br><br></p>', data: {type: 'w', lx_trial: '17', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>fluid</i><br><br></p>', data: {type: 'w', lx_trial: '18', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>spaunch</i><br><br></p>', data: {type: 'nw', lx_trial: '19', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>allied</i><br><br></p>', data: {type: 'w', lx_trial: '20', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>slain</i><br><br></p>', data: {type: 'w', lx_trial: '21', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>recipient</i><br><br></p>', data: {type: 'w', lx_trial: '22', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>exprate</i><br><br></p>', data: {type: 'nw', lx_trial: '23', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>eloquence</i><br><br></p>', data: {type: 'w', lx_trial: '24', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>cleanliness</i><br><br></p>', data: {type: 'w', lx_trial: '25', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>dispatch</i><br><br></p>', data: {type: 'w', lx_trial: '26', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>rebondicate</i><br><br></p>', data: {type: 'nw', lx_trial: '27', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>ingenious</i><br><br></p>', data: {type: 'w', lx_trial: '28', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>bewitch</i><br><br></p>', data: {type: 'w', lx_trial: '29', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>skave</i><br><br></p>', data: {type: 'nw', lx_trial: '30', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>plaintively</i><br><br></p>', data: {type: 'w', lx_trial: '31', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>kilp</i><br><br></p>', data: {type: 'nw', lx_trial: '32', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>interfate</i><br><br></p>', data: {type: 'nw', lx_trial: '33', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>hasty</i><br><br></p>', data: {type: 'w', lx_trial: '34', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>lengthy</i><br><br></p>', data: {type: 'w', lx_trial: '35', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>fray</i><br><br></p>', data: {type: 'w', lx_trial: '36', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>crumper</i><br><br></p>', data: {type: 'nw', lx_trial: '37', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>upkeep</i><br><br></p>', data: {type: 'w', lx_trial: '38', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>majestic</i><br><br></p>', data: {type: 'w', lx_trial: '39', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>magrity</i><br><br></p>', data: {type: 'nw', lx_trial: '40', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>nourishment</i><br><br></p>', data: {type: 'w', lx_trial: '41', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>abergy</i><br><br></p>', data: {type: 'nw', lx_trial: '42', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>proom</i><br><br></p>', data: {type: 'nw', lx_trial: '43', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>turmoil</i><br><br></p>', data: {type: 'w', lx_trial: '44', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>carbohydrate</i><br><br></p>', data: {type: 'w', lx_trial: '45', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>scholar</i><br><br></p>', data: {type: 'w', lx_trial: '46', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>turtle</i><br><br></p>', data: {type: 'w', lx_trial: '47', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>fellick</i><br><br></p>', data: {type: 'nw', lx_trial: '48', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>destription</i><br><br></p>', data: {type: 'nw', lx_trial: '49', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>cylinder</i><br><br></p>', data: {type: 'w', lx_trial: '50', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>censorship</i><br><br></p>', data: {type: 'w', lx_trial: '51', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>celestial</i><br><br></p>', data: {type: 'w', lx_trial: '52', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>rascal</i><br><br></p>', data: {type: 'w', lx_trial: '53', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>purrage</i><br><br></p>', data: {type: 'nw', lx_trial: '54', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>pulsh</i><br><br></p>', data: {type: 'nw', lx_trial: '55', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>muddy</i><br><br></p>', data: {type: 'w', lx_trial: '56', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>quirty</i><br><br></p>', data: {type: 'nw', lx_trial: '57', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>pudour</i><br><br></p>', data: {type: 'nw', lx_trial: '58', cresp: 'no'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>listless</i><br><br></p>', data: {type: 'w', lx_trial: '59', cresp: 'yes'}},
	{word: '<p style = "font-size: 38px; font-family: Georgia"><i>wrought</i><br><br></p>', data: {type: 'w', lx_trial: '60', cresp: 'yes'}}]



const lextale_preamble = {
  type: jsPsychHtmlButtonResponse,
    stimulus: '<p class = "instructions">Next, you will complete a word recognition task. This task should take about five minutes.<br><br>Please press "Continue" to begin the word recognition task.</p><br>',
    choices: ['Continue']
}

	// initialise vars to store real word and non word tallies
	var rw_score = 0;
	var nw_score = 0;

	// I've split the instructions across the screen and added a title, otherwise they should be the same as www.lextale.com
	var instructions_lextale = {
		type: jsPsychInstructions,
		pages: ['<p class = "instructions"><b>WORD RECOGNITION TEST</b></p>' +  '<p class = "instructions"> This test consists of about 60 trials, in each of which you will see a string of letters. Your task is to decide whether this is an existing English word or not. If you think it is an existing English word, you click on "yes", and if you think it is not an existing English word, you click on "no".',
		
		'<p class = "instructions"><b>WORD RECOGNITION TEST</b></p>' + '<p class = "instructions">If you are sure that the word exists, even though you don\'t know its exact meaning, you may still respond "yes". But if you are not sure if it is an existing word, you should respond "no".</br></br>',
		
		'<p class = "instructions"><b>WORD RECOGNITION TEST</b></p>' + '<p class = "instructions">In this experiment, we use British English rather than American English spelling. For example: "realise" instead of "realize"; "colour" instead of "color", and so on. Please don\'t let this confuse you. This experiment is not about detecting such subtle spelling differences anyway.',

		'<p class = "instructions"><b>WORD RECOGNITION TEST</b></p>' + '<p class = "instructions">You have as much time as you like for each decision. This part of the experiment will take about 5 minutes.</br>',
		
		'<p class = "instructions"><b>WORD RECOGNITION TEST</b></p>' + '<p class = "instructions">If everything is clear, you can now start the test.</br>'],

		show_clickable_nav: true
	};


	var pre_lextale = {
		type: jsPsychHtmlButtonResponse,
		stimulus: 'Click "Start" to begin the Word Recognition Test<br><br>',
		choices: ["Start"]
	};

	// you could remove this since the lextale_stimuli.js has the trial info embedded, would need to modify the if statement to access that structure instead. 
	var lx_trials = 0;

	// This is a very close simulation of the look and feel of the LexTALE test on www.lextale.com. 
	var lextale = {
		timeline: [
			
			{
		type: jsPsychHtmlButtonResponse,

		// without this, the function will fail. this is needed if not in the main jsPsych spot. 
		on_start: function(trial){
			trial.stimulus = jsPsych.timelineVariable('word')
			trial.data = jsPsych.timelineVariable('data')
		},
		stimulus: '',
		data: '',
		choices: ['no', 'yes'],
		button_html: ['<button class = "jspsy ch-btn", style = "width: 120px; height: 60px; background-color: red"><span style = "font-size: 38px">no</span></button>', '<button class = "jspsy ch-btn", style = "width: 120px; height: 60px; background-color: green"><span style = "font-size: 38px">yes</span></button>'],
		prompt: function(){ // use a progress bar bc the original lextale has one
			lx_trials++
			return '<br><progress value = ' + '"' + String(lx_trials) +  '" ' + 'max = "63"></progress>'},
		// calculate running accuracy
		on_finish: function(data){
			if(lx_trials > 3){
				if(data.type == 'w' && data.response == 1){
					rw_score++
				} else {
					if(data.type == 'nw' && data.response == 0){
						nw_score++
					}
				} 
				// for debugging
			//	console.log(data.type);
			//	console.log(nw_score);
			//	console.log(rw_score);
		}}
		},
		],
		timeline_variables: lextale_words,
		on_timeline_finish: function(){
			var lextale_score = ((rw_score / 40*100) + (nw_score / 20 * 100))  / 2;
				jsPsych.data.addProperties({lextale_score: lextale_score});
		  }
	}; 
