/// <reference path="_references.js" />
//https://github.com/firebase/firebaseui-web
window.far__login__inited = true;

//работа с модальными окнами
function login_modals_builder() {
    //получить код шаблона окна
    //itemId - id шаблона
    this.get_item_html = function (itemId) {

        var templiteHtmlContainer = document.getElementById(itemId);

        if (templiteHtmlContainer == null)
        {
            let errror = 'modals_builder->get_item_html->' + itemId + ': not found';

            console.error(errror);
            throw errror;
        }

        var html = templiteHtmlContainer.innerHTML;
        return html;
    };
    var self = this;
    //создать модальное окно
    //id
    //title
    //contentId
    //close
    //active
    //size
    this.f_create_modal = function (id, title, contentId, close, active, size) {

        if (id == null || typeof id == 'undefined') {
            id = '';
        }

        if (title == null || typeof title == 'undefined') {
            title = false;
        }
        if (content == null || typeof content == 'undefined') {
            content = false;
        }
        if (close == null || typeof close == 'undefined') {
            close = true;lo
        }
        if (active == null || typeof active == 'undefined') {
            active = true;
        }
        if (size == null || typeof size == 'undefined') {
            size = 'xs';
        }



        var modals_number = document.getElementsByClassName('new_modal').length;

        if (id == '') {
            let errror = 'modals_builder->f_create_modal->параметр id обязателен';
            console.error(errror);
            throw errror;
        }

        var modalObj = document.getElementById(id);

        if (modalObj==null) {

            var content = self.get_item_html(contentId);

            var modalElem = document.createElement('div');
            modalElem.id = id;
            modalElem.classList.add('new_modal');
            if (active) {
                modalElem.classList.add('new_modal-active');
            }
            modalElem.classList.add('new_modal-' + size);
            modalElem.setAttribute('data-close',close);
            modalElem.style.cssText = 'z-index:'+ (1029 + modals_number) + ';' + (active ? 'display:block' : 'display:none');
            

            var contentDialogHtml = '';
            if (close) {
                contentDialogHtml += '<div class="new_modal__bg ' + (close ? 'new_modal__closer' : '') + '"></div>';
            } else {
                contentDialogHtml += '<div class="new_modal__bg ' + (close ? '' : '') + '"></div>';
            }

            contentDialogHtml += '<div class="new_modal__container">\
                                    '+ (title ? '<div class="new_modal__title"><span>' + title + '</span>' + ('<span class="new_modal__closer btn-close"></span>') + '</div>' : '') + '\
                                    '+ (content ? '<div class="new_modal__content">' + content + '</div>' : '') + '\
                                </div>';

            modalElem.innerHTML = contentDialogHtml;
            document.body.appendChild(modalElem);
        }
    };


    this.closestByClass = function (el, clazz) {
        // Traverse the DOM up with a while loop
        while (el.className != clazz) {
            // Increment the loop to the parent node
            el = el.parentNode;
            if (!el) {
                return null;
            }
        }
        // At this point, the while loop has stopped and `el` represents the element that has
        // the class you specified in the second parameter of the function `clazz`

        // Then return the matched element
        return el;
    }

    this.f_actions = {
        open: function (id) {

            var modalObj = document.getElementById(id);
            if (modalObj == null)
            {
                return;
            }
            modalObj.classList.remove('hidden');
            modalObj.classList.add('new_modal-active');
            modalObj.style.display = 'block';

            var closeBtns = modalObj.getElementsByClassName("new_modal__closer");
            for (let btn of closeBtns)
            {
                var cBtn = btn;
                btn.addEventListener('click', function () { self.f_actions.close(cBtn); });
            }

        },
        //btn - true|false?
        //modal - id модалки
        close: function (btn, modal) {
            
            if (btn == null || typeof btn == 'undefined') {
                btn = false;
            }

            var modalObj = document.getElementById(modal);

            if (modalObj == null || typeof modalObj == 'undefined') {
                if (btn) {
                    modalObj = btn.closest('.new_modal');
                    if (modalObj == null)
                    {
                        return;
                    }
                }
            }

            modalObj.classList.remove('new_modal-active');
            modalObj.classList.remove('hidden');
            modalObj.parentNode.removeChild(modalObj);
        }
    }
}
var login_modals = new login_modals_builder();
//============================================//

function simple_horisontal_menu(clas) {

    if (clas == null || typeof clas == 'undefined') {
        clas = 'simple_horisontal_menu';
    }


    var self = this;

    this.class = clas;

    this.f_actions = {
        activate: function (active, passive) {

            if (active == null || typeof active == 'undefined') {
                active = false;
            }

            if (passive == null || typeof passive == 'undefined') {
                passive = false;
            }

            if (active && passive) {
                $(passive).fadeOut(250);
                setTimeout(function () {
                    $(active).fadeIn(250);
                }, 250);
            } else if (active) {
                $(active).fadeIn(250);
            } else if (passive) {
                $(passive).fadeOut(250);
            }
        },
    }
    this.f_init = function () {
        farDocument.onReady(function () {
        self.f_events();
        self.f_init_swiper();
        });
    }
    this.f_events = function () {
        farDocument.onReady(function () {
        $(document).on('click', '.' + self.class + ' > li > a', function () {
            console.log(this);
            $(this).closest('.' + self.class).find('li, a').removeClass('active');
            $(this).addClass('active');
        });
        });
    }
    this.f_init_swiper = function () {
     

        $('.' + this.class + '').each(function (i, menu) {
            var menu_width = parseInt($(menu).innerWidth()),
                items_width = 0,
                current_active = 0;
            $(menu).find('li').each(function (ii, li) {
                items_width = items_width + $(li).innerWidth();
            });
            items_width = parseInt(items_width);
            if (menu_width < items_width) {
                $(menu).addClass('swiper-container');
                $(menu).find('li').each(function (ii, li) {
                    $(li).addClass('swiper-slide');
                    $(li).css({ 'width': 'auto' });
                    if ($(li).hasClass('active')) {
                        current_active = ii;
                    }
                });
                var html = $(menu).html();
                $(menu).html('<div class="swiper-wrapper">' + html + '</div>');
                //self.Swiper = new Swiper('.' + self.class + '.swiper-container', {
                //    scrollbar: false,
                //    scrollbarHide: false,
                //    slidesPerView: 'auto',
                //    centeredSlides: true,
                //    spaceBetween: 12,
                //    grabCursor: true,
                //    nextButton: false,
                //    prevButton: false,
                //});
                //self.Swiper.slideTo(current_active);
            }
        });
    }
    this.f_init();
}
var menus = new simple_horisontal_menu();

function renderHtml() {
    var self = this;
    self.html = [];
    self.Add = function (line) {
        self.html.push(line);
    };
    self.Get = function () {
        return self.html.join(' ');
    };
}


//===============Initialize Firebase===============

window.addEventListener('load', function () {
    //login.firebase_login.init();
    login.buildMenu();
});

//===============Initialize Firebase===============

//var firebase = null;
var login = {
    recapchaEl: null,
    settings: {
        userHash: '',
        captions: {
            btns: {
                login: localizationValues.login,
                main: localizationValues.Key_Key000000542,
                personalData: localizationValues.Key_Key000000543,
                tourists: localizationValues.Key_Key000000544,
                orderedTours: localizationValues.Key_Key000000545,
                favoritesTours: localizationValues.favorite,
                myBonuses: localizationValues.Key_Key000000546,
                partnersBonuses: localizationValues.Key_Key000000758,
                reviews: localizationValues.myReviews,
                subscribers: localizationValues.Key_Key000000547,
                logout: localizationValues.Key_Key000000631
            }
        },
        inputs: {
            loginForm: {
                login: 'cabinet__login__email',
                password: 'cabinet__login__password',
                submitBtn: 'cabinet__login__btn'
            },
            register: {
                name: 'cabinet__register__name',
                phone: 'cabinet__register__phone',
                email: 'cabinet__register__email',
                pwd: 'cabinet__register__password_1',
                pwdConfirm: 'cabinet__register__password_2',
                contat: 'cabinet__register__contact',
                submitBtn: 'cabinet__restorepass__submit',
                verification: {
                    phone: {
                        d1: 'confirmation_sms_form_d1',
                        d2: 'confirmation_sms_form_d2',
                        d3: 'confirmation_sms_form_d3',
                        d4: 'confirmation_sms_form_d4'
                    },
                    submitBtn: 'confirmation_sms_form__submit'
                }
            },
            menu: {
                userNameId: 'user_image__container-name',
                userPhotoContainer: 'user_image__container'
            },
            recovery: {
                contact: 'cabinet__restorepass__contact',
                submitBtn: 'cabinet__restorepass_form__submit',
                errorContainer: 'cabinet__restorepass__html-error',
                baseModalContainer: 'restorepass_form__baseContainer'
            },
            changePwd: {
                newPwd: 'cabinet__changepass_new',
                newPwd_confirm: 'cabinet__changepass_new_confirm',
                oldPwd: 'cabinet__changepass_current',
                baseModalContainer: 'changepass_form__baseContainer',
                errorContainer: 'cabinet__changepass__html-error',
                submitBtn: 'cabinet__changepass_form__submit'
            }
        }
    },
    start: function () {
        login_modals.f_create_modal('login_form', 'Farvater Travel', 'login_form__html', false, false, 'xs');
        login_modals.f_actions.open('login_form');
        login.firebase_login.initLoginUI();
    },
    setAccountPhoto: function (photo) {

        var photoContainer = document.querySelector('.' + login.settings.inputs.menu.userPhotoContainer);

        function preloadUserPhoto(img, photo) {
            var image = new Image();
            image.onload = function () {
                img.src = image.src;
            }
            image.src = '/account/u/document/show/' + photo;
        }

        var img = document.createElement('IMG');
        img.src = '/account/Content/img/image/beginner-acc-photo.jpg';
        img.classList.add('cropper_image');

        photoContainer.classList.add('cropper', 'cropper25', 'cropper-centered');
        photoContainer.appendChild(img);

        if (photo !== '00000000-0000-0000-0000-000000000000' && photo.toUpperCase() !== '0F0D4A70-3020-4929-91B0-41D837971742') {
            preloadUserPhoto(img, photo);
        }
    },
    restore: {
        start: function () {
            login_modals.f_create_modal('restorepass_form', localizationValues.Key_Key000000712,
                'restorepass_form__html', false, false, 'xs');
            login_modals.f_actions.open('restorepass_form');

            login.recapchaEl = grecaptcha.render('restorepass_form_recapcha', {
                'sitekey': '6LfkKRsUAAAAALHsb8Vh4uGE88IMHzjObq-wciFu'
            });

        },
        process: function () {
            var contanctVal = $('#' + login.settings.inputs.recovery.contact).val();

            $('#' + login.settings.inputs.recovery.contact).closest('div').removeClass('has-error');

            var patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            var validEmail = patternEmail.test(contanctVal);

            var patternPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
            var validPhone = patternPhone.test(contanctVal);

            if (!validEmail && !validPhone) {
                $('#' + login.settings.inputs.recovery.contact).closest('div').addClass('has-error');
                grecaptcha.reset(login.recapchaEl);
                return;
            }
            else {

                globalSystemSettings.sCode(sCode => {

                    var model = {
                        sessionId: sCode,
                        method: '',
                        data: {
                            value: contanctVal,
                            recapcha: grecaptcha.getResponse()
                        }
                    };


                    account.global.saveBtn.working('#' + login.settings.inputs.recovery.submitBtn);
                    $('#' + login.settings.inputs.recovery.errorContainer).html('');
                    ExecuteActionString(
                        '/account/u/try-recovery-auth-data',
                        model,
                        { control: this },
                        function (response) {
                            account.global.saveBtn.complete('#' + login.settings.inputs.recovery.submitBtn);

                            switch (response.statusCode) {
                                case 200:
                                    switch (response.statusMessage) {
                                        case 'not-found':
                                            grecaptcha.reset(login.recapchaEl);
                                            $('#' + login.settings.inputs.recovery.errorContainer).html('<p>' + localizationValues.Key_Key000000704 + '</p>');
                                            break;

                                        case 'success':
                                            $('#' + login.settings.inputs.recovery.baseModalContainer).html('<p>' + localizationValues.Key_Key000000705 + '</p>');
                                            setTimeout(function () {
                                                login_modals.f_actions.close(false, 'restorepass_form');
                                                login.start();
                                            }, 2000);
                                            break;
                                    }
                                    break;
                                case 403:
                                    grecaptcha.reset(login.recapchaEl);
                                    $('#' + login.settings.inputs.recovery.errorContainer).html('<p>' + localizationValues.Key_Key000000706 + '</p>');
                                    break;
                                case 500:
                                    grecaptcha.reset(login.recapchaEl);
                                    $('#' + login.settings.inputs.recovery.errorContainer).html('<p>' + localizationValues.Key_Key000000713 + '</p>');
                                    break;
                            }
                        },
                        function (response) { }
                    );
                });
            }
        }
    },
    changePwd: {
        start: function () {
            login_modals.f_create_modal('changepass_form__', localizationValues.Key_Key000000714, 'changepass_form__html', false, false, 'xs');
            login_modals.f_actions.open('changepass_form__');
            login.recapchaEl = grecaptcha.render('changepass_form_recapcha', {
                'sitekey': '6LfkKRsUAAAAALHsb8Vh4uGE88IMHzjObq-wciFu'
            });
        },
        process: function () {
            var newPwd = $.trim($('#' + login.settings.inputs.changePwd.newPwd).val());
            var newPwd_confirm = $.trim($('#' + login.settings.inputs.changePwd.newPwd_confirm).val());
            var oldPwd = $.trim($('#' + login.settings.inputs.changePwd.oldPwd).val());
            var isValid = true;


            $('#' + login.settings.inputs.changePwd.oldPwd).closest('div').removeClass('has-error');
            $('#' + login.settings.inputs.changePwd.newPwd).closest('div').removeClass('has-error');
            $('#' + login.settings.inputs.changePwd.newPwd_confirm).closest('div').removeClass('has-error');

            if (oldPwd.length < 6) {
                $('#' + login.settings.inputs.changePwd.oldPwd).closest('div').addClass('has-error');
                isValid = false;
            } else {

                if (newPwd.length < 6) {
                    $('#' + login.settings.inputs.changePwd.newPwd).closest('div').addClass('has-error');
                    isValid = false;
                } else {
                    if (newPwd != newPwd_confirm) {
                        $('#' + login.settings.inputs.changePwd.newPwd_confirm).closest('div').addClass('has-error');
                        isValid = false;
                    }
                }
            }


            if (!isValid) {
                grecaptcha.reset(login.recapchaEl);
                return;
            }
            else {

                globalSystemSettings.sCode(sCode => {
                    var model = {
                        sessionId: sCode,
                        method: '',
                        data: {
                            current: oldPwd,
                            password: newPwd,
                            comfirm: newPwd_confirm,
                            recapcha: grecaptcha.getResponse()
                        }
                    };


                    account.global.saveBtn.working('#' + login.settings.inputs.changePwd.submitBtn);
                    $('#' + login.settings.inputs.changePwd.errorContainer).html('');
                    ExecuteActionString(
                        '/account/u/try-change-auth-password',
                        model,
                        { control: this },
                        function (response) {

                            $('#' + login.settings.inputs.changePwd.oldPwd).closest('div').removeClass('has-error');
                            $('#' + login.settings.inputs.changePwd.newPwd).closest('div').removeClass('has-error');
                            $('#' + login.settings.inputs.changePwd.newPwd_confirm).closest('div').removeClass('has-error');

                            account.global.saveBtn.complete('#' + login.settings.inputs.changePwd.submitBtn);
                            switch (response.statusMessage) {
                                case 'not-found':
                                    grecaptcha.reset(login.recapchaEl);
                                    $('#' + login.settings.inputs.changePwd.errorContainer).html('<p>' + localizationValues.Key_Key000000715 + '</p>');
                                    break;

                                case 'success':
                                    $('#' + login.settings.inputs.changePwd.baseModalContainer).html('<p>' + localizationValues.Key_Key000000716 + '</p>');
                                    setTimeout(function () {
                                        login_modals.f_actions.close(false, 'changepass_form__');
                                    }, 2000);
                                    break;

                                case 'current-is-incorrect':
                                    grecaptcha.reset(login.recapchaEl);
                                    $('#' + login.settings.inputs.changePwd.oldPwd).closest('div').addClass('has-error');
                                    break;
                                case 'password-is-incorrect':
                                    grecaptcha.reset(login.recapchaEl);
                                    $('#' + login.settings.inputs.changePwd.newPwd).closest('div').addClass('has-error');
                                    break;
                                case 'comfirm-is-incorrect':
                                    grecaptcha.reset(login.recapchaEl);
                                    $('#' + login.settings.inputs.changePwd.newPwd_confirm).closest('div').addClass('has-error');
                                    break;
                                case 'recapcha-code-is-invalid':
                                    grecaptcha.reset(login.recapchaEl);
                                    $('#' + login.settings.inputs.changePwd.errorContainer).html('<p>' + localizationValues.Key_Key000000706 + '</p>');
                                    break;
                                case 'changed':
                                    $('#' + login.settings.inputs.changePwd.baseModalContainer).html('<p>' + localizationValues.Key_Key000000716 + '</p>');
                                    setTimeout(function () {
                                        login_modals.f_actions.close(false, 'changepass_form__');
                                    }, 2000);
                                    break;
                            }
                        },
                        function (response) {
                            account.global.saveBtn.complete('#' + login.settings.inputs.changePwd.submitBtn);
                            grecaptcha.reset(login.recapchaEl);
                            $('#' + login.settings.inputs.changePwd.errorContainer).html('<p>' + localizationValues.Key_Key000000717 + '</p>');

                        });

                });
            }
        }
    },
    buildMenu: function () {
        farDocument.onReady(function () {
            $('#init_user_cabinet').show();

            globalSystemSettings.sCode(sCode => {


                var model = {
                    sessionId: sCode
                };

                ExecuteAction(
                    '/account/u/isLogin/?_=' + (new Date()).getTime(),
                    model,
                    { control: this },
                    function (response) {
                        var content = '';

                        authState.ready(response);

                        if (response.statusCode !== 200) {
                            //пользователь не авторизированный
                            content = '<button id="header__loginButton" class="header__login"';
                            content += 'title="' + login.settings.captions.btns.login + '" ';
                            content += 'aria-label="' + login.settings.captions.btns.login + '"> &nbsp;<span>';
                            content += login.settings.captions.btns.login;
                            content += '</span></button>';

                            //инициализации авторизации firebase
                            login.firebase_login.init();

                            if (partnerProgramsManager.auth.checkAutoOpen()) {
                                login.start();
                            }
                            else {
                                //partnerProgramsManager
                                partnerProgramsManager.registration.checkURL((success, partnerHash, programHash) => {
                                    if (success) {
                                        partnerProgramsManager.registration.checkAvailable(partnerHash, programHash, isAvailable => {
                                            if (isAvailable) {
                                                login.start();
                                            }
                                        });
                                    }
                                });
                            }
                        }
                        else {

                            if (typeof gtag === 'function') {
                                gtag('set', { 'user_id': response.result.id });
                            }

                            content = '<button class="Dropdown__btn">';
                            content += '<span id="' + login.settings.inputs.menu.userNameId + '" class="user_image__container">' + '</span>';
                            if (deviceConfig.type === 'Desktop') {
                                content += '<span id="' + login.settings.inputs.menu.userNameId + '" class="user_image__container_name __xs">' + response.result.name + '</span>';
                            }
                            content += '<i class="header-acc-arrow"></i></button>';
                            content += '<ul class="Dropdown__list cabinet">';
                            content += '<li><i class="icon icon_cabinet"></i><a href="' + localizationFn.localizeUrl('/u/welcome', localizationFn.current, 'account') + '">' + login.settings.captions.btns.main + '</a></li>';
                            content += '<li><i class="icon icon_mydata"></i><a href="' + localizationFn.localizeUrl('/u/personal-data/', localizationFn.current, 'account') + '">' + login.settings.captions.btns.personalData + '</a></li>';
                            content += '<li><i class="icon icon_mypeople"></i><a href="' + localizationFn.localizeUrl('/u/tourists/', localizationFn.current, 'account') + '">' + login.settings.captions.btns.tourists + '</a></li>';
                            content += '<li><i class="icon icon_myorders"></i><a href="' + localizationFn.localizeUrl('/u/ordered-tours/', localizationFn.current, 'account') + '">' + login.settings.captions.btns.orderedTours + '</a><span class="ordersCount" style="display: none"></span></li>';
                            //content += '<li><a href="/account/u/favorites-tours/">' + login.settings.captions.btns.favoritesTours + '</a></li>';
                            content += '<li><i class="icon icon_mybonus"></i><a href="' + localizationFn.localizeUrl('/u/bonuses/', localizationFn.current, 'account') + '">' + login.settings.captions.btns.myBonuses + '</a></li>';
                            content += '<li><i class="icon icon_partners"></i><a href="' + localizationFn.localizeUrl('/u/partner-bonuses/', localizationFn.current, 'account') + '">' + login.settings.captions.btns.partnersBonuses + '</a></li>';
                            content += '<li><i class="icon icon_myreviews"></i><a href="' + localizationFn.localizeUrl('/u/Reviews/', localizationFn.current, 'account') + '">' + login.settings.captions.btns.reviews + '</a></li>';
                            content += '<li><i class="icon icon_mysubscribe"></i><a href="' + localizationFn.localizeUrl('/u/Subscribers/', localizationFn.current, 'account') + '">' + login.settings.captions.btns.subscribers + '</a></li>';
                            content += '<li><a href="#" class="c-main" onclick="login.logOut()" >' + login.settings.captions.btns.logout + '</a></li>';
                            //content += '<li><a href="#" class="iconzedBlock"><i class="ic mm coin"></i><span>Пригласите друзей и получите бонусы!</span></a></li>';
                            content += '</ul>';

                            //$('.user-photo-name').html(response.result.shortName);


                            if (document.getElementById('MainFavorites__opener') !== null) {
                                document.getElementById('MainFavorites__opener').addEventListener('click', () => {
                                    document.location = localizationFn.localizeUrl('/u/welcome/', localizationFn.current, 'account') + '#my-favorites';
                                });
                            }

                            //удаляем ссылку на партнерскую программу
                            partnerProgramsManager.registration.remove();

                            if (typeof window.dataLayer === 'undefined') window.dataLayer = [];
                            dataLayer.push({
                                'uid': response.result.id
                            });
                        }

                        $('#header-account-menu').html(content);
                        if (document.querySelector('.Dropdown__btn')) {
                            let menu = document.querySelector('.Dropdown__list');
                            let showMenu = document.querySelector('.Dropdown__btn');
                            showMenu.addEventListener('click', _ => {
                                menu.classList.toggle('showmenu');
                            });
                        }
                        if (typeof response.result != 'undefined' && response.result != null) {
                            if (typeof response.result.basePhoto != 'undefined' && response.result.basePhoto != null) {
                                login.setAccountPhoto(response.result.basePhoto);
                            }
                        }

                        var init_user_cabinet = $('#header__loginButton');

                        if (init_user_cabinet.length > 0) {
                            init_user_cabinet.bind('click', login.start);
                        }

                    },
                    function (response) {
                        authState.ready({ statusCode: 500 });
                    }
                );
            });
        });
    },
    logOut: function () {
        event.preventDefault();
        try {
            firebase.auth().signOut();
        } catch (err) {
            console.log(err);
        } finally {
            window.location = localizationFn.localizeUrl('/u/logout/', localizationFn.current, 'account');
        }
    },
    login: function () {
        var login_email = $('#' + login.settings.inputs.loginForm.login).val();
        var isValidLogin = true;
        $('.validation-element-login').each(function () {
            console.log('login-1');
            $(this).closest('div').removeClass('has-error');
        });
        if ($('#' + login.settings.inputs.loginForm.login).val() == '' || $('#' + login.settings.inputs.loginForm.password).val() == '') {
            $('.validation-element-login').each(function () {
                console.log('login-2');
                $(this).closest('div').addClass('has-error');
            });
            return;

        } else {
            var patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            var patternPhone = new RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);

            var valid = patternEmail.test(login_email);

            if (!valid) {
                valid = patternPhone.test(login_email);

                if (!valid) {
                    $('#' + login.settings.inputs.register.contat).closest('div').addClass('has-error');
                    isValidLogin = false;
                } else {
                    isValidLogin = true;
                }
            } else {
                isValidLogin = true;
            }
        }

        var model = {
            login: 'none',
            password: 'none',
            ip: globalSystemSettings.ip4
        };

        if (isValidLogin) {
            model = {
                login: $('#' + login.settings.inputs.loginForm.login).val(),
                password: $('#' + login.settings.inputs.loginForm.password).val(),
                ip: globalSystemSettings.ip4
            }
            $('#' + login.settings.inputs.loginForm.submitBtn).hide();

            ExecuteAction(
                '/account/u/login',
                model,
                { control: this },
                function (response) {

                    var resultHtml = '';
                    var resultCode = response.result.toString();

                    switch (resultCode) {
                        case '00000000-0000-0000-0000-000000000001':
                            resultHtml = '<div class="warning_panel"><p><strong>' + localizationValues.Key_Key000000725 + '</strong></p><p>' + localizationValues.Key_Key000000736 + '</p></div><br>';
                            $('#' + login.settings.inputs.loginForm.submitBtn).show();
                            break;

                        case '00000000-0000-0000-0000-000000000002':
                            resultHtml = '<div class="warning_panel"><p>' + localizationValues.Key_Key000000737 + '</p><p>' + localizationValues.Key_Key000000738 + '</p></div><br>';
                            $('#' + login.settings.inputs.loginForm.submitBtn).show();
                            break;

                        case '00000000-0000-0000-0000-000000000000':
                            resultHtml = '<div class="warning_panel"><p>' + localizationValues.Key_Key000000737 + '</p><p>' + localizationValues.Key_Key000000738 + '</p></div><br>';
                            $('#' + login.settings.inputs.loginForm.submitBtn).show();
                            break;

                        default:
                            window.setTimeout(function () {
                                window.location.href = '/account/u/welcome/';
                            }, 1400);
                            break;
                    }

                    $('#login_form__html-login-error').html(resultHtml);
                    //modals.f_actions.close(false, '#login_form');
                },
                function (response) { $('#' + login.settings.inputs.loginForm.submitBtn).show(); });
        }
    },
    loginByCode: function (sCode, newUser) {
        if (typeof newUser == 'undefined') {
            newUser = false;
        }
        var model = {
            sCode: sCode,
            ip: globalSystemSettings.ip4
        };

        ExecuteAction(
            '/account/u/login-by-scode',
            model,
            { control: this },
            function (response) {
                console.log('login-11');
                var resultHtml = '';
                var resultCode = response.result.toString();

                switch (resultCode) {
                    case '00000000-0000-0000-0000-000000000000':
                    case '00000000-0000-0000-0000-000000000001':
                    case '00000000-0000-0000-0000-000000000002':
                        window.location.href = '/';
                        break;

                    default:
                        var returnUrl = new URLSearchParams(new URL(document.URL).search).get('returnUrl');
                        if (returnUrl !== null && returnUrl.length) {
                            try {
                                var _url = new URL(returnUrl);
                                if (_url.pathname === '/') {
                                    if (newUser) {
                                        window.location.href = localizationFn.localizeUrl('/u/personal-data/?action=need-edit-data', localizationFn.current, 'account');
                                    }
                                    else {
                                        window.location.href = localizationFn.localizeUrl('/u/welcome/', localizationFn.current, 'account');
                                    }
                                    break;
                                }
                                if (_url.pathname.indexOf('/checkout/prepaid/') !== -1) {
                                    window.location.href = returnUrl;
                                    break;
                                }
                            }
                            catch (ex) {
                                console.log('error => ', ex);
                            }
                        }
                        if (newUser) {
                            window.location.href = localizationFn.localizeUrl('/u/personal-data/?action=need-edit-data', localizationFn.current, 'account');
                        }
                        else {
                            if (returnUrl !== null && returnUrl.length) {
                                window.location.href = returnUrl;
                                break;
                            }
                            else {
                                window.location.href = localizationFn.localizeUrl('/u/welcome/', localizationFn.current, 'account');
                                break;
                            }
                        }
                        break;
                }
            },
            function (response) {
                $('#' + login.settings.inputs.loginForm.submitBtn).show();
            });
    },
    buildResponseEmailMassege: function () {
        console.log('login-12');
        var modal_confirm = [];
        modal_confirm.push('<div class="container-fluid">');
        modal_confirm.push('<div class="row">');
        modal_confirm.push('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">');
        modal_confirm.push('<img src="/img/new_icons/check.svg" alt="Phone" style="width:75px;height:75px;margin-top:35px">');
        modal_confirm.push('</div>');
        modal_confirm.push('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">');
        modal_confirm.push('<h3 style="font-weight: 500;font-size: 18px;color: #00aeef;margin-bottom:20px;">' + localizationValues.Key_Key000000718 + '</h3>');
        modal_confirm.push('</div>');
        modal_confirm.push('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">');
        modal_confirm.push('<p class="f-400 fs-x16">' + localizationValues.Key_Key000000719 + '</p>');
        modal_confirm.push('</div>');
        modal_confirm.push('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">');
        modal_confirm.push('</div>');
        modal_confirm.push('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">');
        modal_confirm.push('<button class="b new_b yf next_super_cool_modal_window__closer f-400" style="margin-bottom:35px;">' + localizationValues.Key_Key000000720 + '</button>');
        modal_confirm.push('</div>');
        modal_confirm.push('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">');
        modal_confirm.push('</div>');
        modal_confirm.push('</div>');
        modal_confirm.push('</div>');

        var modal_confirm_email = nscmw.render('_middle', 'text-left', 'confirmEmailPopup', true, (($(window).width() <= 960) ? '_xs' : 'w-390'), true, false, modal_confirm.join(''));
        $('body').append(modal_confirm_email);
    },

    //класс регистрации пользователя в системе
    register: {
        //начало регистрации в системе
        start: function () { },
        //создание нового пользователя
        save: function () {
            if (!login.register.validation()) {
                return;
            }
            else {
                var data = login.register.getForm();
                $('#' + login.settings.inputs.register.submitBtn).hide();
                var model = data;

                ExecuteActionString(
                    '/account/u/register-new',
                    model,
                    { control: this },
                    function (response) {
                        $('#' + login.settings.inputs.register.submitBtn).show();
                        var responveData = login.register.getForm();
                        //проверяем ответ сервера
                        switch (response.statusCode) {
                            //созданно нового пользовтеля
                            case 201:

                                switch (response.statusMessage) {
                                    case 'need-confirm-phone':

                                        login_modals.f_actions.close(false, '#login_form');
                                        login_modals.f_create_modal('confirmation_sms_form', localizationValues.Key_Key000000639, 'confirmation_sms_form__html', false, false, 'xs');
                                        login_modals.f_actions.open('confirmation_sms_form');
                                        $('#confirmation_sms_form').attr('data-phone', responveData.phone);
                                        $('#confirmation_sms_form').attr('data-vtype', 'login');
                                        break;

                                    case 'need-confirm-email':
                                        login.buildResponseEmailMassege();
                                        nscmw.actions.show_('#confirmEmailPopup');
                                        // login_modals.f_actions.close(false, '#login_form');
                                        // login_modals.f_create_modal('confirmation_email_form', 'Подтверждение email', 'confirmation_email_form__html', false, false, 'xs');
                                        // login_modals.f_actions.open('confirmation_email_form');
                                        $('#confirmation_email_form').attr('data-phone', responveData.email);
                                        break;
                                }
                                break;
                            //пользователь уже существует
                            case 205:
                                alert(localizationValues.Key_Key000000721);
                                break;
                            //было обновленно данные контактов: телефон
                            case 211: break;
                            //было обновленно данные контактов: електропочта
                            case 212: break;
                            //не корректные данные формы
                            case 400:
                                alert(localizationValues.Key_Key000000722);
                                break;
                            //другая ошибка сервера
                            case 500:
                                alert(localizationValues.Key_Key000000723);
                                break;
                        }

                    },
                    function (response) { });
            }
        },
        //получение данных формы регистрации
        getForm: function () {

            var contact = $('#' + login.settings.inputs.register.contat).val();
            var data = {};

            var patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            var valid = patternEmail.test(contact);
            // if (!valid) {
            //     data = {
            //         name: $('#' + login.settings.inputs.register.name).val(),
            //         phone: $('#' + login.settings.inputs.register.contat).val(),
            //         //email: $('#' + login.settings.inputs.register.email).val(),
            //         email: '',
            //         ip: globalSystemSettings.ip4,
            //         password: $('#' + login.settings.inputs.register.pwd).val(),
            //         passwordConfirm: $('#' + login.settings.inputs.register.pwdConfirm).val(),
            //         type: 'phone',
            //         useVerification: true
            //     };
            // } else { }
            data = {
                name: $('#' + login.settings.inputs.register.name).val(),
                phone: '',
                email: $('#' + login.settings.inputs.register.contat).val(),
                ip: globalSystemSettings.ip4,
                password: $('#' + login.settings.inputs.register.pwd).val(),
                passwordConfirm: $('#' + login.settings.inputs.register.pwdConfirm).val(),
                type: 'email',
                useVerification: true
            };

            return data;
        },
        //верификация формы регистрации
        validation: function () {

            $('.validation-element').each(function () {
                $(this).closest('div').removeClass('has-error');
            });

            var data = login.register.getForm();

            var isValid = true;

            //проверка имени. имя должно быть длинее 2-х символов
            if (data.name.length < 3) {
                $('#' + login.settings.inputs.register.name).closest('div').addClass('has-error');
                isValid = false;
            }

            switch (data.type) {
                case 'phone':
                    var patternPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                    var validPhone = patternPhone.test(data.phone);
                    if (!validPhone) {
                        $('#' + login.settings.inputs.register.contat).closest('div').addClass('has-error');
                        isValid = false;
                    }
                    break;

                case 'email':
                    //проверка емейла
                    var patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                    var valid = patternEmail.test(data.email);
                    if (!valid) {
                        $('#' + login.settings.inputs.register.contat).closest('div').addClass('has-error');
                        isValid = false;
                    }
                    break;
            }
            if (data.password.length < 6) {
                $('#' + login.settings.inputs.register.pwd).closest('div').addClass('has-error');
                isValid = false;
            } else {
                if (data.password != data.passwordConfirm) {
                    $('#' + login.settings.inputs.register.pwdConfirm).closest('div').addClass('has-error');
                    isValid = false;
                }
            }


            return isValid;
        },
        //процедура перевірки номеру телефону по коду
        verificationPhone: function () {

            var sCode = $('#' + login.settings.inputs.register.verification.phone.d1).val()
                + $('#' + login.settings.inputs.register.verification.phone.d2).val()
                + $('#' + login.settings.inputs.register.verification.phone.d3).val()
                + $('#' + login.settings.inputs.register.verification.phone.d4).val();

            var value = $('#confirmation_sms_form').attr('data-phone');

            if (sCode.length < 4) {
                $('.phoneVerificationCode').closest('div').addClass('has-error');
                return;
            }
            else {

                var model = {
                    code: sCode,
                    phone: value
                }

                ExecuteActionString(
                    '/account/u/register-new/verify-phone',
                    model,
                    { control: this },
                    function (response) {

                        switch (response.statusCode) {
                            case 200:
                                var statusMess = parseInt(response.statusMessage);
                                switch (statusMess) {
                                    //badCode
                                    case 0:
                                        $('.phoneVerificationCode').closest('div').addClass('has-error');
                                        resultHtml = '<div class="warning_panel"><p>' + localizationValues.Key_Key000000680 + '</p></div><br>';
                                        $('.confirmation_sms_form_errors').html(resultHtml);
                                        break;
                                    //notFound
                                    case 1:
                                        $('.phoneVerificationCode').closest('div').addClass('has-error');
                                        resultHtml = '<div class="warning_panel"><p>' + localizationValues.Key_Key000000681 + '</p><p>' + localizationValues.Key_Key000000682 + '</p></div><br>';
                                        $('.confirmation_sms_form_errors').html(resultHtml);
                                        break;
                                    //codeIsExpired
                                    case 2:
                                        resultHtml = '<div class="warning_panel"><p>' + localizationValues.Key_Key000000683 + '</p><p>' + localizationValues.Key_Key000000684 + '</p></div><br>';
                                        $('.confirmation_sms_form_errors').html(resultHtml);
                                        break;
                                    //success
                                    case 3:
                                        login.register.verificationPhoneComplite();
                                        break;
                                    //alreadyVerified
                                    case 4:
                                        login.register.verificationPhoneComplite();
                                        break;

                                    //exceededAttempts
                                    case 5:
                                        resultHtml = '<div class="warning_panel"><p>' + localizationValues.Key_Key000000685 + '</p><p>' + localizationValues.Key_Key000000686 + '</p></div><br>';
                                        $('.confirmation_sms_form_errors').html(resultHtml);
                                        break;
                                }
                            default: break;
                        }


                    },
                    function (response) { });

            }
        },
        verificationPhoneComplite: function () {
            var vtype = $('#confirmation_sms_form').attr('data-vtype');
            login_modals.f_actions.close(false, '#confirmation_sms_form');

            switch (vtype) {
                case 'cabinet':
                    account.global.loadPersonalData(function (data) {
                        account.Home.fillData(data)
                    });
                    break;
                case 'login':
                    login_modals.f_create_modal('confirmation_sms_complite_form', localizationValues.Key_Key000000640, 'confirmation_sms_complite_form__html', false, false, 'xs');
                    login_modals.f_actions.open('confirmation_sms_complite_form');
                    break;
            }
        }
    },
    getCookie: function(name, def) {
        var value = '; ' + document.cookie,
        parts = value.split('; ' + name + '=');
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
        return def;
	},

    firebase_login: {
        config: {
            apiKey: "AIzaSyC6SDbjg54dmwAW2_V-ytalSG5TBVOLM_E",
            authDomain: "farvater-travel.firebaseapp.com",
            databaseURL: "https://farvater-travel.firebaseio.com",
            projectId: "farvater-travel",
            storageBucket: "farvater-travel.appspot.com",
            messagingSenderId: "288004389921",
            clientId: "288004389921-0e4edhqi6ft9kcgjeu46nq9ahb792n62.apps.googleusercontent.com",
            isInit: false
        },
        getStatus: function () {
            if (!login.firebase_login.config.isInit) {
                login.firebase_login.init();
            }
            firebase.auth().onAuthStateChanged(
                function (user) {
                    if (user) {
                        // User is signed in.
                        var displayName = user.displayName;
                        var email = user.email;
                        var emailVerified = user.emailVerified;
                        var photoURL = user.photoURL;
                        var uid = user.uid;
                        var phoneNumber = user.phoneNumber;
                        var providerData = user.providerData;

                        user.getIdToken().then(function (accessToken) {
                            document.getElementById('sign-in-status').textContent = 'Signed in';
                            console.log(user);
                            var model = {
                                displayName: displayName,
                                email: email,
                                emailVerified: emailVerified,
                                phoneNumber: phoneNumber,
                                photoURL: photoURL,
                                uid: uid,
                                accessToken: accessToken,
                                providerData: providerData
                            };
                            console.log(model);
                            document.getElementById('account-details').textContent = JSON.stringify(model, null, '  ');
                            var newUser = false;
                            //Добавления пользовтеля firebase в firebase_obj_cUsers
                            login.firebase_login.query.fix_user(model,
                                //success fix_user
                                function (fix_user_response) {

                                    if (fix_user_response.statusCode == 200) {
                                        //Смаплення користувача firebase
                                        login.firebase_login.query.join_user(model.uid,
                                            //success join_user
                                            function (join_user_response) {

                                                if (join_user_response.statusCode == 200) {
                                                    newUser = join_user_response.newUser;
                                                    //Получить данные о пользователе cUser (может быть несколько)
                                                    login.firebase_login.query.get_cUsers(model.uid,
                                                        //success get_cUsers
                                                        function (get_cUsers_response) {

                                                            if (get_cUsers_response.statusCode == 200
                                                                && get_cUsers_response.data != null
                                                                && get_cUsers_response.data.length > 0) {
                                                                var user = get_cUsers_response.data[0];
                                                                if (user.id == -1 && get_cUsers_response.data.length > 1) {
                                                                    for (var i = 1; i < get_cUsers_response.data.length; i++) {
                                                                        if (get_cUsers_response.data[i].id != -1) {
                                                                            user = get_cUsers_response.data[i];
                                                                            break;
                                                                        }
                                                                    }
                                                                }
                                                                if (user.id != -1) {
                                                                    //Генерация sCode для входа в личный кабинет для пользователя
                                                                    login.firebase_login.query.auth_get_sCode(user.hash,
                                                                        //success get_sCode
                                                                        function (auth_get_sCode_response) {
                                                                            if (auth_get_sCode_response.statusCode == 200) {
                                                                                login.loginByCode(auth_get_sCode_response.result, newUser);
                                                                            }
                                                                            else {
                                                                                login.firebase_login.loginError(auth_get_sCode_response);
                                                                            }
                                                                        },
                                                                        //error get_sCode
                                                                        function (auth_get_sCode_response) {
                                                                            console.log('---------auth_get_sCode---------');
                                                                            console.log(auth_get_sCode_response);
                                                                            login.firebase_login.loginError(auth_get_sCode_response);
                                                                        }
                                                                    );
                                                                }
                                                                else {
                                                                    console.log('---------get_cUsers USER NO FOUND!!!---------');
                                                                    login.firebase_login.loginError(get_cUsers_response);
                                                                }
                                                            }
                                                            else {
                                                                login.firebase_login.loginError(get_cUsers_response);
                                                            }
                                                        },
                                                        //error get_cUsers
                                                        function (get_cUsers_response) {
                                                            console.log('---------get_cUsers---------');
                                                            console.log(get_cUsers_response);
                                                            login.firebase_login.loginError(get_cUsers_response);
                                                        }
                                                    );
                                                }
                                                else {
                                                    login.firebase_login.loginError(join_user_response);
                                                }
                                            },
                                            //error join_user
                                            function (join_user_response) {
                                                console.log('---------join_user---------');
                                                console.log(join_user_response);
                                                login.firebase_login.loginError(join_user_response);
                                            }
                                        );
                                    }
                                    else {
                                        login.firebase_login.loginError(fix_user_response);
                                    }

                                },
                                //error fix_user
                                function (fix_user_response) {
                                    console.log('---------fix_user---------');
                                    console.log(fix_user_response);
                                    login.firebase_login.loginError(fix_user_response);
                                }
                            );
                        });
                    }
                    else {
                        // User is signed out.
                        document.getElementById('sign-in').textContent = 'Sign out';
                        document.getElementById('account-details').textContent = 'null';
                    }
                },
                function (error) {

                    console.error(error);
                }
            );
        },
        logError: function (response) {
            var req = new XMLHttpRequest();
            var params = {
                msg: typeof response === 'string' ? '0' + response : JSON.stringify(response),
                sourceUrl: window.location.toString(),
                lineNo: '-',
                columnNo: '-',
                error: '1'
            }
            req.open('POST', '/ru/health-srv/fix-js', true);
            req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            req.send(JSON.stringify(params));
        },
        loginError: function (response) {
            console.error(response);
            login.firebase_login.logError(response);
            alert(localizationValues.Key_Key000000724)
        },
        query: {
            fix_user: function (model, onSuccess, onError) {
                ExecuteActionString(
                    '/account/crm/firebase/fix-user',
                    model,
                    { control: this },
                    function (response) {
                        console.log('query-1');
                        if (typeof onSuccess == 'function') onSuccess(response);
                    },
                    function (response) {
                        console.log('query-2');
                        if (typeof onError == 'function') onError(response);
                    });
            },
            join_user: function (uid, onSuccess, onError) {
                var userFromHash = '',
                    programHash = '',
                    referral = partnerProgramsManager.registration.get();
                if (referral !== null) {
                    userFromHash = referral.partnerHash;
                    programHash = referral.programHash;
                }
                ExecuteActionString(
                    '/account/crm/firebase/join-user',
                    {
                        uid: uid,
                        userFromHash: userFromHash,
                        programHash: programHash,
                        deviceInfo: '',
                        lang: localizationFn.current
                    },
                    { control: this },
                    function (response) {
                        if (typeof onSuccess === 'function') {
                            onSuccess(response);
                        }
                    },
                    function (response) {
                        if (typeof onError === 'function') {
                            onError(response);
                        }
                    });
            },
            get_cUsers: function (uid, onSuccess, onError) {
                ExecuteActionString(
                    '/account/crm/firebase/get-cUsers',
                    { uid: uid },
                    { control: this },
                    function (response) {
                        if (typeof onSuccess == 'function') onSuccess(response);
                    },
                    function (response) {
                        if (typeof onError == 'function') onError(response);
                    });
            },
            auth_get_sCode: function (userHash, onSuccess, onError) {
                var _ga = login.getCookie('_ga', 'GA0.0.0.0');
                ExecuteActionString(
                    '/account/crm/user/auth/get-sCode',
                    { userHash: userHash, _ga: _ga },
                    { control: this },
                    function (response) {
                        if (typeof onSuccess == 'function') onSuccess(response);
                    },
                    function (response) {
                        if (typeof onError == 'function') onError(response);
                    });
            },
            auth_by_sCode: function (model, onSuccess, onError) {
                ExecuteActionString(
                    '/account/crm/user/auth/by-scode',
                    model,
                    { control: this },
                    function (response) {
                        if (typeof onSuccess == 'function') onSuccess(response);
                    },
                    function (response) {
                        if (typeof onError == 'function') onError(response);
                    });
            },
        },

        init: function () {
            console.log('init');
            if (!login.firebase_login.config.isInit) {
                console.log('init-1');
                firebase.initializeApp(login.firebase_login.config);
                login.firebase_login.config.isInit = true;
            }
        },

        initLoginUI: function () {

            if (!login.firebase_login.config.isInit) {
                login.firebase_login.init();
            }
            // Initialize the FirebaseUI Widget using Firebase.
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            document.querySelector('.btn-close').addEventListener('click', () => {
                ui.delete();
            });
            // The start method will wait until the DOM is loaded.
            ui.start('#firebaseui-auth-container', login.firebase_login.getUiConfig());

        },

        getUiConfig: function () {
            console.log('getUiConfig');
            return {
                callbacks: {
                    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                        console.log('getUiConfig-1');
                        var user = authResult.user;
                        var credential = authResult.credential;
                        var isNewUser = authResult.additionalUserInfo.isNewUser;
                        var providerId = authResult.additionalUserInfo.providerId;
                        var operationType = authResult.operationType;
                        // Do something with the returned AuthResult.
                        // Return type determines whether we continue the redirect automatically
                        // or whether we leave that to developer to handle.

                        var returnUrl = partnerProgramsManager.getReturnUrl();
                        if (returnUrl == null || returnUrl.length === 0) {
                            returnUrl = document.URL;
                        }
                        
                        window.location.assign('/account/u/firebase-check-account?cU=' + user.uid + '&returnUrl=' + returnUrl);
                        return false;
                    },
                },
                signInFlow: 'popup',
                signInSuccessUrl: '/account/u/firebase-check-account',
                signInOptions: [
                    // Leave the lines as is for the providers you want to offer your users.
                    //https://github.com/firebase/firebaseui-web#configure-oauth-providers
                    //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    {
                        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                        customParameters: {
                            // Forces account selection even when one account
                            // is available.
                            prompt: 'select_account'
                        }
                    },
                    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                    //{
                    //    provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                    //    //scopes: [
                    //    //    'public_profile',
                    //    //    'email',
                    //    //    'phone'
                    //    //],
                    //    customParameters: {
                    //        // Forces password re-entry.
                    //        auth_type: 'reauthenticate'
                    //    }
                    //},
                    {
                        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                        defaultCountry: 'UA'
                    }
                ],
                // tosUrl and privacyPolicyUrl accept either url string or a callback
                // function.
                // Terms of service url/callback.
                tosUrl: '/content/booking-rules_ru.pdf',
                // Privacy policy url/callback.
                privacyPolicyUrl: function () {
                    console.log('getUiConfig-3');
                    window.location.assign('/content/booking-rules_ru.pdf');
                }
            }
        }
    }
}

var account = {
    get sessionId() {
        console.log('sessionId');
        return globalSystemSettings.sessionId;
    },
    global: {
        sitizenShipArray: [{ id: 84, name: "Украина" }, { id: 117, name: "Азербайджан" }, { id: 115, name: "Албания" }, { id: 87, name: "Венгрия" }, { id: 34, name: "Грузия" }, { id: 100, name: "Латвия" }, { id: 101, name: "Литва" }, { id: 63, name: "Польша" }, { id: 65, name: "Румыния" }, { id: 74, name: "Словакия" }, { id: 82, name: "Тунис" }, { id: 104, name: "Эстония" }, { id: 5, name: "Австрия" }, { id: 58, name: "Бали (Индонезия)" }, { id: 7, name: "Бельгия" }, { id: 8, name: "Болгария" }, { id: 32, name: "Великобритания" }, { id: 30, name: "Германия" }, { id: 35, name: "Голландия" }, { id: 33, name: "Греция" }, { id: 23, name: "Доминиканская республика" }, { id: 25, name: "Египет" }, { id: 43, name: "Израиль" }, { id: 39, name: "Индия" }, { id: 40, name: "Индонезия" }, { id: 42, name: "Испания" }, { id: 44, name: "Италия" }, { id: 12, name: "Канада" }, { id: 118, name: "Катар" }, { id: 21, name: "Кипр" }, { id: 51, name: "Мальдивы" }, { id: 57, name: "Норвегия" }, { id: 59, name: "ОАЭ" }, { id: 64, name: "Португалия" }, { id: 69, name: "Сербия" }, { id: 75, name: "Словения" }, { id: 80, name: "Таиланд" }, { id: 83, name: "Турция" }, { id: 27, name: "Финляндия" }, { id: 28, name: "Франция" }, { id: 37, name: "Хорватия" }, { id: 55, name: "Черногория" }, { id: 14, name: "Чехия" }, { id: 72, name: "Швеция" }, { id: 71, name: "Шри-Ланка" }, { id: 0, name: "Андорра" }, { id: 17, name: "Китай" }, { id: 105, name: "Марокко" }, { id: 81, name: "Танзания" }, { id: 4, name: "Австралия" }, { id: 1, name: "Антигуа и барбуда" }, { id: 2, name: "Аргентина" }, { id: 3, name: "Аруба" }, { id: 111, name: "Багамы" }, { id: 6, name: "Барбадос" }, { id: 120, name: "Беларусь" }, { id: 88, name: "Боливия" }, { id: 9, name: "Бразилия" }, { id: 89, name: "Венесуэла" }, { id: 86, name: "Вьетнам" }, { id: 31, name: "Гонконг (Китай)" }, { id: 103, name: "Дания" }, { id: 41, name: "Иордания" }, { id: 90, name: "Ирландия" }, { id: 106, name: "Исландия" }, { id: 13, name: "Кабо-Верде" }, { id: 11, name: "Камбоджа" }, { id: 47, name: "Кения" }, { id: 18, name: "Коста рика" }, { id: 20, name: "Куба" }, { id: 91, name: "Лаос" }, { id: 48, name: "Ливан" }, { id: 102, name: "Люксембург" }, { id: 53, name: "Маврикий" }, { id: 49, name: "Мадагаскар" }, { id: 109, name: "Мадейра (Португалия)" }, { id: 93, name: "Макао" }, { id: 50, name: "Македония" }, { id: 52, name: "Малайзия" }, { id: 108, name: "Мальта" }, { id: 54, name: "Мексика" }, { id: 92, name: "Монако" }, { id: 94, name: "Мьянма" }, { id: 99, name: "Непал" }, { id: 95, name: "Новая Зеландия" }, { id: 98, name: "Оман" }, { id: 60, name: "Панама" }, { id: 61, name: "Перу" }, { id: 119, name: "Россия" }, { id: 107, name: "Саудовская Аравия" }, { id: 68, name: "Сейшелы" }, { id: 113, name: "Сен-Бартелеми" }, { id: 112, name: "Сен-Мартен" }, { id: 66, name: "Сент-Люсия" }, { id: 73, name: "Сингапур" }, { id: 77, name: "США" }, { id: 96, name: "Тайвань (Китай)" }, { id: 110, name: "Тенерифе (Испания)" }, { id: 97, name: "Уругвай" }, { id: 26, name: "Фиджи" }, { id: 62, name: "Филиппины" }, { id: 29, name: "Французская Полинезия (Франция)" }, { id: 16, name: "Чили" }, { id: 79, name: "Швейцария" }, { id: 24, name: "Эквадор" }, { id: 67, name: "ЮАР" }, { id: 76, name: "Южная корея" }, { id: 45, name: "Ямайка" }, { id: 46, name: "Япония" }],
        loadPersonalData: function (callBack) {
            console.log('global');
            globalSystemSettings.sCode(sCode => {
                console.log('global-1');
                var model = {
                    sessionId: sCode,
                    method: 'user/' + account.sessionId
                };
                ExecuteActionString(
                    '/account/u/exec/get',
                    model,
                    { control: this },
                    function (response) {
                        console.log('global-2');
                        callBack(response);
                    },
                    function (response) { }
                );
            });
        },
        loadTouristsData: function (callBack) {
            console.log('global-4');
            globalSystemSettings.sCode(sCode => {
                console.log('global-5');
                var model = {
                    sessionId: sCode,
                    method: 'tourist/get-by-user/' + account.sessionId + '/'
                };
                ExecuteActionString(
                    '/account/u/exec/get',
                    model,
                    { control: this },
                    function (response) {
                        console.log('global-7');
                        callBack(response);
                    },
                    function (response) { }
                );
            });
        },
        toDataURL: function (url, callback) {
            console.log('global-8');
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                console.log('global-9');
                var reader = new FileReader();
                reader.onloadend = function () {
                    console.log('global-10');
                    callback(reader.result);
                }
                reader.readAsDataURL(xhr.response);
            };
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.send();
        },
        updatePhoto: function (base64Image, originaName) {
            console.log('global-11');

            $(account.Home.settings.elements.photoLoader.loaderCaption).html(account.Home.settings.captions.photoLoader.process);

            globalSystemSettings.sCode(sCode => {
                var model = {
                    sessionId: sCode,
                    method: 'files/upload',
                    data: {
                        originalName: originaName,
                        base64data: base64Image,
                        comment: 'главное фото аккаунта'
                    }
                };
                ExecuteActionString(
                    '/account/u/exec/post',
                    model,
                    { control: this },
                    function (response) {

                        if (response.statusCode == 200) {
                            model = {
                                sessionId: sCode,
                                method: 'user/' + account.sessionId + '/update-personal-data',
                                data: {
                                    userHash: account.sessionId,
                                    photo: response.result.hash
                                }
                            };

                            ExecuteActionString(
                                '/account/u/exec/post',
                                model,
                                { control: this },
                                function (response) { $(account.Home.settings.elements.photoLoader.loaderCaption).html(account.Home.settings.captions.photoLoader.alredyExist); },
                                function (response) {
                                    $(account.Home.settings.elements.photoLoader.loaderCaption).html(account.Home.settings.captions.photoLoader.loaderror);
                                    window.setTimeout(function () {
                                        $(account.Home.settings.elements.photoLoader.loaderCaption).html(account.Home.settings.captions.photoLoader.default);
                                    }, 1500);

                                });

                        }

                    },
                    function (response) {
                        $(account.Home.settings.elements.photoLoader.loaderCaption).html(account.Home.settings.captions.photoLoader.loaderror);
                        window.setTimeout(function () {
                            $(account.Home.settings.elements.photoLoader.loaderCaption).html(account.Home.settings.captions.photoLoader.default);
                        }, 1500);
                    }
                );
            });
        },
        setBasePhoto: function (photo) {
            console.log('global-12');

            if (photo != '00000000-0000-0000-0000-000000000000') {
                setTimeout(function () {
                    $(account.Home.settings.elements.photoLoader.photoContainer).css('background-image', 'url("/account/u/document/show/' + photo + '")');
                    $(account.Home.settings.elements.photoLoader.photoContainer).css('background-size', 'cover');
                    $(account.Home.settings.elements.photoLoader.photoContainer).css('color', 'transparent');
                    $(account.Home.settings.elements.photoLoader.loaderCaption).html(account.Home.settings.captions.photoLoader.alredyExist);
                }, 1000);
            }
        },
        isNotEmptyDate: function (date) {
            console.log('global-13');
            var m = moment.utc(date, "DD.MM.YYYY");
            var isvalid = m.isValid();
            var result = m.isAfter('1900-01-01T01:00:00Z');

            return result;
        },
        saveBtn: {
            working: function (btnId) {
                $(btnId).css('opacity', .3);
                $(btnId).prop('disabled', true);
            },
            complete: function (btnId) {
                $(btnId).css('opacity', 1);
                $(btnId).prop('disabled', false);
            },
        }
    },
    Home: {
        settings: {
            elements: {
                userName: '.userData-name',
                userEmail: '.userData-email',
                photoLoader: {
                    photoContainer: '.user_image__container',
                    fileInput: '#basePhotoLoader',
                    loaderCaption: '#basePhotoLoader-label'
                }
            },
            captions: {
                email: localizationValues.Key_Key000000690,
                phone: localizationValues.Key_Key000000691,
                bDate: localizationValues.Key_Key000000692,
                photoLoader: {
                    default: localizationValues.Key_Key000000578,
                    loaderror: localizationValues.Key_Key000000693,
                    alredyExist: localizationValues.Key_Key000000579,
                    process: localizationValues.loading
                }
            }
        },
        fillData: function (data) {
            console.log('global-14');
            if (data.result.comunications.length == 0) {
                console.log('global-15');
                data.result.hasEmail = false;
                data.result.hasPhone = false;
            } else {
                console.log('global-16');
                for (i = 0; i < data.result.comunications.length; i++) {
                    console.log('global-17');
                    var obj_ = data.result.comunications[i];

                    switch (obj_.communicateTypeId) {
                        case 1:
                            data.result.hasEmail = true;
                            data.result.email = obj_.value;
                            break;
                        case 6:
                            data.result.hasPhone = true;
                            data.result.phone = obj_.value;
                            break;
                    }
                }
            }

            var html = new renderHtml();
            html.Add($('#account_u_welcome_userInfo').render(data));
            $('#userInfo').html(html.Get());
        }
    },
    personalData: {
        settings: {
            inputs: {
                personalDataForm: {
                    first_name: '#cabinet__personal_data__traveler1__first_name',
                    last_name: '#cabinet__personal_data__traveler1__last_name',
                    sex: '#cabinet__personal_data__traveler1__sex',
                    borth_date: '#cabinet__personal_data__traveler1__borth_date',
                    lang: '#cabinet__personal_data__traveler1__lang',
                    phone: '#cabinet__personal_data__traveler1__phone',
                    email: '#cabinet__personal_data__emailChange',
                    saveBtn: '#personalData-saveBtn'
                },
                dialogs: {
                    addEmail: {
                        htmlPattern: 'cabinet__add_email_form__html',
                        modalId: 'cabinet__add_email_form',
                        emailInput: '#cabinet__add_email_form_emailInput',
                        saveBtn: '#cabinet__add_email_form__submit',
                        modalName: 'Добавление адреса email',
                        errorBlockId: '#cabinet__add_email_form-error'
                    },
                    addPhone: {
                        htmlPattern: 'cabinet__add_phone_form__html',
                        modalId: 'cabinet__add_phone_form',
                        phoneInput: '#cabinet__add_phone_form_phoneInput',
                        saveBtn: '#cabinet__add_phone_form__submit',
                        modalName: 'Добавление телефона',
                        errorBlockId: '#cabinet__add_phone_form-error'
                    }
                }
            }
        },
        fillData: function (data) {
            console.log('fillData');

            $('#' + login.settings.inputs.menu.userNameId).html(data.result.user.name);

            $(account.personalData.settings.inputs.personalDataForm.first_name).val(data.result.user.name);

            if (typeof data.result.personalData.sname != 'undefined' && data.result.personalData.sname != null) {
                console.log('fillData-1');
                $(account.personalData.settings.inputs.personalDataForm.last_name).val(data.result.personalData.sname);
            }

            var hasPersonalData = true;
            if (data.result.personalData.id == -1) {
                console.log('fillData-2');
                hasPersonalData = false;
            }

            if (hasPersonalData) {
                console.log('fillData-3');
                account.global.setBasePhoto(data.result.personalData.photo);
            }
            if (hasPersonalData) {
                console.log('fillData-4');
                var bdate = data.result.personalData.bdate;
                if (account.global.isNotEmptyDate(bdate)) {
                    $(account.personalData.settings.inputs.personalDataForm.borth_date).val(bdate);
                }

                if (typeof data.result.personalData.defaultLang != 'undefined' && data.result.personalData.defaultLang != null) {
                    $(account.personalData.settings.inputs.personalDataForm.lang).val(data.result.personalData.defaultLang);
                }

                if (typeof data.result.personalData.sex != 'undefined' && data.result.personalData.sex != null) {
                    $(account.personalData.settings.inputs.personalDataForm.sex).val(data.result.personalData.sex);
                }
            }

            $(account.personalData.settings.inputs.personalDataForm.email).val('');
            $(account.personalData.settings.inputs.personalDataForm.phone).val('');

            for (i = 0; i < data.result.comunications.length; i++) {
                console.log('fillData-5');
                var obj_ = data.result.comunications[i];
                switch (obj_.communicateTypeId) {
                    case 1:
                        $(account.personalData.settings.inputs.personalDataForm.email).val(obj_.value);
                        break;
                    case 6:
                        $(account.personalData.settings.inputs.personalDataForm.phone).val(obj_.value);
                        if (!obj_.isConfirm) {
                            var confirmElement = $(account.personalData.settings.inputs.personalDataForm.phone).siblings('p.confirm-message');
                            if (typeof confirmElement != 'undefined') {
                                $(confirmElement).show();
                                $(confirmElement).unbind();
                                $(confirmElement).on('click', function () {
                                    account.changePhone.confirmCurrent(obj_.hash, obj_.value);
                                });
                            }
                        }
                        break;
                }
            }
        },
        save: function () {
            var obj = {
                userHash: globalSystemSettings.sessionId,
                name: $(account.personalData.settings.inputs.personalDataForm.first_name).val(),
                sname: $(account.personalData.settings.inputs.personalDataForm.last_name).val(),
                sex: $(account.personalData.settings.inputs.personalDataForm.sex + ' :selected').val(),
                defaultLang: $(account.personalData.settings.inputs.personalDataForm.lang + ' :selected').val(),
                bdate: $(account.personalData.settings.inputs.personalDataForm.borth_date).val()
            }


            account.global.saveBtn.working(account.personalData.settings.inputs.personalDataForm.saveBtn);

            globalSystemSettings.sCode(sCode => {
                var model = {
                    sessionId: sCode,
                    method: 'user/' + account.sessionId + '/update-personal-data',
                    data: obj
                };

                ExecuteActionString(
                    '/account/u/exec/post',
                    model,
                    { control: this },
                    function (response) {
                        if (response.statusCode == 200) {
                            account.global.loadPersonalData(function (data) {
                                account.personalData.fillData(data);
                            });
                        }

                        account.global.saveBtn.complete(account.personalData.settings.inputs.personalDataForm.saveBtn);
                    },
                    function (response) { account.global.saveBtn.complete(account.personalData.settings.inputs.personalDataForm.saveBtn); }
                );
            });
        },
        addEmail: {
            start: function () {
                //modals.f_actions.close(false, '#login_form');
                login_modals.f_create_modal(account.personalData.settings.inputs.dialogs.addEmail.modalId, account.personalData.settings.inputs.dialogs.addEmail.modalName, account.personalData.settings.inputs.dialogs.addEmail.htmlPattern, false, false, 'xs');
                login_modals.f_actions.open(account.personalData.settings.inputs.dialogs.addEmail.modalId);
                account.global.saveBtn.complete(account.personalData.settings.inputs.dialogs.addEmail.saveBtn);
            },
            save: function () {
                $(account.personalData.settings.inputs.dialogs.addEmail.emailInput).closest('div').removeClass('has-error');

                var email = $(account.personalData.settings.inputs.dialogs.addEmail.emailInput).val();
                var isValid = true;

                var patternEmail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                var valid = patternEmail.test(email);
                if (!valid) {
                    $(account.personalData.settings.inputs.dialogs.addEmail.emailInput).closest('div').addClass('has-error');
                    isValid = false;
                }

                if (isValid) {
                    account.global.saveBtn.working(account.personalData.settings.inputs.dialogs.addEmail.saveBtn);
                    $(account.personalData.settings.inputs.dialogs.addEmail.errorBlockId).html('');

                    globalSystemSettings.sCode(sCode => {
                        model = {
                            sessionId: sCode,
                            method: 'user/' + account.sessionId + '/contacts/change-or-add',
                            data: {
                                value: email,
                                type: 1
                            }
                        };

                        ExecuteActionString(
                            '/account/u/exec/post',
                            model,
                            { control: this },
                            function (response) {

                                var errorMess = '';

                                switch (response.statusMessage) {
                                    case 'user-not-found':
                                        login_modals.f_actions.close(false, '#' + account.personalData.settings.inputs.dialogs.addEmail.modalId);
                                        sysFn.goTo('/');
                                        break;
                                    case 'use-by-another-user':
                                        //login_modals.f_actions.close(false, '#' + account.personalData.settings.inputs.dialogs.addEmail.modalId);
                                        account.global.saveBtn.complete(account.personalData.settings.inputs.dialogs.addEmail.saveBtn);
                                        errorMess = '<div class="warning_panel"><p>' + localizationValues.Key_Key000000687 + '</p></div><br>';
                                        $(account.personalData.settings.inputs.dialogs.addEmail.errorBlockId).html(errorMess);
                                        break;
                                    //case 'contact-type-disabled':
                                    //    account.global.saveBtn.complete(account.personalData.settings.inputs.dialogs.addEmail.saveBtn);
                                    //    errorMess = '<div class="warning_panel"><p>Вы не можете добавлять данный ти контактов</p></div><br>';
                                    //    $(account.personalData.settings.inputs.dialogs.addEmail.errorBlockId).html(errorMess);
                                    //    break;
                                    case 'success':
                                        login_modals.f_actions.close(false, '#' + account.personalData.settings.inputs.dialogs.addEmail.modalId);
                                        account.global.loadPersonalData(function (data) {
                                            account.Home.fillData(data)
                                        });
                                        break;
                                    case 'need-verify':
                                        login_modals.f_actions.close(false, '#' + account.personalData.settings.inputs.dialogs.addEmail.modalId);
                                        login_modals.f_create_modal('confirmation_email_form', localizationValues.Key_Key000000641, 'confirmation_email_form__html', false, false, 'xs');
                                        login_modals.f_actions.open('confirmation_email_form');
                                        break;
                                    case 'already-exist':
                                        account.global.saveBtn.complete(account.personalData.settings.inputs.dialogs.addEmail.saveBtn);
                                        errorMess = '<div class="warning_panel"><p>' + localizationValues.Key_Key000000689 + '</p></div><br>';
                                        $(account.personalData.settings.inputs.dialogs.addEmail.errorBlockId).html(errorMess);
                                        break;
                                }
                            },
                            function (response) {
                                errorMess = '<div class="warning_panel"><p>' + localizationValues.Key_Key000000679 + '</p></div>';
                                account.global.saveBtn.complete(account.personalData.settings.inputs.dialogs.addEmail.saveBtn);
                                $(account.personalData.settings.inputs.dialogs.addEmail.errorBlockId).html(errorMess);
                            }
                        );
                    });
                }
            },
        },
        addPhone: {
            start: function () {
                login_modals.f_create_modal(account.personalData.settings.inputs.dialogs.addPhone.modalId, account.personalData.settings.inputs.dialogs.addPhone.modalName, account.personalData.settings.inputs.dialogs.addPhone.htmlPattern, false, false, 'xs');
                login_modals.f_actions.open(account.personalData.settings.inputs.dialogs.addPhone.modalId);
                account.global.saveBtn.complete(account.personalData.settings.inputs.dialogs.addPhone.saveBtn);
                sysFn.setPhoneOnly();
            },
            save: function () {
                $(account.personalData.settings.inputs.dialogs.addPhone.phoneInput).closest('div').removeClass('has-error');

                var phone = $(account.personalData.settings.inputs.dialogs.addPhone.phoneInput).val();
                var isValid = true;


                var patternPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                var valid = patternPhone.test(phone);

                if (!valid) {
                    $(account.personalData.settings.inputs.dialogs.addPhone.phoneInput).closest('div').addClass('has-error');
                    isValid = false;
                }

                if (isValid) {
                    account.global.saveBtn.working(account.personalData.settings.inputs.dialogs.addPhone.saveBtn);
                    $(account.personalData.settings.inputs.dialogs.addPhone.errorBlockId).html('');

                    globalSystemSettings.sCode(sCode => {

                        var model = {
                            sessionId: sCode,
                            method: 'user/' + account.sessionId + '/contacts/change-or-add',
                            data: {
                                value: phone,
                                type: 6
                            }
                        };

                        ExecuteActionString(
                            '/account/u/exec/post',
                            model,
                            { control: this },
                            function (response) {

                                var errorMess = '';

                                switch (response.statusMessage) {
                                    case 'user-not-found':
                                        login_modals.f_actions.close(false, '#' + account.personalData.settings.inputs.dialogs.addPhone.modalId);
                                        sysFn.goTo('/');
                                        break;
                                    case 'use-by-another-user':
                                        //login_modals.f_actions.close(false, '#' + account.personalData.settings.inputs.dialogs.addPhone.modalId);
                                        account.global.saveBtn.complete(account.personalData.settings.inputs.dialogs.addPhone.saveBtn);
                                        errorMess = '<div class="warning_panel"><p>' + localizationValues.Key_Key000000687 + '</p></div><br>';
                                        $(account.personalData.settings.inputs.dialogs.addPhone.errorBlockId).html(errorMess);
                                        break;
                                    //case 'contact-type-disabled':
                                    //    account.global.saveBtn.complete(account.personalData.settings.inputs.dialogs.addPhone.saveBtn);
                                    //    errorMess = '<div class="warning_panel"><p>Вы не можете добавлять данный ти контактов</p></div><br>';
                                    //    $(account.personalData.settings.inputs.dialogs.addPhone.errorBlockId).html(errorMess);
                                    //    break;
                                    case 'success':
                                        login_modals.f_actions.close(false, '#' + account.personalData.settings.inputs.dialogs.addPhone.modalId);
                                        account.global.loadPersonalData(function (data) {
                                            account.Home.fillData(data)
                                        });
                                        break;
                                    case 'need-verify':
                                        var phone_ = $(account.personalData.settings.inputs.dialogs.addPhone.phoneInput).val();
                                        login_modals.f_actions.close(false, '#' + account.personalData.settings.inputs.dialogs.addPhone.modalId);
                                        login_modals.f_create_modal('confirmation_sms_form', localizationValues.Key_Key000000639, 'confirmation_sms_form__html', false, false, 'xs');
                                        login_modals.f_actions.open('confirmation_sms_form');
                                        $('#confirmation_sms_form').attr('data-phone', phone_);
                                        $('#confirmation_sms_form').attr('data-vtype', 'cabinet');
                                        break;
                                    case 'already-exist':
                                        account.global.saveBtn.complete(account.personalData.settings.inputs.dialogs.addPhone.saveBtn);
                                        errorMess = '<div class="warning_panel"><p>' + localizationValues.Key_Key000000689 + '</p></div><br>';
                                        $(account.personalData.settings.inputs.dialogs.addPhone.errorBlockId).html(errorMess);
                                        break;
                                }
                            },
                            function (response) {
                                errorMess = '<div class="warning_panel"><p>' + localizationValues.Key_Key000000679 + '</p></div>';
                                account.global.saveBtn.complete(account.personalData.settings.inputs.dialogs.addPhone.saveBtn);
                                $(account.personalData.settings.inputs.dialogs.addPhone.errorBlockId).html(errorMess);
                            }
                        );
                    });
                }
            },
        },
        loadContacts: function (onSuccess, onError) {
            console.log('fillData-6');
            globalSystemSettings.sCode(sCode => {
                var model = {
                    sessionId: sCode,
                    method: 'user/' + account.sessionId + '/contacts',
                    data: {}
                };

                ExecuteActionString(
                    '/account/u/exec/get',
                    model,
                    { control: this },
                    function (response) {
                        if (typeof onSuccess == 'function') {
                            onSuccess(response);
                        }
                    },
                    function (response) {
                        if (typeof onError == 'function') {
                            onSuccess(onError);
                        }
                    }
                );
            });
        }
    },
    changePhone: {
        confirmCurrent: function (hash, phone) {
            //            alert(hash);
            login_modals.f_create_modal('confirmPhone_form', '', 'confirmPhone_form__html', false, false, 'xs');
            login_modals.f_actions.open('confirmPhone_form');
            document.getElementById('confirmPhone_form__html__container_caption').html(localizationValues.Key_Key000000739);
        }
    }
};


var partnerProgramsManager = {
    helpers: {
        getTime: function() {
            return new Date().getTime();
        },
        getExpires: function (days) {
            return new Date(this.getTime() + days * 24 * 60 * 60 * 1000).toUTCString();
        },
        getCookie: function(name, def) {
            var value = '; ' + document.cookie,
                parts = value.split('; ' + name + '=');
            if (parts.length === 2) {
                return parts.pop().split(';').shift();
            }
            return def;
        }
    },
    storage: {
        get: function (name, def) {
            var value = partnerProgramsManager.helpers.getCookie(name, def);
            if (value) {
                if (value.indexOf('partnerHash') === -1) {
                    value = sysFn.b64DecodeUnicode(value);
                }
            }
            return value;
        },
        set: function (name, value, days) {
            document.cookie = [name, '=', sysFn.b64EncodeUnicode(value), '; expires=', partnerProgramsManager.helpers.getExpires(days), '; path=/'].join('');
        },
        remove: function (name) {
            this.set(name, '', -1);
        }
    },
    registration: {

        get: function () {
            try {
                var value = partnerProgramsManager.storage.get('referral');
                if (!value) {
                    return { partnerHash: '', programHash: '' };
                }
                return Object.assign({ partnerHash: '', programHash: '' }, JSON.parse(value));
            }
            catch (ex) {
                console.log('error=> ', ex);
            }
            return null;
        },

        set: function (partnerHash, programHash) {
            partnerProgramsManager.storage.set('referral', JSON.stringify({ partnerHash, programHash }), 30);
        },

        checkURL: function (callback) {
            var url = new URL(document.URL),
                query = url.search;
            if (query.length === 0) {
                callback(false, null, null);
                return;
            }
            var params = new URLSearchParams(query),
                referral = params.get('referral');
            if (referral === null || referral.length === 0) {
                callback(false, null, null);
                return;
            }
            const len = referral.length,
                partnerHash = referral.substring(0, len / 2);
                programHash = referral.substring(len / 2);
            callback(true, partnerHash, programHash);
        },

        checkAvailable: function (partnerHash, programHash, callback) {

            const url = ['/user/', partnerHash, '/bonuses/invited/', programHash, '/check/?_=', new Date().getTime()].join('');
            ExecuteAction(
                localizationFn.localizeUrl(url, localizationFn.current, ''),
                {},
                { method: 'GET' },
                response => {
                    var isAvailable = response.statusCode === 200;
                    if (isAvailable) {
                        this.set(partnerHash, programHash);
                    }
                    if (typeof callback === 'function') {
                        callback(isAvailable);
                    }
                },
                response => {
                    callback(false);
                }
            );
        },

        remove: function () {
            partnerProgramsManager.storage.remove('referral');
        },

        validate: function () {

        },

        init: function () {
            
        }
    },

    auth: {
        checkAutoOpen: function () {
            var url = new URL(document.URL),
                query = url.search;
            if (query.length === 0) {
                return false;
            }
            var params = new URLSearchParams(query),
                login = params.get('returnUrl');
            return login !== null && login.length !== 0;
        }
    },

    getReturnUrl: function () {
        var url = new URL(document.URL),
            query = url.search;
        if (query.length === 0) {
            return null;
        }
        var params = new URLSearchParams(query);
        return params.get('returnUrl');
    }
};
//partnerProgramsManager.registration.init();