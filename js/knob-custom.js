         /*==========  Progress Bars  ==========*/
        $('.progress-bar').on('inview', function (event, isInView) {
            if (isInView) {
                $(this).css('width',  function() {
                    return ($(this).attr('aria-valuenow')+'%');
                });
            }
        });
        $('.dial').on('inview', function (event, isInView) {
            if (isInView) {
                var $this = $(this);
                var myVal = $this.attr("value");
                var color = $this.attr("data-color");
                $this.knob({
                    readOnly: true,
                    width: 150,
                    height: 150,
                    rotation: 'anticlockwise',
                    thickness: .15,
                    inputColor: '#888',
                    fgColor: color,
                    bgColor: '#e8e8e8',
                    'draw' : function () { 
                        $(this.i).val(this.cv + '%')
                    }
                });
                $({
                    value: 0
                }).animate({
                    value: myVal
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        $this.val(Math.ceil(this.value)).trigger('change');
                    }
                });
            }
        });