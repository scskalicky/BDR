/*  
#################
DEMOGRAPHIC SURVEY
#################
*/


const instructions_demo = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p class = "instructions">Before we start, please answer some questions about yourself and your language knowledge.<br><br>Please press "Continue".</p><br>',
  choices: ['Continue']
}


const name = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: 'What is your first name?', required: true, name: 'first_name'},
    {prompt: 'What is your family name?', required: true, name: 'family_name'},
    {prompt: 'What is your email?', required: true, name: 'email'}
  ],
    on_finish: function(data){
      jsPsych.data.addProperties({first_name: data.response.first_name})
      jsPsych.data.addProperties({family_name: data.response.family_name})
      jsPsych.data.addProperties({email: data.response.email})
      jsPsych.data.addProperties({subject:  data.response.first_name.concat('_', data.response.family_name, '_', performance.now())}),
      console.log(data.subject)
      console.log(data.email)
     // createData(data.subject, data.email)
      }
};

const age = {
    type: jsPsychSurveyHtmlForm,
    html:'<div><ol type="1">' + 'Please enter your current age in years</br> <input type= "number" name= "age" id= "age" min= "0" max= "100" maxlength = "3" required>'+
    '</ol></div>',
      button_label: "Next",
      dataAsArray: false,
      required: true,
      on_finish: function(data){
        jsPsych.data.addProperties({age: data.response});
        data.trial_item = 'age_question';
    }
      };  	
      
      

      
const sex = {
    type: jsPsychSurveyMultiChoice,
    questions: [{prompt: "Please select your gender<br>",
    options: ["Female", "Male", "I prefer not to answer"], required: true}],
    on_finish: function(data){
        jsPsych.data.addProperties({sex: data.response})
        data.trial_item = 'sex_question';
    }
    };

const education_level = {
type: jsPsychSurveyMultiChoice,
questions: [{prompt: "Current level of education<br>",
options: ['First Year University', 'Second Year University', 'Third Year University', 'Fourth Year University', 'Postgraduate University'], required: true}],
on_finish: function(data){
    jsPsych.data.addProperties({education_level: data.response})
    data.trial_item = 'education_level';
}
};

const country_background = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: 'What is your country of birth?', required: true, name: 'country_of_birth'},
    {prompt: 'What country do you currently live in?', required: true, name: 'country_of_residence'},
    {prompt: 'Have you ever been to an English-speaking country?<br> If yes, for how long (weeks/months/years)?', required: true, name: 'es_country_time'}
  ],
    on_finish: function(data){
      jsPsych.data.addProperties({country_of_birth: data.response.country_of_birth})
      jsPsych.data.addProperties({country_of_residence: data.response.country_of_residence})
      jsPsych.data.addProperties({es_country_time: data.response.es_country_time})

      }
};

const language_background = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: 'What is your native language? (If you grew up with more than one language, please specify)', required: true, name: 'native_language'},
    {prompt: 'Do you speak a foreign language in addition to English?  Which language(s)?', required: true, name: 'other_foreign_langs'},
  ],
    on_finish: function(data){
      jsPsych.data.addProperties({native_language: data.response.native_language})
      jsPsych.data.addProperties({other_foreign_langs: data.response.other_foreign_langs})
      }
};

const years_learning_english = {
    type: jsPsychSurveyHtmlForm,
    html:'<div><ol type="1">' + 'For how many years have you been learning English?</br> <input type= "number" name= "years_learning_english" id= "years_learning_english" min= "0" max= "100" maxlength = "3" required>'+
    '</ol></div>',
      button_label: "Next",
      dataAsArray: false,
      required: true,
      on_finish: function(data){
        jsPsych.data.addProperties({years_learning_english: data.response});
        data.trial_item = 'years_learning_english_question';
    }
      };  		
      
const english_outside_classroom = {
    type: jsPsychSurveyHtmlForm,
    html:'<div><ol type="1">' + 'In a typical week how many hours do you spend learning English outside the classroom?</br> <input type= "number" name= "english_outside_classroom" id= "english_outside_classroom" min= "0" max= "100" maxlength = "3" required>'+
    '</ol></div>',
      button_label: "Next",
      dataAsArray: false,
      required: true,
      on_finish: function(data){
        jsPsych.data.addProperties({english_outside_classroom: data.response});
        data.trial_item = 'english_outside_classroom_question';
    }
      };  		
      
const english_activities = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: 'What kinds of activities did you do to learn English outside the classroom?<br> (e.g. reading books; watching English movies; practice speaking; interacting with parents or friends in English).', required: true, rows: 2, name: 'english_activities'},
  ],
    on_finish: function(data){
      jsPsych.data.addProperties({english_activities: data.response.english_activities})
      }
};

const self_ratings_english = {
  type: jsPsychSurveyLikert,
  preamble: 'Rate your ability in English in listening and speaking using the following scale.',
  questions: [
    {
      prompt: "Ease of understanding English.", 
      labels: ["Difficult", "", "", "", "", "","Easy"],
      name: 'ease_of_understanding_english',
      required: true
    },
    {
      prompt: "Ability to hold a conversation in English", 
      labels: ["Weak", "", "", "", "", "","Strong"],
      name: 'ability_hold_conversations_english',
      required: true
    },

    {
      prompt: "Ability to speak fluently in English", 
      name: 'ability_speak_fluently_english',
      labels: ["Weak", "", "", "", "", "","Strong"],
      required: true
    }
  ],
  on_finish: function(data){
      jsPsych.data.addProperties({ease_understand_english: data.response.ease_of_understanding_english})
      jsPsych.data.addProperties({ability_hold_convo_english: data.response.ability_hold_conversations_english})
      jsPsych.data.addProperties({ability_speak_fluently_english: data.response.ability_speak_fluently_english})

      }
};

