$(function () {
    $(".imagesf").draggable(
    {
        appendTo: "body",
        cursor: "move",
        revert: "invalid"
    });

    initDroppable($("#battleboard"));
    function initDroppable($elements) {
        $elements.droppable({
            activeClass: "ui-state-default",
            hoverClass: "ui-drop-hover",
            hoverClass: "ui-state-active",
            drop: function( event, ui ) {
                $( this )
                    .addClass( "ui-state-highlight" )
                    .find( "#battlecells" )
                        .html( "Dropped!" );
            }
            // over: function (event, ui) {
            //     var $this = $(this);
            // }
            // drop: function (event, ui) {
            //     var $this = $(this);
            //     $("").text(ui.draggable.text()).appendTo(this);
            //     $("#").find(":contains('" + ui.draggable.text() + "')")[0].remove();
            // }
        });
    }
   
});