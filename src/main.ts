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
        arbeitSound.stop()
        arbeitswegSound.stop()
        sportplatzSound.stop()
        reiseSound.stop()
        arbeitswegSound.play(config)
    })
    WA.room.area.onEnter('Arbeit').subscribe(() => {
        arbeitSound.stop()
        arbeitswegSound.stop()
        sportplatzSound.stop()
        reiseSound.stop()
        arbeitSound.play(config)
    })
    WA.room.area.onEnter('Sportplatz').subscribe(() => {
        arbeitSound.stop()
        arbeitswegSound.stop()
        sportplatzSound.stop()
        reiseSound.stop()
        sportplatzSound.play(config)
    })
    WA.room.area.onEnter('Reise').subscribe(() => {
        arbeitSound.stop()
        arbeitswegSound.stop()
        sportplatzSound.stop()
        reiseSound.stop()
        reiseSound.play(config)
    })
    
    // load the soundfiles
    var arbeitswegSound = WA.sound.loadSound("/Arbeitsweg.mp3");
    var config = {
        volume : 0.5,
        loop : false,
        rate : 1,
        detune : 1,
        delay : 0,
        seek : 0,
        mute : false
    }
    var arbeitSound = WA.sound.loadSound("/Arbeit.mp3");
    var config = {
        volume : 0.5,
        loop : false,
        rate : 1,
        detune : 1,
        delay : 0,
        seek : 0,
        mute : false
    }
    var sportplatzSound = WA.sound.loadSound("/Sportplatz.mp3");
    var config = {
        volume : 0.5,
        loop : false,
        rate : 1,
        detune : 1,
        delay : 0,
        seek : 0,
        mute : false
    }
    var reiseSound = WA.sound.loadSound("/Reise.mp3");
    var config = {
        volume : 0.5,
        loop : false,
        rate : 1,
        detune : 1,
        delay : 0,
        seek : 0,
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
