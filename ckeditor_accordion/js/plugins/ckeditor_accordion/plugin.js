CKEDITOR.plugins.add( 'ckeditor_accordion', {
    icons: 'accordion',
    init: function( editor ) {
    	editor.addCommand( 'accordionDialog', new CKEDITOR.dialogCommand( 'accordionDialog' ) );

        editor.ui.addButton('AccordionButton', {
            label: 'Insert Accordion',
            command: 'accordionDialog',
          icon: this.path + '/icons/accordion.png'

        });

        CKEDITOR.dialog.add( 'accordionDialog', this.path + 'dialogs/accordion.js' );
    }
});
