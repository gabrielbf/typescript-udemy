// Section 10 Using JavaScript Libraries (like jQuery) with TypeScript

// 115 Using jQuery
//$('button').click(function() {
//	alert('Button was clicked')
//})

// doesn't work because TypeScript doesn't know about jQuery

// 116 Declaring Variables
declare var $: any; // easy and cheap way to solve it

$('button').click(function() {
	alert('Button was clicked')
})
