function openCredits() {

    $("fadeout").html(`    
        <div class="blackbox fixed top-0 w-full h-screen hidden">
            <div class="glass-effect rounded-none">

                <div id="credit_title" class="absolute w-full h-full grid place-items-center text-gray-100 text-opacity-90">
                    <div id="name" class="hidden text-7xl z-20       lg:text-15xl">nasaka</div>
                </div>

                <div id="credits" class="absolute top-0 w-full h-full text-gray-50 overflow-hidden">

                    <div class="topFade absolute top-0 w-full h-[45%] z-10"></div>

                    <div id="wrap" class="absolute top-full block w-full h-full p-5 text-center z-0">

                        <h1 class="text-lg mt-14 mb-2 text-gray-500 font-light tracking-wide        sm:text-xl">Founder / Chairman</h1>
                        <h2 class="text-xl tracking-wider      sm:text-1xl">MATEUSZ AFTANAS</h2>

                        <h1 class="text-lg mt-14 mb-2 text-gray-500 font-light tracking-wide        sm:text-xl">Chief Operating Officer</h1>
                        <h2 class="text-xl tracking-wider      sm:text-1xl">ALEKSANDER ANTOŃCZAK</h2>

                        <h1 class="text-lg mt-14 mb-2 text-gray-500 font-light tracking-wide        sm:text-xl">Director of Human Resources</h1>
                        <h2 class="text-xl tracking-wider      sm:text-1xl">HUBERT SIKORA</h2>

                        <h1 class="text-lg mt-14 mb-2 text-gray-500 font-light tracking-wide        sm:text-xl">Marketing Advisor</h1>
                        <h2 class="text-xl tracking-wider      sm:text-1xl">MARCEL JANIK</h2>

                        <h1 class="text-lg mt-14 mb-2 text-gray-500 font-light tracking-wide        sm:text-xl">Legal Counsel</h1>
                        <h2 class="text-xl tracking-wider      sm:text-1xl">JĘDRZEJ SZAJGIN</h2>

                        <h1 class="text-lg mt-14 mb-2 text-gray-500 font-light tracking-wide        sm:text-xl">Minecraft Server Supervisor</h1>
                        <h2 class="text-xl tracking-wider      sm:text-1xl">PATRYK MALESZEWSKI</h2>

                        <h1 class="text-lg mt-14 mb-2 text-gray-500 font-light tracking-wide        sm:text-xl">Team Fortress 2 Server Supervisor</h1>
                        <h2 class="text-xl tracking-wider      sm:text-1xl">MATEUSZ AFTANAS</h2>

                        <h1 class="text-lg mt-14 mb-2 text-gray-500 font-light tracking-wide        sm:text-xl">Discord Server Supervisor</h1>
                        <h2 class="text-xl tracking-wider      sm:text-1xl">*AKUMA*</h2>

                        <h1 class="text-lg mt-14 mb-2 text-gray-500 font-light tracking-wide        sm:text-xl">Environment</h1>
                        <h2 class="text-xl tracking-wider      sm:text-1xl">*XSVNU_<3* and *MILEY*</h2>

                        <h1 class="text-lg mt-14 mb-2 text-gray-500 font-light tracking-wide        sm:text-xl">Art Lead</h1>
                        <h2 class="text-xl tracking-wider      sm:text-1xl">*BIELSKI*</h2>

                        <h1 class="text-lg mt-14 mb-2 text-gray-500 font-light tracking-wide        sm:text-xl">Story Writer</h1>
                        <h2 class="text-xl tracking-wider      sm:text-1xl">*DANNYZ*</h2>

                    </div>

                    <div class="downFade absolute bottom-0 w-full h-[45%] z-10"></div>

                </div>
                
            </div>
        </div>
    `)

    $(".blackbox").fadeIn();
}

function authors(){
    $('#wrap').css('top', '');
    $('#wrap').animate({top:"-200%"}, 40000, 'linear');


    setTimeout(function() {
        $("#name").fadeOut();

        $(".blackbox").fadeOut(400)
    }, 31000)

    setTimeout(function() {
        $(".blackbox").hide()
    }, 31500)

}