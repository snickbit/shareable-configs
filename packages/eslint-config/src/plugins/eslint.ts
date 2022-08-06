export default {
	"extends": [
		"../base"
	],
	"rules": {
		"array-bracket-newline": [
			"error",
			{
				"minItems": 4
			}
		],
		"array-bracket-spacing": [
			"error",
			"never",
			{
				"arraysInArrays": true
			}
		],
		"array-element-newline": [
			"error",
			{
				"minItems": 4
			}
		],
		"arrow-parens": [
			"error",
			"as-needed"
		],
		"arrow-spacing": "error",
		"comma-style": [
			"error",
			"last"
		],
		"computed-property-spacing": "error",
		"curly": [
			"error",
			"all"
		],
		"dot-location": [
			"error",
			"property"
		],
		"eol-last": "error",
		"eqeqeq": "error",
		"function-call-argument-newline": [
			"error",
			"consistent"
		],
		"function-paren-newline": [
			"error",
			{
				"minItems": 6
			}
		],
		"generator-star-spacing": "error",
		"implicit-arrow-linebreak": "error",
		"key-spacing": "error",
		"linebreak-style": "error",
		"lines-around-comment": [
			"error",
			{
				"beforeBlockComment": true,
				"allowBlockStart": true
			}
		],
		"no-else-return": "error",
		"no-lonely-if": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 1
			}
		],
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-unneeded-ternary": "error",
		"no-useless-computed-key": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": [
			"error",
			"below"
		],
		"object-curly-newline": [
			"error",
			{
				"multiline": true
			}
		],
		"object-shorthand": [
			"error",
			"always",
			{
				"avoidExplicitReturnArrows": true
			}
		],
		"operator-linebreak": "error",
		"padded-blocks": [
			"warn",
			"never"
		],
		"prefer-arrow-callback": "error",
		"prefer-object-spread": "error",
		"prefer-template": "error",
		"quote-props": [
			"error",
			"as-needed"
		],
		"rest-spread-spacing": "error",
		"semi-spacing": "error",
		"semi-style": "error",
		"space-in-parens": "error",
		"space-unary-ops": "error",
		"spaced-comment": [
			"error",
			"always"
		],
		"switch-colon-spacing": "error",
		"template-curly-spacing": "error",
		"template-tag-spacing": "error",
		"yield-star-spacing": "error",
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1,
				"MemberExpression": 1
			}
		]
	}
}
