
function createContent(i) {

    if(i == 1) {

        $(".content").html(`
            <div class="col-start-1 h-[0.1rem] bg-slate-50 bg-opacity-10        sm:col-span-2        md:col-span-3"></div>

            <div class="col-start-1 text-xl text-slate-50 text-opacity-90 tracking-wide        sm:col-span-2        md:col-span-3">Choose server's game</div>

            <div class="col-start-1 background-cs rounded-md        sm:col-start-1      md:col-start-1">
                <div class="shadowing-yellow grid place-items-center p-3 rounded-md">Counter Strike 1.6</div>
            </div>
            <div class="col-start-1 background-tf rounded-md        sm:col-start-2      md:col-start-2">
                <div class="shadowing-orange grid place-items-center p-3 rounded-md">Team Fortress 2</div>
            </div>
            <div class="col-start-1 background-mc rounded-md        sm:col-start-1      md:col-start-3">
                <div class="shadowing-green1 grid place-items-center p-3 rounded-md">Minecraft</div>
            </div>
            
            <div class="col-start-1 background-gm rounded-md        sm:col-start-2      md:col-start-1">
                <div class="shadowing-blue grid place-items-center p-3 rounded-md">Garry's Mod</div>
            </div>
            <div class="col-start-1 background-unt rounded-md       sm:col-start-1      md:col-start-2">
                <div class="shadowing-green2 grid place-items-center p-3 rounded-md">Unturned</div>
            </div>

            <div class="col-start-1 h-[0.1rem] bg-slate-50 bg-opacity-10        sm:col-span-2        md:col-span-3"></div>

            <div class="col-start-1 text-xl text-slate-50 text-opacity-90 tracking-wide        sm:col-span-2        md:col-span-3">
                <div class="title">Servers status</div>
                <div class="desc text-sm text-slate-50 text-opacity-60 text-justify">
                    Dive into Abyss Realm, where gaming adventures know no bounds and every click leads to a new thrill. Connect, compete, and conquer in our vibrant network tailored for the ultimate gaming experience.
                </div>
            </div>
            
            <div class="grid grid-rows-1 gap-0 col-start-1 text-sm text-slate-50 text-opacity-70 tracking-wider        sm:col-span-2        md:col-span-3">
                <div class="grid grid-cols-6 py-2 px-2 text-white bg-gray-800">
                    <div class="grid col-start-1 place-items-center">Server</div>
                    <div class="grid col-start-2 col-span-4 place-items-center      md:col-span-2">Gamemode</div>
                    <div class="hidden place-items-center     md:grid  md:col-start-4">Map</div>
                    <div class="hidden place-items-center     md:grid  md:col-start-5">Address</div>
                    <div class="grid col-start-6 place-items-center">Players</div>
                </div>
                <div class="grid grid-cols-6 py-2 px-2 bg-gray-600 bg-opacity-50">
                    <div class="grid col-start-1 place-items-center">#1</div>
                    <div class="grid col-start-2 col-span-4 place-items-center      md:col-span-2">Casual | 100% Crits</div>
                    <div class="hidden place-items-center     md:grid  md:col-start-4">cp_orange</div>
                    <div class="hidden place-items-center     md:grid  md:col-start-5">tf.strefa-gier.eu</div>
                    <div class="grid col-start-6 place-items-center">18/24</div>
                </div>
                <div class="grid grid-cols-6 py-2 px-2 bg-gray-800">
                    <div class="grid col-start-1 place-items-center">#2</div>
                    <div class="grid col-start-2 col-span-4 place-items-center      md:col-span-2">Custom Maps | 4Fun</div>
                    <div class="hidden place-items-center     md:grid  md:col-start-4">cp_orange</div>
                    <div class="hidden place-items-center     md:grid  md:col-start-5">tf.strefa-gier.eu</div>
                    <div class="grid col-start-6 place-items-center">18/24</div>
                </div>
                <div class="grid grid-cols-6 py-2 px-2 bg-gray-600 bg-opacity-50">
                    <div class="grid col-start-1 place-items-center">#3</div>
                    <div class="grid col-start-2 col-span-4 place-items-center      md:col-span-2">Deathrun | 4Fun</div>
                    <div class="hidden place-items-center     md:grid  md:col-start-4">cp_orange</div>
                    <div class="hidden place-items-center     md:grid  md:col-start-5">tf.strefa-gier.eu</div>
                    <div class="grid col-start-6 place-items-center">18/24</div>
                </div>
                <div class="grid grid-cols-6 py-2 px-2 bg-gray-800">
                    <div class="grid col-start-1 place-items-center">#4</div>
                    <div class="grid col-start-2 col-span-4 place-items-center      md:col-span-2">Orange | 4Fun</div>
                    <div class="hidden place-items-center     md:grid  md:col-start-4">cp_orange</div>
                    <div class="hidden place-items-center     md:grid  md:col-start-5">tf.strefa-gier.eu</div>
                    <div class="grid col-start-6 place-items-center">18/24</div>
                </div>
                <div class="grid grid-cols-6 py-2 px-2 bg-gray-600 bg-opacity-50">
                    <div class="grid col-start-1 place-items-center">#5</div>
                    <div class="grid col-start-2 col-span-4 place-items-center      md:col-span-2">Casual</div>
                    <div class="hidden place-items-center     md:grid  md:col-start-4">cp_orange</div>
                    <div class="hidden place-items-center     md:grid  md:col-start-5">tf.strefa-gier.eu</div>
                    <div class="grid col-start-6 place-items-center">18/24</div>
                </div>
            </div>

            <div class="col-start-1 h-[0.1rem] bg-slate-50 bg-opacity-10        sm:col-span-2        md:col-span-3"></div>
        `)
    } else if(i == 3) {

        $(".content").html(`
            <div class="col-start-1 h-[0.1rem] bg-slate-50 bg-opacity-10        sm:col-span-2        md:col-span-3"></div>

            <div class="col-start-1 text-xl text-slate-50 text-opacity-90 tracking-wide        sm:col-span-2        md:col-span-3">
                <div class="title">Choose platform</div>
                <div class="desc text-sm text-slate-50 text-opacity-60 text-justify">
                    Join us across platforms to share, discuss, and delve into the depths of gaming. Forge connections in our Labs, Reddit, and Forums, or interact live on Discord and get exclusive insights through Early Access.
                </div>
            </div>

            <div class="col-start-1 background-lab rounded-md        sm:col-start-1      md:col-start-1">
                <div class="<!--shadowing-gray--> shadowing-block grid place-items-center p-5 rounded-md">Laboratories</div>
            </div>
            <div class="col-start-1 background-red rounded-md        sm:col-start-2      md:col-start-2">
                <div class="<!--shadowing-orange--> shadowing-block grid place-items-center p-5 rounded-md">Reddit</div>
            </div>
            <div class="col-start-1 background-for rounded-md        sm:col-start-1      md:col-start-3">
                <div class="<!--shadowing-yellow--> shadowing-block grid place-items-center p-5 rounded-md">Forum</div>
            </div>
            
            <div class="col-start-1 background-pdc rounded-md        sm:col-start-2      md:col-start-1">
                <a href="http://discord.strefa-gier.eu/"><div class="shadowing-red grid place-items-center p-5 rounded-md">Polish Discord</div></a>
            </div>
            <div class="col-start-1 background-edc rounded-md       sm:col-start-1      md:col-start-2">
                <a href="http://discord.strefa-gier.eu/"><div class="shadowing-blue grid place-items-center p-5 rounded-md">English Discord</div></a>
            </div>
            <div class="col-start-1 background-ea rounded-md        sm:col-start-2      md:col-start-3">
                <a href="http://early-access.strefa-gier.eu/"><div class="shadowing-green3 grid place-items-center p-5 rounded-md">Early Access</div></a>
            </div>
        `)
    }
}