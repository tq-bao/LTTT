$(function st_form() {
    $('.inputField').each(function () {
        var $inputField = $(this);
        var $input = $(this).find('.inputText');
        var $inputBut = $(this).find('.inputBut');
        if ($input.val() != '' && $inputBut.val() != '') {
            $inputField.addClass('active');
        };
        $input.focus(function () {
            $inputField.addClass('active focus');
        });
        $input.focusout(function () {
            $inputField.removeClass('focus');
            if ($(this).val() != '') {
                $inputField.addClass('active');
            } else {
                $inputField.removeClass('active');
            };
        });
        $inputBut.hover(function () {
            $inputField.addClass('active focus');
        });
        $inputBut.mouseleave(function () {
            $inputField.removeClass('focus');
            if ($input.val() != '') {
                $inputField.addClass('active');
            } else {
                $inputField.removeClass('active');
            };
        });
    });
    $('.st-select').each(function () {
        var $select = $(this).find('.chosen-container');
        var $label = $(this).find('.label');
        $select.hover(function () {
            $label.addClass('green');
        });
        $select.mouseleave(function () {
            $label.removeClass('green');
        });
    });
    $('.checkbox-inline').each(function () {
        var $check = $(this);
        $check.hover(function () {
            $check.addClass('green');
        });
        $check.mouseleave(function () {
            $check.removeClass('green');
        });
    });
});