/*
 Usage: Use simple conditional statements

Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. 
If the user enters anything but those four language codes, the application should default to English. The result should be (for example):

Hello World translated in French is: Bonjour le monde
*/

let askLang= prompt("Enter one of four language: 'es', 'de', 'en', 'fr': ");

if (askLang === 'es') {
    document.write('Hello World translated in Spanish is: Hola Mundo');
} else if (askLang === 'de') {
    document.write('Hello World translated in German is: Hallo Welt');
} else if (askLang === 'en') {
    document.write('Hello World translated in English is: Hello World');
} else if (askLang === 'fr') {
    document.write('Hello World translated in French is: Bonjour le monde');
} else {
    document.write('Hello World translated in ' + askLang + ' is Hello World');
}
