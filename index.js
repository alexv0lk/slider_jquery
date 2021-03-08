(function (){
    let oneValueText = 0;
    let twoValueText = 0;
    let threeValueText = 0;

    let oneValueBg = 255;
    let twoValueBg = 255;
    let threeValueBg = 255;

    function backgroundColorEdit() {
        return  function ( event , ui ) {    
                $( ".text-container" ).css( "background-color", `rgb( ${$( "#polzunok1" ).slider( "value" )}, ${$( "#polzunok2" ).slider( "value" )}, ${$( "#polzunok3" ).slider( "value" )})` )        
        }
    };

    function textColorEdit() {
        return  function ( event , ui ) {    
                $( ".text-container__text" ).css( "color", `rgb( ${$( "#polzunok1" ).slider( "value" )}, ${$( "#polzunok2" ).slider( "value" )}, ${$( "#polzunok3" ).slider( "value" )})` )        
        }
    };

            

    function handlersSliders(activeFunction){

        $("#polzunok1").slider({
            animate: "slow",
            range: "min",
            max: 255,
            slide : activeFunction(),
            stop: function ( event, ui ) { activeFunction === textColorEdit ? oneValueText = ui.value : oneValueBg = ui.value}             
        });
                
        $("#polzunok2").slider({
            animate: "slow",
            range: "min",
            max: 255,
            slide : activeFunction(),
            stop: function ( event, ui ) { activeFunction === textColorEdit ? twoValueText = ui.value : twoValueBg = ui.value}
        });

        $("#polzunok3").slider({
            animate: "slow",
            range: "min",
            max: 255,
            slide : activeFunction(),
            stop: function ( event, ui ) { activeFunction === textColorEdit ? threeValueText = ui.value : threeValueBg = ui.value}
        });
    }

    handlersSliders(textColorEdit);
    $( ".button-container__button_color-text" ).addClass("button-container__button_active");
            
    
    $( ".button-container__button_color-text" ).click( function () {
        handlersSliders( textColorEdit );

        $( "#polzunok1" ).slider( "value", oneValueText );
        $( "#polzunok2" ).slider( "value", twoValueText );
        $( "#polzunok3" ).slider( "value", threeValueText );

        $( ".button-container__button_color-text" ).addClass("button-container__button_active");
        $( ".button-container__button_color-bg" ).removeClass("button-container__button_active");
    })

    $( ".button-container__button_color-bg" ).click( function () {
        handlersSliders( backgroundColorEdit );

        $( "#polzunok1" ).slider( "value", oneValueBg );
        $( "#polzunok2" ).slider( "value", twoValueBg );
        $( "#polzunok3" ).slider( "value", threeValueBg );  
        
        $( ".button-container__button_color-bg" ).addClass("button-container__button_active");
        $( ".button-container__button_color-text" ).removeClass("button-container__button_active");
    })

})();        
            