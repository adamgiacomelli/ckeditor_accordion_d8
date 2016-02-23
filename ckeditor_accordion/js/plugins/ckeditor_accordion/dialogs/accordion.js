CKEDITOR.dialog.add( 'accordionDialog', function ( editor ) {
    return {
        title: Drupal.t('Accordion configuration'),
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'text'    ,
                        id: 'number',
                        label: 'Number of sections',
                        validate: CKEDITOR.dialog.validate.notEmpty( Drupal.t("The field cannot be empty."))
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;
            var sections = parseInt(dialog.getValueOf('tab-basic','number'));

            section = "<h3>"+ Drupal.t("Name of the section")+"</h3><div><p>"+ Drupal.t("Text inside the accordion")+"</p></div>"
            intern = ""
            for (i=0;i<sections;i++){
                intern = intern + section
            }

            editor.insertHtml('<div class="accordion">'+ intern +'</div>');
            /*Foundation implementation */
            /*
                For foundation equalizer support -
                $('.accordion-reflow').on('toggled', function (event, accordion) {
                    $(document).foundation('equalizer', 'reflow');
                    console.log(accordion);
                });
            */
            /*
                sectionHeader = "<li class='accordion-navigation'>";
                sectionFooter = "</li>";
    
                intern = "";
    
                for (i=0;i<sections;i++){
                    section =
                    sectionHeader
                    + '<a href="#panel'+i+'a">Accordion 1</a><div id="panel'+i+'a" class="content">Text</div>'
                    + sectionFooter;
                    intern = intern + section
                }
    
                editor.insertHtml('<ul class="accordion accordion-reflow" data-accordion>'+ intern +'</ul>');
            */
        }
    };
});
