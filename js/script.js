
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчнию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.939931, 30.329],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });

       var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
                hintContent: 'Ул.Большая Конюшенная 19/8, Санкт-Петербург',
                balloonContent: 'с 10 до 20 ежедневно'

            });

            myMap.geoObjects.add(myPlacemark);
        }


var link = document.querySelector(".adress-btn");

var popup = document.querySelector(".overlay");
var close = document.querySelector(".feedback-close-btn")

var feedback_username = popup.querySelector("[name=feedback-username]");
var feedback_email= popup.querySelector("[name=email]");
var feedback_comment = popup.querySelector("[name=feedback-comment]")
var feedback_form = popup.querySelector("form");


    link.addEventListener("click", function (evt){
        evt.preventDefault();
        popup.classList.add("modal-show");
        feedback_username.focus();
    });

    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");

    });

    feedback_form.addEventListener("submit", function (evt) {
        if (!feedback_email.value || !feedback_username.value || !feedback_comment.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
    });
