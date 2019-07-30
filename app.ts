// Section 10 Using JavaScript Libraries (like jQuery) with TypeScript

// 115 Using jQuery
//$('button').click(function() {
//	alert('Button was clicked')
//})

// doesn't work because TypeScript doesn't know about jQuery

// 116 Declaring Variables
//declare var $: any; // easy and cheap way to solve it
//
//$('button').click(function() {
//	alert('Button was clicked')
//})

// 117 Understanding Declaration Files
// install type definitions
//declare var $: any; // easy and cheap way to solve it

$('button').click(function() {
	alert('Button was clicked')
})

// Created jquery.d.ts file
// Definition files so TypeScript knows what $ is
// Search for DefinitelyTyped jquery to find the github with the definitions files 

// 118 Using Public Type Definitions

