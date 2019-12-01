function simCore() {

    function clickMe(event) {
        event.preventDefault();
        this.removeEventListener('click', clickMe);
        if (this.correct) {
            var next = this.goto || document.querySelector('#sys').goto;
            reset();
            nextOne(next);
        }
    }


    function verify(event) {
        event.preventDefault();
        var total = 0;
        document.querySelector('#sys').querySelectorAll('input').forEach(function (element) {
            var corrects = element.correct;
            corrects.forEach(function (correct) {
                if (element.value === correct) {
                    total++;
                }
                if (element.type === "checkbox") {
                    if (element.checked) {
                        total++;
                    }
                }
            });
        });
        if (total === document.querySelector('#sys').querySelectorAll('input').length && document.querySelector('#sys').goto) {
            var next = document.querySelector('#sys').goto;
            reset();
            nextOne(next);
        }
    }
    function reset() {
        document.querySelectorAll('.interactive').forEach(function (node) {
            node.parentNode.removeChild(node);
        });
        document.querySelector('img').removeAttribute('styles');
    }

    var enterPressed = false;
    var nextSlideEnter;

    function enterListener(event) {
        enterPressed = false;
        if (event.keyCode === 13) {
            event.preventDefault();
            document.removeEventListener("keyup", enterListener);
            enterPressed = true;
            reset();
            nextOne(nextSlideEnter);
        }
    }


    function nextOne(next) {
        var step = sim.steps[next];
        if (step) {
            document.querySelector('.titulo').innerHTML = step.titulo;
            document.querySelector('.rubric').className = "rubric";
            document.querySelector('#rubric').innerHTML = step.rubric;
            document.querySelector('img').setAttribute('src', step.img);
            if (step.styles) {
                document.querySelector('img').setAttribute('style', step.styles);
            }
            if (step.goto) {
                document.querySelector('#sys').goto = step.goto;
            }
            step.elements.forEach(function (item, index) {
                let tag = document.createElement(item.element);
                tag.className = item.element + " interactive";
                tag.setAttribute('style', item.styles);
                tag.correct = item.correct.split(',');
                if (item.goto) {
                    tag.goto = item.goto;
                }
                if (item.element === "div") {
                    if (item.pressEnter) {
                        nextSlideEnter = item.goto;
                        document.addEventListener("keyup", enterListener);
                    }
                }

                if (item.element === "input") {
                    tag.setAttribute("type", item.type);
                    tag.setAttribute("tabindex", (index + 1));
                    tag.addEventListener("keyup", function (event) {
                        event.preventDefault();
                        if (event.keyCode === 13) {
                            verify(event);
                        }
                    });
                    tag.addEventListener('blur', verify, false);
                } else {
                    tag.addEventListener('click', clickMe, false);
                }
                document.querySelector('#sys').appendChild(tag);
            });
        }

        document.querySelector('.back').addEventListener('click', function (event) {
            event.preventDefault();
            /* si no se especifica goback en el json, va al índice anterior */
            if (step.goback != undefined) {
                reset();
                nextOne(step.goback);
            } else {
                if (next - 1 >= 0) {
                    reset();
                    nextOne(next - 1);
                }
            }
        }, false);

        if (next == 0) {
            document.querySelector('.back').setAttribute('style', 'visibility: hidden');
        } else {
            document.querySelector('.back').setAttribute('style', 'visibility: visible');
        }
    }
    nextOne(0);
}