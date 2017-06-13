'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Quick Workout";
var GET_FACT_MESSAGE = "Here's your workout: ";
var HELP_MESSAGE = "You can say tell me a workout, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Ten rounds for time. Ten pushups. Ten situps. Ten air squats",
    "Three rounds for time. Run eight-hundred meters. Fifty air squats.",
    "For time. Two-hundred air squats.",
    "Five rounds for time. Run two-hundred meters. Ten air squats. Ten push-ups.",
    "Three rounds for time. Run two-hundred meters. Twenty-five pushups.",
    "Twenty rounds for time. Five pushups. Five air squats. Five situps.",
    "Ten, nine, eight, seven, six, five, four, three, two, one sets of situps and a one-hundred meter sprint between each set.",
    "Twenty-one reps, fifteen reps, nine reps each of air squats and pushups.",
    "Run one mile for time.",
    "Six rounds for time. Ten pushups. Ten air squats. Ten situps.",
    "Five rounds for time. Three tuck jumps. Three air squats. Three broad jumps.",
    "Eight rounds for time. Handstand or Plank for thirty seconds. Ten air squats.",
    "Ten rounds for time. Ten pushups. Run one-hundred meters.",
		"For time. Run one mile, lunge thirty steps every minute.",
		"Five rounds for time. Handstand or plank for thirty seconds. Twenty air squats.",
		"For time. One-hundred air squats. Seventy-five situps. Fifty pushups.",
		"Four rounds for time. Ten tuck jumps. Ten pushups. Ten situps.",
		"For time. One-hundred burpees.",
		"Ten rounds for time. Ten pushups. Ten squats. Ten tuck jumps.",
		"Five rounds for time. Handstand or plank for one-minute. Hold bottom of a squat for one-minute.",
		"Ten rounds for time. Sprint one-hundred meters. Walk one-hundred meters.",
		"For time. One-hundred pushups.",
		"Ten, nine, eight, seven, six, five, four, three, two, one reps each of burpees and situps",
		"Three rounds. Fifty situps. Run four-hundred meters.",
		"Ten rounds for time. Ten walking lunges. Ten pushups.",
		"Ten rounds for time. Ten burpees. Run one-hundred meters.",
		"Four rounds for time. Run four-hundred meters. Fifty air squats.",
		"Ten rounds for time. Ten pushups. Ten air squats.",
		"Tabata squats. Eight rounds of twenty seconds of squats on and ten seconds of rest.",
		"For time. Run eight-hundred meters. One-hundred air squats. Run eight-hundred meters.",
		"Seven rounds for time. Seven air squats. Seven burpees.",
		"Five rounds for time. Fifty air squats. Rest the amount of time it took to complete the fifty air squats.",
		"For time. Run one mile. Do ten pushups every minute.",
		"Eight rounds for time. Run one-hundred meters. Thirty air squats.",
		"Ten rounds for time. Ten situps. Ten burpees.",
		"For time. 250 jumping jacks or jump rope.",
		"For time. One-hundred jumping jacks or jumps rope. Seventy-five air squats. Fifty pushups. Twenty-five burpees.",
		"Five rounds for time. Run one mile. Air squat for one minute.",
		"Three rounds for time. Ten air squats. Ten pushups. Ten situps.",
		"For time. Fifty air squats. Rest for two minutes between rounds.",
		"Three rounds for time. Twenty jumping jacks or jump rope. Twenty burpees. Twenty air squats.",
		"Ten rounds for time. Run one-hundred meters. Twenty air squats.",
		"For time. One-hundred pushups. One-hundred situps. One-hundred air squats.",
		"Three rounds for time. Thirty pushups. Forty situps. Fifty air squats.",
		"As many rounds as possible in twenty minutes of five pushups, ten situps, fifteen air squats.",
		"Twenty-one reps, fifteen reps, nine reps each of walking lunges and handstand pushups or regular pushups.",
		"Three rounds for time. Run four-hundred meters. Fifty air squats. Twenty-five pushups.",
		"For time. Run one-hundred meters. One-hundred air squats. Fifty pushups.",
		"Ten, nine, eight, seven, six, five, four, three, two, one reps each of burpees, pushups and situps.",
		"Fifty, forty, thirty, twenty, ten each of jump rope and pushups.",
		"For time. Run eight-hundred meters. Fifty squats. Fifty situps."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};