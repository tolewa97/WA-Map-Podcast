/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.area.onLeave('clock').subscribe(closePopup)

    WA.room.area.onEnter('Wegweiser').subscribe(() => { //clock ersetzen mit nem anderen Feldnamen
        //   const today = new Date(); //kann weg, weil keine Uhr nötig
        //   const time = today.getHours() + ":" + today.getMinutes(); // gleiches
           currentPopup = WA.ui.openPopup("WegweiserPopup", "Hallo Spieler ", []); //Text muss hier eingefügt werden
           //clockPopup muss ersetzt werden mit neuem Feld
       })
   
       WA.room.area.onLeave('Wegweiser').subscribe(closePopup) 
    
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));


    // link the soundfiles to the areas
    WA.room.area.onEnter('Arbeitsweg').subscribe(() => {
        currentPopup = WA.ui.openPopup("ArbeitswegPopup", "Ihr seid auf dem Weg zur Arbeit oder auf dem Weg nach Hause, auch hier könnt ihr die Zeit nutzen, um euch einen Podcast anzuhören.", []);
        arbeitSound.stop()
        arbeitswegSound.stop()
        sportplatzSound.stop()
        reiseSound.stop()
        arbeitswegSound.play(config)
    })
    WA.room.area.onLeave('Arbeitsweg').subscribe(closePopup)

    WA.room.area.onEnter('Arbeit').subscribe(() => {
        currentPopup = WA.ui.openPopup("ArbeitPopup", "In einigen Berufen könnt ihr sogar während der Arbeit einen Podcast hören, zum Beispiel als Berufskraftfahrer oder als Paketzusteller.", []);
        arbeitSound.stop()
        arbeitswegSound.stop()
        sportplatzSound.stop()
        reiseSound.stop()
        arbeitSound.play(config2)
    })
    WA.room.area.onLeave('Arbeit').subscribe(closePopup)

    WA.room.area.onEnter('Sportplatz').subscribe(() => {
        currentPopup = WA.ui.openPopup("SportplatzPopup", "Podcasts können bei verschiedenen Aktivitäten gehört werden, zum Beispiel beim Sport oder beim Training im Fitnessstudio.", []);
        arbeitSound.stop()
        arbeitswegSound.stop()
        sportplatzSound.stop()
        reiseSound.stop()
        sportplatzSound.play(config2)
    })
    WA.room.area.onLeave('Sportplatz').subscribe(closePopup)

    WA.room.area.onEnter('Reise').subscribe(() => {
        currentPopup = WA.ui.openPopup("ReisePopup", "Seid ihr auf dem Weg in den Urlaub und habt eine Menge Zeit zu überbrücken? Dann könnt ihr genau diese Zeit nutzen, um einen Podcast zu hören.", []);
        arbeitSound.stop()
        arbeitswegSound.stop()
        sportplatzSound.stop()
        reiseSound.stop()
        reiseSound.play(config2)
    })
    WA.room.area.onLeave('Reise').subscribe(closePopup)
    
    // load the soundfiles
    var arbeitswegSound = WA.sound.loadSound("/Arbeitsweg.mp3");
    var arbeitSound = WA.sound.loadSound("/Arbeit.mp3");
    var sportplatzSound = WA.sound.loadSound("/Sportplatz.mp3");
    var reiseSound = WA.sound.loadSound("/Reise.mp3");
    var config = {
        volume : 1,
        loop : false,
        rate : 1,
        detune : 1,
        delay : 0,
        seek : 0.7,
        mute : false
    }
    var config2 = {
        volume : 1,
        loop : false,
        rate : 1,
        detune : 1,
        delay : 0,
        seek : 1,
        mute : false
    }



}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }   
}

export {};
