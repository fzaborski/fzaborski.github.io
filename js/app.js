$(function () {

    const a = $('.flag_a');
    const aboutmenav = $('.about-me-nav');
    const contactnav = $('.contact-nav');
    const aboutmespan = $('.about_me_span');
    const skillsspan = $('.technologies_title');
    const technologiesline = $('.technologies_line');
    const contacttitle = $('.contact-title');
    const askme = $('.ask_me_question');
    const placeholder1 = $('.input12');
    const placeholder2 = $('.input21');
    const message = $('.textarea_message');
    const btnsubmit = $('.btn-submit');
    const project1title = $('.project1_title');
    const project2title = $('.project2_title');
    const project1desc = $('.project1_desc');
    const project2desc = $('.project2_desc');
    const p1 = $('.about_me_welcome');
    const p2 = $('.second_line_welcome');
    const p3 = $('.third_line_welcome');

    a.on('click', function () {
        if(aboutmenav.text() === "O mnie") {
                aboutmenav.text('About');
                contactnav.text('Contact');
                aboutmespan.text('About');
                skillsspan.text('Skills');
                technologiesline.css('width', '8%');
                contacttitle.text('Contact');
                askme.text('Feel free to ask me a question');
                a.html('<img src="https://cdn.countryflags.com/thumbs/poland/flag-400.png" class="flag">');
                placeholder1.attr("placeholder", "Your name");
                placeholder2.attr("placeholder", "Your email");
                message.attr("placeholder", "Message");
                btnsubmit.attr("value", "Send");
                project1title.text("Project 1");
                project2title.text("Project 2");
                project1desc.text("Simple website made with Bootstrap.");
                project2desc.text("Website - business card.");
                p1.html('My name is <span>Filip Zaborski</span>, I am 19 years old, and I am Junior Frontend Developer. ');
                p2.text("I am interested in programming since my High School. I am also keen on graphic, and I have a defined sense of aesthetic.");
                p3.text("Learning new technologies became my passion. I enjoy travelling, cycling and the automotive industry.")
        }else if(aboutmenav.text() === "About"){
                aboutmenav.text('O mnie');
                contactnav.text('Kontakt');
                aboutmespan.text('O mnie');
                skillsspan.text('Umiejętności');
                technologiesline.css('width', '23%');
                contacttitle.text('Kontakt');
                askme.text('Zadaj mi pytanie');
                a.html('<img src="https://cdn0.iconfinder.com/data/icons/flags-of-the-world-2/128/england-3-512.png" class="flag">');
                placeholder1.attr("placeholder", "Twoje imie");
                placeholder2.attr("placeholder", "Twoj mail");
                message.attr("placeholder", "Wiadomośc");
                btnsubmit.attr("value", "Wyślij");
                project1title.text("Projekt 1");
                project2title.text("Projekt 2");
                project1desc.text("Prosta strona z użyciem Bootsrapa.");
                project2desc.text("Strona - wizytówka dla małej firmy.");
                p1.html('Nazywam się <span>Filip Zaborski</span>, mam 19 lat i jestem Junior Frontend Developerem.');
                p2.text("Programowaniem interesuję się od liceum. Interesuje mnie grafika i mam wyczucie estetyki, dlatego zdecydowałem się szkolić w kierunku frontendu.");
                p3.text("Chętnie uczę się nowych technologii. Moimi zainteresowaniami są również podróże, motoryzacja i jazda na rowerze. ")

        }
    });

});