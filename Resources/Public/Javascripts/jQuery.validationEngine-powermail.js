/**
 * This file is modified for powermail localization
 */
(function($){
		$.powerMailValidationEngineLanguageRules = {
				/*
				"required": { 
						"alertText": JsValidationCheckRequired,
						"alertTextCheckboxMultiple": JsValidationCheckRequiredOption
				},
				"phone": {
						"alertText": JsValidationCheckPhone
				},
				"email": {
						"alertText": JsValidationCheckEmail
				},
				"integer": {
						"alertText": JsValidationCheckInteger
				},
				"url": {
						"alertText": JsValidationCheckUrl
				},
				"onlyLetterSp": {
						"alertText": JsValidationCheckLetters
				},
				*/
				"checkCheckboxes": {
						"alertText": JsValidationCheckCheckboxes
				}
		};

		$.extend(true, $.validationEngineLanguage.allRules, $.powerMailValidationEngineLanguageRules);

})(jQuery);
