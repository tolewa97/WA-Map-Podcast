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

    WA.room.area.onEnter('Wegweiser').subscribe(() => { 
           currentPopup = WA.ui.openPopup("WegweiserPopup", 
           "Herzlich Willkommen im Podcast Adventure. Werter Wissbegieriger, lasst mich euch ein paar nützliche Informationen geben. In diesem Adventure gibt es eine Farbordnung, die euch beim Erkunden der Welt unterstützen wird. "
           + '\n' + "Grün = Austausch Bereich" + '\n' + "Gelb = Quiz, Blau = Lektüre" + '\n' + "Rot = Ruhe Bereich" + '\n' + "Weiß = Audio Bereich" + '\n' + "Dunkelblau = NPCs"
           + "Im Unteren-Bereich findest du verschiedene Interaktionen, von Informationen zu Podcasts, einigen Beispielen von Podcasts bis hin zu einem Quiz, sowie einem Austausch-Bereich. Im Äußeren-Bereich findest du meinen Bruder, der dir dann erzählt, was es draußen so zu entdecken gibt. Über die Treppe kommst du in den Oberen-Bereich, dort findest du Informationen zur Erstellung von Podcasts."
        , []); 
       })
       WA.room.area.onLeave('Wegweiser').subscribe(closePopup) 

       WA.room.area.onEnter('WegweiserAußen').subscribe(() => { 
        currentPopup = WA.ui.openPopup("WegweiserPopupAußen", 
        "Hallo Abenteurer, mein Bruder scheint euch zu mir geschickt zu haben. Also, dann lass mich dir erzählen, was du hier so alles entdecken kannst. Auch hier gibt es verschiedene Interaktionsmöglichkeiten, mit dem Farbschema bist du ja schon vertraut. Also im Äußeren-Bereich findest du hauptsächlich Informationen zum Konsum von Podcasts und der Verdeutlichung des Zusammenhangs von Podcasts und mobile-Learning."
     , []); 
    })
    WA.room.area.onLeave('WegweiserAußen').subscribe(closePopup) 

       //UpperArea
        WA.room.area.onEnter('WegweiserUpper1').subscribe(() => { //clock ersetzen mit nem anderen Feldnamen
        currentPopup = WA.ui.openPopup("WegweiserPopupUpper1", "Lass uns über die Erstellung von Podcasts reden.", []); //Text muss hier eingefügt werden
       })
       WA.room.area.onLeave('WegweiserUpper1').subscribe(closePopup) 

        WA.room.area.onEnter('WegweiserUpper2').subscribe(() => { //clock ersetzen mit nem anderen Feldnamen
        currentPopup = WA.ui.openPopup("WegweiserPopupUpper2", "Also zuerst muss er aufgenommen werden.", []); //Text muss hier eingefügt werden
       })
       WA.room.area.onLeave('WegweiserUpper2').subscribe(closePopup) 

        WA.room.area.onEnter('WegweiserUpper3').subscribe(() => { //clock ersetzen mit nem anderen Feldnamen
        currentPopup = WA.ui.openPopup("WegweiserPopupUpper3", "Das Abmischen dauert aber lange...", []); //Text muss hier eingefügt werden
       })
       WA.room.area.onLeave('WegweiserUpper3').subscribe(closePopup)        

        WA.room.area.onEnter('WegweiserUpper4').subscribe(() => { //clock ersetzen mit nem anderen Feldnamen
        currentPopup = WA.ui.openPopup("WegweiserPopupUpper4", "…ist das aufwändig...", []); //Text muss hier eingefügt werden
       })
       WA.room.area.onLeave('WegweiserUpper4').subscribe(closePopup)

        WA.room.area.onEnter('WegweiserUpper5').subscribe(() => { //clock ersetzen mit nem anderen Feldnamen
        currentPopup = WA.ui.openPopup("WegweiserPopupUpper5", "Gleich ist der Upload fertig.", []); //Text muss hier eingefügt werden
       })
       WA.room.area.onLeave('WegweiserUpper5').subscribe(closePopup)     

        WA.room.area.onEnter('WegweiserUpper6').subscribe(() => { //clock ersetzen mit nem anderen Feldnamen
        currentPopup = WA.ui.openPopup("WegweiserPopupUpper6", "Nur noch freischalten / freigeben.", []); //Text muss hier eingefügt werden
       })
       WA.room.area.onLeave('WegweiserUpper6').subscribe(closePopup)          

        WA.room.area.onEnter('WegweiserUpper7').subscribe(() => { //clock ersetzen mit nem anderen Feldnamen
        currentPopup = WA.ui.openPopup("WegweiserPopupUpper7", "Ist der Podcast schon draußen?", []); //Text muss hier eingefügt werden
       })
       WA.room.area.onLeave('WegweiserUpper7').subscribe(closePopup)            

        WA.room.area.onEnter('WegweiserUpper8').subscribe(() => { //clock ersetzen mit nem anderen Feldnamen
        currentPopup = WA.ui.openPopup("WegweiserPopupUpper8", "Ja, ich bin schon mittendrin.", []); //Text muss hier eingefügt werden
       })
       WA.room.area.onLeave('WegweiserUpper8').subscribe(closePopup)           
       
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
